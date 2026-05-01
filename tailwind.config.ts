import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        surface: "#F8FAF7",
        primary: "#0F766E",
        deep: "#064E3B",
        soft: "#ECFDF5",
        gold: "#D6A94A",
        text: "#10231D",
        muted: "#66736D",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(6, 78, 59, 0.08)",
        lift: "0 18px 50px rgba(6, 78, 59, 0.12)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "islamic-pattern":
          "radial-gradient(circle at 1px 1px, rgba(15,118,110,0.12) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
