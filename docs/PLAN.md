# PreCut website — Build plan

## Where this project lives
A separate folder and git repository next to the app, not inside it:
```
PreProject/
├── PreCut/    Android app (existing)
└── PreWeb/    this website (new)
```
Reasons: different stack and tooling, deploys on its own schedule, and the app's signing keys and secrets never sit in a web project.

## How the download button works
*Changed 2026-10-29 (user): PreCut isn't on Google Play yet, so the site offers the APK now and switches to Play later.*

- **Now: direct APK.** Every download button goes to `/download#start`, which offers the signed APK with its version,
  size, SHA-256 checksum and "allow unknown apps" install steps; on Android phones `#start` begins the download at once. The APK is a GitHub Release asset of this repo
  (`SavieJay/PreWeb`), never committed; GitHub doesn't count download traffic, Netlify's free plan does.
- **After the Play launch:** set `play.live = true` in `src/config.ts`. Buttons then go to the Play listing with a referrer tag
  (`https://play.google.com/store/apps/details?id=<package>&referrer=utm_source%3Dwebsite%26utm_medium%3D<button-id>`)
  so installs from the website can be measured in Play Console, and the APK stays on `/download` as a secondary link.
- **Smart `/download` page:**
  - Android phone → the APK with install steps (after launch: straight to the Play listing)
  - Desktop → QR code to scan with the phone, plus the link
  - iPhone/iPad → "PreCut is on Android for now" with an optional email waitlist
- **What an APK copy can't do:** Play's in-app updates and Play Billing. The app's forced-update overlay (app Phase 23)
  already sends non-Play installs to `/download`. Cloud AI works: the app's server accepts PreCut's own signing certificate.
- **Signing key (app side, before the Play launch):** enrol in Play App Signing with PreCut's own key, not a key Google
  generates. Otherwise APK users can't update to the Play version without uninstalling, which deletes their projects.
- **Developer verification:** Google is starting to require that apps installed outside Play come from verified developers
  (some countries from September 2026, worldwide in 2027). Register PreCut in the Android Developer Console.

## Phase W0 — Setup
*Hosting changed 2026-10-29 (user): Netlify instead of Cloudflare Pages.*
- [x] Astro + Tailwind + TypeScript project, Prettier, `src/config.ts` (app name, package name, Play switch, APK, prices, contact email, current version)
- [x] Base layout: header with logo and "Download" button, footer with legal links
- [x] Fonts, colors and tokens matching the app
- [x] Deploy to Netlify from GitHub; preview deploys on pull requests
  (2026-10-29: https://precut.netlify.app, team "SAVIE" (savyj03@gmail.com), linked through Netlify's GitHub app; pushes to `main` deploy.
  The free plan's "Powered by Netlify" badge is switched off (site setting `built_with_badge_enabled`), since the site shows no third-party logos)

**Acceptance:** a "Hello PreCut" page is live on a `*.netlify.app` URL.

## Phase W1 — Legal and required pages (do first: the app's Play listing needs these URLs)
*Done 2026-10-29; the user approved the legal text. Publisher "SavieCode", contact savyj03@gmail.com. Facts checked against PreCut `6b2636a` (the published APK). Terms have no governing-law clause yet (country not chosen).*
- [x] `/privacy` — privacy policy matching the app (on-device processing, cloud AI with consent, what is uploaded, retention, processors such as Supabase and the speech-to-text provider, how to delete data). Pull the facts from the app's `docs/` and ask the user to confirm.
- [x] `/terms` — terms of use, including subscriptions and acceptable use of AI features
- [x] `/delete-data` — explains "Settings → Cloud AI → Delete my cloud data" and gives an email fallback (Play Console data-deletion URL)
- [x] `/support` — FAQ and contact email
- [x] `/.well-known/assetlinks.json` — placeholder for Android App Links (template share links, Phase 28 in the app); the user supplies the signing certificate SHA-256 from Play Console (holds the APK's certificate now; add the Play app-signing certificate if Play uses a different key)

**Acceptance:** all pages render on a phone and the user has approved the legal text.

## Phase W2 — Home page
*Built 2026-10-30 without screenshots or video (none yet): drawn CSS illustrations stand in, ready to be replaced. Every claim checked against the published app (PreCut `6b2636a`); five reviewers plus skeptics checked accuracy, copy, accessibility, SEO and layout.*
- [x] Hero: headline, one-line promise ("Pro-level video editing. Free tools, no watermark."), Play badge, phone mockup with a short looping demo video (poster image first, video lazy-loaded) (APK button until Play; the phone is drawn and animated in CSS until a demo clip exists)
- [x] Feature sections (4–6), each with a short looping clip or screenshot: timeline editing, templates and AutoCut, captions, effects and filters, AI Edit (six cards with drawn illustrations; no captions or AI Edit card, since the published app has neither)
- [ ] "Free forever" vs "Pro" comparison table (from the app's Phase 26 split) (waits for Pro to exist; a "Private by design" section is there for now)
- [ ] Social proof placeholder (ratings once live) (nothing to show yet; nothing invented)
- [x] FAQ (5–8 questions)
- [x] Final call to action with the Play badge (APK button until Play)
- [x] SEO: title, description, Open Graph and Twitter images, sitemap, robots.txt, structured data (`SoftwareApplication`)

**Acceptance:** Lighthouse ≥ 95 on mobile for performance, accessibility and SEO; looks right at 360px, 768px and 1280px.

## Phase W3 — Download, pricing, changelog
*The download items were brought forward on 2026-10-29 at the user's request.*
- [x] Publish the signed release APK as a GitHub Release (`v<version>`, `PreCut-<version>.apk`) with its SHA-256; size and checksum in `src/config.ts`
  (1.0.0 built from PreCut commit `6b2636a`, versionCode 35, signature verified; published 2026-10-29, the public download's SHA-256 matches)
- [x] `/download` smart page (rules above), QR code generated at build time (no iPhone waitlist yet)
- [ ] `/pricing` — Free vs Pro with prices from `src/config.ts`; "Prices may vary by country" note; links to the app
- [ ] `/changelog` — one Markdown file per release in `src/content/changelog/`; newest first
- [ ] Analytics: count clicks on each download button (privacy-friendly, no cookies)

**Acceptance:** each device type gets the right download experience; changelog entries are added by dropping in a Markdown file.

## Phase W4 — Launch checklist
- [ ] Custom domain connected with HTTPS (the user buys the domain)
- [ ] Once the Play listing is live: `play.live = true` and real prices in `src/config.ts`
- [ ] Privacy policy URL entered in Play Console and inside the app's Settings
- [ ] App's forced-update fallback link points to `/download`
- [ ] 404 page, favicon, web manifest
- [ ] Final check on a real Android phone and a desktop browser
