const fs = require("fs");
const path = require("path");

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
);

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["prettier", "redux-saga", "react", "jsx-a11y"],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "space-before-function-paren": 0,
    "react/jsx-boolean-value": 0
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "./internals/webpack/webpack.prod.babel.js"
      }
    }
  }
};
