/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"]
      }
    }
  },
  plugins: [require("@tailwindcss/line-clamp"), require("@tailwindcss/typography")]
};
