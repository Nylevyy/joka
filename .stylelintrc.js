module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-idiomatic-order'],
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-order', 'stylelint-scss'],
  rules: {
    'no-descending-specificity': null,
    'declaration-block-no-duplicate-properties': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'export'],
      },
    ],
    'max-empty-lines': 1,
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
  },
};
