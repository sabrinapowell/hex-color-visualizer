import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-accent": "#4B0082",
        "brand-main": "#40E0D0",
        "brand-hover": "#87CEEB",
        "brand-hover-secondary": "#5F9EA0",
        "brand-secondary": "#DCC6E0",
        "brand-gray": "#708090",
        "brand-white": "#F7F7F7",
        "brand-black": "#1C1C1C",
        "brand-success": "#32CD32",
        "brand-warning": "#FFD700",
        "brand-error": "#FF6347",
        "brand-border": "#A9A9A9",
      },
    },
  },
  plugins: [],
} satisfies Config;
