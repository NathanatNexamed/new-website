import type { Block } from "./services";

export type Integration = {
  slug: string;
  name: string;
  category: string;
  published: boolean; // false = page isn't built or linked yet
  short: string;
  title: string;
  metaDescription: string;
  lead: string;
  flows: Block[];
  syncs: string[];
  faqs: { q: string; a: string }[];
};

export const integrations: Integration[] = [
  {
    slug: "gohighlevel",
    name: "GoHighLevel",
    category: "CRM & marketing automation",
    published: true,
    short: "The CRM we build on: pipelines, two-way texting, speed to lead and reporting in one place.",
    title: "GoHighLevel, built for [[how a practice actually runs]].",
    metaDescription:
      "GoHighLevel setup for medspas and clinics: pipelines, speed-to-lead automations, rebooking, and offline conversions sent back to Google Ads.",
    lead: "GoHighLevel is the hub of almost every build we do. Out of the box it's a toolbox; set up properly it's the system your front desk works from all day. We build it around your treatments, your team and your booking software.",
    flows: [
      {
        title: "Pipelines your team keeps current",
        body: "Stages that match how patients actually move, with automation doing the busywork so stage data stays accurate.",
      },
      {
        title: "Speed to lead and two-way texting",
        body: "Instant response on every new lead, call tasks, and a shared inbox so nothing sits unanswered.",
      },
      {
        title: "Conversions back to Google Ads",
        body: "GCLID captured on every form and survey, booked and closed stages sent back as offline conversions.",
      },
      {
        title: "Rebooking and reactivation",
        body: "Treatment-interval reminders and win-back campaigns that run without someone remembering to send them.",
      },
    ],
    syncs: ["Leads from Google, Meta and your website", "Appointments and show status", "Offline conversions to Google Ads", "Reviews requests after visits"],
    faqs: [
      {
        q: "We already have GoHighLevel. Do you rebuild it?",
        a: "We audit what's there first. Usually we keep your contacts and history, and rebuild the pipelines and automations so they're consistent and reportable.",
      },
      {
        q: "Who owns the account?",
        a: "You do. We work inside your sub-account, and if we ever part ways everything stays with you.",
      },
    ],
  },
  {
    slug: "zenoti",
    name: "Zenoti",
    category: "Medspa booking & POS",
    published: true,
    short: "Appointments, show status and sales from Zenoti flowing into GoHighLevel and your reporting.",
    title: "Zenoti and your CRM, [[finally talking]].",
    metaDescription:
      "Connect Zenoti to GoHighLevel so appointments, show status and sales flow into your CRM, automations and Google Ads conversions.",
    lead: "Zenoti runs the schedule and the register. Your marketing runs in the CRM. When the two don't talk, nobody can tell which ads produced patients. We connect them so bookings and visits flow back without double entry.",
    flows: [
      {
        title: "Bookings into the pipeline",
        body: "When a lead books in Zenoti, their CRM record moves to consult booked automatically.",
      },
      {
        title: "Show status and sales",
        body: "Completed visits and services update the CRM, which drives rebooking reminders and reporting.",
      },
      {
        title: "Closed-loop reporting",
        body: "Visits tie back to the campaign that produced the lead, and feed offline conversions to Google.",
      },
    ],
    syncs: ["Appointments booked, rescheduled and cancelled", "Show and no-show status", "Services performed for rebooking intervals"],
    faqs: [
      {
        q: "Is this a native integration?",
        a: "It depends on your Zenoti plan and what your account exposes. We'll confirm the approach on the call before quoting.",
      },
    ],
  },
  {
    slug: "providi",
    name: "Providi (OptiMantra)",
    category: "EMR & practice management",
    published: true,
    short: "OptiMantra and other Providi platforms connected to your CRM for booking and patient status.",
    title: "Your EMR data, in [[your marketing reporting]].",
    metaDescription:
      "Connect OptiMantra and Providi platforms to GoHighLevel for appointment sync, patient status and closed-loop marketing reporting.",
    lead: "Integrative, functional and longevity practices often run on OptiMantra. We connect appointments and patient status to your CRM, while keeping clinical information where it belongs, in the EMR.",
    flows: [
      {
        title: "Appointment sync",
        body: "New and completed appointments update the patient's CRM record and pipeline stage.",
      },
      {
        title: "Status without PHI",
        body: "Only what marketing needs (booked, showed, active) flows across. Clinical detail stays in the EMR.",
      },
      {
        title: "Program and membership tracking",
        body: "Patients who start a program are tagged so reporting reflects real revenue, not just first visits.",
      },
    ],
    syncs: ["Appointments and show status", "New patient vs. returning", "Program or membership start"],
    faqs: [
      {
        q: "Does this include Cerbo?",
        a: "Cerbo has its own page. The approach is similar, but the connection is different.",
      },
    ],
  },
  {
    slug: "cerbo",
    name: "Cerbo",
    category: "EMR for direct care & functional medicine",
    published: true,
    short: "Cerbo appointments and patient status connected to GoHighLevel and your ad reporting.",
    title: "Cerbo, connected to [[the rest of your stack]].",
    metaDescription:
      "Connect Cerbo EHR to GoHighLevel for appointment sync, membership tracking and closed-loop reporting on your marketing.",
    lead: "Cerbo is common in direct primary care, functional and longevity medicine. We connect it to your CRM so marketing can see who booked, who showed and who became a member, without moving clinical data into marketing tools.",
    flows: [
      {
        title: "Booked and showed, automatically",
        body: "Appointments in Cerbo move the CRM record through the pipeline with no manual updates.",
      },
      {
        title: "Membership tracking",
        body: "Membership starts and renewals tagged in the CRM, so reporting reflects lifetime value.",
      },
      {
        title: "Offline conversions",
        body: "Showed and enrolled patients sent back to Google Ads as conversions, so bidding learns from real outcomes.",
      },
    ],
    syncs: ["Appointments and show status", "Membership start and renewal", "Offline conversions to Google Ads"],
    faqs: [
      {
        q: "What do you need from us to connect Cerbo?",
        a: "Admin access or an API key from your Cerbo account, and a short call to map your appointment types to pipeline stages.",
      },
    ],
  },
  {
    slug: "aesthetic-record",
    name: "Aesthetic Record",
    category: "Medspa EMR",
    published: false, // Flip to true once we've shipped a live integration.
    short: "Aesthetic Record appointments and treatment history connected to your CRM.",
    title: "Aesthetic Record, connected to [[your CRM]].",
    metaDescription: "Connect Aesthetic Record to GoHighLevel for appointment sync and rebooking.",
    lead: "Coming soon.",
    flows: [],
    syncs: [],
    faqs: [],
  },
];

export const liveIntegrations = integrations.filter((i) => i.published);
