import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  // new_materials — это 8 исходных проектов объединения (отдельные репозитории,
  // в .gitignore). Не линтуем их и сборочные артефакты.
  { ignores: ["dist", "new_materials"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
  // shadcn/ui — сторонние примитивы: пустые интерфейсы оставляем как есть.
  {
    files: ["src/components/ui/**/*.{ts,tsx}"],
    rules: { "@typescript-eslint/no-empty-object-type": "off" },
  },
  // Tailwind использует CJS require() для плагинов.
  {
    files: ["**/tailwind.config.ts"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
);
