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
          "fill": "#6CACE4",
          "text-base": "#012C56",
          "accent": "#E14A39",
          "acc": "#FFB81C",
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
