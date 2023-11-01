/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "infinite-scroll": "infinite-scroll 30s linear infinite",
      },
      keyframes: {
        "infinite-scroll": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      ...colors,
      primary: colors.lime,
      secondary: colors.green,

      "grey-grey-100": "#15161a",
      "grey-grey-300": "#585d6c",
      "black-black-10": "rgba(0, 0, 0, 0.1)",
      "primary-primary-700": "#93acf8",
      "adaptive-strong": "#fff",
      "adaptive-medium": "rgba(255, 255, 255, 0.8)",
      "primary-primary-500": "#3d6bf4",
      gainsboro: "#d9d9d9",
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  
  ],
};
