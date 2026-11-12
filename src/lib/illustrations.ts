// Vector illustrations from the NexaMed brand asset kit (public/illustrations/*.svg).
// w/h are the SVG viewBox size, used for aspect ratio (no layout shift).
export const illustrations = {
  "owner-leads": { w: 1200, h: 680, alt: "Practice owner outside a clinic watching new leads move to texted and booked" },
  "patient-path": { w: 1200, h: 680, alt: "A road from an ad on a phone, through new lead, texted and booked, to a patient at the clinic" },
  "front-desk": { w: 1200, h: 680, alt: "Front desk with a full week of booked appointments and a patient confirming Thursday" },
  "owner-results": { w: 1200, h: 680, alt: "Doctor presenting booked patients and cost per patient on a reporting board" },
  "connected-stack": { w: 759, h: 461, alt: "Ads, CRM and EMR connected on one platform" },
  "reporting-screen": { w: 716, h: 580, alt: "Reporting screen with a rising bar chart" },
  "text-booking": { w: 708, h: 422, alt: "Phone conversation turning into a calendar booking" },
  "compliance-shield": { w: 643, h: 511, alt: "Shield with a check mark over approval documents" },
  "landing-pages": { w: 620, h: 600, alt: "Separate landing pages for IV therapy, NAD+ therapy and injections" },
  "stack-dark": { w: 759, h: 461, alt: "Ads, CRM and EMR connected on one platform" },
  "plus-accents": { w: 300, h: 220, alt: "" },
  plus: { w: 150, h: 160, alt: "" },
  pill: { w: 161, h: 141, alt: "" },
} as const;

export type IlloName = keyof typeof illustrations;
