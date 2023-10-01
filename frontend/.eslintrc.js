module.exports = {
  parser: 'babel-eslint',
  root: true,
  extends: ['plugin:react/recommended', 'eslint:recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  rules: {
    "quotes": ["off", "single"],
    "no-console": "off",
    "no-unused-vars": "off",
  },
  env: {
    browser: true,
    node: true,
  },
  globals: {
    React: true,
    JSX: true
  }
};
