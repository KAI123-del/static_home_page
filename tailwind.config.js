const colors = require('tailwindcss/colors')
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors:{
        amber:colors.amber,
        orange:colors.orange,
        sky:colors.sky,
        rose:colors.rose,
      },
    },
  },
  plugins: [],
}
