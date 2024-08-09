/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./pages/*.html", "./assets/css/*.css", "./assets/js/*.js"],
  theme: {
    container: {
      center: true,
      padding: '20px',
    },

    extend: {},
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

