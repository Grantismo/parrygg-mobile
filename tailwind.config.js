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
      sm: "4px",      
      DEFAULT: "10px",
      md: "12px",
      lg: "14px",
    },
  },
  plugins: [],
};
