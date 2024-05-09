/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        haxonBlack: "#101010",
        haxonGrey: "#f9f9f9",
        haxonGrey2: "#c8c6c4",
        haxonColor1: "#dbdbdb"
      }
    },
  },
  plugins: [],
}

