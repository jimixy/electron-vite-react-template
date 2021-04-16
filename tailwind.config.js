const theme = require("./tailwind-theme/index");

module.exports = {
  darkMode: false, // or 'media' or 'class'
  purge: {
    content: ["./src/renderer/index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    options: {
      whitelistPatterns: [/.*transition.*/],
      whitelistPatternsChildren: [/.*transition.*/],
    },
  },
  theme,
  variants: {
    outline: ["focus", "hover"],
    border: ["focus", "hover"],
  },
  plugins: [],
};
