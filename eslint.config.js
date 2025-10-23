module.exports = {
    env: {
        node: true,
        es2022: true,
        jest: true
    },
    extends: [
        'eslint:recommended'
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module'
    },
    rules: {
        'no-console': 'off',
        'no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'indent': ['error', 2]
    },
    ignorePatterns: [
        'node_modules/',
        'coverage/',
        '*.min.js'
    ]
};
