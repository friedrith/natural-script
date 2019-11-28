module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier', 'eslint:recommended', 'plugin:node/recommended'],
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
  env: {
    es6: true,
    browser: true,
    'jest/globals': true,
  },
  rules: {
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-unpublished-require': 'off',
  },
}
