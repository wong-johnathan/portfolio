import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#763bf6",
        "brand-secondary": "#3bf6ae",
      },
    },
  },
  darkMode: ["class"],
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
