"use client";

import { useState } from "react";
import { useFadeIn } from "@/lib/utils";

const INFO_ROWS = [
  { label: "Studio",    val: "Tulum, Quintana Roo, México" },
  { label: "Email",     val: "hello@romaninidesign.com"    },
  { label: "Instagram", val: "@romaninidesign"             },
];

const labelCls = "block font-sans font-normal uppercase mb-2";
const labelStyle = { fontSize: 9, letterSpacing: "0.26em", color: "#9A8E7E" };

const inputStyle = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid #D4C4A8",
  padding: "12px 0",
  fontSize: 14,
  fontWeight: 300,
  letterSpacing: "0.04em",
  color: "#2A2520",
  outline: "none",
};

export default function Contact() {
  const r1 = useFadeIn();
  const r2 = useFadeIn();

  const [form, setForm]   = useState({ name: "", email: "", project: "", message: "" });
  const [sent, setSent]   = useState(false);
  const [error, setError] = useState("");

  const handle = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = () => {
    if (!form.name || !form.email) {
      setError("Please fill in your name and email.");
      return;
    }
    setError("");
    setSent(true);
  };

  return (
    <section id="contact" className="bg-cream py-32 px-10">
      <div className="max-w-content mx-auto">
        <div
          className="grid items-start gap-20"
          style={{ gridTemplateColumns: "1fr 1fr" }}
        >

          {/* ── Left: intro + contact info ── */}
          <div ref={r1} className="fade-up">
            <p
              className="font-sans font-normal uppercase mb-5"
              style={{ fontSize: 10, letterSpacing: "0.3em", color: "#9A8E7E" }}
            >
              <span className="line-accent" />
              Let&apos;s Begin
            </p>

            <h2
              className="font-serif font-light mb-8"
              style={{
                fontSize: "clamp(36px, 4vw, 60px)",
                lineHeight: 1.05,
                color: "#2A2520",
                letterSpacing: "0.03em",
              }}
            >
              Start your
              <br />
              <em style={{ fontStyle: "italic" }}>design journey.</em>
            </h2>

            <p
              className="font-sans font-light mb-12"
              style={{
                fontSize: 15,
                lineHeight: 1.9,
                color: "#6B5F52",
                letterSpacing: "0.03em",
                maxWidth: 400,
              }}
            >
              Every great interior begins with a conversation. Tell us about
              your space, your vision, and your timeline — and we&apos;ll take
              it from there.
            </p>

            {INFO_ROWS.map((row) => (
              <div
                key={row.label}
                className="mb-6 pb-6"
                style={{ borderBottom: "1px solid #D4C4A8" }}
              >
                <span className={labelCls} style={labelStyle}>
                  {row.label}
                </span>
                <span
                  className="font-sans font-light"
                  style={{ fontSize: 14, color: "#2A2520", letterSpacing: "0.04em" }}
                >
                  {row.val}
                </span>
              </div>
            ))}
          </div>

          {/* ── Right: form ── */}
          <div ref={r2} className="fade-up delay-2">
            {sent ? (
              /* Success state */
              <div
                className="text-center py-16 px-12"
                style={{ border: "1px solid #D4C4A8" }}
              >
                <div
                  className="font-serif font-light mb-4"
                  style={{ fontSize: 48, color: "#2A2520" }}
                >
                  Thank you.
                </div>
                <p
                  className="font-sans font-light"
                  style={{ fontSize: 14, color: "#6B5F52", lineHeight: 1.8 }}
                >
                  We&apos;ve received your message and will be in touch within
                  48 hours. We look forward to exploring what&apos;s possible
                  together.
                </p>
              </div>
            ) : (
              /* Form */
              <div className="flex flex-col gap-8">
                <div className="grid gap-8" style={{ gridTemplateColumns: "1fr 1fr" }}>
                  <div>
                    <label className={labelCls} style={labelStyle}>Full Name</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handle}
                      placeholder="Your name"
                      className="font-sans"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelCls} style={labelStyle}>Email</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handle}
                      placeholder="hello@you.com"
                      className="font-sans"
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls} style={labelStyle}>Project Type</label>
                  <select
                    name="project"
                    value={form.project}
                    onChange={handle}
                    className="font-sans"
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="">Select a service</option>
                    <option>Full Interior Design</option>
                    <option>Design Consultation</option>
                    <option>Turnkey Furnishing</option>
                    <option>Art &amp; Object Curation</option>
                    <option>Architectural Staging</option>
                    <option>Brand Experience Design</option>
                  </select>
                </div>

                <div>
                  <label className={labelCls} style={labelStyle}>
                    Tell us about your vision
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    placeholder="Your space, your timeline, your dreams..."
                    rows={5}
                    className="font-sans w-full"
                    style={{
                      background: "transparent",
                      border: "1px solid #D4C4A8",
                      padding: 16,
                      fontSize: 14,
                      fontWeight: 300,
                      letterSpacing: "0.04em",
                      color: "#2A2520",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                {error && (
                  <p className="font-sans" style={{ fontSize: 12, color: "#A32D2D" }}>
                    {error}
                  </p>
                )}

                <div>
                  <button className="btn-primary" onClick={submit}>
                    Submit &amp; Schedule a Call
                  </button>
                  <p
                    className="font-sans font-light mt-4"
                    style={{ fontSize: 11, color: "#9A8E7E", letterSpacing: "0.04em" }}
                  >
                    We respond to all inquiries within 48 hours.
                    Initial consultations available in English and Spanish.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
