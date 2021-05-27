module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier/vue',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  globals: {
    $nuxt: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@babel/eslint-parser',
    sourceType: 'module',
  },
  plugins: ['@babel', 'vue', 'prettier'],
};
