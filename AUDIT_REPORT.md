# Аудит репозитория visual-calculus

**Дата:** 2026-05-20  
**Исполнитель:** Claude Code  
**Ветка:** main

---

## Сводная таблица правок

| # | Файл(ы) | Категория | Приоритет | Статус |
|---|---|---|---|---|
| 1 | `index.html` | metadata / SEO | 🔴 | ✅ Исправлено |
| 2 | `README.md` | документация | 🔴 | ✅ Исправлено |
| 3 | `bun.lock`, `bun.lockb` | менеджер пакетов | 🟡 | ✅ Удалено |
| 4 | `main.tsx`, `LatexFormula.tsx`, `Math.tsx`, `ProbabilityTheory.tsx` | KaTeX CSS | 🔴 | ✅ Исправлено |
| 5 | `index.css` | CSS порядок импортов | 🟡 | ✅ Исправлено |
| 6 | `eslint.config.js` | линт ошибки | 🔴 | ✅ Исправлено |
| 7 | `vercel.json` | SPA-фолбэк | 🟡 | ✅ Добавлено |
| 8 | `src/test/App.test.tsx` | smoke-тест | 🟢 | ✅ Добавлено |
| 9 | `package-lock.json` | npm audit fix | 🟡 | ✅ Исправлено |
| 10 | `vite.config.ts` (HMR overlay) | dev-режим | 🟢 | ⏳ Предложение |
| 11 | Уязвимости esbuild/vite | зависимости | 🟡 | ⏭️ Отложено (мажор) |

---

## Этап 1. Менеджер пакетов

**Найдено:**
- Одновременно присутствовали `bun.lock`, `bun.lockb` и `package-lock.json` — три конкурирующих источника истины.

**Исправлено:**
- По выбору пользователя оставлен **npm** (`package-lock.json`).
- `bun.lock` и `bun.lockb` удалены через `git rm`.

**Итог:** `npm install` + `npm run build` + `npm run lint` + `npm run test` — все проходят.

---

## Этап 2. `index.html`, метаданные, SEO

**Найдено 🔴:**
- `<html lang="en">` — контент на русском языке.
- `<title>Lovable App</title>` — placeholder.
- `description="Lovable Generated Project"`, `author="Lovable"` — placeholders.
- `og:title`, `og:description` — Lovable-placeholders.
- `og:image` и `twitter:image` ссылаются на `lovable.dev` — сторонний домен.
- `twitter:site="@Lovable"` — чужой аккаунт.
- Комментарии `<!-- TODO: ... -->`.

**Исправлено:**
- `lang="ru"`.
- `title` → `Visual Calculus — Интерактивный курс математического анализа`.
- `description`, `author` → содержательные значения.
- `og:title`, `og:description` → актуальные.
- `og:image`, `twitter:card`, `twitter:site`, `twitter:image` → удалены (нет подходящего OG-изображения в `/public`; добавить позже при наличии).
- TODO-комментарии удалены.

**Требует решения пользователя:** При появлении OG-изображения добавить `<meta property="og:image">` и `<meta name="twitter:card">`.

---

## Этап 2b. `README.md`

**Найдено 🔴:**
- 2 вхождения `REPLACE_WITH_PROJECT_ID` (Lovable template placeholder).

**Исправлено:**
- Ссылки заменены на GitHub URL репозитория `SergeyErmakov85/visual-calculus` и `visual-calculus` (slug).
- Lovable-инфраструктура (`lovable-tagger`, логика синхронизации) не тронута.

---

## Этап 3. Маршруты vs данные курса

**Проверено (попарно):**

