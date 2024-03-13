const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('twnrc').TWConfig} */
module.exports = {
  content: ["./**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      ...defaultTheme.fontSize,
      base: "16px",
    },
    borderRadius: {
      ...defaultTheme.borderRadius,
      DEFAULT: "10px",
      md: "12px",
      lg: "14px",
    },
  },
  plugins: [],
};
