/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.tsx", "./screens/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        'light-blue': '#5D6B98'
      }
    },
  },
  plugins: [],
}

