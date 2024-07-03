/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          logoColor:'#2289ff',
          secondColor:'#176aa4'
        }
    },
  },
  plugins: [],
}

