/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        info: {
          DEFAULT: "#FFFFFF",
        },
        normal: {
          DEFAULT: "#86D03D",
        },
        advisory: {
          DEFAULT: "#FFDB7D",
        },
        warning: {
          DEFAULT: "#EF7300",
        },
        critical: {
          DEFAULT: "#FF0BBB",
        },
        emergency: {
          DEFAULT: "#D10000",
        },
      },
    },
  },
  plugins: [],
};
