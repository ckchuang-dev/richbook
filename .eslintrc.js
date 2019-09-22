module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  plugins: ['vue'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 1,
    semi: [2, 'never'],
    quotes: [2, 'single', { allowTemplateLiterals: true }],
    'space-before-function-paren': [
      1,
      {
        anonymous: 'ignore',
        named: 'ignore',
        asyncArrow: 'ignore'
      }
    ],
    'vue/max-attributes-per-line': [
      2,
      {
        singleline: 10,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'generator-star-spacing': 'off', // prettier not support
    'vue/script-indent': [2, 2, { baseIndent: 1, switchCase: 1 }],
    'vue/order-in-components': [
      1,
      {
        order: [
          'el',
          'name',
          'parent',
          'functional',
          ['delimiters', 'comments'],
          ['components', 'directives', 'filters'],
          'extends',
          'mixins',
          'inheritAttrs',
          'model',
          'fetch',
          ['props', 'propsData'],
          'asyncData',
          'data',
          'computed',
          'methods',
          'watch',
          'LIFECYCLE_HOOKS',
          ['template', 'render'],
          'renderError'
        ]
      }
    ]
  }
}
