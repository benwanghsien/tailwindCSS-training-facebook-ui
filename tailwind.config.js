module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "fb-bg": "#18191a",
        "fb-header": "#242526",
        "fb-input": "#3a3b3c",
        "fb-popover": "#3e4042",
        "fb-active": "#323436",
        "fb-card": "#242526",
        fb: "#2e89ff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
