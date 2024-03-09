module.exports = {
  root: true,
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "@limegrass/import-alias/import-alias": "error",
  },
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: "./",
  },
  plugins: ["@limegrass/import-alias"],
  extends: ["universe/native"],
};
