import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#141414",
        "surface-3": "#1a1a1a",
        border: "rgba(255,255,255,0.06)",
        "border-hover": "rgba(255,255,255,0.12)",
        primary: "#f4f4f5",
        secondary: "#a1a1aa",
        muted: "#52525b",
        accent: "#818cf8",
        "accent-hover": "#6366f1",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(99,102,241,0.15) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "30px 30px",
      },
    },
  },
  plugins: [],
};
export default config;
