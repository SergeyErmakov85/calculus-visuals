# CLAUDE.md — MathPulse

Инструкции для Claude Code при работе с репозиторием платформы высшей математики **calculus-visuals**.

---

## Команды

```bash
npm i              # установить зависимости
npm run dev        # dev-сервер (Vite, localhost:5173)
npm run build      # production-сборка
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
```

Тестов нет.

---

## Стек

| Слой | Технология |
|---|---|
| Сборка | Vite 5 + React 18 + TypeScript |
| Стили | Tailwind CSS v3 + shadcn/ui |
| Роутинг | react-router-dom v6 (lazy-loaded страницы) |
| Математика | **KaTeX** (CDN, динамическая загрузка) |
| Графики | **custom SVG/JSX** — без canvas ctx.roundRect() |
| Анимации | **framer-motion** |
| Иконки | **lucide-react** |
| Хранилище прогресса | localStorage |
| Деплой | Vercel (push to main → auto deploy) |

---

## Дизайн-система — Neon Kinetic

### Философия

Стиль идентичен Neon Unity Neural: тёмный фон, неоновые акценты, glassmorphism-карточки, кинетические анимации появления. Математика визуально живая — формулы, графики и теоремы подсвечены акцентными цветами.

### Цветовые токены (CSS-переменные в `src/index.css`)

```css
:root {
  --bg:           #06080D;
  --card:         rgba(12, 16, 28, 0.70);
  --border:       rgba(255, 255, 255, 0.05);

  --cyan:         #00FFD6;   /* primary — определения, теоремы */
  --cyan-dim:     rgba(0, 255, 214, 0.35);
  --magenta:      #D946EF;   /* accent — выводы, результаты */
  --mag-dim:      rgba(217, 70, 239, 0.35);
  --amber:        #FBBF24;   /* предупреждения, нюансы */
  --green:        #34D399;   /* правильные ответы, доказательства */
  --red:          #F87171;   /* ошибки, исключения */
  --blue:         #60A5FA;   /* примеры, пояснения */

  --txt:          #F4F7FC;   /* основной текст */
  --txt-dim:      #B0B8CE;   /* вспомогательный */
  --txt-muted:    #6B7490;   /* подписи, метки */
}
```

### Семантические Tailwind-токены (использовать только их)

| Назначение | Токен |
|---|---|
| Главные понятия, теоремы | `text-primary` (cyan) |
| Контекст, пояснения | `text-secondary` (purple) |
| Акцентные результаты | `text-accent` (pink/magenta) |
| Стандартная карточка | `bg-card/60 backdrop-blur-sm border-primary/30` |
| Hover glow cyan | `hover:shadow-glow-cyan` |
| Hover glow purple | `hover:shadow-glow-purple` |

**Никогда** не использовать: `text-blue-500`, `#fff`, `bg-gray-900` или любые hex-значения в TSX-компонентах.

### Шрифты

```css
/* Подключаются через Google Fonts в index.html */
font-family: 'Orbitron'      /* display — заголовки страниц, названия теорем */
font-family: 'JetBrains Mono' /* mono — формулы, код, числа */
font-family: 'IBM Plex Sans'  /* sans — основной текст, пояснения */
```

---

## Архитектура — источники истины

```
src/
├── content/
│   ├── topicMap.ts          ← ВСЕ темы и разделы (единственный источник истины)
│   ├── lessonContextLinks.ts ← ссылки из уроков → темы
│   └── topics.ts            ← метаданные тем (иконки, описания)
├── config/
│   └── crosslinks.ts        ← двунаправленные ссылки урок ↔ тема
├── pages/
│   ├── TopicPage*.tsx        ← страницы тем (как хабы в NUN)
│   └── Lesson*.tsx           ← страницы уроков
├── components/
│   ├── math/                 ← математические компоненты (см. ниже)
│   ├── lesson-X-Y/           ← sub-компоненты конкретных уроков
│   └── ui/                   ← shadcn/ui + кастомные ui-примитивы
└── lib/
    └── progress.ts           ← localStorage: прогресс, XP, стрики
```

### `topicMap.ts` — никогда не дублировать

```ts
export interface Topic {
  id: string;           // "calculus-limits"
  title: string;
  slug: string;         // "/topics/calculus-limits"
  level: 1 | 2 | 3;    // начальный / средний / продвинутый
  tags: string[];
  lessons: string[];    // IDs уроков
}

export const TOPIC_MAP: Topic[] = [ /* ... */ ];
```

