/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "#2bbef9",
        softRed: "#ed174a",
        softBlueWhite: "#ffffff",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(226, 31%, 21%)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
