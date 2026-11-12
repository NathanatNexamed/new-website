// Site motion: GSAP + ScrollTrigger + SplitText on server-rendered HTML.
// Runs only when <html> has .motion (set in <head> unless the visitor prefers reduced motion).
// CSS pre-hides animated elements under .motion:not(.motion-run) with a failsafe; this script
// sets inline start states, adds .motion-run (which drops the CSS pre-hide) and animates.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const root = document.documentElement;
const EASE = "power3.out";

// Keep in sync with the pre-hide selectors in global.css
const HEADLINE = "main h1, main .section h2, main .section-head h2, .cta-band h2";
const SKIP_HEADLINE = ".card, .faq, details, .prose, .strip, .fq, .dp-card, .proof, .post-cta";
const ITEMS = [
  "[data-reveal]",
  "main .grid > *",
  "main .bento > *",
  "main .steps > li",
  "main .timeline > li",
  "main .svc-list > li",
  "main .glist > li",
  "main .feature-rows > li",
  "main .cadence > div",
  "main .split > ul.checks > li",
  "main .data-panel",
  "main .proof",
  "main .strip",
  "main .faq",
  "main .ba > *",
  "main .ba-result",
].join(",");

function inView(el: Element) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}

function headlines() {
  const els = gsap.utils.toArray<HTMLElement>(HEADLINE).filter((el) => !el.closest(SKIP_HEADLINE));
  els.forEach((el) => {
    // Keep punctuation that follows a highlighted phrase on the same line as it.
    el.querySelectorAll("mark").forEach((m) => {
      const next = m.nextSibling;
      const hit = next?.nodeType === Node.TEXT_NODE ? next.textContent?.match(/^[.,;:!?’'”)]+/) : null;
      if (!hit || !next) return;
      const wrap = document.createElement("span");
      wrap.className = "nw";
      m.before(wrap);
      wrap.append(m, document.createTextNode(hit[0]));
      next.textContent = next.textContent!.slice(hit[0].length);
    });
    const split = SplitText.create(el, { type: "words", mask: "words", wordsClass: "sw" });
    const marks = el.querySelectorAll("mark");
    gsap.set(split.words, { yPercent: 105 });
    gsap.set(marks, { "--hl-size": "0%" });
    const isH1 = el.tagName === "H1";
    const tl = gsap.timeline({ paused: true });
    tl.to(split.words, { yPercent: 0, duration: isH1 ? 0.9 : 0.75, ease: "power4.out", stagger: isH1 ? 0.045 : 0.035 });
    if (marks.length) tl.to(marks, { "--hl-size": "100%", duration: 0.6, ease: "power2.inOut" }, "-=0.35");
    if (isH1 && inView(el)) {
      tl.delay(0.1).play();
    } else {
      ScrollTrigger.create({ trigger: el, start: "top 88%", once: true, onEnter: () => tl.play() });
    }
  });

  // Hero supporting copy follows the headline
  const heroBits = gsap.utils.toArray<HTMLElement>(
    ".home-hero .lead, .home-hero .btn-row, .hero .lead, .hero .btn-row, .hero-art, .cs-hero .lead, .cs-hero .tags, .post-head .lead, .post-head .byline, .g-hero .tags",
  ).filter(inView);
  gsap.fromTo(heroBits, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: EASE, stagger: 0.08, delay: 0.45 });
}

function items() {
  const els = gsap.utils.toArray<HTMLElement>(ITEMS);
  gsap.set(els, { opacity: 0, y: 26 });
  ScrollTrigger.batch(els, {
    start: "top 92%",
    once: true,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.7, ease: EASE, stagger: 0.08, overwrite: true }),
  });
}

