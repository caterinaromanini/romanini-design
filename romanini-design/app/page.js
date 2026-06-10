"use client";

import { useState, useEffect } from "react";
import Navbar      from "../components/Navbar";
import Hero        from "../components/Hero";
import Philosophy  from "../components/Philosophy";
import About       from "../components/About";
import Services    from "../components/Services";
import Portfolio   from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Contact     from "../components/Contact";
import Footer      from "../components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.4 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Philosophy />
        <About />
        <Services />
        <Portfolio />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
