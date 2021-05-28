module.exports = {
  root: true,
  parser: '@babel/eslint-parser',

  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    '@nuxtjs',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:node/recommended',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'plugin:promise/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  rules: {
    'vue/component-name-in-template-casing': ['error', 'PascalCase'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'node/no-unsupported-features/es-syntax': [
      'error',
      { ignores: ['modules'] },
    ],
  },
  globals: {
    $nuxt: true,
  },

  plugins: [
    '@babel',
    'import',
    'jsx-a11y',
    'node',
    'nuxt',
    'prettier',
    'promise',
    'vue',
  ],
};
