const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      current: "current",
      transparent: "transparent",
      pblue: "#112d4e",
      plightBlue: "#3f72af",
      plightWhiteBlue: "#dbe2ef",
      pwhite: "#9f7f7",
      pmaterial: "#2196f3",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
