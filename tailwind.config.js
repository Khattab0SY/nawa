/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bg1': '#1A1A1D',
        'bg2': '#3B1C32',
        'primary': '#6A1E55',
        'secondary': '#A64D79',
      },
      fontFamily:{
        'dinNext': ['dinNext', 'sans-serif']
      }
    },
  },
  plugins: [],
}

