/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        TEXT_DARK: "#313131",
        TEXT_WHITE: "#fff",
        BACKGROUND_DARK: "#313131",
        BACKGROUND_DARK_MODE: "#27292c",
        BACKGROUND_WHITE: "#fffff",
      },
    },
  },
  plugins: [],
};
