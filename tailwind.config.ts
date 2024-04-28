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
        light: {
          "fill": "#6CACE",
          "text-base": "#012C56",
          "accent": "#E14A39",
          "card": "#D9D1C3",
          "card-muted": "#EFD8B0",
          "border": "#DC9891"
        }
      }
    },
  },
  plugins: [],
};
export default config;
