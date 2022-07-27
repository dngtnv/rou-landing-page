/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './main.js'],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          '0%': { visibility: 'hidden', opacity: 0 },
          '1%': { visibility: 'visible', opacity: 0 },
          to: { visibility: 'visible', opacity: 1 },
        },
      },
      animation: {
        fadein: 'fadein 0.3s ease-out forwards',
        fadeout: 'fadeout 0.3s ease-out forwards',
      },
      colors: {
        primary: '#111111',
        secondary: '#5e5858',
        accent: '#c04ae2',
        light: {
          pink: '#fcd7df',
          green: '#c9f3e2',
          orange: '#f2d5ba',
        },
        bright: {
          pink: '#fd708e',
          green: '#68d9ac',
          orange: '#fe9a3f',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '18.75rem',
        },
      },
      fontFamily: {
        sans: ['Overpass', 'sans-serif'],
      },
      fontSize: {
        sm: ['clamp(0.83rem, calc(0.82rem + 0.07vw), 0.89rem)', '1.4'],
        base: ['clamp(1.00rem, calc(0.00rem + 0.00vw), 1.00rem)', '1.5'],
        lg: ['clamp(1.25rem, calc(1.1rem + 0.61vw), 1.15rem);', '1.4'],
        xl: ['clamp(1.42rem, calc(1.06rem + 1.80vw), 2.34rem)', '1.2'],
        '2xl': ['clamp(1.60rem, calc(1.08rem + 2.59vw), 2.93rem)', '1.2'],
        '3xl': ['clamp(1.80rem, calc(1.08rem + 3.63vw), 3.66rem)', '1.1'],
        '4xl': ['clamp(2.03rem, calc(1.03rem + 4.98vw), 4.58rem)', '1'],
        '5xl': ['clamp(2.28rem, calc(0.94rem + 6.71vw), 5.72rem)', '1'],
        '6xl': ['clamp(2.57rem, calc(0.78rem + 8.95vw), 7.15rem)', '1'],
        '7xl': ['clamp(3.27rem, calc(2.92rem + 1.73vw), 4.58rem)', '1'],
      },
    },
  },
  plugins: [],
}
