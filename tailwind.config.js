/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ff3131",
        secondary: "#F5E6E0",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        
      },
      container: {
        padding: {
          DEFAULT: '30px',
          lg: '0',
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
  },
  plugins: [],
};