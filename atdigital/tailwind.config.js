/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Adding the primary color
      },
      screens: {
        'sm': '375px',   // Mobile
        'md': '768px',   // Tablet
        'lg': '1200px',  // Medium desktops
        'xl': '1440px',  // Large desktops (default base)
      },
    },
  },
  plugins: [],
};
