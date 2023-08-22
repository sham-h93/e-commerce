import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "transparent-color": "transparent",
      "white-color": "#fff",
      "background-color": "#fafafa",
      "background-grey-color": "#F1F2F4",
      "primary-color": "#009688",
      "secundary-color": "#673ab7",
      "text-color": "#424242",
      "success-color": "#4caf50",
      "warning-color": "#ffc107",
      "error-color": "#f44336",
      "icon-color": "#3f4064",
    },
    extend: {
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
