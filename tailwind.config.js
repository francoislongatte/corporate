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
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-50% - 0.5rem))" },
        },
      },
      animation: {
        "spin-low": "scroll 10s linear  infinite",
      },
      textUnderlineOffset: {
        16: "16px",
      },
      width: {
        scroll: "calc( 100% * 2 )",
      },
      padding: {
        "1/2": "50%",
        full: "100%",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
