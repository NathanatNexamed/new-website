import type { IlloName } from "../lib/illustrations";
import type { Block } from "./services";

export type Vertical = {
  slug: string;
  name: string;
  short: string;
  title: string;
  metaDescription: string;
  lead: string;
  illo: IlloName;
  realities: Block[];
  focus: string[];
  services: string[];
  integrations: string[];
  legitscript?: string;
};

export const verticals: Vertical[] = [
  {
    slug: "medspas",
    name: "Medspas",
    short: "Injectables, lasers, body and skin. New patients in, and existing ones rebooked on time.",
    title: "Medspa marketing that fills the [[provider schedule]].",
    metaDescription:
      "Google Ads, Meta, SEO and GoHighLevel automations for medspas. New-patient offers, speed to lead, and rebooking that keeps provider schedules full.",
    lead: "Medspa growth comes from two places: a steady flow of new patients at a cost that makes sense, and existing patients coming back on schedule. Most marketing only works on the first. We work on both.",
    illo: "front-desk",
    realities: [
      {
        title: "Your best patients are your existing ones",
        body: "Tox every three to four months, filler annually, skin on a series. Rebooking automation is usually the cheapest revenue in the practice.",
      },
      {
        title: "New-patient offers need a second visit",
        body: "A first-visit offer only works if the follow-up converts patients to full price. We build the offer and the path to the next appointment together.",
      },
      {
        title: "Meta is where demand is created",
        body: "Most medspa patients don't search for a provider until they've seen one. Meta creative and offers do the heavy lifting; Google captures the intent.",
      },
    ],
    focus: [
      "New-patient offers for tox, filler and skin",
      "Speed-to-lead texting that books consults",
      "Treatment-interval rebooking and reactivation",
      "Zenoti and GoHighLevel connected, so show data is real",
    ],
    services: ["meta-ads", "google-ads", "crm-automations", "seo"],
    integrations: ["zenoti", "gohighlevel"],
  },
  {
    slug: "longevity-clinics",
    name: "Longevity Clinics",
    short: "Hormones, peptides, IV and diagnostics. Higher-ticket programs with a longer decision.",
    title: "Longevity programs need [[patient education]], not discounts.",
    metaDescription:
      "Marketing for longevity and functional medicine clinics. Hormone therapy, peptides and IV, LegitScript certification, and nurture that converts high-ticket programs.",
    lead: "Longevity patients research for weeks before booking. They want to understand the program, the provider and the price. The marketing has to answer those questions honestly, and the follow-up has to stay useful for as long as the decision takes.",
    illo: "owner-results",
    realities: [
      {
        title: "Restricted categories",
        body: "Hormone therapy and peptides often need LegitScript certification before Google and Meta will run your ads. Plan for it before launch, not after the first disapproval.",
      },
      {
        title: "A longer path to the first consult",
        body: "Educational content, a clear explanation of membership pricing, and nurture sequences matter more than a fast offer.",
      },
      {
        title: "Lifetime value, not first visit",
        body: "Programs and memberships mean the right cost per patient is higher than most agencies are comfortable bidding to. We report on it honestly so you can decide.",
      },
    ],
    focus: [
      "LegitScript certification for restricted treatments",
      "Search campaigns for hormone, IV and program terms",
      "Education-led nurture in GoHighLevel",
      "Cerbo and OptiMantra connected for real patient data",
    ],
    services: ["google-ads", "legitscript-certification", "seo", "crm-automations"],
    integrations: ["cerbo", "providi", "gohighlevel"],
    legitscript:
      "Hormone therapy, peptides and some weight-loss programs are restricted on Google and Meta. LegitScript certification is usually the first step.",
  },
  {
    slug: "telehealth-providers",
    name: "Telehealth Providers",
    short: "GLP-1, TRT, sexual wellness and hair loss. Multi-state, policy-heavy, and volume-driven.",
    title: "Telehealth growth that stays [[inside ad policy]].",
    metaDescription:
      "Marketing for telehealth providers in GLP-1, TRT, sexual wellness and hair loss. LegitScript certification, policy-safe Google and Meta campaigns, and intake follow-up.",
    lead: "Telehealth lives and dies on two things: staying approved on the ad platforms, and getting people from a click through intake without dropping off. We handle certification, build campaigns that stay inside policy, and tighten the intake funnel.",
    illo: "text-booking",
    realities: [
      {
        title: "Certification is the gate",
        body: "Prescription telehealth almost always needs LegitScript certification for Google and Meta. Every claim on the site and in the ads has to hold up.",
      },
      {
        title: "Intake is the funnel",
        body: "Drop-off between landing page, intake form and provider consult is where most budget is lost. We measure each step and fix the worst one first.",
      },
      {
        title: "State-by-state reality",
        body: "Campaigns, landing pages and copy have to match where your providers are licensed and what you can prescribe there.",
      },
    ],
    focus: [
      "LegitScript certification and policy review",
      "Google and Meta campaigns for GLP-1, TRT and sexual wellness",
      "Intake funnel tracking and abandonment follow-up",
      "Geo-targeting matched to provider licensing",
    ],
    services: ["legitscript-certification", "google-ads", "meta-ads", "crm-automations"],
    integrations: ["gohighlevel", "cerbo"],
    legitscript:
      "GLP-1s, testosterone and sexual wellness prescriptions are restricted categories on Google and Meta. We get you certified before we spend.",
  },
  {
    slug: "aesthetic-surgeons",
    name: "Aesthetic Surgeons",
    short: "Breast, body and face. Fewer, higher-value cases with a long consult process.",
    title: "Fewer leads, more [[surgical consults]].",
    metaDescription:
      "Marketing for aesthetic and plastic surgeons. Google Ads, SEO and consult follow-up built around high-value procedures and a longer decision cycle.",
    lead: "A surgical practice doesn't need hundreds of leads. It needs the right fifty, a fast and personal response, and a coordinator workflow that moves consults to scheduled cases. We build for that.",
    illo: "owner-results",
    realities: [
      {
        title: "High value per case",
        body: "One booked procedure can pay for months of marketing. That changes how much you can bid, and how much attention each lead deserves.",
      },
      {
        title: "The consult is the sale",
        body: "Patient coordinators close cases. The CRM should make their follow-up faster and more consistent, not add work.",
      },
      {
        title: "Reputation drives search",
        body: "Before-and-after galleries, surgeon credentials and reviews do more for organic and paid performance than anything else on the site.",
      },
    ],
    focus: [
      "Procedure-level Google Ads with offline conversion values",
      "SEO for procedure and surgeon pages",
      "Coordinator follow-up workflows in GoHighLevel",
      "Reporting on consults to scheduled cases",
    ],
    services: ["google-ads", "seo", "crm-automations", "meta-ads"],
    integrations: ["gohighlevel"],
  },
];

export const verticalBySlug = (slug: string) => verticals.find((v) => v.slug === slug);
