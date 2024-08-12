/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#feb0c0', 
        background: '#c95a5c',
        buttonColor: '#f8b2c1',
        formColor: '#f1f1f1',
        warningColor: '#fdf3ce',
        navButton: '#0A74D1',
      },
    },
  },
  plugins: [],
}

