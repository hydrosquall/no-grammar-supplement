module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['@sveltejs', 'eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['svelte3', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/array-type': 0
  },
  settings: {
    // "svelte3/typescript": () => require("typescript"), // pass the TypeScript package to the Svelte plugin
    // OR
    'svelte3/typescript': true // load TypeScript as peer dependency
    // ...
  }
};
