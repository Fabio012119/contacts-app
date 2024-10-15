/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      smMax: { max: "376px" },
      smMin: { min: "376px" },
      lgMax: { max: "1440px" },
      lgMin: { min: "1441px" },
    },
    extend: {
      colors: {
        "primary-cyan": "hsl(180, 62%, 55%)",
        "neutral-very-dark-blue": "hsl(234, 12%, 34%)",
        "neutral-grayish-blue": "hsl(229, 6%, 66%)",
        "neutral-light-gray": "hsl(0, 0%, 98%)",
      },
    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
