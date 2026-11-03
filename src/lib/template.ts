// Shared templates (the app's template links, https://<site>/t/<id>): reading the id from
// the address and what the page shows from the cloud function's answer. No DOM here.

import { app } from "../config";

/** Template link ids are 8 letters and digits (the app's TemplateLinks). */
const ID = /^[A-Za-z0-9]{8}$/;

/** The id in `/t/<id>`, or in `?id=` (local previews, which don't rewrite paths). */
export function templateId(pathname: string, search: string): string | null {
  const fromPath = pathname.match(/^\/t\/([^/]+)\/?$/)?.[1];
  const id = fromPath ?? new URLSearchParams(search).get("id");
  return id && ID.test(id) ? id : null;
}

const CATEGORIES: Record<string, string> = {
  TRAVEL: "Travel",
  SOCIAL: "Social",
  BUSINESS: "Business",
  CELEBRATION: "Celebration",
  SLIDESHOW: "Slideshow",
  VLOG: "Vlog",
};

export interface TemplatePart {
  ms: number;
  /** Takes one of your clips. */
  slot: boolean;
}

export interface TemplateView {
  title: string;
  /** The app's category name; null for Other. */
  category: string | null;
  /** Null when the template came without the app's summary. */
  lengthMs: number | null;
  slots: number;
  texts: number;
  parts: TemplatePart[];
}

const count = (value: unknown): number =>
  typeof value === "number" && Number.isFinite(value) && value >= 0
    ? Math.round(value)
    : 0;

/**
 * What the page shows from `GET /templates/<id>`'s `{"template": {...}}`. The app adds a
 * `summary` (length, the main track's parts, clips and texts to change) when it shares a
 * template; anything missing or odd is left out rather than guessed.
 */
export function templateView(answer: unknown): TemplateView | null {
  const template = (answer as { template?: unknown } | null)?.template;
  if (!template || typeof template !== "object") return null;
  const t = template as Record<string, unknown>;
  const summary = (t.summary ?? {}) as Record<string, unknown>;
  const parts = Array.isArray(summary.parts)
    ? summary.parts
        .map((part) => part as Record<string, unknown>)
        .map((part) => ({ ms: count(part.ms), slot: part.slot === true }))
        .filter((part) => part.ms > 0)
    : [];
  const title =
    typeof t.title === "string" && t.title.trim()
      ? t.title.trim().slice(0, 80)
      : `A ${app.name} template`;
  return {
    title,
    category:
      (typeof t.category === "string" && CATEGORIES[t.category]) || null,
    lengthMs: count(summary.lengthMs) || null,
    slots:
      count(summary.slots) || (Array.isArray(t.slots) ? t.slots.length : 0),
    texts:
      count(summary.texts) || (Array.isArray(t.texts) ? t.texts.length : 0),
    parts,
  };
}

/** "0:15", "1:04": minutes and seconds, as the app shows lengths. */
export function formatLength(ms: number): string {
  const seconds = Math.round(ms / 1000);
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}

/**
 * Chrome on Android: opens this link in PreCut when it's installed (even before Android
 * has verified the site's App Link), else goes to `fallback`.
 */
export function openInAppUrl(href: string, fallback: string): string {
  const url = new URL(href);
  return (
    `intent://${url.host}${url.pathname}#Intent;scheme=https;` +
    `package=${app.packageName};` +
    `S.browser_fallback_url=${encodeURIComponent(fallback)};end`
  );
}
