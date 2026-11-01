# PreCut website

The marketing and download site for [PreCut](https://github.com/SavieJay/PreCut), a video editor for Android.
Astro (static) with Tailwind CSS, hosted on Netlify. The plan and task list are in [`docs/PLAN.md`](docs/PLAN.md).

## Run it

```sh
npm install
npm run dev       # http://localhost:4321, reloads as you edit
npm run build     # type-checks, then builds into dist/
npm run preview   # serves dist/ at http://localhost:4321
npm run format    # Prettier
```

Node 22.23 or newer.

## Where things live

- `src/config.ts`: facts that change (version, APK, Google Play switch, contact email, prices). Edit them here only.
- `src/styles/global.css`: colours and fonts, taken from the app's theme.
- `src/components/`, `src/layouts/`, `src/pages/`: the site. Each file in `src/pages/` is a page.
- `netlify.toml`: build settings and response headers.

## Settings outside the code

- **`PUBLIC_CLOUD_URL`** (Netlify → Site configuration → Environment variables): PreCut's cloud function, the `cloudUrl` from the app's `cloud.properties`. Shared templates' pages (`/t/<id>`) read the template from it; without it they still offer the app.
- **`src/config.ts`**: `play.live` and `pro.prices` (Pro shows only when both are set and the published app has it), `analytics.plausibleScript` (off while null), `aiRelease` (the version whose features the legal pages describe once `app.version` reaches it).

## Changelog

Add `src/content/changelog/<version>.md` with `version`, `date` and `summary` at the top and the notes as a list. `/changelog` shows the newest first.

## Publishing a new APK

1. Build a signed release APK from a commit of the PreCut app (`./gradlew assembleRelease`), signed with the same key as every earlier version.
2. Check it and note its numbers: `apksigner verify --print-certs <apk>` (certificate SHA-256), `stat -c %s <apk>` (size), `sha256sum <apk>`.
3. Copy it to `release/PreCut-<version>.apk` and publish it:
   `gh release create v<version> release/PreCut-<version>.apk --title "PreCut <version>" --notes-file release/notes-v<version>.md`
4. In `src/config.ts`, set `app.version` and the APK's `sizeBytes`, `sha256` and `certSha256`, add its changelog entry, then push. The site's buttons point at the new file. Reaching `aiRelease` (1.1.0) also switches the legal pages to their 1.1.0 text, which must be approved first.

## Deploying

Every push to `main` deploys to production on Netlify; every pull request gets its own preview link.
