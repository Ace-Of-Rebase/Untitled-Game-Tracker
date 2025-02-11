import js from '@eslint/js'
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from "globals";
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    name: "my-custom-eslint/ignore-dist-folders",
    ignores: ["dist", "public"],
  },
  {
    name: "my-custom-eslint/recommended-js",
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    extends: [js.configs.recommended],
    rules: {
      "no-var": "error",
      "prefer-const": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
    },
  },
  {
    name: "my-custom-eslint/recommended-ts",
    files: ["src/**/*.{ts,tsx}"],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      eslintPluginImportX.flatConfigs.typescript,
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
  },
  {
    name: "my-custom-eslint/recommended-import-x",
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    extends: [eslintPluginImportX.flatConfigs.recommended],
    settings: {
      "import-x/resolver": {
        alias: {
          // eslint-import-resolver-alias
          map: [
            ["", "./public"], // <-- so eslint knows that vite treats "/" as "public" folder in the root dir
          ],
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
  },
  {
    name: "my-custom-eslint/recommended-react-and-jsx",
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    extends: [
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat["jsx-runtime"],
      jsxA11y.flatConfigs.recommended,
    ],
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
  {
    name: "my-custom-eslint/eslint-config-prettier",
    files: ["src/**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    extends: [eslintConfigPrettier],
  }
);
