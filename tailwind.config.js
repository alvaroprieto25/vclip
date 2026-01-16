/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0b0b0d', // Deep dark
        'tech-blue': '#00f0ff', // Cyan glow
        'tech-glare': '#1c1c2e', // Lighter dark for cards
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'], // Assuming Inter as body font or similar
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(to right, #1f2937 1px, transparent 1px), linear-gradient(to bottom, #1f2937 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
