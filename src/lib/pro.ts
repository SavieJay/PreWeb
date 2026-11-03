// PreCut Pro on the site: whether it's shown, and the Free vs Pro comparison.
import { play, pro } from "../config";
import { hasAiRelease } from "./release";

/**
 * In the published app and on sale on Google Play with prices: only then does the site
 * show Pro at all.
 */
export const proOnSale: boolean =
  hasAiRelease && play.live && pro.prices !== null;

export interface PlanRow {
  feature: string;
  /** A short line under the name. */
  detail?: string;
  free: string;
  pro: string;
}

const tries = (count: number): string =>
  count === 0 ? "Not included" : `${count} a month`;

/** The comparison, from the app's split: every tool on the phone is free. */
export const planRows: PlanRow[] = [
  {
    feature: "Every editing tool",
    detail:
      "Timeline, effects, filters, transitions, text, stickers, keyframes, masks, chroma key, templates and AutoCut",
    free: "Included",
    pro: "Included",
  },
  {
    feature: "AI on your phone",
    detail: "Background removal, auto reframe, noise reduction, follow person",
    free: "Included",
    pro: "Included",
  },
  {
    feature: "Export",
    detail: "Up to 4K at 60 fps, no watermark, no ads",
    free: "Included",
    pro: "Included",
  },
  {
    feature: "Auto captions",
    detail: "Speech to text in the cloud",
    free: `${pro.captionMinutes.free} minutes a month`,
    pro: `${pro.captionMinutes.pro} minutes a month`,
  },
  {
    feature: "AI edit",
    detail: "Describe the edit; review every change before it's kept",
    free: `${pro.aiEditRequests.free} requests a month`,
    pro: `${pro.aiEditRequests.pro} requests a month`,
  },
  {
    feature: "Edit by transcript",
    detail: "Remove pauses and filler words",
    free: tries(pro.freeTries.transcript),
    pro: "No limit",
  },
  {
    feature: "Long video to shorts",
    free: tries(pro.freeTries.shorts),
    pro: "No limit",
  },
  {
    feature: "Multi-format export",
    detail: "9:16, 1:1 and 16:9 at once",
    free: tries(pro.freeTries.formats),
    pro: "No limit",
  },
  {
    feature: "Caption translation",
    free: tries(pro.freeTries.translate),
    pro: "With your AI edit requests",
  },
  {
    feature: "Hook coach",
    detail: "Checks your first seconds and pacing",
    free: tries(pro.freeTries.hookCoach),
    pro: "No limit",
  },
  {
    feature: "Smart B-roll",
    detail: "Finds matching shots in your gallery, on the phone",
    free: tries(pro.freeTries.broll),
    pro: "No limit",
  },
  {
    feature: "Brand kit",
    detail: "Your logo, colours, fonts, intro and outro",
    free: tries(pro.freeTries.brandKit),
    pro: "Included",
  },
];
