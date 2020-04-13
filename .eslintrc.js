module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["airbnb", "plugin:@typescript-eslint/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint", "react-hooks"],
  rules: {
    "react/jsx-indent": [2, "tab"],
    "react/jsx-indent-props": [2, "tab"],
    "react/sort-comp": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".jsx", ".tsx"]
      }
    ],
    "react-hooks/exhaustive-deps": "warn",
    "no-use-before-define": 0,
    "no-underscore-dangle": 0,
    "no-tabs": 0,
    "no-plusplus": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    indent: "off",
    "class-methods-use-this": 0,
    "@typescript-eslint/indent": ["error", "tab"],
    "@typescript-eslint/no-use-before-define": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/camelcase": 0,
    "jsx-a11y/media-has-caption": 0,
    "react/jsx-props-no-spreading": 0,
    "no-nested-ternary": 0
  }
};