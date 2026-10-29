import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Netlify sets URL to the site's main address at build time.
  site: process.env.URL ?? "http://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
  },
});
