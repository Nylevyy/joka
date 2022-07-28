module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-plusplus': 'off',
    'class-methods-use-this': 'off',
    'array-callback-return': 'off',
    'arrow-body-style': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    'guard-for-in': 'warn',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'default-case': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true,
        ignoreRegExpLiterals: true,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],

    'require-jsdoc': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
    'no-case-declarations': 'off',
    'no-console': [
      2,
      {
        allow: ['info', 'warn', 'error'],
      },
    ],

    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',

    'react/jsx-no-target-blank': 'off',
    'react/no-danger': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-array-index-key': 'off',
    'react/button-has-type': 'off',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unescaped-entities': 'off',
    'react/destructuring-assignment': 'off',

    'jsx-a11y/img-redundant-alt': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/iframe-has-title': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'jsx-a11y/media-has-caption': 'off',
  },
};
