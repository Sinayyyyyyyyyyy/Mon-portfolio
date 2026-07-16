/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/Components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideRight: {
  '0%': { transform: 'translateX(100%)', opacity: '1' },
  '100%': { transform: 'translateX(0)', opacity: '1' },
},
slideLeft: {
  '0%': { transform: 'translateX(-100%)', opacity: '1' },
  '100%': { transform: 'translateX(0)', opacity: '1' },
},
slideOutLeft: {
  '0%': { transform: 'translateX(0)'},
  '100%': { transform: 'translateX(-100%)' },
},
slideOutRight: {
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(100%)' },
},
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in forwards',
        slideIn: 'slideIn 0.5s ease-in forwards',
        slideRight: 'slideRight 0.4s ease-out',
        slideLeft: 'slideLeft 0.4s ease-out',
        slideOutLeft: 'slideOutLeft 0.4s ease-out forwards',
        slideOutRight: 'slideOutRight 0.4s ease-out forwards',
      },
    },
  },
  plugins: [],
}