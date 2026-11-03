// Facts that change live here and nowhere else (CLAUDE.md, content rules).
// Pages and components import from this file instead of hard-coding them.

export const app = {
  name: "PreCut",
  packageName: "com.savie.precut",
  version: "1.1.0",
  // The app's minSdk is 26.
  minAndroid: "8.0",
};

/** What's in the app at `app.version`, from its store listing. Update with each release. */
export const catalogue = {
  filters: 62,
  effects: 46,
  transitions: 30,
  fonts: 24,
  textTemplates: 35,
  templates: 12,
};

/** Google Play. While `live` is false the site offers the APK as the main download. */
export const play = {
  live: false,
};

/** The signed APK, published as a GitHub Release asset of this repository. */
export const apk = {
  url: `https://github.com/SavieJay/PreWeb/releases/download/v${app.version}/PreCut-${app.version}.apk`,
  // Built from PreCut commit 6662560 (versionCode 61). From the file: `stat -c %s`, `sha256sum`.
  sizeBytes: 35_342_712,
  sha256: "813f7eefd1bcd356b7f2a1a3196c3e50c067f31373c2b02d08fc574c8cdfb58f",
  // The signing certificate's SHA-256 (`apksigner verify --print-certs`). Every version
  // must be signed with this key, or it won't install over the previous one.
  certSha256:
    "2c108e1a3cf6490e9913e73eefe02bdde2ebd028aedb9ac57502ad45f4342912",
};

// Who publishes PreCut and how to reach them (privacy policy, terms, support).
export const contactEmail = "savyj03@gmail.com";
export const legalName = "SavieCode";

/**
 * The app version that brings AI edit, caption translation, PreCut Pro, template links and
 * smart B-roll (app Phases 22–28). Pages describe them, and the privacy policy and terms
 * cover them, once `app.version` reaches it: publishing that APK switches the site over.
 */
export const aiRelease = "1.1.0";

/**
 * When the privacy policy and terms last changed, before and from `aiRelease`
 * (1 November 2026 before it: the privacy policy added the template pages).
 */
export const legalUpdated = {
  before: "1 November 2026",
  aiRelease: "3 November 2026",
};

/** Pro's prices as Play Console shows them, e.g. "$4.99"; prices vary by country. */
export interface ProPrices {
  monthly: string;
  yearly: string;
  /** Days of the free-trial offer; 0 for none. */
  trialDays: number;
}

/**
 * PreCut Pro: an optional subscription, sold only through Google Play, so it starts with
 * the first version on Play. Until then (`play.live` false, or no `prices`) the site shows
 * no Pro, no prices and no pricing page. Every editing tool on the phone stays free.
 * The numbers match the app: cloud limits are its server's defaults (`cloud_config`), free
 * tries are its `ProFeature` list. Change them together.
 */
export const pro = {
  prices: null as ProPrices | null,
  /** Cloud AI each month, free and with Pro. */
  captionMinutes: { free: 30, pro: 300 },
  aiEditRequests: { free: 10, pro: 100 },
  /** Free tries each month of the Pro tools (no limit with Pro). */
  freeTries: {
    transcript: 3,
    shorts: 2,
    formats: 2,
    translate: 2,
    hookCoach: 3,
    broll: 5,
    brandKit: 0,
  },
};

/**
 * Privacy-friendly visitor counts and download-button clicks (Plausible: no cookies, no
 * personal data). Off while null. To switch it on, add the site in Plausible and paste the
 * script address from its Site Installation settings (https://plausible.io/js/pa-….js);
 * the privacy policy then mentions it.
 */
export const analytics = {
  plausibleScript: null as string | null,
};
