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

## Deploying

Every push to `main` deploys to production on Netlify; every pull request gets its own preview link.
