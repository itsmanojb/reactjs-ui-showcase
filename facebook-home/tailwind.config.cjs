/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xxs: '380px',
        xs: '500px',
        xmd: '900px',
        xlg: '1100px',
      },
    },
  },
  plugins: [],
};
