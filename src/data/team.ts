export type Person = { slug: string; name: string; role: string; bio: string; short: string; linkedin?: string };

// TODO: add the rest of the team. Placeholders are marked in brackets.
export const team: Person[] = [
  {
    slug: "nathan-smith",
    name: "Nathan Smith",
    role: "Founder & CEO",
    short: "Started inside a cash-pay practice before starting NexaMed.",
    bio: "Nathan started NexaMed after running marketing and operations from inside a cash-pay practice, where he saw how much revenue was lost between the ad click and the front desk. He still reviews every new account audit himself. [Add a line on background, markets worked in, and what he's known for.]",
  },
  {
    slug: "team-member-2",
    name: "[Team member]",
    role: "[Head of Paid Media]",
    short: "[One line on background]",
    bio: "[Short bio]",
  },
  {
    slug: "team-member-3",
    name: "[Team member]",
    role: "[CRM & Automation Lead]",
    short: "[One line on background]",
    bio: "[Short bio]",
  },
  {
    slug: "team-member-4",
    name: "[Team member]",
    role: "[Client Success]",
    short: "[One line on background]",
    bio: "[Short bio]",
  },
];

export const personBySlug = (slug: string) => team.find((p) => p.slug === slug);

export const blogCategories: Record<string, { name: string; description: string }> = {
  "google-ads": { name: "Google Ads", description: "Tracking, bidding and campaign structure for practices." },
  "crm-automation": { name: "CRM & Automation", description: "Speed to lead, pipelines and GoHighLevel builds." },
  "practice-ops": { name: "Practice Ops", description: "How the front desk, the schedule and the marketing fit together." },
  strategy: { name: "Strategy", description: "Offers, positioning and where to spend first." },
};
