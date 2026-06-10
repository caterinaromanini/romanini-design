"use client";

import { useFadeIn } from "../lib/utils";

export default function Testimonial() {
  const ref = useFadeIn();

  return (
    <section
      className="relative overflow-hidden py-32 px-10"
      style={{ background: "#2A2520" }}
    >
      {/* Decorative rings */}
      <div
        className="absolute rounded-full"
        style={{
          top: -60, right: -60,
          width: 300, height: 300,
          border: "1px solid rgba(200,184,154,0.1)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute"
        style={{
          bottom: -40, left: 80,
          width: 180, height: 180,
          border: "1px solid rgba(200,184,154,0.08)",
        }}
        aria-hidden="true"
      />

      {/* Quote */}
      <div
        ref={ref}
        className="fade-up max-w-[760px] mx-auto text-center"
      >
        <div
          className="font-serif select-none mb-8"
          style={{
            fontSize: 80,
            lineHeight: 0.7,
            color: "#C8B89A",
            opacity: 0.3,
          }}
          aria-hidden="true"
        >
          &ldquo;
        </div>

        <blockquote
          className="font-serif font-light italic mb-10"
          style={{
            fontSize: "clamp(22px, 3vw, 34px)",
            lineHeight: 1.5,
            color: "#FAF8F4",
            letterSpacing: "0.03em",
          }}
        >
          Caterina understood our vision before we could articulate it
          ourselves. The result is a home that feels timeless, warm, and
          completely ours.
        </blockquote>

        <cite
          className="font-sans font-normal uppercase not-italic"
          style={{ fontSize: 10, letterSpacing: "0.3em", color: "#9A8E7E" }}
        >
          Phillipe &amp; Claire M. — Casa 17, Tulum
        </cite>

        {/* Dot indicator */}
        <div className="flex justify-center gap-2 mt-12">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: i === 1 ? 24 : 6,
                height: 6,
                background: i === 1 ? "#C8B89A" : "rgba(200,184,154,0.3)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
