/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Euclid", "sans-serif"],
      },
    },
    container: {
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "7.5rem",
        xl: "7.5rem",
        "2xl": "5rem",
      },
    },
  },
  plugins: [],
}