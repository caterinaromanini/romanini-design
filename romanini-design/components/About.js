"use client";

import { useFadeIn, WarmPlaceholder } from "@/lib/utils";
import { scrollTo } from "@/lib/utils";

const STATS = [
  { n: "85+",  l: "Projects Completed" },
  { n: "12",   l: "Luxury Properties"  },
  { n: "100%", l: "Client Satisfaction"},
];

export default function About() {
  const r1 = useFadeIn();
  const r2 = useFadeIn();
  const r3 = useFadeIn();

  return (
    <section id="about" className="bg-offwhite py-32 px-10">
      <div className="max-w-content mx-auto">

        {/* Label */}
        <div ref={r1} className="fade-up mb-[72px]">
          <p
            className="font-sans font-normal uppercase"
            style={{ fontSize: 10, letterSpacing: "0.3em", color: "#9A8E7E" }}
          >
            <span className="line-accent" />
            About the Studio
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid items-start gap-20"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >
          {/* Image column */}
          <div ref={r2} className="fade-up delay-1">
            <div className="relative">
              <WarmPlaceholder ar="130%" tone="mid" />

              {/* Floating accent badge */}
              <div
                className="absolute flex flex-col items-center justify-center gap-1"
                style={{
                  bottom: -28,
                  right: -28,
                  width: 160,
                  height: 160,
                  background: "#E8DFD0",
                  border: "1px solid #D4C4A8",
                }}
              >
                <span
                  className="font-serif font-light"
                  style={{ fontSize: 42, color: "#2A2520" }}
                >
                  10+
                </span>
                <span
                  className="font-sans font-normal uppercase"
                  style={{ fontSize: 10, letterSpacing: "0.2em", color: "#9A8E7E" }}
                >
                  Years of craft
                </span>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div ref={r3} className="fade-up delay-2 pt-6">
            <h2
              className="font-serif font-light mb-8"
              style={{
                fontSize: "clamp(36px, 4vw, 56px)",
                lineHeight: 1.1,
                color: "#2A2520",
                letterSpacing: "0.03em",
              }}
            >
              Where Tulum&apos;s
              <br />
              <em style={{ fontStyle: "italic" }}>wild beauty</em>
              <br />
              meets intention.
            </h2>

            <p
              className="font-sans font-light mb-6"
              style={{ fontSize: 15, lineHeight: 1.9, color: "#6B5F52", letterSpacing: "0.03em" }}
            >
              Romanini Design is a boutique interior design studio rooted in
              Tulum, Quintana Roo. We specialize in crafting residential and
              hospitality spaces that honor their natural context — blending
              organic materials, considered light, and curated objects into
              environments that feel both alive and at rest.
            </p>

            <p
              className="font-sans font-light mb-10"
              style={{ fontSize: 15, lineHeight: 1.9, color: "#6B5F52", letterSpacing: "0.03em" }}
            >
              Led by Caterina Romanini, our studio operates at the intersection
              of luxury real estate and refined design — bringing a uniquely
              strategic and aesthetic sensibility to every project we undertake
              along the Riviera Maya.
            </p>

            {/* Stats */}
            <div
              className="grid mb-10 gap-6"
              style={{ gridTemplateColumns: "1fr 1fr 1fr" }}
            >
              {STATS.map((s) => (
                <div
                  key={s.n}
                  className="pt-4"
                  style={{ borderTop: "1px solid #D4C4A8" }}
                >
                  <div
                    className="font-serif font-light"
                    style={{ fontSize: 32, color: "#2A2520" }}
                  >
                    {s.n}
                  </div>
                  <div
                    className="font-sans font-normal uppercase mt-1"
                    style={{ fontSize: 10, letterSpacing: "0.16em", color: "#9A8E7E" }}
                  >
                    {s.l}
                  </div>
                </div>
              ))}
            </div>

            <button
              className="btn-primary"
              onClick={() => scrollTo("contact")}
            >
              Work With Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
