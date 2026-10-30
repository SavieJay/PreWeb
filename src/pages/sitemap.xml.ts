import type { APIRoute } from "astro";

// Every .astro page in this folder, so new pages are listed without editing this file.
const pages = Object.keys(import.meta.glob("./*.astro")).map((file) => {
  const name = file.replace(/^\.\//, "").replace(/\.astro$/, "");
  return name === "index" ? "/" : `/${name}`;
});

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
