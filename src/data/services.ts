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
    title: "Google Ads that optimize for [[patients]], not form fills.",
    metaDescription:
      "Google Ads for medspas and cash-pay clinics. Clean conversion tracking, offline conversions from your CRM, and campaigns built around the treatments you want to sell.",
    lead: "Most accounts we audit are bidding toward the wrong signal. We rebuild tracking first, send booked and closed patients back to Google, and let the bidding learn from people who actually show up.",
    illo: "connected-stack",
    problemTitle: "What we usually find in the audit",
    problem: [
      "Every conversion action set to primary, so the reported conversion rate is meaningless. We've seen accounts reporting over 100%.",
      "Performance Max spending a real share of budget with no way to see which queries or placements produced a patient.",
      "Ads pointed at the homepage, three or four clicks away from a booking.",
      "Broad match keywords overlapping across campaigns and bidding against each other.",
    ],
    work: [
      {
        title: "Tracking before spend",
        body: "One or two primary conversion actions that mean something: a qualified call or a submitted consult request. Everything else is secondary. GCLID captured on every form so a booked patient can be matched back to the click.",
      },
      {
        title: "Offline conversions from your CRM",
        body: "Booked and closed stages in GoHighLevel (or your EMR) get imported back into Google Ads, with values where you have them. That is what lets Target CPA and Target ROAS bid on patients instead of leads.",
      },
      {
        title: "Campaigns split by treatment and location",
        body: "Tight ad groups by theme, search-first, with a dedicated landing page per service line. Performance Max only where there's enough conversion data for it to learn on, and never as a black box.",
      },
      {
        title: "Policy-aware builds",
        body: "Hormone therapy, GLP-1s and sexual wellness are restricted categories. We plan the account around what Google will actually approve, and get you LegitScript-certified when you need it.",
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
    title: "Meta leads that [[start a conversation]].",
    metaDescription:
      "Meta (Facebook and Instagram) ads for medspas and cash-pay clinics. New-patient offers, tested creative, and follow-up that gets leads replying.",
    lead: "Meta is a demand-creation channel. The offer and the first message matter more than the targeting. We build new-patient offers worth answering, test creative weekly, and make sure every lead gets a human-sounding text within minutes.",
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
        body: "A specific, honest new-patient offer for one treatment, priced so the second visit is where the practice makes its money. Not a discount on everything.",
      },
      {
        title: "Creative testing on a schedule",
        body: "New concepts every two weeks, tested against the current winner. Provider-led video, before-and-after where policy allows, and plain static that explains the offer.",
      },
      {
        title: "Messaging ads and landing pages, tested head to head",
        body: "Some markets reply better in Messenger or Instagram DMs, some convert better on a page. We test both and keep the one that books.",
      },
      {
        title: "Question-first follow-up",
        body: "The first text asks something the lead can answer in one word. It sounds like your front desk, not a bot. Replies route to a person.",
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
    title: "Rank for the [[treatments you want to sell]].",
    metaDescription:
      "SEO for medspas and cash-pay clinics. Treatment pages, local search, and technical fixes focused on the services with the best margins.",
    lead: "SEO for a practice is mostly local, and mostly about having a genuinely useful page for each treatment you offer. We start with the services that have the margin and the search demand, then build outward.",
    illo: "reporting-screen",
    problemTitle: "Why most practice sites don't rank",
    problem: [
      "One 'Services' page that lists everything, so nothing ranks for anything.",
      "Copy written to sound nice, with no answers to the questions patients actually search.",
      "A Google Business Profile that hasn't been touched since it was claimed.",
      "Slow, template-heavy sites with no structured data.",
    ],
    work: [
      {
        title: "A page per treatment, per location",
        body: "Each core treatment gets its own page with pricing context, candidacy, recovery, provider credentials and real FAQs. Multi-location practices get location pages that aren't copies of each other.",
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
        title: "Content that earns links",
        body: "A small number of pieces a local journalist or another provider would actually reference, instead of weekly filler posts.",
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
        a: "Expect early movement on lower-competition treatment pages in two to three months and meaningful lead volume in six to twelve, depending on your market and starting point.",
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
    title: "Be the practice [[AI answers cite]].",
    metaDescription:
      "Answer engine optimization (AEO) for medical practices. Structure your treatment content so ChatGPT, Perplexity and Google AI Overviews cite and recommend you.",
    lead: "Patients increasingly ask an assistant before they search. Answer engines pull from pages that state facts clearly, are consistent across the web, and come from a source they can verify. AEO is an extension of good SEO, not a replacement.",
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
        body: "Medical business, physician, service and FAQ schema, plus the third-party mentions that give a model a reason to trust you.",
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
    title: "Leads aren't the goal. [[Booked patients]] are.",
    metaDescription:
      "GoHighLevel CRM and automations for medspas and clinics. Speed to lead, rebooking, reactivation, and integrations with Zenoti, OptiMantra and Cerbo.",
    lead: "Most practices don't have a lead problem. They have a follow-up problem. We build the CRM and automations that answer every lead in minutes, keep the pipeline honest, and bring past patients back on schedule.",
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
        body: "Instant text and email on every new lead, a call task for the front desk, and escalation if nobody touches it in 15 minutes. Written in your voice.",
      },
      {
        title: "A pipeline that reflects reality",
        body: "New, contacted, consult booked, showed, closed. Stages your front desk can actually keep current, and that feed reporting and Google Ads.",
      },
      {
        title: "Rebooking and reactivation",
        body: "Treatment-specific rebook reminders on the right interval (tox, filler, IV, hormones) and campaigns for patients who haven't been in for six months or more.",
      },
      {
        title: "Integrations with your EMR and booking",
        body: "GoHighLevel connected to Zenoti, OptiMantra, Cerbo and others, so appointments and show status flow back into the CRM without double entry.",
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
    short: "Get certified so you can advertise restricted treatments like hormone therapy and GLP-1s.",
    title: "Marketing that [[gets approved]].",
    metaDescription:
      "LegitScript certification for clinics and telehealth providers advertising hormone therapy, GLP-1s, peptides and sexual wellness on Google and Meta.",
    lead: "Google and Meta require LegitScript certification for many healthcare categories: prescription drugs, telehealth, addiction treatment, and often hormone therapy, weight loss medication and sexual wellness. We prepare the application, fix what would get it rejected, and build the ad account to stay inside policy.",
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
        body: "Once certified, campaigns and landing pages are written to stay inside Google and Meta policy for your category.",
      },
    ],
    measureTitle: "What you get",
    measure: [
      "A clear list of issues to fix before applying",
      "A submitted application and someone managing it",
      "Ad accounts set up to stay approved",
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
        a: "For many restricted categories, yes. Meta uses LegitScript certification for certain prescription drug and telehealth advertisers.",
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
