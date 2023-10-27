import type { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
import colors from "./colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)",
      "lg-dark":
        "0 0 0 1px rgba(255,255,255,.15), 0px 0.8px 2px rgba(0, 0, 0, 0.032), 0px 2.7px 6.7px rgba(0, 0, 0, 0.048), 0px 12px 30px rgba(0, 0, 0, 0.08)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      nav: "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 1px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px 0 rgba(0, 0, 0, 0.02)",
      "nav-dark":
        "0 16px 32px -16px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255,255,255,.05)",
      inner: "inset 0 1px 4px 0 rgba(0, 0, 0, 0.05)",
      "inner-border": "inset 0 0 0 1px rgba(0, 0, 0, 0.08)",
      "inner-border-dark": "inset 0 0 0 1px rgba(255, 255, 255, 0.08)",
      "outer-border": "0 0 0 1px rgba(0, 0, 0, 0.1)",
      "outer-border-dark": "0 0 0 1px rgba(255, 255, 255, 0.1)",
      "secondary-button-stroke": "inset 0 0 0 1px #D9DBE3",
      "secondary-button-stroke-dark": "inset 0 0 0 1px #404756",
      none: "none",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors,
    },
  },
  plugins: [],
};
export default config;
