import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#223029",
        cedar: "#3d5047",
        sage: "#8c9a85",
        clay: "#a26f5f",
        stone: "#8e8a80",
        mist: "#ede9df",
        oat: "#d9d0c1",
        ivory: "#fbf8f0"
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 22px 80px rgba(34, 48, 41, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
