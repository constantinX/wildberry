/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./docs/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "tangerine": ['Tangerine', 'sans-serif'],
        "lato": ['Lato', 'sans-serif']
    }
    },
  },
  plugins: [],
}