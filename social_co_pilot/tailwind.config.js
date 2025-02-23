/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        earth: ['earth'],
        cramble: ['cramble']
      }
    },
  },
  plugins: [],
};
