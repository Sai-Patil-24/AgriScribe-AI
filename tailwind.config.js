/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        agri: {
          green: '#1B4332',
          lightgreen: '#2D6A4F',
          earth: '#9C6644',
          yellow: '#FCA311',
          bg: '#F8F9FA'
        }
      }
    },
  },
  plugins: [],
}
