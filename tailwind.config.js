const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e3f3fb',
          100: '#bbe0f7',
          200: '#91cdf3',
          300: '#67b9ed',
          400: '#46aaeb',
          500: '#239ce8',
          600: '#198edb',
          700: '#0b7cc9',
          800: '#006bb7',
          900: '#004e99',
        },
        ...defaultTheme.colors
      },
    },
  },
  plugins: [],
};
