/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg_gradient": "url('./assets/images/webp/hero-bg.webp')",
      },
      fontFamily: { "poppins": ['"Poppins", sans-serif'] },
      boxShadow: {
        'card_shadow': '0px 50px 100px 0px rgba(0, 0, 0, 0.10)',
      },
      screens: {
        'tablet': '640px',
        'laptop': '1440px',
        'desktop': '1366px',
      },
      boxShadow: {
        "btn_shadow": '5px 10px 15px #FD749B',
        "btn_hover": '5px 10px 15px #CC33D9',
      }
    },
  },
  plugins: [],
}

