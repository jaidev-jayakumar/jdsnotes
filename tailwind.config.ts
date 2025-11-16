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
        background: "#EEEBE7",
        foreground: "#1A1A1A",
        muted: "#666666",
      },
      fontFamily: {
        serif: ["var(--font-libre-baskerville)", "serif"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.01em",
      },
      lineHeight: {
        relaxed: "1.7",
      },
    },
  },
  plugins: [],
};

export default config;

