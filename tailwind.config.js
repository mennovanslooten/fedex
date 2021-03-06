const colors = require("tailwindcss/colors");

module.exports = (isProd) => ({
  prefix: "",
  purge: {
    enabled: isProd,
    content: ["**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: { opacity: ["disabled"] },
  },
  plugins: [require("@tailwindcss/forms")],
});