---

## Математические компоненты — обязательные форматы

### `<Math>` — KaTeX

```tsx
// Inline
<Math>{"x^2 + y^2 = r^2"}</Math>

// Display (блочная, центрированная)
<Math display>{"\\int_{-\\infty}^{\\infty} e^{-x^2}\\,dx = \\sqrt{\\pi}"}</Math>
```

Реализация: динамическая загрузка KaTeX через CDN при первом рендере. **Никогда** не использовать markdown-матиматику (```$...$``` в .md файлах). Только `<Math>` компонент.

```tsx
// src/components/math/Math.tsx
import { useEffect, useRef } from "react";

declare global { interface Window { katex: any } }

let katexLoaded = false;
const loadKatex = () => {
  if (katexLoaded) return Promise.resolve();
  return new Promise<void>((resolve) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css";
    document.head.appendChild(link);
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js";
    script.onload = () => { katexLoaded = true; resolve(); };
    document.head.appendChild(script);
  });
};

export function Math({ children, display = false }: { children: string; display?: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    loadKatex().then(() => {
      if (ref.current && window.katex) {
        window.katex.render(children, ref.current, {
          displayMode: display,
          throwOnError: false,
          trust: true,
        });
      }
    });
  }, [children, display]);
  return <span ref={ref} className={display ? "block text-center my-4" : "inline"} />;
}
```

### `<DerivationBlock>` — пошаговый вывод формулы

Обязательный компонент для всех мест, где объясняется «как получена формула».

```tsx
// src/components/math/DerivationBlock.tsx
// Каждый шаг — строка с формулой + пояснением.
// Шаги разворачиваются по одному при нажатии "Следующий шаг" ИЛИ все сразу.
// Последний шаг подсвечивается cyan-рамкой как «результат».

interface DerivationStep {
  formula: string;       // LaTeX
  explanation: string;   // текст
  isResult?: boolean;    // подсветить как итог
}

interface DerivationBlockProps {
  title: string;
  steps: DerivationStep[];
  initiallyOpen?: boolean; // false → свёрнуто
}
```

**Визуальные требования к `<DerivationBlock>`:**
- Заголовок с иконкой `<FlaskConical>` и меткой `ВЫВОД` в стиле `text-xs text-txt-muted uppercase tracking-widest`
- Каждый шаг: левый border `border-l-2 border-cyan-500/40`, формула отрендерена через `<Math display>`, пояснение — `text-txt-dim text-sm leading-relaxed`
- Шаг с `isResult: true` — `border-l-2 border-cyan-400 bg-cyan-500/05 rounded-r-lg`
- Кнопки «Следующий шаг» / «Показать всё» / «Свернуть» в стиле `variant="ghost"` с cyan-hover

### `<TheoremBox>` — теоремы, леммы, следствия

```tsx
// src/components/math/TheoremBox.tsx

type TheoremVariant = "theorem" | "lemma" | "corollary" | "definition" | "axiom" | "example";

interface TheoremBoxProps {
  variant: TheoremVariant;
  name?: string;          // "Теорема Лагранжа"
  children: ReactNode;    // JSX с <Math> внутри
}
```

**Цвет левого border по variant:**

| variant | border color | label |
|---|---|---|
| `theorem` | `border-cyan-400` | ТЕОРЕМА |
| `lemma` | `border-blue-400` | ЛЕММА |
| `corollary` | `border-purple-400` | СЛЕДСТВИЕ |
| `definition` | `border-amber-400` | ОПРЕДЕЛЕНИЕ |
| `axiom` | `border-red-400` | АКСИОМА |
| `example` | `border-green-400` | ПРИМЕР |

Фон всегда `bg-card/60 backdrop-blur-sm`. Метка — `font-family: Orbitron, font-size: 11px, letter-spacing: 0.18em`.

### `<InteractiveGraph>` — интерактивные графики

**Технические требования:**
- Только SVG (не canvas) для статических и интерактивных графиков
- Для анимаций: `requestAnimationFrame` через `useRef`
- Никогда `ctx.roundRect()` — закруглённые углы только через SVG `rx`/`ry`
- Переключатели (show/hide, toggle) внутри RAF-петель — только через `useRef`, не `useState`
- Ползунки через `<Slider>` (см. паттерн из infinite-series-viz)