function heroIllustration() {
  const svg = document.querySelector<SVGSVGElement>('[data-illo="owner-leads"] svg');
  if (!svg) return;
  const q = gsap.utils.selector(svg);
  const rows = q(".a-row");
  const check = q(".a-check");
  const link = q(".a-link path");
  gsap.set(rows, { opacity: 0, x: -14 });
  gsap.set(check, { scale: 0, transformOrigin: "50% 50%" });
  const tl = gsap.timeline({ delay: 0.7 });
  tl.fromTo(q(".a-card"), { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: EASE })
    .to(rows, { opacity: 1, x: 0, duration: 0.55, ease: EASE, stagger: 0.45 }, "-=0.2")
    .to(check, { scale: 1, duration: 0.5, ease: "back.out(2.4)" }, "-=0.15");

  gsap.to(q(".a-card"), { y: -7, duration: 3.2, ease: "sine.inOut", yoyo: true, repeat: -1, delay: 2.6 });
  gsap.to(q(".a-cloud"), { x: 16, duration: 9, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(q(".a-cloud2"), { x: -12, duration: 11, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(q(".a-plus"), { y: -8, rotation: 8, transformOrigin: "50% 50%", duration: 3.6, ease: "sine.inOut", yoyo: true, repeat: -1 });
  gsap.to(q(".a-spark"), { opacity: 0.25, duration: 1.4, ease: "sine.inOut", yoyo: true, repeat: -1, stagger: { each: 0.35, from: "random" } });
  gsap.to(link, { strokeDashoffset: -44, duration: 2.2, ease: "none", repeat: -1 });
}

function pathIllustration() {
  document.querySelectorAll<SVGSVGElement>('[data-illo="patient-path"] svg').forEach((svg) => {
    const q = gsap.utils.selector(svg);
    const stops = q(".a-stop");
    gsap.set(stops, { opacity: 0, y: -18 });
    const tl = gsap.timeline({ paused: true });
    tl.to(stops, { opacity: 1, y: 0, duration: 0.6, ease: "back.out(1.8)", stagger: 0.28 });
    ScrollTrigger.create({ trigger: svg, start: "top 80%", once: true, onEnter: () => tl.play() });
    gsap.to(q(".a-road"), { strokeDashoffset: -48, duration: 2.4, ease: "none", repeat: -1 });
    gsap.to(q(".a-ring"), { strokeDashoffset: -36, duration: 3, ease: "none", repeat: -1 });
    gsap.to(q(".a-cloud"), { x: 14, duration: 10, ease: "sine.inOut", yoyo: true, repeat: -1 });
    gsap.to(q(".a-plus"), { y: -8, rotation: -8, transformOrigin: "50% 50%", duration: 3.8, ease: "sine.inOut", yoyo: true, repeat: -1 });
  });
}

function reportCharts() {
  document.querySelectorAll<SVGSVGElement>(".rp-chart svg").forEach((svg) => {
    const lines = svg.querySelectorAll<SVGPathElement>(".rp-line");
    const areas = svg.querySelectorAll(".rp-area");
    const dots = svg.querySelectorAll(".rp-dot");
    lines.forEach((l) => {
      const len = l.getTotalLength();
      gsap.set(l, { strokeDasharray: len, strokeDashoffset: len });
    });
    gsap.set(areas, { opacity: 0 });
    gsap.set(dots, { scale: 0, transformOrigin: "50% 50%" });
    const tl = gsap.timeline({ paused: true });
    tl.to(lines, { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut", stagger: 0.15 })
      .to(areas, { opacity: 1, duration: 0.8, ease: "power1.out" }, "-=0.9")
      .to(dots, { scale: 1, duration: 0.35, ease: "back.out(2)", stagger: 0.03 }, "-=0.7");
    ScrollTrigger.create({ trigger: svg, start: "top 85%", once: true, onEnter: () => tl.play() });
  });
}

function accents() {
  gsap.utils.toArray<HTMLElement>(".medplus").forEach((el, i) => {
    gsap.to(el, { y: -10, rotation: i % 2 ? -6 : 6, duration: 3.4 + i * 0.3, ease: "sine.inOut", yoyo: true, repeat: -1 });
  });
  // Section illustrations drift slightly with scroll
  gsap.utils.toArray<HTMLElement>("main .split img.illo, main .hero-art img").forEach((img) => {
    gsap.fromTo(img, { y: 24 }, { y: -24, ease: "none", scrollTrigger: { trigger: img, start: "top bottom", end: "bottom top", scrub: true } });
  });
}

async function init() {
  if (!root.classList.contains("motion")) return;
  try {
    await Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 900))]);
    headlines();
    items();
    heroIllustration();
    pathIllustration();
    reportCharts();
    accents();
  } finally {
    root.classList.add("motion-run");
    ScrollTrigger.refresh();
  }
}

init();
