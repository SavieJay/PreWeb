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
  // Built from PreCut commit 6b2636a (versionCode 35). From the file: `stat -c %s`, `sha256sum`.
  sizeBytes: 8_916_929,
  sha256: "f97372f086d77d9bf8821b464b6b8e7ffc6fdd8ccd204fd3e11c3164eff3c174",
  // The signing certificate's SHA-256 (`apksigner verify --print-certs`). Every version
  // must be signed with this key, or it won't install over the previous one.
  certSha256:
    "2c108e1a3cf6490e9913e73eefe02bdde2ebd028aedb9ac57502ad45f4342912",
};

// TODO(user): needed for the legal pages in W1.
export const contactEmail: string | null = null;
export const legalName: string | null = null;

// PreCut Pro doesn't exist yet (app Phase 25); prices are set in Play Console.
export const prices = null;