```tsx
// src/components/math/InteractiveGraph.tsx
// Базовый wrapper для SVG-графиков.
// Принимает width/height, viewBox, children (SVG elements).
// Добавляет: нeon-рамку, заголовок, подпись осей, легенду.
```

**Цветовая палитра для графиков:**
- Первая функция: `#00FFD6` (cyan)
- Вторая функция: `#D946EF` (magenta)
- Третья функция: `#FBBF24` (amber)
- Четвёртая функция: `#60A5FA` (blue)
- Оси: `rgba(255,255,255,0.15)`
- Сетка: `rgba(255,255,255,0.025)`
- Фон графика: `#06080D`

### `<ExerciseBlock>` — задания для самостоятельной работы

```tsx
// src/components/math/ExerciseBlock.tsx

interface Exercise {
  id: string;
  difficulty: "easy" | "medium" | "hard";  // цвет: green / amber / red
  problem: string;          // текст задачи (может содержать <Math>)
  hint?: string;            // подсказка (скрыта по умолчанию)
  solution: ReactNode;      // полное решение (скрыто по умолчанию)
  answer: string;           // финальный ответ (LaTeX)
}

interface ExerciseBlockProps {
  title?: string;           // "Упражнения к разделу 3.2"
  exercises: Exercise[];
}
```

**Визуальные требования:**
- Каждое задание — карточка `bg-card/60 backdrop-blur-sm`
- Difficulty badge: `easy` → зелёная точка, `medium` → янтарная, `hard` → красная
- Кнопки «Подсказка» и «Решение» — `variant="ghost"`, появляются с `motion.div` (height animation)
- Ответ — в рамке `border border-cyan-500/30 bg-cyan-500/05 rounded-lg` с формулой через `<Math display>`

### `<CyberCodeBlock>` — блоки кода

```tsx
<CyberCodeBlock language="python" filename="newton_method.py">
{`def newton(f, df, x0, tol=1e-9, max_iter=100):
    x = x0
    for _ in range(max_iter):
        fx = f(x)
        if abs(fx) < tol:
            break
        x -= fx / df(x)
    return x`}
</CyberCodeBlock>
```

Тот же компонент, что в NUN. Синтаксическая подсветка через `highlight.js` или `prism`. Фон `#0B0E18`, шрифт JetBrains Mono.

---

## Структура страниц уроков — эталон CourseLesson2_6.tsx

> Каждый урок **обязан** реализовывать все паттерны ниже без исключений.

### Скаффолд страницы (порядок элементов)

```tsx
return (
  <>
    <SEOHead title="..." description="..." path="/lessons/X-Y" type="article" />

    {/* accessibility skip-link */}
    <a href="#lesson-content"
       className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2
                  focus:z-[60] focus:px-4 focus:py-2 focus:rounded-md focus:bg-card
                  focus:text-cyan-300 focus:border focus:border-cyan-400
                  focus:shadow-[0_0_16px_hsl(var(--primary)/0.6)]">
      К содержимому урока
    </a>

    <ScrollProgressBar color="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

    <main className="container max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav aria-label="Хлебные крошки" className="mb-6">
        <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
          {/* Главная → Курс → Уровень N → Урок X.Y */}
        </ol>
      </nav>

      <LessonHeader title={...} subtitle={...} estimatedMinutes={...} />
      <SectionNav items={SECTIONS} />

      <div id="lesson-content" className="space-y-8 mt-8">
        {SECTIONS.map((s, i) => (
          <motion.section
            key={s.id} id={s.id}
            className={SECTION_CLASS}
            variants={SECTION_VARIANTS}
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: Math.min(i * 0.05, 0.25) }}
          >
            <h2 className={`${SECTION_TITLE_CLASS} text-2xl md:text-3xl`}>{s.label}</h2>
            {/* диспатч в sub-компонент */}
          </motion.section>
        ))}
      </div>

      <RelatedTopics />         {/* ссылки на связанные темы */}

      {/* Completion card */}
      <Card className="mt-8 border-cyan-500/30 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm">
        <CardContent className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            Дочитали до конца? Зафиксируйте прогресс и получите XP.
          </p>
          <CompleteButton lessonId="X.Y" />
        </CardContent>
      </Card>

      <NextPrevLesson prev={lesson.prev} next={lesson.next} />
    </main>
  </>
);
```

