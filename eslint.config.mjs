import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import { parser, configs } from 'typescript-eslint';

const IGNORE_PATTERNS = ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'];
const TS_FILE_GLOBS = ['**/*.{ts,tsx}'];
const JS_FILE_GLOBS = ['**/*.{js,jsx,mjs}'];

const eslintConfig = defineConfig([
  { name: 'ignores', ignores: IGNORE_PATTERNS },

  {
    name: 'language',
    linterOptions: { reportUnusedDisableDirectives: true },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },

  // #region Core
  {
    name: 'core',
    ...js.configs.recommended,
    rules: {
      'array-callback-return': ['error', { allowImplicit: false, checkForEach: true }],
      'no-await-in-loop': 'error',
      'no-inner-declarations': ['error', 'both'],
      'no-promise-executor-return': 'error',
      'no-self-compare': 'error',
      'no-template-curly-in-string': 'error',
      'no-unassigned-vars': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unreachable-loop': 'error',
      'no-useless-assignment': 'error',
      'require-atomic-updates': 'error',
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
      curly: ['error', 'all'],
      'default-case-last': 'error',
      eqeqeq: ['error', 'always'],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'guard-for-in': 'error',
      'logical-assignment-operators': ['error', 'always'],
      'no-alert': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-continue': 'error',
      'no-div-regex': 'error',
      'no-else-return': ['error', { allowElseIf: false }],
      'no-eval': 'error',
      'no-extend-native': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'no-implicit-globals': 'error',
      'no-iterator': 'error',
      'no-label-var': 'error',
      'no-labels': ['error', { allowLoop: false, allowSwitch: false }],
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-negated-condition': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-func': 'error',
      'no-new-wrappers': 'error',
      'no-object-constructor': 'error',
      'no-octal-escape': 'error',
      'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
      'no-proto': 'error',
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-sequences': 'error',
      'no-undef-init': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-useless-call': 'error',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'no-void': ['error', { allowAsStatement: true }],
      'no-warning-comments': [
        'warn',
        {
          terms: ['todo', 'fixme', 'hack', 'xxx'],
          location: 'anywhere',
        },
      ],
      'object-shorthand': ['error', 'always'],
      'one-var': ['error', 'never'],
      'operator-assignment': ['error', 'always'],
      'prefer-arrow-callback': ['error', { allowNamedFunctions: false, allowUnboundThis: true }],
      'prefer-const': [
        'error',
        {
          destructuring: 'all',
          ignoreReadBeforeAssign: true,
        },
      ],
      'prefer-exponentiation-operator': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-has-own': 'error',
      'prefer-object-spread': 'error',
      'prefer-regex-literals': ['error', { disallowRedundantWrapping: true }],
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'preserve-caught-error': 'error',
      radix: ['error', 'always'],
      'require-unicode-regexp': 'error',
      'symbol-description': 'error',
      yoda: ['error', 'never'],
      'unicode-bom': ['error', 'never'],
    },
  },
  // #endregion Core

  // #region TypeScript
  {
    name: 'typescript/setup',
    files: TS_FILE_GLOBS,
    languageOptions: {
      parser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
  },

  ...configs.strictTypeChecked,

  { name: 'typescript/disable-type-checked', files: JS_FILE_GLOBS, ...configs.disableTypeChecked },
  // #endregion TypeScript

  { name: 'prettier/disable-conflicting-rules', ...prettier },
]);

export default eslintConfig;
