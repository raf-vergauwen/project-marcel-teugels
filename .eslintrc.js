module.exports = {
  root: true,
  // parser: '@babel/eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
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
    'standard',
    // 'plugin:import/recommended',
    // 'plugin:node/recommended',
    'plugin:nuxt/recommended',
    // 'plugin:prettier/recommended',
    // 'plugin:promise/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  rules: {
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    'vue/custom-event-name-casing': ['error', 'kebab-case'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'node/no-unsupported-features/es-syntax': [
      'warn',
      { ignores: ['modules'] },
    ],
    'vue/no-unused-properties': ['warn'],
  },
  globals: {
    $nuxt: true,
  },

  plugins: ['@babel', 'nuxt', 'vue', 'prettier'],
};
