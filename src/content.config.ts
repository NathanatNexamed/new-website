import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default("nathan-smith"),
    category: z.string(),
    illo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(), // [[phrase]] allowed
    description: z.string(),
    format: z.string(), // e.g. "6-step guide · PDF"
    illo: z.string().optional(),
    bullets: z.array(z.string()),
    readNext: z.string(), // case study slug shown on the thank-you page
    order: z.number().default(0),
  }),
});

const caseStudies = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/case-studies" }),
  schema: z.object({
    client: z.string(),
    title: z.string(), // [[phrase]] allowed
    summary: z.string(),
    location: z.string(),
    vertical: z.string(), // slug from src/data/verticals.ts
    verticalLabel: z.string(),
    services: z.array(z.string()), // slugs from src/data/services.ts
    headline: z.object({ value: z.string(), label: z.string() }),
    metrics: z.array(z.object({ label: z.string(), value: z.string(), note: z.string() })),
    before: z.array(z.string()).default([]),
    after: z.array(z.string()),
    footnote: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, guides, caseStudies };
