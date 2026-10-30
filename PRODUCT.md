# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Social creators: people who make short videos for TikTok, Instagram Reels, YouTube Shorts and WhatsApp Status, and who edit on the phone they shot on. They want pro-level tools (a real timeline, effects, text, beat-synced cuts) without paying, without a watermark stamped on their work, and without signing up for anything. Audience is global and English-speaking (confirmed 2026-10-30); no single region is targeted.

Most visitors arrive on an Android phone, often from a link in a social post or bio. Some arrive on a desktop and need to get the app onto their phone.

## Product Purpose

The website exists to get PreCut onto Android phones. Every page has one primary action: download. Until PreCut is on Google Play, the download is a signed APK that visitors install themselves, so the site also has to make sideloading feel safe and easy (install steps, checksum, signing certificate). After the Play launch the same buttons go to the Play listing.

Success: a visitor who arrives on an Android phone understands what PreCut is within one screen, trusts it enough to install an APK, and has it installed in about a minute.

The site also hosts the legal and support pages the app and its Play listing link to: privacy policy, terms, data deletion, support.

## Positioning

A full video editor on the phone, with every tool free: no watermark on exports, no ads, no account. Edits happen on the device; nothing leaves the phone unless the user agrees, each time, to send the sound to a cloud AI feature, and then only the sound. The whole app is about 9 MB and runs on Android 8.0 or newer.

## Operating Context

- Visitors come from social media, mostly on mid-range Android phones, sometimes on slow or metered data.
- Installing an APK means: download, open the file, allow installs from this source, install. Google Play Protect may scan it first.
- Updating means downloading the new APK and installing it over the old one; projects stay because every version is signed with the same certificate.
- iPhone visitors are told PreCut is Android-only for now (no waitlist yet).
- Desktop visitors get a QR code to open the download page on their phone.

## Capabilities and Constraints

What the app does at version 1.0.0 (counts live in `src/config.ts`, `catalogue`):

- Timeline editing: trim, split, reorder, replace; snapping to edges, beats and the playhead; speed 0.1x to 100x with curves; reverse; freeze frames; undo; autosaved drafts.
- AutoCut (cuts clips to the beats of a song) and templates (12 at 1.0.0); any project can become a template.
- Filters (61) plus custom .cube LUTs, effects (46), transitions (30), keyframes with easing for movement, opacity, masks and colour.
- Text in 24 fonts or the user's own, with outline, glow, curved text, animations; 35 text templates; text to speech; emoji, animated and 3D stickers, GIFs, drawing.
- Picture-in-picture with blend modes, masks, chroma key; multiple music tracks; voiceover with voice effects; audio from any video.
- Export 480p to 4K, 24 to 60 fps, H.264 or HEVC, HDR where the phone supports it; background export; GIF, audio-only and single-frame export.
- Cloud AI (optional): speech-to-text for captions, sound only, consent before every upload, via PreCut's server (Supabase, Ireland) and ElevenLabs. Details are in `/privacy` and must stay accurate.

Constraints:

- Not on Google Play yet; `play.live` in `src/config.ts` flips every download button to the Play listing.
- Facts that change (version, size, checksum, prices, Play URL, contact) live only in `src/config.ts`.
- PreCut Pro does not exist yet; there are no prices. Do not show or imply any.
- Hosted on Netlify as a static Astro site; minimal client JavaScript; no cookies, no trackers.
- Undecided: whether to add an iPhone waitlist; the custom domain; governing law in the terms.

## Brand Commitments

- Name: PreCut. Publisher: SavieCode.
- Logo: the silver "P" mark with a play cutout and scissors, traced from the app's launcher icon (`src/assets/logo.svg`).
- Google's official "Get it on Google Play" badge, exactly per Google's guidelines, once the app is on Play. No other third-party logos.
- Never name competitors in site copy.
- Visual identity is open for the website (confirmed 2026-10-30): it does not have to reuse the app's colours or fonts.
- Voice: plain, direct, short sentences; British spelling ("colour"); numbers are exact.

## Evidence on Hand

- The app itself and its feature counts (`src/config.ts`).
- The signed APK 1.0.0 with its SHA-256 and signing certificate, published as a GitHub Release.
- The app's real consent dialog text for cloud AI (used on the home page).
- No real app screenshots or demo video yet: the current site draws the editor in CSS. Ask the user for real captures.
- No ratings, reviews, download counts, testimonials or press. Do not invent any.

## Product Principles

1. Free means free: never hint at a catch, a trial or a paywall that doesn't exist.
2. Show the editor working rather than describe it.
3. Earn trust for a sideloaded APK with specifics: size, version, checksum, what is sent and when.
4. Respect the visitor's phone and data: fast, light pages, nothing loaded that isn't needed.
5. One clear next step on every page: download.

## Accessibility & Inclusion

Lighthouse accessibility ≥ 95 on mobile. Must work at 360px wide. Respect reduced-motion preferences. Text contrast at WCAG AA or better.