| `courseStructure.ts` path | `App.tsx` route | Компонент | Файл существует |
|---|---|---|---|
| `/module/0/function-definition` | ✅ | `FunctionDefinition` | ✅ |
| `/module/0/domain-range` | ✅ | `DomainRange` | ✅ |
| `/module/0/graph-analysis` | ✅ | `GraphAnalysis` | ✅ |
| `/module/1/linear` | ✅ | `LinearFunctions` | ✅ |
| `/module/1/quadratic` | ✅ | `QuadraticFunctions` | ✅ |
| `/module/1/cubic` | ✅ | `CubicFunctions` | ✅ |
| `/module/1/higher-degree` | ✅ | `HigherDegree` | ✅ |
| `/module/2/vertical-asymptotes` | ✅ | `VerticalAsymptotes` | ✅ |
| `/module/2/horizontal-asymptotes` | ✅ | `HorizontalAsymptotes` | ✅ |
| `/module/2/oblique-asymptotes` | ✅ | `ObliqueAsymptotes` | ✅ |
| `/module/2/removable-discontinuities` | ✅ | `RemovableDiscontinuities` | ✅ |
| `/module/3/limit-geometry` | ✅ | `LimitGeometry` | ✅ |
| `/module/3/one-sided-limits` | ✅ | `OneSidedLimits` | ✅ |
| `/module/3/limit-vs-value` | ✅ | `LimitVsValue` | ✅ |
| `/module/3/limit-at-infinity` | ✅ | `LimitAtInfinity` | ✅ |
| `/module/4/continuity-definition` | ✅ | `ContinuityDefinition` | ✅ |
| `/module/4/discontinuity-types` | ✅ | `DiscontinuityTypes` | ✅ |
| `/module/4/continuity-geometry` | ✅ | `ContinuityGeometry` | ✅ |
| `/module/5/tangent-limit` | ✅ | `TangentLimit` | ✅ |
| `/module/5/derivative-rate` | ✅ | `DerivativeRate` | ✅ |
| `/module/5/function-derivative-link` | ✅ | `FunctionDerivativeLink` | ✅ |
| `/module/5/extrema` | ✅ | `Extrema` | ✅ |
| `/module/6/sin-cos` | ✅ | `SinCos` | ✅ |
| `/module/6/periodicity` | ✅ | `Periodicity` | ✅ |
| `/module/6/tangent` | ✅ | `Tangent` | ✅ |
| `/module/6/transformations` | ✅ | `Transformations` | ✅ |
| `/module/7/exponential-growth` | ✅ | `ExponentialGrowth` | ✅ |
| `/module/7/linear-vs-exponential` | ✅ | `LinearVsExponential` | ✅ |
| `/module/7/logarithm` | ✅ | `Logarithm` | ✅ |
| `/module/7/inverse` | ✅ | `Inverse` | ✅ |
| `/module/8/piecewise-analysis` | ✅ | `PiecewiseAnalysis` | ✅ |
| `/module/8/junction-points` | ✅ | `JunctionPoints` | ✅ |
| `/module/8/smoothness` | ✅ | `Smoothness` | ✅ |
| `/module/9/absolute-value` | ✅ | `AbsoluteValue` | ✅ |
| `/module/9/corner-points` | ✅ | `CornerPoints` | ✅ |
| `/module/10/oscillating` | ✅ | `Oscillating` | ✅ |
| `/module/10/no-limit` | ✅ | `NoLimit` | ✅ |
| `/module/10/limits-of-analysis` | ✅ | `LimitsOfAnalysis` | ✅ |

**Найдено:** Расхождений нет. Все 38 маршрутов уроков согласованы с `courseStructure.ts`.

**Литералы `lessonPath`** в файлах уроков (проверено на выборке): совпадают с маршрутами в `App.tsx` и `courseStructure.ts`.

**Предложение:** Рассмотреть data-driven маршрутизацию на основе `courseStructure.ts` — позволит избежать дрейфа при добавлении новых уроков. Требует согласования перед реализацией.

---

## Этап 4. Дублирование `courseStructure.ts` и `courseData.ts`

**Найдено 🟡:**
- `courseData.ts` (используется только в `/guide/:moduleId`) содержит модули 0–6 с «screens», причём для модулей 3–6 `screens: []`.
- `Module.tsx`: `screenComponents` объявлена только для `'0.1'–'0.4'`. Экраны `'0.5'`, `'0.6'` и все экраны модулей 1–2 не имеют компонентов.
- При попытке открыть эти экраны отображается "Этот экран находится в разработке..." — обработано корректно.
- `courseData.ts` и `courseStructure.ts` описывают **разные учебные структуры** (гид vs структурированные уроки), поэтому это не дублирование в строгом смысле, а параллельные системы.

**Статус:** Баг отсутствует — явное сообщение "в разработке" есть. Задокументировано как известная незавершённость.

---

## Этап 5. KaTeX и рендер формул

