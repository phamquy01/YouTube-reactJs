const fs = require('fs');
const path = require('path');

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '.prettierrc'), 'utf8'),
);

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['jsx-a11y', 'prettier', 'react-hooks', 'react'],
  rules: {
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-console': 0,
    'no-unused-vars': [
      'error',
      { ignoreRestSiblings: true, argsIgnorePattern: '^_' },
    ],
    'react/jsx-props-no-spreading': 0,
    'import/no-unresolved': [0, { caseSensitive: false }],
    'react/no-children-prop': 0,
    'react/require-default-props': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'prettier/prettier': ['error', prettierOptions],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: true,
  },
};
