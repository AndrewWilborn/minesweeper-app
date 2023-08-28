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
      }
    },
  },
  plugins: [],
}

