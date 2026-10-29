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

## Publishing a new APK

1. Build a signed release APK from a commit of the PreCut app (`./gradlew assembleRelease`), signed with the same key as every earlier version.
2. Check it and note its numbers: `apksigner verify --print-certs <apk>` (certificate SHA-256), `stat -c %s <apk>` (size), `sha256sum <apk>`.
3. Copy it to `release/PreCut-<version>.apk` and publish it:
   `gh release create v<version> release/PreCut-<version>.apk --title "PreCut <version>" --notes-file release/notes-v<version>.md`
4. In `src/config.ts`, set `app.version` and the APK's `sizeBytes`, `sha256` and `certSha256`, then push. The site's buttons point at the new file.

## Deploying

Every push to `main` deploys to production on Netlify; every pull request gets its own preview link.
