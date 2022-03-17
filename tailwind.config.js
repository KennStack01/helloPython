const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'turbo-gray': {
          DEFAULT: '#F5F5F5',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F5F5F5',
          600: '#D9D9D9',
          700: '#BDBDBD',
          800: '#A1A1A1',
          900: '#858585',
        },
        'turbo-blue': {
          DEFAULT: '#347AB4',
          50: '#B6D2EA',
          100: '#A6C9E5',
          200: '#86B5DC',
          300: '#67A2D3',
          400: '#478FCA',
          500: '#347AB4',
          600: '#275C88',
          700: '#1B3F5D',
          800: '#0E2131',
          900: '#020406',
        },
      },
    },
  },
  plugins: [],
}
