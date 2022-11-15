/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx' , './*.html'],
  theme: {
    fontFamily:{
      sans:['Ubuntu' , 'sans-serif']
    },
    extend: {
      backgroundImage:{
        background: "url('../src/assets/bg.png')",
        gradient:"linear-gradient(235.81deg, rgba(13, 0, 19, 0.7) -20.34%, rgba(0, 0, 0, 0) 129.93%)"
      },
    },
  },
  plugins: [],
}
