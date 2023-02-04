/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'small' : '600px',
      'medium' : '1000px',
      'large' : '1368px',
    },
    extend: {
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '.5',
            transform: 'translateY(-10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-in-up': {
          '0%': {
            opacity: '.5',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],  
}