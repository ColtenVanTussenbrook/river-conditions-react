module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading-slab': ['"Alfa Slab One"', 'cursive'],
        'body-roboto': ['"Roboto"', 'sans-seri'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
