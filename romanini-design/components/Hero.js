"use client";

import { useState, useEffect } from "react";
import { scrollTo } from "../lib/utils";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fadeStyle = (delay) => ({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 1s ease ${delay}s, transform 1s ease ${delay}s`,
  });

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: "100vh", minHeight: 680 }}
    >
      {/* ── Background SVG ── */}
      <div className="absolute inset-0">
        <svg
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="1440" height="900" fill="#2A2520" />
          <rect width="1440" height="900" fill="#1A1714" opacity="0.4" />
          <ellipse cx="300"  cy="200" rx="600" ry="400" fill="#3A302A" opacity="0.5" />
          <ellipse cx="1200" cy="700" rx="500" ry="350" fill="#C8B89A" opacity="0.08" />
          <ellipse cx="900"  cy="100" rx="300" ry="200" fill="#8B7355" opacity="0.12" />
          {[...Array(6)].map((_, i) => (
            <line
              key={`v${i}`}
              x1={240 * i} y1="0" x2={240 * i} y2="900"
              stroke="rgba(250,248,244,0.03)" strokeWidth="1"
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <line
              key={`h${i}`}
              x1="0" y1={180 * i} x2="1440" y2={180 * i}
              stroke="rgba(250,248,244,0.03)" strokeWidth="1"
            />
          ))}
          <rect x="900" y="150" width="180" height="1" fill="rgba(200,184,154,0.3)" />
          <rect x="920" y="170" width="100" height="1" fill="rgba(200,184,154,0.2)" />
        </svg>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(26,23,20,0.3), rgba(26,23,20,0.5))",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-content mx-auto px-10 h-full flex flex-col justify-center">
        {/* Eyebrow */}
        <div style={fadeStyle(0.3)}>
          <p
            className="font-sans font-normal uppercase mb-6"
            style={{ fontSize: 10, letterSpacing: "0.3em", color: "#C8B89A" }}
          >
            <span className="line-accent" />
            Luxury Interior Design · Tulum, México
          </p>
        </div>

        {/* Headline */}
        <div style={fadeStyle(0.5)}>
          <h1
            className="font-serif font-light"
            style={{
              fontSize: "clamp(52px, 8vw, 108px)",
              lineHeight: 0.92,
              color: "#FAF8F4",
              letterSpacing: "0.02em",
              maxWidth: 760,
            }}
          >
            Spaces that
            <br />
            <em style={{ fontStyle: "italic", color: "#C8B89A" }}>speak</em>{" "}
            softly.
          </h1>
        </div>

        {/* Body */}
        <div style={{ ...fadeStyle(0.8), marginTop: 36, maxWidth: 420 }}>
          <p
            className="font-sans font-light"
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "rgba(250,248,244,0.7)",
              letterSpacing: "0.04em",
            }}
          >
            We curate interiors that balance raw beauty with refined comfort —
            where the Riviera Maya&apos;s natural world meets the elegance you
            deserve.
          </p>
        </div>

        {/* CTAs */}
        <div
          style={{ ...fadeStyle(1.1), marginTop: 48 }}
          className="flex gap-5 flex-wrap"
        >
          <button
            className="btn-primary"
            onClick={() => scrollTo("contact")}
          >
            Schedule a Consultation
          </button>
          <button
            className="btn-outline"
            onClick={() => scrollTo("portfolio")}
          >
            View Portfolio
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div
        style={{ ...fadeStyle(1.5) }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="font-sans font-normal uppercase"
          style={{
            fontSize: 9,
            letterSpacing: "0.28em",
            color: "rgba(250,248,244,0.4)",
          }}
        >
          Scroll
        </span>
        <div
          className="scroll-pulse"
          style={{
            width: 1,
            height: 40,
            background:
              "linear-gradient(to bottom, rgba(200,184,154,0.6), transparent)",
          }}
        />
      </div>
    </section>
  );
}
