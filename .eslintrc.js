module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true
  },
  extends: [
    'standard',
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prefer-const': 'error',
    'no-var': 'error',
    'indent': 'off',
    'semi': 'off',
    'space-before-function-paren': 'off',
    'quotes': 'off',
    'jest/no-alias-methods': 'off',
    'object-curly-spacing': 'off'
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      env: {
        jest: true
      }
    }
  ]
} 