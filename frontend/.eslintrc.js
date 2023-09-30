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
    "quotes": ["off", "single"]
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
