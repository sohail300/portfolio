/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(8px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        upDown: 'upDown 2s ease-in-out infinite',
      },
      screens: {
        'small': '550px',
        'mid': '850px',
        'large': '1800px'
      },
      fontWeight: {
        heading: '800',
        space: '600'
      },
      fontSize: {
        heading: '30px',
        '14px': '14px',
        '8px': '8px',
        '7px': '7px',
        '20px': '20px',
        '10px': '10px',
        '12px': '12px',
      },
      fontFamily: {
        robot: ["VT323", "monospace"],
        space: ["Space Grotesk", 'sans-serif'],
        manrope: ["Manrope", 'sans-serif'],
      },
      colors: {
        gray: "#b6b6b6"
      }
    },
  },
}

