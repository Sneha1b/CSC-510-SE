module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "plugin:react/recommended",
    "google",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars":"off",
    "react/prop-types": "off",
    "require-jsdoc" : "off"
  },
};
