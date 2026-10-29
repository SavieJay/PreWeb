// Facts that change live here and nowhere else (CLAUDE.md, content rules).
// Pages and components import from this file instead of hard-coding them.

export const app = {
  name: "PreCut",
  packageName: "com.savie.precut",
  version: "1.0.0",
  // The app's minSdk is 26.
  minAndroid: "8.0",
};

/** Google Play. While `live` is false the site offers the APK as the main download. */
export const play = {
  live: false,
};

/** The signed APK, published as a GitHub Release asset of this repository. */
export const apk = {
  url: `https://github.com/SavieJay/PreWeb/releases/download/v${app.version}/PreCut-${app.version}.apk`,
  // Filled in when the release is published (W3).
  sizeBytes: null as number | null,
  sha256: null as string | null,
};

// TODO(user): needed for the legal pages in W1.
export const contactEmail: string | null = null;
export const legalName: string | null = null;

// PreCut Pro doesn't exist yet (app Phase 25); prices are set in Play Console.
export const prices = null;
