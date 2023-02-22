/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "card-primary": "#5846ea",
        "card-secondary": "#1e1f4d",
        "background": "#0d1323",
      }
    },
  },
  plugins: [],
}
