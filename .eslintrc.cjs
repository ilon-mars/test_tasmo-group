/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-body-style': ['warn', 'as-needed'],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-var': 'error',
    'no-undef': 'off',
    'no-trailing-spaces': ['warn', { ignoreComments: true }],
    'vue/v-on-event-hyphenation': ['warn', 'never', { autofix: true }],
  },
  overrides: [
    {
      files: ['**/*.js'],
      rules: {
        'no-undef': 'error',
      },
    },
  ],
};
