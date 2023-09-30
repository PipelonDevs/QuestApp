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
    quotes: [2, 'single', {avoidEscape: true}],
    'no-unused-vars': "off",
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
