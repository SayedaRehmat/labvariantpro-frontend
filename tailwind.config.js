module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1d4ed8",
        accent: "#00C6A7"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};
