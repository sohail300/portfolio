/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
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

