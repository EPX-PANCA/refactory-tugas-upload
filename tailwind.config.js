module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("@tailwindcss/custom-forms")
  ],
  variants:{
    animation: ['responsive', 'hover', 'focus'],
  }
}
