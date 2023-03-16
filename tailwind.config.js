const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EEFFF9',
          100: '#BBF2F7',
          200: '#91F3EA',
          300: '#67EDD9',
          400: '#46EBE6',
          500: '#23DFE8',
          600: '#19DBA3',
          700: '#0BC992',
          800: '#00B793',
          900: '#008F75',
        },
        ...defaultTheme.colors,
      },
    },
  },
  plugins: [],
};