### Обязательные константы в каждом файле урока

```tsx
const SECTION_CLASS =
  "scroll-mt-24 py-16 px-6 md:px-10 bg-card/60 backdrop-blur-sm rounded-2xl border border-cyan-500/10";

const SECTION_TITLE_CLASS =
  "text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6";

const SECTION_VARIANTS = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
```

### Intro-секция — три обязательных слоя

#### Слой 1: Hero-карточка

```tsx
<Card className="border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm overflow-hidden">
  <CardContent className="p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
    <div className="flex-1 space-y-3">
      <h3 className="text-2xl md:text-3xl font-bold text-foreground">
        [Один цепляющий тезис об этой теме]
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        [2–3 предложения: зачем нужна эта тема, где применяется]
      </p>
    </div>
    {/* иконка в glow-box справа */}
    <div className="shrink-0 w-20 h-20 rounded-2xl border border-cyan-400/40 bg-cyan-500/10
                    flex items-center justify-center
                    shadow-[0_0_32px_hsl(var(--primary)/0.45)]">
      <RelevantIcon className="w-12 h-12 text-cyan-400 drop-shadow-[0_0_10px_hsl(var(--primary)/0.7)]" />
    </div>
  </CardContent>
</Card>
```

#### Слой 2: TldrBox

```tsx
<TldrBox items={[
  <>[ключевой вывод 1 — самое важное из урока]</>,
  <>[ключевой вывод 2 — формула или условие]</>,
  <>[типичная ошибка или предупреждение]</>,
]} />
```

#### Слой 3: KEY_FINDINGS grid (4 карточки × 4 акцентных цвета)

