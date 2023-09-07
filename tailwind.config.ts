import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      "transparent-color": "transparent",
      "white-color": "#fff",
      "grey-color": "#e0e0e6",
      "background-color": "#fafafa",
      "dark-background-color": "#555555",
      "background-grey-color": "#F1F2F4",
      "background-lght-grey-color": "##F7F7F7",
      "primary-color": "#A3C93A",
      "secundary-color": "#673ab7",
      "text-color": "#555555",
      "text-grey-color": "#848484",
      "success-color": "#4caf50",
      "warning-color": "#ffc107",
      "error-color": "#f44336",
      "icon-color": "#3f4064",
    },
    extend: {
      dropShadow: {
        front: "0 0px 8px rgba(0, 0, 0, 0.25)",
      },

      fontFamily: {
        yekan: ["var(--yekan-bakh)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
