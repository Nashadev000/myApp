/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#5c059b',
        'secundary':  '#1a237e',
        acent: "#ffd24f",
      },
    },
  },
  plugins: [],
}

