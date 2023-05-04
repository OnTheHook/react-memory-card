/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "header-black": "#23252b",
        "text-orange": "#f47521",
        "start-grad": "#fab818",
        "end-grad": "#ef4323",
      },

      dropShadow: {
        '3xl': '0 20px 13px rgba(255, 255, 255, 0.25)',
      }
    },
    fontFamily: {
      bangers: ["Bangers", "cursive"],
    },
  },
  plugins: [],
};
