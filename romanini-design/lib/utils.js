"use client";

import { useRef, useEffect } from "react";

// ─── useFadeIn ─────────────────────────────────────────────────────────────
// Attaches an IntersectionObserver to the returned ref.
// Adds class "visible" when element enters the viewport.
// Combine with the .fade-up CSS class for the animation.
export function useFadeIn() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) el.classList.add("visible");
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── scrollTo helper ────────────────────────────────────────────────────────
export function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// ─── WarmPlaceholder ────────────────────────────────────────────────────────
// SVG texture placeholder used until real photography is swapped in.
// Replace <WarmPlaceholder> with Next.js <Image> when you have real photos.
const TONES = {
  light: ["#E8DFD0", "#D4C4A8", "#C8B89A"],
  dark:  ["#2A2520", "#3A302A", "#4A3C33"],
  mid:   ["#C8B89A", "#B8A890", "#A89880"],
  sand:  ["#D4C4A8", "#C8B89A", "#B8A890"],
};

export function WarmPlaceholder({ ar = "100%", tone = "light" }) {
  const [a, b, c] = TONES[tone] ?? TONES.light;
  return (
    <div style={{ paddingBottom: ar, position: "relative", overflow: "hidden" }}>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        viewBox="0 0 400 300"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect width="400" height="300" fill={a} />
        <rect width="400" height="300" fill={b} opacity="0.4" />
        <ellipse cx="120" cy="80"  rx="160" ry="120" fill={c} opacity="0.25" />
        <ellipse cx="300" cy="230" rx="180" ry="100" fill={b} opacity="0.3"  />
        <line x1="0"   y1="150" x2="400" y2="148" stroke="rgba(250,248,244,0.15)" strokeWidth="1" />
        <line x1="200" y1="0"   x2="198" y2="300" stroke="rgba(250,248,244,0.1)"  strokeWidth="1" />
      </svg>
    </div>
  );
}
