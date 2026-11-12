import { useEffect, useState } from "react";
import CountUp from "../react-bits/CountUp";

// Renders a stat like "56%", "$1M+", "12–15%" or "890".
// Server HTML contains the real value (SEO, no-JS, screen readers); once hydrated
// (just before it scrolls into view) the digits count up with react-bits CountUp.
const PATTERN = /^(\D*?)(\d+(?:\.\d+)?)(?:\s*([–-])\s*(\d+(?:\.\d+)?))?(\D*)$/;

export default function StatNumber({ value, duration = 1.6 }: { value: string; duration?: number }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (!reduce) setAnimate(true);
  }, []);

  const m = value.match(PATTERN);
  if (!m || !animate) return <span>{value}</span>;
  const [, prefix, a, dash, b, suffix] = m;
  const dec = (n: string) => (n.includes(".") ? n.split(".")[1].length : 0);
  return (
    <span aria-label={value} role="text">
      <span aria-hidden="true">
        {b ? (
          <>
            <CountUp to={Number(a)} prefix={prefix} duration={duration} decimals={dec(a)} easing="expo" />
            {dash}
            <CountUp to={Number(b)} suffix={suffix} duration={duration} decimals={dec(b)} easing="expo" delay={0.08} />
          </>
        ) : (
          <CountUp to={Number(a)} prefix={prefix} suffix={suffix} duration={duration} decimals={dec(a)} easing="expo" />
        )}
      </span>
    </span>
  );
}
