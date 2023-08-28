/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',

        'footer': '200px minmax(900px, 1fr) 100px',
      },
      colors: {
        'one': '#0100fa',
        'two': '#027f05',
        'three': '#f90102',
        'four': '#010084',
        'five': '#800102',
        'six': '#00807f',
        'seven': '#000000',
        'eight': '#808080'
      }
    },
  },
  plugins: [],
}

