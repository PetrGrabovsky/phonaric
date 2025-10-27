/** @type {import("prettier").Config} */
const prettierConfig = {
  printWidth: 100,
  singleQuote: true,
  objectWrap: 'collapse',
  plugins: [
    'prettier-plugin-tailwindcss',
    'prettier-plugin-packagejson',
    'prettier-plugin-prisma',
    'prettier-plugin-sort-json',
  ],
};

export default prettierConfig;
