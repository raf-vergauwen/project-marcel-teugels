module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-idiomatic-order',
    'stylelint-config-prettier',
  ],
  rules: {
    'order/properties-alphabetical-order': null,
    'selector-class-pattern': null,
  },
};
