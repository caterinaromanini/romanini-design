/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand:      "#C8B89A",
        beige:     "#E8DFD0",
        cream:     "#F5F0E8",
        offwhite:  "#FAF8F4",
        warm:      "#D4C4A8",
        stone:     "#9A8E7E",
        charcoal:  "#2A2520",
        softblack: "#1A1714",
        muted:     "#6B5F52",
        accent:    "#8B7355",
      },
      fontFamily: {
        serif:  ["var(--font-cormorant)", "Georgia", "serif"],
        sans:   ["var(--font-jost)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["9px",  { letterSpacing: "0.24em" }],
        "xs":  ["10px", { letterSpacing: "0.2em"  }],
        "sm":  ["11px", { letterSpacing: "0.04em" }],
        "base":["14px", { lineHeight: "1.8"       }],
        "lg":  ["15px", { lineHeight: "1.9"       }],
      },
      maxWidth: {
        content: "1280px",
      },
      transitionTimingFunction: {
        luxury: "cubic-bezier(0.77, 0, 0.18, 1)",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)"    },
        },
        pulse: {
          "0%, 100%": { opacity: "0.4", transform: "scaleY(1)"   },
          "50%":      { opacity: "1",   transform: "scaleY(1.1)" },
        },
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease forwards",
        pulse:     "pulse 2s ease infinite",
      },
    },
  },
  plugins: [],
};
