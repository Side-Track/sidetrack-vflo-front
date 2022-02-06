const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Spoqa Han Sans Neo', 'Spoqa Han Sans JP', ...defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
