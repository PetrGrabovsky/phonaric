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
  { name: 'core', ...js.configs.recommended },
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
