/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mid': '850px',
        'large': '1800px'
      },
      fontWeight: {
        heading: '800'
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
    },
  },
  plugins: [],
}

