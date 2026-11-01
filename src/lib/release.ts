// Which app version the site describes (config.ts `app.version`), so pages never mention
// features the published app doesn't have yet.
import { aiRelease, app, legalUpdated } from "../config";

/** Whether version `a` is `b` or newer ("1.10.0" is newer than "1.9.2"). */
export function atLeast(a: string, b: string): boolean {
  const x = a.split(".").map(Number);
  const y = b.split(".").map(Number);
  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    const diff = (x[i] ?? 0) - (y[i] ?? 0);
    if (diff !== 0) return diff > 0;
  }
  return true;
}

/** The published app has AI edit, translation, Pro, template links and B-roll. */
export const hasAiRelease: boolean = atLeast(app.version, aiRelease);

/** The privacy policy's and terms' date for the published version. */
export const legalDate: string = hasAiRelease
  ? legalUpdated.aiRelease
  : legalUpdated.before;
