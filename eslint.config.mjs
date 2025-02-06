import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:tailwindcss/recommended"
  ),
  {
    rules: {
      "tailwindcss/classnames-order": [
        "warn",
        {
          officialSorting: true,
          prependCustom: true,
          multiline: true,
          whitespace: true,
        },
      ],
    },
  },
];

export default eslintConfig;
