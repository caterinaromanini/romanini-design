"use client";

import { useState } from "react";
import { useFadeIn, scrollTo } from "../lib/utils";

const SERVICES = [
  {
    num: "01",
    title: "Full Interior Design",
    desc: "From concept to completion. We handle every detail — spatial planning, material selection, furniture curation, and on-site coordination — delivering a space that is wholly coherent and unmistakably yours.",
    tags: ["Residential", "Hospitality", "Penthouses"],
  },
  {
    num: "02",
    title: "Design Consultation",
    desc: "A focused, strategic session for clients who need expert guidance. We assess your space, align on vision, and leave you with a clear, actionable creative direction.",
    tags: ["1–2 Day Format", "Remote Available"],
  },
  {
    num: "03",
    title: "Turnkey Furnishing",
    desc: "For fully furnished properties — especially pre-delivery luxury condos. We source, procure, and install every piece, transforming a blank canvas into a market-ready, investment-grade interior.",
    tags: ["Real Estate", "Investment Properties"],
  },
  {
    num: "04",
    title: "Art & Object Curation",
    desc: "We source rare pieces — from Oaxacan artisans to international galleries — building a visual narrative that gives each room its own quiet identity.",
    tags: ["Bespoke", "Collectible"],
  },
  {
    num: "05",
    title: "Architectural Staging",
    desc: "Presentation-ready staging for luxury real estate listings. We maximize perceived value through considered arrangement, lighting, and atmosphere — designed to sell.",
    tags: ["Pre-Sale", "Photography Ready"],
  },
  {
    num: "06",
    title: "Brand Experience Design",
    desc: "For boutique hotels, beach clubs, and hospitality brands seeking spaces that are extensions of their identity — not just settings, but atmospheres guests remember.",
    tags: ["Hospitality", "Branding"],
  },
];

function ServiceCard({ svc, delay }) {
  const [hovered, setHovered] = useState(false);
  const ref = useFadeIn();

  return (
    <div
      ref={ref}
      className={`fade-up delay-${delay + 1} p-12`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#2A2520" : "#FAF8F4",
        transition: "background 0.4s ease",
        cursor: "default",
        paddingLeft: 40,
        paddingRight: 40,
      }}
    >
      <div
        className="font-serif font-light mb-5"
        style={{
          fontSize: 12,
          letterSpacing: "0.3em",
          color: hovered ? "#C8B89A" : "#9A8E7E",
          transition: "color 0.4s ease",
        }}
      >
        {svc.num}
      </div>

      <h3
        className="font-serif font-light mb-4"
        style={{
          fontSize: 24,
          letterSpacing: "0.04em",
          lineHeight: 1.2,
          color: hovered ? "#FAF8F4" : "#2A2520",
          transition: "color 0.4s ease",
        }}
      >
        {svc.title}
      </h3>

      <p
        className="font-sans font-light mb-6"
        style={{
          fontSize: 13,
          lineHeight: 1.85,
          letterSpacing: "0.03em",
          color: hovered ? "rgba(250,248,244,0.65)" : "#6B5F52",
          transition: "color 0.4s ease",
        }}
      >
        {svc.desc}
      </p>

      <div className="flex gap-2 flex-wrap">
        {svc.tags.map((tag) => (
          <span
            key={tag}
            className="font-sans font-normal uppercase"
            style={{
              fontSize: 9,
              letterSpacing: "0.2em",
              padding: "5px 12px",
              border: `1px solid ${hovered ? "rgba(200,184,154,0.4)" : "#D4C4A8"}`,
              color: hovered ? "#C8B89A" : "#9A8E7E",
              transition: "all 0.4s ease",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const r1 = useFadeIn();

  return (
    <section id="services" className="bg-cream py-32 px-10">
      <div className="max-w-content mx-auto">

        {/* Header */}
        <div
          ref={r1}
          className="fade-up flex justify-between items-end flex-wrap gap-6 mb-[72px]"
        >
          <div>
            <p
              className="font-sans font-normal uppercase mb-4"
              style={{ fontSize: 10, letterSpacing: "0.3em", color: "#9A8E7E" }}
            >
              <span className="line-accent" />
              What We Offer
            </p>
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(36px, 4vw, 54px)",
                color: "#2A2520",
                letterSpacing: "0.03em",
                lineHeight: 1.1,
              }}
            >
              Studio Services
            </h2>
          </div>
          <button
            className="btn-sand"
            onClick={() => scrollTo("contact")}
          >
            Request a Proposal
          </button>
        </div>

        {/* Cards grid — gap via 1px border color on wrapper */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "#D4C4A8",
            border: "1px solid #D4C4A8",
          }}
        >
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.num} svc={svc} delay={i % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
