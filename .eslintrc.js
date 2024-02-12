module.exports = {
  root: true,
  extends: '@react-native',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'jest'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
        'react-native/no-inline-styles': 0,
        'react/react-in-jsx-scope': 'off',
        'no-return-assign': 'off',
        camelcase: 'off',
        curly: 'off',
      },
    },
  ],
  rules: {
    semi: 'off',
  },
}