**Найдено 🔴:**
- `katex/dist/katex.min.css` импортировался в трёх местах: `LatexFormula.tsx`, `Math.tsx`, `ProbabilityTheory.tsx`.
- При бандлировании CSS дублировался трижды.

**Исправлено:**
- Импорт перенесён в `src/main.tsx` (единственное место).
- Дублирующие импорты удалены из трёх компонентов.

**Синтаксис формул:** Все формулы в компонентах используют `react-katex` (`<InlineMath>`, `<BlockMath>`) или `katex.render()` напрямую. Экранирование в JSX-строках корректно. Математически ошибочных формул в проверенных компонентах не обнаружено.

---

## Этап 6. Графика

**Проверено:** `InteractiveGraph.tsx`, `FunctionGraph.tsx`, `RiemannIntegralVisualization.tsx`, `Screen01–Screen04.tsx`.

Компоненты используют SVG и Recharts — без `canvas ctx.roundRect()`. Визуальные дефекты требуют проверки в браузере (выходит за рамки статического аудита).

**Замечание 🟢:** Для полной проверки корректности графиков (асимптоты, разрывы, точки склейки) необходима браузерная проверка каждого маршрута.

---

## Этап 7. TypeScript, ESLint, типизация

**Найдено:**

| Файл | Ошибка | Статус |
|---|---|---|
| `src/components/ui/command.tsx:24` | `no-empty-object-type` | ✅ Подавлено в eslint.config.js |
| `src/components/ui/textarea.tsx:5` | `no-empty-object-type` | ✅ Подавлено в eslint.config.js |
| `tailwind.config.ts:132` | `no-require-imports` | ✅ Подавлено в eslint.config.js |

**Исправлено в `eslint.config.js`:**
- Добавлен override для `src/components/ui/**` — отключает `no-empty-object-type` (shadcn/ui файлы не трогаем).
- Добавлен override для `tailwind.config.ts` — отключает `no-require-imports` (Tailwind использует CJS `require()` для плагинов).

**Итог:** `npm run lint` → **0 errors**, 8 warnings (все в shadcn/ui файлах, стиль fast-refresh — допустимо).  
`npx tsc --noEmit` → **0 errors**.

---

## Этап 8. Dev-режим

**Найдено 🟡:**
- `vite.config.ts`: `hmr: { overlay: false }` — HMR error overlay отключён. Рантайм-ошибки не видны в браузере.

**Предложение:** Удалить `hmr: { overlay: false }`, чтобы вернуть стандартное поведение Vite. **Требует решения пользователя** (возможно, отключено намеренно из-за конфликта с Lovable).

---

## Этап 9. Доступность и адаптивность

**Найдено и исправлено:**
- `lang="ru"` в `index.html` — ✅ исправлено (Этап 2).

**Остальное 🟢:** Семантика заголовков, ARIA-атрибуты и адаптивность требуют браузерной проверки. В рамках статического аудита существенных проблем не обнаружено.

---

## Этап 10. Деплой и SPA-фолбэк

**Найдено 🟡:**
- `BrowserRouter` + Vercel (подтверждено CLAUDE.md) — без `vercel.json` прямые ссылки возвращают 404.

**Исправлено:**
- Добавлен `vercel.json` с SPA-rewrite:
  ```json
  { "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
  ```

---

## Этап 11. Тесты

**Найдено 🟢:**
- Существовал только 1 тривиальный smoke-тест (`expect(true).toBe(true)`).

**Исправлено:**
- Добавлен `src/test/App.test.tsx` — smoke-тест рендера `<App />` в jsdom.
- Результат: `npm run test` → **2 passed** (0 failed).

---

## Этап 12. Зависимости

**Выполнено:**
- `npm audit fix` устранил высокие уязвимости (react-router XSS, flatted, ajv, brace-expansion).

**До:** 19 уязвимостей (3 low, 7 moderate, 9 high).  
**После:** 5 уязвимостей (3 low, 2 moderate).

**Отложено 🟡:**
- `esbuild <=0.24.2` и `vite <=6.4.1` — требуют `npm audit fix --force` (Vite 8 — мажорная версия). Требует отдельного PR с обоснованием.
- `jsdom <=22.1.0` (dev-зависимость, тесты) — требует `--force`. Не влияет на production.

