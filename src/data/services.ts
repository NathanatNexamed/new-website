import type { IlloName } from "../lib/illustrations";

export type Block = { title: string; body: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string; // [[phrase]] marks the highlighter
  metaDescription: string;
  lead: string;
  illo: IlloName;
  problemTitle: string;
  problem: string[];
  work: Block[];
  measureTitle: string;
  measure: string[];
  notFit: string[];
  faqs: { q: string; a: string }[];
  related: string[];
  parent?: string;
  crossLinks?: { label: string; href: string; body: string }[];
};

export const services: Service[] = [
  {
    slug: "google-ads",
    name: "Google Ads",
    short: "Search campaigns built around high-intent treatments, with conversions tied to booked and closed patients.",
    title: "Google Ads built for [[real patient intent]].",
    metaDescription:
      "Google Ads for medspas and cash-pay clinics. Clean conversion tracking, offline conversions from your CRM, and campaigns built around the treatments you want to sell.",
    lead: "A clinic can have a great-looking Google Ads dashboard and still have an empty appointment book. We look at what the account counts as a conversion, which searches drive useful inquiries, and how those inquiries turn into visits. Then we fix the weakest part first.",
    illo: "connected-stack",
    problemTitle: "What we usually find in the audit",
    problem: [
      "Page views, form submissions and phone clicks all counted as primary conversions. Multiple actions from one visitor can inflate the reported conversion rate, sometimes past 100%.",
      "Performance Max consuming budget before the account has a reliable way to judge lead quality or appointment outcomes.",
      "Ads pointed at the homepage, three or four clicks away from a booking.",
      "Broad searches bringing in information seekers or unrelated treatment inquiries that front-desk staff can't convert.",
    ],
    work: [
      {
        title: "Tracking before spend",
        body: "Agree on meaningful conversion actions, usually qualified calls and real consult inquiries. Check duplicate counting, use appropriate click identifiers where available, and keep softer actions out of bidding goals.",
      },
      {
        title: "Offline conversions from your CRM",
        body: "Where consent, platform policy and the available CRM data permit, we configure offline conversion imports for meaningful downstream events. Not every EMR exposes the same fields, and we verify the connection before promising it.",
      },
      {
        title: "Campaigns split by treatment and location",
        body: "Organize campaigns around the services and locations the practice wants to grow. Match each important search intent with a useful treatment page; decide on broad match or Performance Max only after seeing the data.",
      },
      {
        title: "Policy-aware builds",
        body: "Prescription treatments, weight loss and sexual wellness can face special advertiser requirements. We check current platform rules, licensing and whether certification applies before making launch promises.",
      },
    ],
    measureTitle: "What the monthly report shows",
    measure: [
      "Cost per booked consult, by campaign and treatment",
      "Lead-to-consult and consult-to-patient rates",
      "Search terms that produced patients, and the ones we cut",
      "What we changed this month and why",
    ],
    notFit: [
      "You want leads at any cost and will judge us on cost per form fill.",
      "Nobody at the practice can answer the phone or text a lead back within the hour.",
      "You need us to run ads for a treatment Google won't allow, without certification.",
    ],
    faqs: [
      {
        q: "Do you need access to our CRM?",
        a: "Yes. Without booked and closed data we can only optimize toward leads, which is the problem we're usually brought in to fix. Read access to the pipeline stages is enough to start.",
      },
      {
        q: "What's a sensible starting budget?",
        a: "It depends on the market and the treatment, but the account needs enough volume to produce conversion data every week. We'll give you a number on the call based on search volume in your area, not a generic minimum.",
      },
      {
        q: "Do you run Performance Max?",
        a: "Sometimes. Once offline conversions are flowing and there's enough volume, PMax can work well. We don't start there, and we don't run it without brand exclusions and placement reporting.",
      },
    ],
    related: ["crm-automations", "legitscript-certification", "meta-ads"],
    crossLinks: [
      {
        label: "LegitScript certification",
        href: "/services/legitscript-certification/",
        body: "Advertising hormones, GLP-1s, peptides or sexual wellness on Google usually requires LegitScript certification first. We handle the application alongside the account build.",
      },
    ],
  },
  {
    slug: "meta-ads",
    name: "Meta Ads",
    short: "Creative-tested campaigns for injectables, weight loss and memberships, with question-first lead follow-up.",
    title: "Meta ads that give patients [[a reason to inquire]].",
    metaDescription:
      "Meta (Facebook and Instagram) ads for medspas and cash-pay clinics. New-patient offers, tested creative, and follow-up that gets leads replying.",
    lead: "A Meta ad can get hundreds of cheap leads without producing many appointments. We look at whether the offer makes sense, whether someone understands the service, and whether the first reply answers what they asked. Getting a message is only the first step.",
    illo: "text-booking",
    problemTitle: "Where Meta budgets leak",
    problem: [
      "A cheap cost per lead and a front desk that can't reach anyone. The leads were never qualified, or were never followed up.",
      "One creative running for months until frequency kills it.",
      "Pre-filled lead forms and prompts that bring in bots and accidental taps.",
      "Health-related data restrictions that most agencies haven't adjusted their tracking for.",
    ],
    work: [
      {
        title: "Offers built for a first visit",
        body: "Work backward from the procedure, margins, available provider time and likely repeat visits. A first-visit offer needs a credible reason to book without training patients to expect permanent discounts.",
      },
      {
        title: "Creative testing on a schedule",
        body: "Test different angles rather than recycling the same graphic. Provider explanations, practice footage and plain pricing context can outperform flashy creative. Clinical claims and images need policy review.",
      },
      {
        title: "Messaging ads and landing pages, tested head to head",
        body: "Choose between messaging, lead forms and landing pages based on service complexity and how the team handles inquiries. Test formats against appointment quality, not just cheap submissions.",
      },
      {
        title: "Question-first follow-up",
        body: "Write first replies around the service and likely patient question. Simple offers may need a short question; complex services need an explanation first. Replies should reach someone who can help.",
      },
    ],
    measureTitle: "What we track",
    measure: [
      "Reply rate on first follow-up, not just cost per lead",
      "Cost per booked consult by offer and creative",
      "Creative fatigue: frequency and CTR by ad over time",
      "Show rate for Meta-sourced consults",
    ],
    notFit: [
      "You want to run a permanent discount across your full menu.",
      "You can't provide any provider photos, video or before-and-afters.",
      "Leads will sit in an inbox for a day before anyone sees them.",
    ],
    faqs: [
      {
        q: "Does Meta still work for health businesses after the data restrictions?",
        a: "Yes, but you can't rely on optimizing toward lower-funnel events the way you could a few years ago. The offer, the creative and the follow-up carry more of the weight, and we set tracking up accordingly.",
      },
      {
        q: "Who makes the creative?",
        a: "We script, edit and design. You or your providers appear in it. We'll send a short shot list so filming takes an hour, not a day.",
      },
    ],
    related: ["crm-automations", "google-ads", "seo"],
  },
  {
    slug: "seo",
    name: "SEO",
    short: "Treatment and location pages that rank in Google for the services you most want to sell.",
    title: "Show up for the [[services patients actually search]].",
    metaDescription:
      "SEO for medspas and cash-pay clinics. Treatment pages, local search, and technical fixes focused on the services with the best margins.",
    lead: "A practice can rank for its name and still be invisible when someone searches for a specific treatment nearby. We choose priority services using demand, margins, current patient interest and geography, then build pages that answer real questions.",
    illo: "reporting-screen",
    problemTitle: "Why most practice sites don't rank",
    problem: [
      "A general services page, but very little useful detail about individual treatments or locations.",
      "Copy full of benefits and buzzwords that never explains what the appointment is like or who offers it.",
      "A Google Business Profile that hasn't been touched since it was claimed.",
      "Slow, template-heavy sites with no structured data.",
    ],
    work: [
      {
        title: "Treatment pages that match real search demand",
        body: "Prioritize treatment pages based on business value and demand. Explain appointments, realistic pricing context and relevant clinical details reviewed by the provider. Give each location genuinely distinct information.",
      },
      {
        title: "Local search and Google Business Profile",
        body: "Categories, services, photos, review responses and posts, kept current. Reviews are the biggest local lever most practices underuse.",
      },
      {
        title: "Technical cleanup",
        body: "Speed, indexation, internal linking, and schema for medical business, services, FAQs and reviews.",
      },
      {
        title: "Content worth referring to",
        body: "Build useful content, original practice insights and appropriate third-party mentions rather than publishing dozens of interchangeable articles. Relevant links and reputation work support the core treatment pages.",
      },
    ],
    measureTitle: "What we report on",
    measure: [
      "Rankings for your priority treatments, in your service area",
      "Organic calls and consult requests, tracked to the page",
      "Google Business Profile actions: calls, directions, website clicks",
      "Pages shipped and what's next",
    ],
    notFit: [
      "You need booked consults next month. SEO compounds; it isn't fast.",
      "You want 30 blog posts a month regardless of quality.",
    ],
    faqs: [
      {
        q: "How long before SEO shows results?",
        a: "It depends on competition, your existing site and the work required. Technical fixes may show effects sooner, while competitive treatment searches can take months. We establish a baseline instead of promising a fixed timeline.",
      },
      {
        q: "Do you write the content?",
        a: "Yes, and a provider reviews anything clinical before it goes live. We'll need about 30 minutes per treatment with someone who performs it.",
      },
    ],
    related: ["aeo", "google-ads", "crm-automations"],
  },
  {
    slug: "aeo",
    name: "AEO",
    parent: "seo",
    short: "Get your practice cited when patients ask ChatGPT, Perplexity or Google's AI answers about a treatment.",
    title: "Give AI search [[a reliable source to reference]].",
    metaDescription:
      "Answer engine optimization (AEO) for medical practices. Structure your treatment content so ChatGPT, Perplexity and Google AI Overviews cite and recommend you.",
    lead: "AI search does not have a magic ranking switch. Clear treatment answers, consistent clinic information, credible third-party references and solid SEO give assistants useful source material. None of that guarantees a mention.",
    illo: "reporting-screen",
    problemTitle: "Why practices get left out of AI answers",
    problem: [
      "Treatment pages that never directly answer the question: cost, candidacy, downtime, who performs it.",
      "Inconsistent name, address, provider and service details across directories.",
      "No structured data, so models have to guess what the page is about.",
      "No third-party mentions: reviews, local press, professional listings.",
    ],
    work: [
      {
        title: "Answer-first treatment content",
        body: "Each page leads with a short, factual answer to the main question, then the detail. Clear headings, real numbers where you're comfortable sharing them.",
      },
      {
        title: "Entity consistency",
        body: "The same practice, providers, credentials and services everywhere models look: your site, Google Business Profile, directories and professional listings.",
      },
      {
        title: "Schema and citations",
        body: "Use structured data when it accurately reflects visible content, then build relevant references such as professional profiles and local coverage.",
      },
      {
        title: "Monitoring",
        body: "We track a fixed set of treatment questions across major assistants each month and report whether you're cited, recommended or missing.",
      },
    ],
    measureTitle: "What we track",
    measure: [
      "Citation and mention rate across a fixed question set",
      "Referral traffic from AI assistants",
      "Coverage of priority questions on your treatment pages",
    ],
    notFit: ["Your site doesn't have basic treatment pages yet. We'd start with SEO."],
    faqs: [
      {
        q: "Is AEO separate from SEO?",
        a: "We price it as an add-on to SEO because most of the foundation is shared. It's rarely worth doing on its own.",
      },
      {
        q: "Can you guarantee ChatGPT will recommend us?",
        a: "No, and be wary of anyone who says they can. We can make your practice the clearest, most consistent, best-cited source in your market, which is what these systems reward.",
      },
    ],
    related: ["seo", "google-ads"],
  },
  {
    slug: "crm-automations",
    name: "CRM & Automations",
    short: "GoHighLevel builds connected to Zenoti, OptiMantra and Cerbo for speed to lead, rebooking and reactivation.",
    title: "Your CRM should help the team [[book the next appointment]].",
    metaDescription:
      "GoHighLevel CRM and automations for medspas and clinics. Speed to lead, rebooking, reactivation, and integrations with Zenoti, OptiMantra and Cerbo.",
    lead: "A clinic can have dozens of inquiries in GoHighLevel and still be unable to answer who contacted them, what they asked and whether they booked. We build workflows that help the front desk and reflect what is actually happening.",
    illo: "front-desk",
    problemTitle: "What breaks between the ad and the appointment",
    problem: [
      "Leads land in three inboxes and nobody owns them.",
      "First response measured in hours. By then they've booked somewhere else.",
      "No pipeline stages, so nobody can say how many leads became patients.",
      "Past patients never hear from you again unless they reach out.",
    ],
    work: [
      {
        title: "Speed to lead",
        body: "Use an immediate relevant acknowledgment when appropriate, assign a real owner and add reminders when a lead needs attention. The message should help, not just repeat a booking link.",
      },
      {
        title: "A pipeline that reflects reality",
        body: "Build stages around the clinic's real process: inquiry, conversation, consult, attendance and verified outcomes. Automate only changes the systems can reliably support.",
      },
      {
        title: "Rebooking and reactivation",
        body: "Rebooking should fit the treatment, clinical guidance and patient preferences. Avoid generic reminders that ignore consent or timing.",
      },
      {
        title: "Integrations with your EMR and booking",
        body: "Assess which booking and patient-status fields each platform actually exposes. Use supported APIs, webhooks or staff handoffs where appropriate while keeping clinical information in the EMR.",
      },
    ],
    measureTitle: "What we track",
    measure: [
      "Median time to first response",
      "Lead-to-consult and consult show rates",
      "Rebook rate by treatment",
      "Revenue from reactivation campaigns",
    ],
    notFit: [
      "You want automations to replace the front desk entirely. They make your team faster; they don't replace it.",
      "Nobody at the practice will use the CRM day to day.",
    ],
    faqs: [
      {
        q: "Do we have to use GoHighLevel?",
        a: "It's what we build on because it does speed to lead, pipelines, two-way texting and reporting in one place, and it integrates with most practice software. If you're on something else, we'll tell you honestly whether switching is worth it.",
      },
      {
        q: "Is texting patients HIPAA-safe?",
        a: "Marketing and scheduling messages can be set up appropriately, but clinical details should stay in your EMR. We build workflows that keep PHI out of marketing tools and recommend you confirm your BAA coverage with each vendor.",
      },
    ],
    related: ["google-ads", "meta-ads"],
  },
  {
    slug: "legitscript-certification",
    name: "LegitScript Certification",
    short: "Guidance for healthcare advertisers navigating certification and platform restrictions.",
    title: "Understand the rules before [[you launch ads]].",
    metaDescription:
      "LegitScript certification for clinics and telehealth providers advertising hormone therapy, GLP-1s, peptides and sexual wellness on Google and Meta.",
    lead: "Some prescription, telehealth and regulated healthcare advertising requires third-party certification or platform verification. Requirements vary by treatment, jurisdiction and platform. We review your specific category before recommending an application or campaign.",
    illo: "compliance-shield",
    problemTitle: "Why applications stall",
    problem: [
      "Website claims that don't match what the practice can legally offer.",
      "Missing or inconsistent licensing for providers and pharmacies across states.",
      "Telehealth flows that don't make the prescriber relationship clear.",
      "Ads launched before certification, triggering disapprovals and account flags.",
    ],
    work: [
      {
        title: "Pre-application review",
        body: "We review your site, offers, licenses and pharmacy relationships against LegitScript's standards and fix issues before you apply.",
      },
      {
        title: "Application support",
        body: "We prepare the documentation, submit with you, and handle the back-and-forth with reviewers.",
      },
      {
        title: "Policy-safe ad build",
        body: "Where certification applies and is granted, we write ads and pages against current category rules. Approval remains the platform's decision and policies can change.",
      },
    ],
    measureTitle: "What you get",
    measure: [
      "A clear list of issues to fix before applying",
      "A submitted application and someone managing it",
      "Campaigns reviewed against current ad policy",
    ],
    notFit: [
      "You're selling compounded products or claims that won't pass review. We'll tell you up front.",
    ],
    faqs: [
      {
        q: "How long does certification take?",
        a: "It varies with the category and how ready your site and licensing are. Plan for several weeks at minimum. The pre-application cleanup is where most of the time is saved.",
      },
      {
        q: "Do I need it for Meta too?",
        a: "Requirements differ by advertiser and treatment. We verify the platform's current rules; Google and Meta do not use identical certification paths.",
      },
      {
        q: "Can you guarantee approval?",
        a: "No. LegitScript makes the decision. We can make sure you go in prepared and tell you honestly if we don't think you'll pass.",
      },
    ],
    related: ["google-ads", "meta-ads"],
  },
];

export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
