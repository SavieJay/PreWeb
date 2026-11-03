import { app, play } from "../config";

/**
 * The Play listing with a referrer tag, so installs from each website button can be
 * told apart in Play Console's acquisition reports (by UTM source and campaign). A
 * template page adds `template` (its id): PreCut reads Play's install referrer on its
 * first start and opens that template (app Phase 28).
 */
export function playStoreUrl(
  buttonId: string,
  extra: Record<string, string> = {},
): string {
  const params = new URLSearchParams({
    utm_source: "website",
    utm_medium: buttonId,
    utm_campaign: buttonId,
    ...extra,
  });
  const referrer = encodeURIComponent(params.toString());
  return `https://play.google.com/store/apps/details?id=${app.packageName}&referrer=${referrer}`;
}

/**
 * Where a download button goes: Google Play once it's live. Until then the download
 * page, where `#start` starts the APK download straight away on Android phones.
 */
export function downloadHref(buttonId: string): string {
  return play.live ? playStoreUrl(buttonId) : "/download#start";
}

/** File size as Android shows it, e.g. "8.7 MB". */
export function formatSize(bytes: number): string {
  return `${(bytes / 1_000_000).toFixed(1)} MB`;
}
