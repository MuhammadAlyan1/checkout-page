/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        veryLightGray: '#f2f2f2',
        lightGray: '#e0e0e0',
        orange: '#F2994A',
      },
    },
  },
  plugins: [],
};
