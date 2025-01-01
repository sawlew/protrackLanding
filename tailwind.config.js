/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'vector': 'url("./src/assets/Vector.png")',
        'herowall': 'url("./assets/herowall.png")',
      },
      backgroundSize: {
        '50%': '50%',
        '75%': '75%',
        '90%': '90%',

      },

    },
  },
  plugins: [ function({ addUtilities }) {
    addUtilities({
      '.text-gradient': { 'background': 'linear-gradient(to right, #BFBFBF, #999999)',
      '-webkit-background-clip': 'text',
      '-webkit-text-fill-color': 'transparent',
    },
    '.features-gradient': {
    'background': 'linear-gradient(to right, #5740EA, #C9C7D8)',
    },
  },
  ['responsive', 'hover'])
}
],
}