"use client";

import { scrollTo } from "../lib/utils";

const NAV_ITEMS = ["home", "about", "services", "portfolio", "contact"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#1A1714", padding: "60px 40px 40px" }}>
      <div className="max-w-content mx-auto">

        {/* Top row */}
        <div
          className="flex justify-between items-end flex-wrap gap-8 pb-10"
          style={{ borderBottom: "1px solid rgba(200,184,154,0.15)" }}
        >
          {/* Brand */}
          <div>
            <div
              className="font-serif font-light uppercase mb-1"
              style={{ fontSize: 22, letterSpacing: "0.18em", color: "#FAF8F4" }}
            >
              ROMANINI DESIGN
            </div>
            <div
              className="font-sans font-normal uppercase"
              style={{ fontSize: 9, letterSpacing: "0.3em", color: "#9A8E7E" }}
            >
              Luxury Interiors · Tulum, México
            </div>
          </div>

          {/* Nav links */}
          <div className="flex gap-8 flex-wrap">
            {NAV_ITEMS.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="font-sans font-normal uppercase bg-transparent border-none cursor-pointer transition-colors duration-200"
                style={{ fontSize: 10, letterSpacing: "0.2em", color: "#9A8E7E" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#C8B89A")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#9A8E7E")}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex justify-between items-center flex-wrap gap-4 pt-7">
          <p
            className="font-sans font-light"
            style={{ fontSize: 11, letterSpacing: "0.06em", color: "rgba(154,142,126,0.6)" }}
          >
            © {year} Romanini Design · All rights reserved.
          </p>
          <p
            className="font-serif font-light italic"
            style={{ fontSize: 13, letterSpacing: "0.04em", color: "rgba(200,184,154,0.4)" }}
          >
            Crafted with intention, in Tulum.
          </p>
        </div>
      </div>
    </footer>
  );
}
