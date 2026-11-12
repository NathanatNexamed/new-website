import ScrollReveal from "../react-bits/ScrollReveal";

// Founder quote: words sharpen and brighten as it scrolls into view (react-bits ScrollReveal).
export default function FounderQuote({ text, markWords }: { text: string; markWords: [number, number] }) {
  return (
    <ScrollReveal
      as="p"
      markWords={markWords}
      baseOpacity={0.12}
      enableBlur
      blurStrength={6}
      baseRotation={0}
      stagger={0.04}
      containerClassName="fq"
      textClassName="fq-text"
    >
      {text}
    </ScrollReveal>
  );
}
