// The APK the site offers: the newest one the app's own build publishes (PreCut's GitHub
// Releases, built and signed on every push to the app's main branch), read once at build time.
// `config.ts` keeps the last known values as the fallback, for a build that can't reach GitHub.
import { apk as known } from "../config";

const RELEASE_API = "https://api.github.com/repos/SavieJay/PreCut/releases/latest";
/** GitHub redirects this to the newest release's APK, so links never go stale. */
const LATEST_URL = "https://github.com/SavieJay/PreCut/releases/latest/download/PreCut.apk";

interface ReleaseAsset {
  name: string;
  size: number;
  /** "sha256:<hex>", which GitHub computes for every release asset. */
  digest?: string | null;
}

async function latest(): Promise<{ sizeBytes: number; sha256: string } | null> {
  try {
    const token = process.env.GITHUB_TOKEN; // optional on Netlify: a higher API rate limit
    const response = await fetch(RELEASE_API, {
      headers: { Accept: "application/vnd.github+json", ...(token ? { Authorization: `Bearer ${token}` } : {}) },
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) return null;
    const release = (await response.json()) as { assets?: ReleaseAsset[] };
    const asset = release.assets?.find((a) => a.name === "PreCut.apk");
    const sha256 = asset?.digest?.startsWith("sha256:") ? asset.digest.slice("sha256:".length) : null;
    return asset && sha256 ? { sizeBytes: asset.size, sha256 } : null;
  } catch {
    return null;
  }
}

const found = await latest();
if (!found) console.warn("[apk] couldn't read PreCut's latest release; using the values in config.ts");

export const apk = found ? { ...known, url: LATEST_URL, ...found } : known;