```tsx
const KEY_FINDINGS = [
  { title: "...", text: "...", icon: Icon1, color: "cyan"    },
  { title: "...", text: "...", icon: Icon2, color: "purple"  },
  { title: "...", text: "...", icon: Icon3, color: "pink"    },
  { title: "...", text: "...", icon: Icon4, color: "emerald" },
] as const;

const COLOR_MAP: Record<string, string> = {
  cyan:    "border-cyan-500/30 hover:border-cyan-400/70 hover:shadow-[0_0_24px_hsl(var(--primary)/0.35)] [&_svg]:text-cyan-400",
  purple:  "border-purple-500/30 hover:border-purple-400/70 hover:shadow-[0_0_24px_hsl(280_85%_65%/0.35)] [&_svg]:text-purple-400",
  pink:    "border-pink-500/30 hover:border-pink-400/70 hover:shadow-[0_0_24px_hsl(330_85%_65%/0.35)] [&_svg]:text-pink-400",
  emerald: "border-emerald-500/30 hover:border-emerald-400/70 hover:shadow-[0_0_24px_hsl(160_85%_55%/0.35)] [&_svg]:text-emerald-400",
};

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
  {KEY_FINDINGS.map(({ title, text, icon: Icon, color }) => (
    <Card key={title}
      className={`group bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${COLOR_MAP[color]}`}>
      <CardContent className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-bold text-foreground leading-snug">{title}</h4>
          <Icon className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

### CompleteButton — обязателен в каждом уроке

```tsx
// src/components/CompleteButton.tsx — универсальный, принимает lessonId пропом
const CompleteButton = ({ lessonId }: { lessonId: string }) => {
  const [done, setDone] = useState(() => isLessonComplete(lessonId));

  useEffect(() => {
    if (done) return;
    const onScroll = () => {
      const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (pct >= 90) { markLessonComplete(lessonId); setDone(true); window.removeEventListener("scroll", onScroll); }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [done, lessonId]);

  return (
    <Button onClick={() => { markLessonComplete(lessonId); setDone(true); }}
      disabled={done} size="lg"
      className="w-full md:w-auto bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500
                 text-white font-semibold shadow-[0_0_24px_hsl(var(--primary)/0.45)]
                 hover:shadow-[0_0_32px_hsl(280_85%_65%/0.55)] hover:scale-[1.02]
                 transition-all disabled:opacity-80 disabled:cursor-default
                 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2
                 focus-visible:ring-offset-background"
      aria-label={done ? "Урок пройден" : "Отметить урок как пройденный"}>
      {done
        ? <><CheckCircle2 className="w-5 h-5 mr-2" aria-hidden />Пройдено</>
        : <>Отметить урок как пройденный ✓</>}
    </Button>
  );
};
```

---

## Контентный поток урока — обязательный порядок секций

Каждый математический урок строится в этом порядке. Секции = элементы `SECTIONS[]`:

| # | id | Назначение | Ключевые компоненты |
|---|---|---|---|
| 1 | `intro` | Крючок + ключевые выводы | Hero card, TldrBox, KEY_FINDINGS |
| 2 | `motivation` | Зачем это нужно | Примеры из физики/CS/экономики, `<TheoremBox variant="example">` |
| 3 | `definition` | Строгое определение | `<TheoremBox variant="definition">`, `<Math display>` |
| 4 | `derivation` | Вывод формулы шаг за шагом | `<DerivationBlock>`, промежуточные `<TheoremBox variant="lemma">` |
| 5 | `properties` | Свойства и частные случаи | Список с `<Math>` inline, таблицы |
| 6 | `visualization` | Интерактивный график | `<InteractiveGraph>` с ползунками `<Slider>` |
| 7 | `examples` | Разобранные примеры | `<TheoremBox variant="example">` + `<DerivationBlock>` |
| 8 | `code` | Численная реализация | `<CyberCodeBlock language="python">` |
| 9 | `exercises` | Задания для самостоятельной работы | `<ExerciseBlock exercises={[...]} />` |
| 10 | `summary` | Итоги + перекрёстные ссылки | `<TopicLink>`, `<LessonLink>` |

---

## Двунаправленные ссылки — принцип Википедии

Это **ключевой навигационный принцип** платформы. Каждое понятие должно быть связано с соответствующим определением в теме-хабе, и наоборот.

```tsx
// Из урока → в тему (хаб)
<TopicLink topicId="calculus-limits" sectionId="epsilon-delta">
  точное определение предела (ε–δ)
</TopicLink>

// Из темы → обратно в урок
<LessonLink lessonId="2-3" anchor="definition">
  урок 2.3 — Предел функции
</LessonLink>
```

**Правила:**
- Регистрировать каждую пару ссылок в `src/config/crosslinks.ts`
- **Никогда не дублировать контент** между уроком и темой
- Уроки — нарративный вход (мотивация, интуиция, примеры)
- Темы (хабы) — формальные определения, доказательства, полные выводы
- Ссылки — мост между ними

---

## Прогресс и геймификация

```ts
// src/lib/progress.ts
// localStorage key: "mathpulse_progress"

interface Progress {
  completedLessons: string[];   // ["1.1", "1.2", ...]
  xp: number;
  streak: number;               // дни подряд
  lastVisit: string;            // ISO date
  quizScores: Record<string, number>;
}

export function markLessonComplete(id: string): void
export function isLessonComplete(id: string): boolean
export function addXP(amount: number): void
export function getProgress(): Progress
```

XP за действия:
- Завершение урока: **+50 XP**
- Правильный ответ в квизе: **+10 XP**
- Просмотр вывода формулы (DerivationBlock): **+5 XP**
- Решение упражнения (открытие ответа): **+15 XP**

---

## Роутинг

Все страницы — lazy-loaded в `src/App.tsx`. Добавлять новые маршруты **выше** `path="*"`.

```tsx
const LessonPage  = lazy(() => import("./pages/Lesson1_1"));
const TopicPage   = lazy(() => import("./pages/TopicCalculus"));
```

Структура URL:
- `/lessons/1-1` — урок 1.1
- `/topics/calculus-limits` — тема-хаб "Пределы"
- `/topics/linear-algebra` — тема-хаб "Линейная алгебра"

---

## Запрещено

- ❌ Raw hex в TSX — только семантические Tailwind токены
- ❌ `canvas ctx.roundRect()` — только SVG `rx`/`ry`
- ❌ `useState` для флагов внутри RAF-анимаций — только `useRef`
- ❌ markdown-математика — только `<Math>` компонент с KaTeX
- ❌ inline-контент в файле страницы — только диспатч в sub-компоненты
- ❌ Пропустить intro-слои (Hero card / TldrBox / KEY_FINDINGS)
- ❌ Пропустить `CompleteButton` или completion card
- ❌ Дублировать контент между уроком и темой-хабом
- ❌ Добавлять новые пары ссылок без регистрации в `crosslinks.ts`
