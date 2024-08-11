/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPink: '#feb0c0', // You can name this color anything you like
        background: '#f1f1f1'
      },
    },
  },
  plugins: [],
}

