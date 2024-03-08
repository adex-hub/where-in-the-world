/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)", // Dark Mode Text & Light Mode Elements
      dark_blue: "hsl(209, 23%, 22%)", // Dark Mode Elements
      bg_dark: "hsl(207, 26%, 17%)", // Dark Mode Background
      vd_blue: "hsl(200, 15%, 8%)", // Light Mode Text
      dark_gray_lmi: "hsl(0, 0%, 52%)", // Light Mode Input
      bg_light: "hsl(0, 0%, 98%)", // Light Mode Background
    },
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
