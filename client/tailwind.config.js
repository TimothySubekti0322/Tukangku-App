/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterBlack: ["InterBlack"],
        InterBold: ["InterBold"],
        InterExtraBold: ["InterExtraBold"],
        InterExtraLight: ["InterExtraLight"],
        InterLight: ["InterLight"],
        InterMedium: ["InterMedium"],
        InterRegular: ["InterRegular"],
        InterSemiBold: ["InterSemiBold"],
        InterThin: ["InterThin"],
      },
    },
  },
  plugins: [],
};
