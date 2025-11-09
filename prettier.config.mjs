/** @type {import("prettier").Config} */
const prettierConfig = {
  plugins: [
    '@prettier/plugin-xml',
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson',
    'prettier-plugin-prisma',
    'prettier-plugin-sort-json',
  ],
  printWidth: 100,
  proseWrap: 'preserve',
  singleQuote: true,
};

export default prettierConfig;
