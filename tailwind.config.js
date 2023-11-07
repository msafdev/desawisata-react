/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "640px",
        md: "768px",
        lg: "1128px",
        xl: "1420px",
      },
      colors: {
        primary: "#101010",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        white: "#F7F7F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
