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
      primary: "rgba(var(--primary)/<alpha-value>)", //green
      secondary: "rgba(var(--secondary)/<alpha-value>)", //blue
      tertiary: "rgba(var(--tertiary)/<alpha-value>)",//pink-orange
      accent: "rgba(var(--accent)/<alpha-value>)",//light-blue
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
