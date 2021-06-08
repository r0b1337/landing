module.exports = {
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
  ],
  rules: {
    'curly': ['error', 'multi'],
    'semi': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
