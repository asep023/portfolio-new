// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Pastikan jalurnya benar untuk proyek React
    "./public/index.html"
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // pastikan ini ditambahkan jika menggunakan dark mode
  plugins: [],
}
