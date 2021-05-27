module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  plugins: [],
};
