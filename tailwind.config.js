/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: ["*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Rajdhani', 'sans-serif'], // Add your imported font
    },

    screens: {
      '2sm':'390px',
      'xsm': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1600px',
    },
    container: {
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '0rem',
        xl: '2rem',
        '2xl': '5rem',
      },
    },
  },
  plugins: [],
}

