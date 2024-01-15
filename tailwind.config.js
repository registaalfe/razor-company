/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        cards: ["0 4px 18px 0 rgb(0 0 0 / 0.1)"],
      },
    },
  },
  plugins: [],
};