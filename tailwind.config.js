/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.html', './js/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Oxanium"', ...defaultTheme.fontFamily.sans],
      },
      colors: {},
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    //require('@tailwindcss/forms')
  ],
};
