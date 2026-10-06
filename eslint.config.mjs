import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx,mjs}"],
    rules: {
      "react/no-unescaped-entities": "off",
      "quotes": "off",
      "no-useless-escape": "off",
    },
  },
];

export default eslintConfig;

