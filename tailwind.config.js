/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './snippets/customers/*.liquid',
    './snippets/*.liquid'
  ],
  theme: {
    extend: {
      height: {
        '94': '22rem'
      }
    },
  },
  plugins: [],
}

