import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Netlify sets URL to the site's main address at build time.
  site: process.env.URL ?? "http://localhost:4321",
  // Pages are files (download.html), which Netlify serves at /download with no
  // redirect to /download/: download buttons and the app's update link use /download.
  build: { format: "file" },
  trailingSlash: "never",
  vite: {
    plugins: [tailwindcss()],
  },
});
