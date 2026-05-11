import type { Config } from "tailwindcss";

// Brand DNA palette per The Healing Ground Geneva brand brief §3.1.
// Legacy tokens (ivory/mist/clay/cedar/oat) are kept as aliases pointing to
// the closest brand-aligned hue so existing components keep compiling while
// the rendered colours shift to the brand.
const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand DNA — neutrals
        cream: "#FAF6F0",
        paper: "#F4ECDF",
        sand: "#E8DCC9",
        beige: "#D7C5A8",

        // Brand DNA — living accents (sparingly)
        sage: "#A8B59A",
        olive: "#8A8F6E",
        terracotta: "#C99577",
        "rose-dust": "#E6CFC7",
        honey: "#E8D097",

        // Brand DNA — text
        ink: "#2A2724",
        "ink-soft": "#5C564E",
        "ink-muted": "#8A847B",

        // Brand DNA — functional
        line: "#E6DECF",
        focus: "#8A8F6E",
        stone: "#B8B0A4",

        // Legacy aliases — keep existing JSX working, map to brand hues
        ivory: "#FAF6F0", // was #fbf8f0
        mist: "#F4ECDF", // was #ede9df
        oat: "#D7C5A8", // was #d9d0c1
        clay: "#C99577", // was #a26f5f
        cedar: "#5C564E" // was #3d5047
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"]
      },
      fontSize: {
        eyebrow: [
          "0.8125rem",
          { lineHeight: "1.4", letterSpacing: "0.08em" }
        ]
      },
      letterSpacing: {
        eyebrow: "0.08em"
      },
      boxShadow: {
        soft: "0 22px 80px rgba(34, 48, 41, 0.12)",
        whisper: "0 4px 24px rgba(42, 39, 36, 0.04)"
      },
      transitionTimingFunction: {
        calm: "cubic-bezier(0.25, 0.1, 0.25, 1)"
      },
      transitionDuration: {
        calm: "400ms"
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        rise: "rise 600ms cubic-bezier(0.25, 0.1, 0.25, 1) both"
      },
      maxWidth: {
        prose: "65ch",
        editorial: "720px"
      },
      borderRadius: {
        pill: "999px"
      }
    }
  },
  plugins: []
};

export default config;
