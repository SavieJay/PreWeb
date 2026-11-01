import type { APIRoute } from "astro";
import { proOnSale } from "../lib/pro";

// Pages that aren't for search: shared templates' page (other people's templates) and 404.
const unlisted = new Set(["t", "404"]);

// Every .astro page in this folder, so new pages are listed without editing this file.
const pages = Object.keys(import.meta.glob("./*.astro"))
  .map((file) => file.replace(/^\.\//, "").replace(/\.astro$/, ""))
  // Pages built from a route parameter ([pricing]) are listed below when they exist.
  .filter((name) => !unlisted.has(name) && !name.startsWith("["))
  .map((name) => (name === "index" ? "/" : `/${name}`))
  .concat(proOnSale ? ["/pricing"] : []);

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .map((page) => `  <url><loc>${new URL(page, site).href}</loc></url>`)
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, { headers: { "Content-Type": "application/xml" } });
};
