import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pico: {
          950: "#07070F",
          900: "#0C0C18",
          800: "#111120",
          750: "#161628",
          700: "#1C1C32",
          600: "#252540",
          500: "#33335A",
          primary: "#2DD4BF",
          "primary-dim": "#20A898",
          "primary-glow": "rgba(45,212,191,0.15)",
          indigo: "#818CF8",
          text: "#F0F0FF",
          muted: "#7878A8",
          subtle: "#3E3E60",
          green: "#4ADE80",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(45,212,191,0.12), transparent)",
        "surface-gradient":
          "linear-gradient(135deg, rgba(45,212,191,0.06), rgba(129,140,248,0.04))",
        "card-gradient":
          "linear-gradient(135deg, rgba(45,212,191,0.07) 0%, rgba(7,7,15,0) 60%)",
      },
      boxShadow: {
        "glow-primary": "0 0 32px rgba(45,212,191,0.25)",
        "glow-sm": "0 0 14px rgba(45,212,191,0.18)",
        card: "0 1px 0 rgba(255,255,255,0.04), 0 24px 48px rgba(0,0,0,0.6)",
        "card-hover":
          "0 1px 0 rgba(255,255,255,0.06), 0 32px 64px rgba(0,0,0,0.7)",
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
        "fade-up": "fadeUp 0.5s ease-out forwards",
        pulse_slow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
