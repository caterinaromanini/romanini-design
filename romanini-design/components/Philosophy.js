"use client";

import { useFadeIn } from "../lib/utils";

const PILLARS = [
  {
    num: "01",
    label: "Tulum Roots",
    text: "Every project breathes the Yucatán — its textures, light, and soul.",
  },
  {
    num: "02",
    label: "Refined Restraint",
    text: "We believe elegance lives in what is left unsaid — and unplaced.",
  },
  {
    num: "03",
    label: "Enduring Beauty",
    text: "Interiors designed to age gracefully, not to follow a trend.",
  },
];

export default function Philosophy() {
  const ref = useFadeIn();

  return (
    <section className="bg-beige py-20 px-10">
      <div
        ref={ref}
        className="fade-up max-w-content mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1px 1fr 1px 1fr",
          alignItems: "center",
        }}
      >
        {PILLARS.map((item, i) => (
          <div key={item.num} className="contents">
            <div
              className={`fade-up delay-${i + 1} px-12 text-center`}
            >
              <div
                className="font-serif font-light mb-4"
                style={{ fontSize: 11, letterSpacing: "0.3em", color: "#9A8E7E" }}
              >
                {item.num}
              </div>
              <div
                className="font-serif font-light mb-3"
                style={{ fontSize: 22, letterSpacing: "0.06em", color: "#2A2520" }}
              >
                {item.label}
              </div>
              <div
                className="font-sans font-light"
                style={{
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: "#6B5F52",
                  letterSpacing: "0.03em",
                }}
              >
                {item.text}
              </div>
            </div>

            {/* Divider — only between items */}
            {i < 2 && (
              <div
                style={{
                  width: 1,
                  height: 80,
                  background: "#D4C4A8",
                  opacity: 0.5,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
