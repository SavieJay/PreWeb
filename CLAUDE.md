# CLAUDE.md — PreCut website

The marketing and download website for PreCut, an Android video editor.
This is a separate project from the Android app. Never modify the app repository from here.
The full plan and task list live in `docs/PLAN.md`. Read it before starting work.

## Stack
- Astro (static output) + Tailwind CSS
- TypeScript, minimal client-side JavaScript (Astro islands only where interaction is needed)
- Hosted on Netlify (the user's choice, 2026-10-29), deployed from the `main` branch; settings in `netlify.toml`
- Privacy-friendly analytics only (Cloudflare Web Analytics or Plausible); no cookie banners needed, no trackers

## Workflow rules
1. Work one phase at a time, in the order in `docs/PLAN.md`. Plan first, wait for approval, then build.
2. Run `npm run build` after every change and fix all errors.
3. Tick checkboxes in `docs/PLAN.md` as tasks are done.
4. At the end of each phase, stop and give the user exact steps to check it (local preview URL, what to look at on a phone).
5. Ask the user for real content you cannot invent: app screenshots, demo video, prices, legal company name, contact email, Play Store URL.

## Design rules
- Match the app: dark (#0E0E10 background, #17171A surfaces), accent #FF4D6D, Roboto Flex, Roboto Mono for numbers.
- Mobile first: most visitors arrive on Android phones. Test at 360px wide.
- Every page has one clear primary action: download.
- Fast: Lighthouse performance and accessibility ≥ 95; images in AVIF/WebP with explicit sizes; video lazy-loaded with a poster.
- Use Google's official "Get it on Google Play" badge exactly as Google's brand guidelines require. No other third-party logos.
- Never name competitors in site copy.

## Content rules
- Legal pages (privacy policy, terms) must match what the app actually does, including the cloud AI processing, consent before uploads, data retention and "Delete my cloud data". When unsure, ask the user rather than guess.
- Keep a single source for facts that change (prices, version, Play URL) in `src/config.ts`.
