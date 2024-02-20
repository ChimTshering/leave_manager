import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "rgba(var(--white)/<alpha-value>)",
      black: "rgba(var(--black)/<alpha-value>)",
      primary: "var(--primary)",
      secondary: "var(--secondary)",
      tertiary: "var(--tertiary)",
    },

    // screens: {
    //   sm: "480px",
    //   md: "640px",
    //   lg: "1024px",
    //   xl: "1280px",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "auth-bg": "url('/images/add_letter.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
