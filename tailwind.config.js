/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./TipCalculator/*.html"],
  theme: {
    extend: {
      colors: {
        'primary':'hsl(172, 67%, 45%)',
        'second' : 'hsl(183, 100%, 15%)'
      }
    },
  },
  plugins: [],
}

