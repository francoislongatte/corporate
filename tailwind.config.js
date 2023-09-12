/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,ts,md}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
