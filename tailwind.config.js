/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'Readex': ['Readex Pro', 'sans-serif']
      },
      colors: {
        "hero": "#e53e6a",
        "white": "#ffffff",
        "yellow": "#FEF86B",
        "black": "#000000",
        "grey" : "#212529",
      },
    },
  },
  plugins: [],
}
