module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
};

// module.exports = {
//   root: true,
//   env: {
//     browser: true,
//     es2021: true,
//     node: true,
//   },
//   extends: [
//     'plugin:vue/recommended',
//     'eslint:recommended',
//     'plugin:prettier/recommended',
//   ],
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     ecmaVersion: 12,
//     sourceType: 'module',
//   },
//   plugins: ['@babel', 'vue', 'prettier'],
// };
