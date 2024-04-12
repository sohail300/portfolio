/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        // 'mobile': { 'max': '768px' },
        'mobile': '768px',
        '2xl': '1280px',
        // '2xl': { 'max': '1280px' },
      },
      fontWeight: {
        heading: '800'
      },
      fontSize: {
        heading: '30px',
      },
    },
  },
  plugins: [],
}

