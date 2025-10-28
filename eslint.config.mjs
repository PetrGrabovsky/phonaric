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

  {
    name: 'typescript/custom',
    files: TS_FILE_GLOBS,
    rules: {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array-simple',
          readonly: 'array-simple',
        },
      ],
      '@typescript-eslint/ban-tslint-comment': 'error',
      '@typescript-eslint/consistent-generic-constructors': ['error', 'type-annotation'],
      '@typescript-eslint/consistent-indexed-object-style': ['error', 'record'],
      '@typescript-eslint/consistent-type-assertions': [
        'error',
        {
          assertionStyle: 'as',
          objectLiteralTypeAssertions: 'never',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-exports': [
        'error',
        { fixMixedExportsWithInlineTypeSpecifier: true },
      ],
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          prefer: 'type-imports',
          fixStyle: 'inline-type-imports',
        },
      ],
      '@typescript-eslint/default-param-last': 'error',
      '@typescript-eslint/dot-notation': [
        'error',
        {
          allowIndexSignaturePropertyAccess: true,
        },
      ],
      '@typescript-eslint/method-signature-style': ['error', 'property'],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'function',
          modifiers: ['exported'],
          filter: { match: true, regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$' },
          format: null,
        },
        {
          selector: 'variable',
          modifiers: ['exported', 'const'],
          filter: { match: true, regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$' },
          format: null,
        },
        {
          selector: 'variableLike',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        },
        { selector: 'function', format: ['camelCase', 'PascalCase'] },
        { selector: 'variable', types: ['function'], modifiers: ['const'], format: ['PascalCase'] },
        { selector: 'property', modifiers: ['requiresQuotes'], format: null },
        { selector: 'property', format: ['camelCase', 'snake_case'] },
        { selector: 'variable', modifiers: ['destructured'], format: null },
        {
          selector: 'typeAlias',
          format: ['PascalCase'],
          custom: { regex: '^T[A-Z]', match: false },
        },
        { selector: 'typeParameter', format: ['PascalCase'], prefix: ['T'] },
      ],
      '@typescript-eslint/no-confusing-non-null-assertion': 'error',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-import-type-side-effects': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'error',
        {
          ignoreParameters: false,
          ignoreProperties: false,
        },
      ],
      '@typescript-eslint/no-invalid-this': 'error',
      '@typescript-eslint/no-loop-func': 'error',
      '@typescript-eslint/no-loss-of-precision': 'error',
      '@typescript-eslint/no-magic-numbers': [
        'warn',
        {
          detectObjects: false,
          ignore: [0, 1, -1, 2],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
          enforceConst: true,
          ignoreNumericLiteralTypes: true,
        },
      ],
      '@typescript-eslint/no-redeclare': [
        'error',
        {
          ignoreDeclarationMerge: true,
        },
      ],
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'never',
          ignoreTypeValueShadow: true,
        },
      ],
      '@typescript-eslint/no-unnecessary-qualifier': 'error',
      '@typescript-eslint/no-unsafe-type-assertion': 'error',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: true,
          variables: true,
          enums: true,
          typedefs: false,
        },
      ],
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-destructuring': [
        'warn',
        {
          VariableDeclarator: { object: true, array: false },
          AssignmentExpression: { object: false, array: false },
        },
        { enforceForRenamedProperties: false, enforceForDeclarationWithTypeAnnotation: false },
      ],
      '@typescript-eslint/prefer-enum-initializers': 'error',
      '@typescript-eslint/prefer-find': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-includes': 'error',
      '@typescript-eslint/prefer-nullish-coalescing': [
        'error',
        {
          ignoreConditionalTests: true,
          ignoreMixedLogicalExpressions: true,
          ignorePrimitives: { string: true, number: true },
          ignoreTernaryTests: false,
          ignoreIfStatements: false,
        },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/promise-function-async': [
        'warn',
        {
          checkArrowFunctions: false,
          checkFunctionDeclarations: true,
          checkFunctionExpressions: true,
          checkMethodDeclarations: true,
          allowAny: true,
        },
      ],
      '@typescript-eslint/require-array-sort-compare': [
        'error',
        {
          ignoreStringArrays: true,
        },
      ],
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        {
          allowString: false,
          allowNumber: false,
          allowNullableObject: false,
          allowNullableBoolean: false,
          allowNullableString: false,
          allowNullableNumber: false,
          allowAny: false,
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },

  { name: 'typescript/disable-type-checked', files: JS_FILE_GLOBS, ...configs.disableTypeChecked },
  // #endregion TypeScript

  { name: 'prettier/disable-conflicting-rules', ...prettier },
]);

export default eslintConfig;
