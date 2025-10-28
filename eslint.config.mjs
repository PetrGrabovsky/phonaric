import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import importPlugin from 'eslint-plugin-import';
import perfectionist from 'eslint-plugin-perfectionist';
import unicorn from 'eslint-plugin-unicorn';
import { defineConfig } from 'eslint/config';
import { configs, parser } from 'typescript-eslint';

const IGNORE_PATTERNS = ['node_modules/**', '.next/**', 'out/**', 'build/**', 'next-env.d.ts'];
const TS_FILE_GLOBS = ['**/*.{ts,tsx}'];
const JS_FILE_GLOBS = ['**/*.{js,jsx,mjs}'];

const eslintConfig = defineConfig([
  { ignores: IGNORE_PATTERNS, name: 'ignores' },

  {
    languageOptions: {
      ecmaVersion: 'latest',
      parserOptions: { ecmaFeatures: { jsx: true } },
      sourceType: 'module',
    },
    linterOptions: { reportUnusedDisableDirectives: true },
    name: 'language',
  },

  // #region Core
  {
    name: 'core',
    ...js.configs.recommended,
    rules: {
      'array-callback-return': ['error', { allowImplicit: false, checkForEach: true }],
      'arrow-body-style': ['error', 'as-needed', { requireReturnForObjectLiteral: true }],
      curly: ['error', 'all'],
      'default-case-last': 'error',
      eqeqeq: ['error', 'always'],
      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'guard-for-in': 'error',
      'logical-assignment-operators': ['error', 'always'],
      'no-alert': 'error',
      'no-await-in-loop': 'error',
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
      'no-inner-declarations': ['error', 'both'],
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
      'no-promise-executor-return': 'error',
      'no-proto': 'error',
      'no-return-assign': ['error', 'always'],
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-template-curly-in-string': 'error',
      'no-unassigned-vars': 'error',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': ['error', { defaultAssignment: false }],
      'no-unreachable-loop': 'error',
      'no-useless-assignment': 'error',
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
          location: 'anywhere',
          terms: ['todo', 'fixme', 'hack', 'xxx'],
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
      'require-atomic-updates': 'error',
      'require-unicode-regexp': 'error',
      'symbol-description': 'error',
      'unicode-bom': ['error', 'never'],
      yoda: ['error', 'never'],
    },
  },
  // #endregion Core

  // #region Import
  { name: 'import/recommended', ...importPlugin.flatConfigs.recommended },
  { name: 'import/typescript', ...importPlugin.flatConfigs.typescript },

  {
    name: 'import/custom',
    rules: {
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/extensions': [
        'error',
        'never',
        { ignorePackages: true, pattern: { json: 'always' } },
      ],
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-absolute-path': 'error',
      'import/no-amd': 'error',
      'import/no-anonymous-default-export': 'error',
      'import/no-commonjs': 'error',
      'import/no-cycle': ['error', { ignoreExternal: true, maxDepth: Infinity }],
      'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      'import/no-dynamic-require': 'error',
      'import/no-empty-named-blocks': 'error',
      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.{config,cfg}.{js,ts,mjs,cjs}',
            '**/*.config/index.{js,ts,mjs,cjs}',
          ],
          optionalDependencies: false,
        },
      ],
      'import/no-mutable-exports': 'error',
      'import/no-named-default': 'error',
      'import/no-namespace': 'warn',
      'import/no-relative-packages': 'error',
      'import/no-relative-parent-imports': 'error',
      'import/no-self-import': 'error',
      'import/no-unassigned-import': [
        'error',
        {
          allow: ['**/*.css'],
        },
      ],
      'import/no-useless-path-segments': 'error',
      'import/no-webpack-loader-syntax': 'error',
    },
    settings: { 'import/resolver': { typescript: true } },
  },
  // #endregion Import

  // #region Unicorn
  { name: 'unicorn/recommended', ...unicorn.configs.recommended },

  {
    name: 'unicorn/custom',
    rules: {
      'unicorn/better-regex': ['error', { sortCharacterClasses: false }],
      'unicorn/consistent-destructuring': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/no-null': 'off',
      'unicorn/prefer-import-meta-properties': 'error',
      'unicorn/prefer-json-parse-buffer': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/require-post-message-target-origin': 'error',
    },
  },
  // #endregion Unicorn

  // #region TypeScript
  {
    files: TS_FILE_GLOBS,
    languageOptions: {
      parser,
      parserOptions: { projectService: true, tsconfigRootDir: import.meta.dirname },
    },
    name: 'typescript/setup',
  },

  ...configs.strictTypeChecked,

  {
    files: TS_FILE_GLOBS,
    name: 'typescript/custom',
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
          fixStyle: 'inline-type-imports',
          prefer: 'type-imports',
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
          filter: { match: true, regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$' },
          format: null,
          modifiers: ['exported'],
          selector: 'function',
        },
        {
          filter: { match: true, regex: '^(GET|POST|PUT|PATCH|DELETE|HEAD|OPTIONS)$' },
          format: null,
          modifiers: ['exported', 'const'],
          selector: 'variable',
        },
        {
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          selector: 'variableLike',
          trailingUnderscore: 'forbid',
        },
        {
          format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          modifiers: ['const'],
          selector: 'variable',
        },
        { format: ['camelCase', 'PascalCase'], selector: 'function' },
        { format: ['PascalCase'], modifiers: ['const'], selector: 'variable', types: ['function'] },
        { format: null, modifiers: ['requiresQuotes'], selector: 'property' },
        { format: ['camelCase', 'snake_case'], selector: 'property' },
        { format: null, modifiers: ['destructured'], selector: 'variable' },
        {
          custom: { match: false, regex: '^T[A-Z]' },
          format: ['PascalCase'],
          selector: 'typeAlias',
        },
        { format: ['PascalCase'], prefix: ['T'], selector: 'typeParameter' },
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
          enforceConst: true,
          ignore: [0, 1, -1, 2],
          ignoreArrayIndexes: true,
          ignoreDefaultValues: true,
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
          classes: true,
          enums: true,
          functions: false,
          typedefs: false,
          variables: true,
        },
      ],
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-destructuring': [
        'warn',
        {
          AssignmentExpression: { array: false, object: false },
          VariableDeclarator: { array: false, object: true },
        },
        { enforceForDeclarationWithTypeAnnotation: false, enforceForRenamedProperties: false },
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
          ignoreIfStatements: false,
          ignoreMixedLogicalExpressions: true,
          ignorePrimitives: { number: true, string: true },
          ignoreTernaryTests: false,
        },
      ],
      '@typescript-eslint/prefer-optional-chain': 'error',
      '@typescript-eslint/prefer-readonly': 'error',
      '@typescript-eslint/prefer-string-starts-ends-with': 'error',
      '@typescript-eslint/prefer-ts-expect-error': 'error',
      '@typescript-eslint/promise-function-async': [
        'warn',
        {
          allowAny: true,
          checkArrowFunctions: false,
          checkFunctionDeclarations: true,
          checkFunctionExpressions: true,
          checkMethodDeclarations: true,
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
          allowAny: false,
          allowNullableBoolean: false,
          allowNullableNumber: false,
          allowNullableObject: false,
          allowNullableString: false,
          allowNumber: false,
          allowString: false,
        },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
  },

  { files: JS_FILE_GLOBS, name: 'typescript/disable-type-checked', ...configs.disableTypeChecked },
  // #endregion TypeScript

  {
    name: 'perfectionist',
    ...perfectionist.configs['recommended-natural'],
  },

  { name: 'prettier/disable-conflicting-rules', ...prettier },
]);

export default eslintConfig;
