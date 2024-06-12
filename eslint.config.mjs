export default [
  {
    ignores: ['node_modules/', 'ios/', 'android/', 'build/', 'dist/'],
  },
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: require('eslint-plugin-react'),
      'react-hooks': require('eslint-plugin-react-hooks'),
      'react-native': require('eslint-plugin-react-native'),
      import: require('eslint-plugin-import'),
      'jsx-a11y': require('eslint-plugin-jsx-a11y'),
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:react-native/all',
      'airbnb',
    ],
    rules: {
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'off',
      'no-use-before-define': ['error', { functions: false, classes: true, variables: true }],
      'react-native/no-inline-styles': 'off',
      'react-native/no-raw-text': 'off',
      'react/prop-types': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
];
