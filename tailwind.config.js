/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
    },
    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [require("flowbite/plugin")],
};
