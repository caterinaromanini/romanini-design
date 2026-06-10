"use client";

import { useState } from "react";
import { useFadeIn, WarmPlaceholder } from "../lib/utils";

const FILTERS  = ["All", "Residential", "Hospitality", "Staging"];

const PROJECTS = [
  { title: "Casa Ceiba",   cat: "Residential",  loc: "Tulum Centro",     tone: "mid",   size: "large"  },
  { title: "Monarca Depa", cat: "Residential",  loc: "Aldea Zama",       tone: "sand",  size: "normal" },
  { title: "Kaan Tulum",   cat: "Hospitality",  loc: "Beach Zone",       tone: "dark",  size: "normal" },
  { title: "Villa Nuum",   cat: "Staging",      loc: "La Veleta",        tone: "light", size: "normal" },
  { title: "Casa Selva",   cat: "Residential",  loc: "Region 15",        tone: "mid",   size: "normal" },
  { title: "Sol Naciente", cat: "Hospitality",  loc: "Tankah Bay",       tone: "dark",  size: "large"  },
  { title: "Firefly 2B",   cat: "Staging",      loc: "Aldea Zama",       tone: "sand",  size: "normal" },
  { title: "Jade Suites",  cat: "Hospitality",  loc: "Tulum Hotel Zone", tone: "mid",   size: "normal" },
];

function PortfolioCard({ project, delay }) {
  const [hovered, setHovered] = useState(false);
  const ref = useFadeIn();
  const isLarge = project.size === "large";

  return (
    <div
      ref={ref}
      className={`fade-up delay-${(delay % 3) + 1} relative overflow-hidden cursor-pointer`}
      style={{ gridRow: isLarge ? "span 2" : "span 1" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <WarmPlaceholder ar={isLarge ? "140%" : "100%"} tone={project.tone} />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-7"
        style={{
          background: hovered ? "rgba(26,23,20,0.75)" : "rgba(26,23,20,0.08)",
          transition: "background 0.5s ease",
        }}
      >
        <div
          style={{
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            opacity: hovered ? 1 : 0,
            transition: "all 0.4s ease",
          }}
        >
          <span
            className="font-sans font-normal uppercase block mb-2"
            style={{ fontSize: 9, letterSpacing: "0.24em", color: "#C8B89A" }}
          >
            {project.cat} · {project.loc}
          </span>
          <span
            className="font-serif font-light block"
            style={{ fontSize: 22, letterSpacing: "0.04em", color: "#FAF8F4" }}
          >
            {project.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const r1 = useFadeIn();
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="bg-offwhite py-32 px-10">
      <div className="max-w-content mx-auto">

        {/* Header + filter tabs */}
        <div ref={r1} className="fade-up mb-14">
          <p
            className="font-sans font-normal uppercase mb-4"
            style={{ fontSize: 10, letterSpacing: "0.3em", color: "#9A8E7E" }}
          >
            <span className="line-accent" />
            Selected Work
          </p>

          <div className="flex justify-between items-end flex-wrap gap-6">
            <h2
              className="font-serif font-light"
              style={{
                fontSize: "clamp(36px, 4vw, 54px)",
                color: "#2A2520",
                lineHeight: 1.1,
              }}
            >
              Portfolio
            </h2>

            <div className="flex gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="font-sans font-normal uppercase bg-transparent border-none cursor-pointer transition-all duration-200"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    padding: "8px 16px",
                    color: filter === f ? "#2A2520" : "#9A8E7E",
                    borderBottom:
                      filter === f
                        ? "1px solid #C8B89A"
                        : "1px solid transparent",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 2,
          }}
        >
          {filtered.map((p, i) => (
            <PortfolioCard key={p.title} project={p} delay={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
