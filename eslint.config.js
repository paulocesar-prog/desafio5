import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.jest
      }
    },
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
      'semi': ['warn', 'always'],
      'quotes': ['warn', 'single'],
      'indent': ['warn', 2]
    }
  },
  {
    ignores: [
      'node_modules/',
      'coverage/',
      '*.min.js'
    ]
  }
];
