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
      },
      backgroundImage: {
        'hidden': "url('assets/hidden.png')",
        'flag': "url('assets/flag.png')",
        'mine': "url('assets/mine.png')",
        'redmine': "url('assets/redmine.png')",
        'blank': "url('assets/blank.png')",
        'one': "url('assets/one.png')",
        'two': "url('assets/two.png')",
        'three': "url('assets/three.png')",
        'four': "url('assets/four.png')",
        'five': "url('assets/five.png')",
        'six': "url('assets/six.png')",
        'seven': "url('assets/seven.png')",
        'eight': "url('assets/eight.png')",
      }
    },
  },
  plugins: [],
}

