# NexaMed website

Static marketing site built with [Astro](https://astro.build). Brand tokens, type and components follow the NexaMed brand asset kit.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs static files to dist/
```

Deploys anywhere that serves static files (Netlify, Vercel, Cloudflare Pages, S3).

## Where things live

| What | Where |
| --- | --- |
| Calendar embed, form endpoint, contact email, nav | `src/config.ts` |
| Brand tokens (color, type, buttons, highlighter) | `src/styles/global.css` |
| Services copy | `src/data/services.ts` |
| Who We Serve copy | `src/data/verticals.ts` |
| Integration pages (+ `published` flag) | `src/data/integrations.ts` |
| Team, authors, blog categories | `src/data/team.ts` |
| Pricing + general FAQs | `src/data/faq.ts` |
| Blog posts | `src/content/blog/*.md` → `/blog/[slug]/` |
| Guides (lead magnets) | `src/content/guides/*.md` → `/guides/[slug]/` + `/thank-you/[slug]/` |
| Case studies | `src/content/case-studies/*.md` → `/case-studies/[slug]/` |
| Illustrations (cut from the brand kit) | `public/illustrations/` |

**Highlighter:** wrap the one phrase that matters in double brackets in any headline string: `"More [[booked patients]]."`

**Aesthetic Record:** the integration page exists in data with `published: false`. Flip it to `true` once you've shipped on it and it appears in the hub and nav lists.

## Before launch

- [ ] `src/config.ts`: set `calendarEmbedUrl` (GHL calendar) and `formEndpoint` (GHL webhook). Set the GHL calendar's post-booking redirect to `/thank-you/call-booked/`.
- [ ] Add Google Tag Manager to `src/layouts/Base.astro`. Thank-you pages push `call_booked` and `guide_download` to `dataLayer`.
- [ ] Replace bracketed placeholders: pricing (`src/pages/pricing.astro`, `src/data/faq.ts`), testimonials, team (`src/data/team.ts`), report-panel example values, case study “[Add: …]” lines, video list.
- [ ] Guide PDFs: hook the guide form to an automation that emails the file.
- [ ] Legal review of `/privacy/` and `/terms/`, and of HIPAA / LegitScript wording in service FAQs.
- [ ] Confirm the Providi / OptiMantra / Cerbo naming on the integration pages.
- [ ] Switzer is self-hosted from `public/fonts/` (Fontshare's free licence); swap in files downloaded from Fontshare directly if you prefer.
- [ ] Blog URLs: existing post slugs must match the old `/blog/[slug]` URLs exactly.
