module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'airbnb-base',
    'airbnb-typescript/base', 
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    project: './tsconfig.json'
  },
  plugin: ['prettier', '@typescript-eslint'],
  rules: {
    'import/extensions': 'off',
    'prettier/prettier': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        default: 'array',
      },
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'explicit',
          constructors: 'off',
          methods: 'explicit',
          parameterProperties: 'explicit',
          properties: 'explicit',
          }
      }
    ],
  },
  "@typescript-eslint/explicit-function-return-type": "error",
  "@typescript-eslint/no-unnecessary-type-assertion": "error",
  "@typescript-eslint/no-non-null-assertion": "error"
}
  