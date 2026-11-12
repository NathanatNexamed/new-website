// Site-wide settings. Swap the placeholders here before launch.

export const site = {
  name: "NexaMed",
  url: "https://nexamed.us",
  description:
    "NexaMed helps med spas and cash-pay clinics improve Google Ads, Meta Ads, SEO, CRM follow-up and the handoff from inquiry to appointment.",
  email: "hello@nexamed.us", // TODO: confirm public contact address
  // GoHighLevel calendar embed. Set the calendar's post-booking redirect to /thank-you/call-booked/
  calendarEmbedUrl: "", // e.g. "https://api.leadconnectorhq.com/widget/booking/XXXXXXXX"
  // Where the short form on /book and the guide forms POST. A GHL form webhook or inbound webhook URL works.
  formEndpoint: "", // e.g. "https://services.leadconnectorhq.com/hooks/XXXX/webhook-trigger/XXXX"
  social: {
    linkedin: "https://www.linkedin.com/company/nexamed", // TODO: confirm
  },
};

export type NavLink = { label: string; href: string; indent?: boolean; note?: string };
export type NavItem = { label: string; href: string; children?: NavLink[] };

export const nav: NavItem[] = [
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "Google Ads", href: "/services/google-ads/", note: "High-intent treatment searches and clean tracking" },
      { label: "Meta Ads", href: "/services/meta-ads/", note: "Creative, offers and useful follow-up" },
      { label: "SEO", href: "/services/seo/", note: "Treatment pages that rank" },
      { label: "AEO", href: "/services/aeo/", indent: true, note: "Clear treatment answers for AI search" },
      { label: "CRM & Automations", href: "/services/crm-automations/", note: "Speed to lead, rebooking, reactivation" },
      { label: "LegitScript Certification", href: "/services/legitscript-certification/", note: "Certification and ad policy guidance" },
    ],
  },
  {
    label: "Who we serve",
    href: "/who-we-serve/",
    children: [
      { label: "Medspas", href: "/who-we-serve/medspas/" },
      { label: "Longevity Clinics", href: "/who-we-serve/longevity-clinics/" },
      { label: "Telehealth Providers", href: "/who-we-serve/telehealth-providers/" },
      { label: "Aesthetic Surgeons", href: "/who-we-serve/aesthetic-surgeons/" },
    ],
  },
  { label: "Results", href: "/case-studies/" },
  { label: "Pricing", href: "/pricing/" },
  {
    label: "Learn",
    href: "/learn/",
    children: [
      { label: "Blog", href: "/blog/" },
      { label: "Guides", href: "/guides/" },
      { label: "Videos", href: "/videos/" },
    ],
  },
  { label: "About", href: "/about/" },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Services",
    links: [
      { label: "Google Ads", href: "/services/google-ads/" },
      { label: "Meta Ads", href: "/services/meta-ads/" },
      { label: "SEO", href: "/services/seo/" },
      { label: "AEO", href: "/services/aeo/" },
      { label: "CRM & Automations", href: "/services/crm-automations/" },
      { label: "LegitScript Certification", href: "/services/legitscript-certification/" },
    ],
  },
  {
    heading: "Who we serve",
    links: [
      { label: "Medspas", href: "/who-we-serve/medspas/" },
      { label: "Longevity Clinics", href: "/who-we-serve/longevity-clinics/" },
      { label: "Telehealth Providers", href: "/who-we-serve/telehealth-providers/" },
      { label: "Aesthetic Surgeons", href: "/who-we-serve/aesthetic-surgeons/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Results", href: "/case-studies/" },
      { label: "Pricing", href: "/pricing/" },
      { label: "How It Works", href: "/how-it-works/" },
      { label: "Careers", href: "/careers/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Blog", href: "/blog/" },
      { label: "Guides", href: "/guides/" },
      { label: "Integrations", href: "/integrations/" },
      { label: "FAQ", href: "/faq/" },
    ],
  },
];
