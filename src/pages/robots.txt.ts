import type { APIRoute } from "astro";

// Netlify marks deploy previews noindex itself, so this can always allow everything.
export const GET: APIRoute = ({ site }) =>
  new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${new URL("/sitemap.xml", site).href}\n`,
    { headers: { "Content-Type": "text/plain" } },
  );
