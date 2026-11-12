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
| Illustrations (vector SVGs from the brand kit) | `public/illustrations/` |
| Animation-ready copies of the hero + patient-path SVGs | `src/assets/illustrations/` |
| Site motion (GSAP) | `src/scripts/motion.ts` |
| react-bits components (CountUp, ScrollReveal, LogoLoop) | `src/components/react-bits/`, wrapped in `src/components/motion/` |
| Fonts (Khand Bold, Hind Regular from Fontshare) | `public/fonts/` |

**Fonts:** Khand Bold for headlines, buttons and labels; Hind Regular for body. Only those two files were in the kit, so any bold body text (form labels, inline **bold**) is browser-synthesized. Drop more Hind weights into `public/fonts/` and add `@font-face` rules in `src/styles/global.css` to get true weights.

**Motion:** headlines rise in word by word and the highlighter sweeps under the marked phrase; cards and lists fade up as they scroll in; the hero activity card and patient-path stops animate; stats count up (react-bits CountUp); the founder quote sharpens on scroll (react-bits ScrollReveal); platforms loop (react-bits LogoLoop); pages cross-fade. All of it is off for visitors with "reduce motion" set, and everything is visible without JavaScript. react-bits is MIT + Commons Clause: fine to use on this site, not to resell as a component library.

**Highlighter:** wrap the one phrase that matters in double brackets in any headline string: `"More [[booked patients]]."`

**Aesthetic Record:** the integration page exists in data with `published: false`. Flip it to `true` once you've shipped on it and it appears in the hub and nav lists.

## Before launch

- [ ] `src/config.ts`: set `calendarEmbedUrl` (GHL calendar) and `formEndpoint` (GHL webhook). Set the GHL calendar's post-booking redirect to `/thank-you/call-booked/`.
- [ ] Add Google Tag Manager to `src/layouts/Base.astro`. Thank-you pages push `call_booked` and `guide_download` to `dataLayer`.
- [ ] Replace bracketed placeholders: pricing (`src/pages/pricing.astro`, `src/data/faq.ts`), testimonials, team (`src/data/team.ts`), report-panel example values, case study “[Add: …]” lines, video list.
- [ ] Guide PDFs: hook the guide form to an automation that emails the file.
- [ ] Legal review of `/privacy/` and `/terms/`, and of HIPAA / LegitScript wording in service FAQs.
- [ ] Confirm the Providi / OptiMantra / Cerbo naming on the integration pages.
- [ ] Blog URLs: existing post slugs must match the old `/blog/[slug]` URLs exactly.
