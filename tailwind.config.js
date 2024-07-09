/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('/Users/hemanthkumar/Documents/MCA/23mx110/portfolio/src/images/bg-secondary.jpg')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
    },
    fontFamily: {
      "hero-font": "Sriracha",
    },
  },
  plugins: [require("flowbite/plugin")],
};
