// Content collections. The changelog: one Markdown file per release in
// src/content/changelog/ (e.g. 1.1.0.md), newest shown first on /changelog.
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const changelog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/changelog" }),
  schema: z.object({
    /** The app's version name, e.g. "1.1.0". */
    version: z.string().regex(/^\d+\.\d+\.\d+$/),
    /** When it was published. */
    date: z.coerce.date(),
    /** One line on what the release is about. */
    summary: z.string(),
  }),
});

export const collections = { changelog };
