/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1597E4',
        'customWhite':'#FAFAFA',
        'placeHolderColor':'#7A7A7A',
        'borderColor':'#E6E6E6'
      }
    },
  },
  plugins: [],
}