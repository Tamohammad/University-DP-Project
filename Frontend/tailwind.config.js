const rtl = require('tailwindcss-rtl');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
  },
  plugins: [
    rtl, // ← فقط همین، بدون پرانتز
  ],
};
