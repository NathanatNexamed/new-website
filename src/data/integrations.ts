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
    syncs: ["Leads from Google, Meta and your website", "Supported appointment events and booking status", "Offline conversion signals where appropriate and technically possible", "Reviews requests after visits"],
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
    short: "Explore Zenoti booking and CRM connections based on available access and data.",
    title: "Make Zenoti and your CRM [[work together where they can]].",
    metaDescription:
      "Connect Zenoti to GoHighLevel so appointments, show status and sales flow into your CRM, automations and Google Ads conversions.",
    lead: "Zenoti may hold the appointment details while your marketing conversations live in GoHighLevel. We map what information your account can share, what can be automated and where a staff handoff is more dependable. We confirm access before quoting a build.",
    flows: [
      {
        title: "Bookings into the pipeline",
        body: "Where an authorized interface exposes booking events, update the corresponding CRM record and keep duplicates under control.",
      },
      {
        title: "Show status and sales",
        body: "If completion and service details are available for permitted marketing use, map them to rebooking logic; otherwise establish a practical staff workflow.",
      },
      {
        title: "Closed-loop reporting",
        body: "Evaluate whether permissible booking events can be matched to campaign attribution without exposing patient clinical data to advertising platforms.",
      },
      {
        title: "Contact matching and quality checks",
        body: "Check how Zenoti and GoHighLevel identify the same person, handle duplicate records and react to a rescheduled or cancelled visit before putting the workflow live.",
      },
    ],
    syncs: ["Booking changes, when the authorized integration exposes them", "Attendance status when available and appropriate to sync", "Service-specific rebooking signals when available and approved"],
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
    short: "OptiMantra CRM workflows using supported event fields and webhook data.",
    title: "Connect OptiMantra events to [[a useful CRM workflow]].",
    metaDescription:
      "Connect OptiMantra and Providi platforms to GoHighLevel for appointment sync, patient status and closed-loop marketing reporting.",
    lead: "We've worked with OptiMantra appointment webhooks and GoHighLevel workflows. That doesn't imply unrestricted access to OptiMantra records: the available fields and event types determine what can trigger a CRM update.",
    flows: [
      {
        title: "Appointment sync",
        body: "Map supported appointment events to the correct CRM contact, including booked and cancelled status where those events are available.",
      },
      {
        title: "Status without PHI",
        body: "Use the minimum permitted identifiers and status fields. Don't treat an appointment webhook as access to the patient's full record.",
      },
      {
        title: "Program and membership tracking",
        body: "Only track program or membership status if your OptiMantra configuration explicitly makes that information available for permitted use.",
      },
      {
        title: "Webhook testing and appointment times",
        body: "Validate the actual event payload, contact IDs and timezone conversions before reminders go live. A technically successful webhook is no help if a patient gets the wrong appointment time.",
      },
    ],
    syncs: ["Appointments and show status", "Contact identifiers when available", "Other event fields only after technical and privacy review"],
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
    short: "Cerbo automation and CRM handoffs designed around its available API.",
    title: "Use Cerbo to improve [[the handoff after an inquiry]].",
    metaDescription:
      "Connect Cerbo EHR to GoHighLevel for appointment sync, membership tracking and closed-loop reporting on your marketing.",
    lead: "Cerbo gives practices a more extensive integration surface than many EMRs, but the right build depends on the workflow. For example, an appointment may be booked while intake or lab results are still pending. We map the specific events and staff responsibilities before automating messages.",
    flows: [
      {
        title: "Booked and showed, automatically",
        body: "Where authorized API events and matching IDs support it, use Cerbo appointment changes to update the correct CRM stage.",
      },
      {
        title: "Membership tracking",
        body: "Review membership and renewal availability before using those events in CRM reporting; the clinical record stays in Cerbo.",
      },
      {
        title: "Offline conversions",
        body: "Consider offline conversions only for permitted, measurable events when consent, privacy requirements and technical matching allow.",
      },
      {
        title: "Intake and lab-status handoffs",
        body: "Map which permitted status updates can indicate that intake is complete or scheduling is ready, and which staff member owns the next step. Clinical results stay inside the appropriate system.",
      },
    ],
    syncs: ["Appointments and show status", "Membership events when available and authorized", "Offline conversions to Google Ads"],
    faqs: [
      {
        q: "What do you need from us to connect Cerbo?",
        a: "We start with an approved integration method and a workflow-mapping call. Required permissions depend on the Cerbo features and events we're connecting.",
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
