"use client";

import { useState, useEffect } from "react";
import { scrollTo } from "@/lib/utils";

const NAV_ITEMS = ["home", "about", "services", "portfolio", "contact"];

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    setMobileOpen(false);
    scrollTo(id);
  };

  return (
    <>
      {/* ── Desktop / Tablet Nav ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="max-w-content mx-auto px-10 h-20 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("home")}
            className="bg-transparent border-none cursor-pointer text-left"
          >
            <div
              className="font-serif text-xl font-light uppercase transition-colors duration-500"
              style={{
                letterSpacing: "0.22em",
                color: scrolled ? "#1A1714" : "#FAF8F4",
              }}
            >
              ROMANINI
            </div>
            <div
              className="font-sans text-[9px] font-normal uppercase mt-[1px] transition-colors duration-500"
              style={{
                letterSpacing: "0.38em",
                color: scrolled ? "#9A8E7E" : "rgba(250,248,244,0.7)",
              }}
            >
              DESIGN · TULUM
            </div>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item;
              return (
                <button
                  key={item}
                  onClick={() => handleNav(item)}
                  className="bg-transparent border-none cursor-pointer font-sans font-normal uppercase transition-colors duration-300"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    color: scrolled
                      ? isActive ? "#8B7355" : "#6B5F52"
                      : isActive ? "#FAF8F4" : "rgba(250,248,244,0.6)",
                    paddingBottom: 4,
                    borderBottom: isActive
                      ? `1px solid ${scrolled ? "#C8B89A" : "rgba(250,248,244,0.6)"}`
                      : "1px solid transparent",
                  }}
                >
                  {item}
                </button>
              );
            })}
            <button
              onClick={() => handleNav("contact")}
              className={scrolled ? "btn-primary" : "btn-outline"}
              style={{ padding: "10px 24px", fontSize: 9 }}
            >
              Book a Consultation
            </button>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="flex md:hidden flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="block transition-all duration-300"
                style={{
                  width: 24,
                  height: 1,
                  background: scrolled ? "#1A1714" : "#FAF8F4",
                  transform: mobileOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* ── Mobile full-screen menu ── */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        {NAV_ITEMS.map((item) => (
          <button
            key={item}
            onClick={() => handleNav(item)}
            className="bg-transparent border-none cursor-pointer font-serif font-light capitalize"
            style={{ fontSize: 32, color: "#FAF8F4", letterSpacing: "0.08em" }}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => handleNav("contact")}
          className="btn-outline mt-5"
        >
          Book a Consultation
        </button>
      </div>
    </>
  );
}