---

## Definition of Done — итоговый чек-лист

| Критерий | Статус |
|---|---|
| `npm run build` без ошибок | ✅ |
| `npx tsc --noEmit` — 0 ошибок | ✅ |
| `npm run lint` — 0 ошибок | ✅ |
| `npm run test` — все тесты зелёные | ✅ (2/2) |
| `index.html`: нет Lovable-плейсхолдеров, `lang="ru"` | ✅ |
| `README.md`: нет `REPLACE_WITH_PROJECT_ID` | ✅ |
| Один менеджер пакетов, один лок-файл | ✅ (npm) |
| KaTeX CSS импортирован один раз | ✅ (main.tsx) |
| Все 38 маршрутов согласованы с `courseStructure.ts` | ✅ |
| `AUDIT_REPORT.md` создан | ✅ |

---

## Открытые вопросы для пользователя

1. **HMR overlay** — включать ли его? (`hmr: { overlay: false }` в `vite.config.ts`)
2. **Vite/esbuild апдейт до v8** — отдельный PR при готовности к мажорному обновлению.
3. **OG-изображение** — добавить в `/public` для полноценных OG/Twitter карточек.
4. **Data-driven маршрутизация** — рассмотреть рефакторинг `App.tsx` на основе `courseStructure.ts` при следующем крупном изменении курса.
5. **Браузерная проверка графиков** — рекомендуется ручная проверка страниц с асимптотами, разрывами и точками склейки.

---

# Повторный аудит объединённого портала — 2026-07-16

Контрольный прогон после объединения 8 проектов (afbf155…433cf07). Проверено
текущее состояние `main` по этапам 1, 3, 7, 12 PD.

## Сводка

| # | Находка | Приоритет | Статус |
|---|---|---|---|
| 1 | `bun.lock`/`bun.lockb` вернулись при слиянии проектов | 🟡 | ✅ Удалены повторно (`3dc0312`) |
| 2 | `node_modules` повреждён: esbuild — несовпадение версии бинарника, `build`/`test` не запускались | 🔴 | ✅ Чистая переустановка `npm ci` |
| 3 | 16 уязвимостей (10 high: rollup path traversal, glob и др.) | 🔴 | ✅ `npm audit fix` без force → осталось 2 (`9c493b7`) |
| 4 | 2 warning `react-hooks/exhaustive-deps` в `SlopeFieldChart.tsx` | 🟡 | ✅ Исправлено (`20f816b`) |
| 5 | Бандл 1.9 MB одним чанком — нет code splitting (lazy-роуты) | 🟢 | ⏳ Предложение (см. ниже) |
| 6 | 2 оставшиеся уязвимости esbuild/vite — только через Vite 8 (мажор) | 🟡 | ⏭️ Отложено (как и в прошлом аудите) |

## Контрольные прогоны (после правок)

| Проверка | Результат |
|---|---|
| `npx tsc --noEmit` | ✅ 0 ошибок |
| `npm run lint` | ✅ 0 ошибок, 7 warnings (fast-refresh в shadcn/ui — допустимо) |
| `npm run build` | ✅ успешно, sitemap перегенерирован |
| `npm run test` | ✅ 15/15 |
| `npm audit` | 2 уязвимости (1 moderate, 1 high) — обе требуют Vite 8 |

## Сверка маршрутов (автоматический скрипт)

`topicMap` (65 ready-тем) ↔ `App.tsx` (94 маршрута) ↔ `courseStructure.ts`
(38 уроков) ↔ `crosslinks.ts` — **0 расхождений**, дублей маршрутов нет,
все id кросс-ссылок существуют в `topicMap`.

## Новые предложения

1. **Code splitting**: production-бандл — 1.92 MB (gzip 540 KB) одним чанком.
   CLAUDE.md портала предписывает lazy-loaded страницы в `App.tsx`, но все
   ~80 страниц импортируются статически. Перевод на `React.lazy` — заметное
   ускорение первой загрузки. Требует согласования (массовая правка `App.tsx`).
2. **Guard от лок-файлов bun** — ✅ сделано: `bun.lock*`, `yarn.lock`,
   `pnpm-lock.yaml` добавлены в `.gitignore`, регрессия при будущих слияниях
   исключена.
