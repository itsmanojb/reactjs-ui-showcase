/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
        xmd: '900px',
        xlg: '1100px',
      },
    },
  },
  plugins: [],
};
