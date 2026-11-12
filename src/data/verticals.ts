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
    short: "Injectables, lasers, body and skin. Bring in the right new patients and make repeat visits easier.",
    title: "Medspa marketing built around [[injectables and repeat visits]].",
    metaDescription:
      "Google Ads, Meta, SEO and GoHighLevel automations for medspas. New-patient offers, speed to lead, and rebooking that keeps provider schedules full.",
    lead: "A Botox lead, a filler consultation and a laser package are not the same sale. Each has its own price sensitivity, booking questions and repeat-visit pattern. We start with the services your practice wants to grow, then connect acquisition to follow-up and rebooking.",
    illo: "front-desk",
    realities: [
      {
        title: "Retention starts after the first visit",
        body: "Some injectables have repeat treatment cycles; a laser series works differently from an individual filler appointment. We build reminders around provider guidance and the actual service received, not one generic schedule.",
      },
      {
        title: "A cheap first appointment is not always a good offer",
        body: "Before discounting a popular treatment, consider its margin, appointment time, whether the patient is likely to return and what they'll experience at the first visit.",
      },
      {
        title: "Google and Meta capture different kinds of intent",
        body: "Someone searching 'Botox near me' already knows what they want. Someone seeing a provider explain an injectable on Instagram may just be exploring. They need different copy and different next steps.",
      },
    ],
    focus: [
      "New-patient offers for tox, filler and skin",
      "Speed-to-lead texting that books consults",
      "Treatment-interval rebooking and reactivation",
      "Booking and CRM status mapped to what your software supports",
    ],
    services: ["meta-ads", "google-ads", "crm-automations", "seo"],
    integrations: ["zenoti", "gohighlevel"],
  },
  {
    slug: "longevity-clinics",
    name: "Longevity Clinics",
    short: "Hormones, peptides, IV and diagnostics. Higher-ticket programs with a longer decision.",
    title: "Marketing for programs patients need to [[understand before booking]].",
    metaDescription:
      "Marketing for longevity and functional medicine clinics. Hormone therapy, peptides and IV, LegitScript certification, and nurture that converts high-ticket programs.",
    lead: "Hormone therapy, functional care and wellness programs often involve more questions than a single treatment appointment. Patients want to know what the consult includes, who provides care, expected steps and pricing. That education belongs on the page and in the follow-up.",
    illo: "owner-results",
    realities: [
      {
        title: "Restricted categories",
        body: "Prescription-related campaigns may need platform verification or certification, depending on the service and jurisdiction. We check eligibility and current policy before making promises.",
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
      "Cerbo and OptiMantra workflows reviewed for available event data",
    ],
    services: ["google-ads", "legitscript-certification", "seo", "crm-automations"],
    integrations: ["cerbo", "providi", "gohighlevel"],
    legitscript:
      "Prescription and weight-loss advertising can have special requirements. We verify the relevant platform policy and certification category before recommending a launch.",
  },
  {
    slug: "telehealth-providers",
    name: "Telehealth Providers",
    short: "GLP-1, TRT, sexual wellness and hair loss. Multi-state, policy-heavy, and volume-driven.",
    title: "Telehealth marketing that respects [[the full intake journey]].",
    metaDescription:
      "Marketing for telehealth providers in GLP-1, TRT, sexual wellness and hair loss. LegitScript certification, policy-safe Google and Meta campaigns, and intake follow-up.",
    lead: "A telehealth landing page has to do more than generate a contact form. It needs to explain availability, eligibility, the provider relationship and the next step in intake. Campaigns also need to respect the rules governing each treatment and location.",
    illo: "text-booking",
    realities: [
      {
        title: "Certification is the gate",
        body: "Prescription telehealth can require certifications and verification, but the pathway differs by treatment and platform. We check the applicable rules before investing in creative or media.",
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
      "Prescription weight loss, testosterone and sexual wellness advertising may be restricted. We confirm eligibility and any certification requirements before recommending paid campaigns.",
  },
  {
    slug: "aesthetic-surgeons",
    name: "Aesthetic Surgeons",
    short: "Breast, body and face. Fewer, higher-value cases with a long consult process.",
    title: "Aesthetic surgery marketing for [[qualified consultations]].",
    metaDescription:
      "Marketing for aesthetic and plastic surgeons. Google Ads, SEO and consult follow-up built around high-value procedures and a longer decision cycle.",
    lead: "Surgical patients often compare credentials, results and the consult experience long before committing. We prioritize service-specific search intent, clear provider information and coordinator follow-up over maximizing form volume.",
    illo: "owner-results",
    realities: [
      {
        title: "High value per case",
        body: "Procedure value changes acquisition economics, but revenue, close rate and margin still matter. We evaluate cost per consultation alongside the practice's actual patient journey.",
      },
      {
        title: "The consult is the sale",
        body: "Patient coordinators close cases. The CRM should make their follow-up faster and more consistent, not add work.",
      },
      {
        title: "Reputation drives search",
        body: "Provider credentials, authentic patient education, compliant galleries where appropriate and a strong consultation experience are important trust signals.",
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
