/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'artemis': ['Arthemis-PKY27', 'sans-serif'], // Use a fallback font like sans-serif
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Add other keyframes as needed
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        // Define other animations using custom keyframes or standard ones
      },
    },
  },
  plugins: [],
}

