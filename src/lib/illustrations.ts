// Illustrations cut from the brand asset kit. Transparent ones sit on white or mist.
export const illustrations = {
  "owner-leads": { w: 1600, h: 800, alt: "Practice owner outside a clinic watching new leads move to texted and booked" },
  "patient-path": { w: 1600, h: 878, alt: "A road from an ad on a phone, through new lead, texted and booked, to a patient at the clinic" },
  "front-desk": { w: 1600, h: 860, alt: "Front desk with a full week of booked appointments and a patient confirming Thursday" },
  "owner-results": { w: 1296, h: 654, alt: "Doctor presenting booked patients and cost per patient on a reporting board" },
  "connected-stack": { w: 1310, h: 817, alt: "Ads, CRM and EMR connected on one platform" },
  "reporting-screen": { w: 1325, h: 817, alt: "Reporting screen with a rising bar chart" },
  "text-booking": { w: 1310, h: 858, alt: "Phone conversation turning into a calendar booking" },
  "compliance-shield": { w: 1310, h: 864, alt: "Shield with a check mark over approval documents" },
  "landing-pages": { w: 1561, h: 1705, alt: "Separate landing pages for IV therapy, NAD+ therapy and injections" },
  "stack-dark": { w: 1511, h: 1482, alt: "Ads, CRM and EMR connected on one platform" },
} as const;

export type IlloName = keyof typeof illustrations;
