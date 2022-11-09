const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'everett-thin': 'everettthin',
        'everett-light': 'everettlight',
        'everett-ultralight': 'everettultralight',
        'everett-regular': 'everettregular'
      }
    },
    colors: {
      // Background image overlay on homepage
      'home-overlay': 'hsla(0,0%,100%,.88)',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
    },
  },
  plugins: [],
}
