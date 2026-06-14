// ─────────────────────────────────────────────────────────────────────────────
// topicMap.ts — ЕДИНЫЙ ИСТОЧНИК ИСТИНЫ структуры портала MathPulse
//
// Здесь описаны все 9 разделов (курсов) и входящие в них темы.
// Из этого файла выводятся: сайдбар, хлебные крошки, next/prev, sitemap,
// индекс глобального поиска. НИКОГДА не дублировать структуру в страницах.
//
// Соответствует SITE_ARCHITECTURE.md (Этап 2 объединения).
// ─────────────────────────────────────────────────────────────────────────────

export type Level = 1 | 2 | 3; // 1 — начальный, 2 — средний, 3 — продвинутый

/** Готовность темы: ready — страница существует; planned — переносится на Этапе 3. */
export type TopicStatus = "ready" | "planned";

export interface Topic {
  /** Глобально уникальный id, напр. "limits-epsilon-delta". */
  id: string;
  /** id раздела-владельца. */
  sectionId: string;
  title: string;
  /** Канонический URL темы по новой архитектуре, напр. "/limits/epsilon-delta". */
  slug: string;
  level: Level;
  tags: string[];
  status: TopicStatus;
  /**
   * Фактический рабочий маршрут страницы (если отличается от slug — напр. старый
   * /module/3/... ). Используется навигацией, пока не выполнены редиректы.
   * Для planned-тем отсутствует.
   */
  route?: string;
  /** Короткое описание для карточек/поиска. */
  description?: string;
}

export interface Section {
  /** id раздела, совпадает с базовым сегментом URL: "limits". */
  id: string;
  /** Порядковый номер раздела (1..9) — для трека обучения и нумерации. */
  num: number;
  title: string;
  /** Базовый URL-хаб раздела, напр. "/limits". */
  slug: string;
  /** lucide-react имя иконки (строкой, маппится в компоненте). */
  icon: string;
  description: string;
  /** Откуда пришёл контент (для трекинга объединения). */
  sources: string[];
  topics: Topic[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Хелпер: сжимает объявление темы, проставляя sectionId и slug автоматически.
// ─────────────────────────────────────────────────────────────────────────────
const t = (
  sectionId: string,
  slug: string,
  title: string,
  opts: {
    level: Level;
    tags: string[];
    status: TopicStatus;
    route?: string;
    description?: string;
  }
): Topic => ({
  id: `${sectionId}-${slug}`,
  sectionId,
  title,
  slug: `/${sectionId}/${slug}`,
  level: opts.level,
  tags: opts.tags,
  status: opts.status,
  route: opts.route,
  description: opts.description,
});

// ─────────────────────────────────────────────────────────────────────────────
// 1. ФУНКЦИИ И ГРАФИКИ  [host: Module 0–1, function-reference]
// ─────────────────────────────────────────────────────────────────────────────
const functions: Section = {
  id: "functions",
  num: 1,
  title: "Функции и графики",
  slug: "/functions",
  icon: "Spline",
  description: "Что такое функция, типы функций и чтение графиков — фундамент анализа.",
  sources: ["host"],
  topics: [
    t("functions", "definition", "Что такое функция", { level: 1, tags: ["функция", "график"], status: "ready", route: "/module/0/function-definition", description: "График как множество точек (x, f(x))." }),
    t("functions", "domain-range", "Область определения и значений", { level: 1, tags: ["область определения"], status: "ready", route: "/module/0/domain-range" }),
    t("functions", "graph-analysis", "Чтение графика", { level: 1, tags: ["график", "анализ"], status: "ready", route: "/module/0/graph-analysis" }),
    t("functions", "linear", "Линейные функции", { level: 1, tags: ["многочлен", "линейная"], status: "ready", route: "/module/1/linear" }),
    t("functions", "quadratic", "Квадратичные функции", { level: 1, tags: ["многочлен", "парабола"], status: "ready", route: "/module/1/quadratic" }),
    t("functions", "cubic", "Кубические функции", { level: 1, tags: ["многочлен", "перегиб"], status: "ready", route: "/module/1/cubic" }),
    t("functions", "higher-degree", "Многочлены высших степеней", { level: 2, tags: ["многочлен"], status: "ready", route: "/module/1/higher-degree" }),
    t("functions", "rational", "Рациональные функции", { level: 2, tags: ["рациональная", "асимптоты"], status: "ready", route: "/functions/rational" }),
    t("functions", "trigonometric", "Тригонометрические функции", { level: 2, tags: ["тригонометрия", "период"], status: "ready", route: "/functions/trigonometric" }),
    t("functions", "exponential", "Показательные функции", { level: 2, tags: ["экспонента", "рост"], status: "ready", route: "/functions/exponential" }),
    t("functions", "logarithmic", "Логарифмические функции", { level: 2, tags: ["логарифм"], status: "ready", route: "/functions/logarithmic" }),
    t("functions", "piecewise", "Кусочные функции", { level: 2, tags: ["кусочная"], status: "ready", route: "/functions/piecewise" }),
    t("functions", "absolute", "Функция модуля", { level: 1, tags: ["модуль", "излом"], status: "ready", route: "/functions/absolute" }),
    t("functions", "special", "Специальные функции", { level: 3, tags: ["специальные"], status: "ready", route: "/functions/special" }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 2. ПРЕДЕЛЫ И НЕПРЕРЫВНОСТЬ  [host Module 2–4 + strang #1 + remix #1]
// ─────────────────────────────────────────────────────────────────────────────
const limits: Section = {
  id: "limits",
  num: 2,
  title: "Пределы и непрерывность",
  slug: "/limits",
  icon: "TrendingDown",
  description: "К чему стремится функция: интуиция, ε-δ, односторонние пределы и непрерывность.",
  sources: ["host", "strang-calculus-ru", "remix-of"],
  topics: [
    t("limits", "intuition", "Предел: геометрия и интуиция", { level: 1, tags: ["предел", "интуиция"], status: "ready", route: "/module/3/limit-geometry" }),
    t("limits", "one-sided", "Односторонние пределы", { level: 1, tags: ["предел", "слева", "справа"], status: "ready", route: "/module/3/one-sided-limits" }),
    t("limits", "limit-vs-value", "Предел против значения функции", { level: 1, tags: ["предел"], status: "ready", route: "/module/3/limit-vs-value" }),
    t("limits", "at-infinity", "Пределы на бесконечности", { level: 2, tags: ["предел", "бесконечность"], status: "ready", route: "/module/3/limit-at-infinity" }),
    t("limits", "epsilon-delta", "Определение по Коши (ε–δ)", { level: 3, tags: ["предел", "Коши", "теория"], status: "ready", description: "Строгое ε–δ определение предела и техника доказательства." }),
    t("limits", "remarkable", "Замечательные пределы", { level: 2, tags: ["предел", "формулы"], status: "ready", description: "Первый и второй замечательные пределы и их следствия." }),
    t("limits", "continuity", "Непрерывность", { level: 2, tags: ["непрерывность"], status: "ready", route: "/module/4/continuity-definition" }),
    t("limits", "discontinuity-types", "Типы разрывов", { level: 2, tags: ["разрыв"], status: "ready", route: "/module/4/discontinuity-types" }),
    t("limits", "asymptotes", "Асимптоты", { level: 2, tags: ["асимптоты"], status: "ready", route: "/module/2/vertical-asymptotes" }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 3. ПРОИЗВОДНЫЕ И ПРИЛОЖЕНИЯ  [host Module 5 + strang #2–4 + remix #2–5]
// ─────────────────────────────────────────────────────────────────────────────
const derivatives: Section = {
  id: "derivatives",
  num: 3,
  title: "Производные и приложения",
  slug: "/derivatives",
  icon: "Activity",
  description: "Касательная как предел, правила дифференцирования и исследование функций.",
  sources: ["host", "strang-calculus-ru", "remix-of"],
  topics: [
    t("derivatives", "tangent-limit", "Касательная как предел", { level: 1, tags: ["производная", "касательная"], status: "ready", route: "/module/5/tangent-limit" }),
    t("derivatives", "definition", "Определение и геометрический смысл", { level: 1, tags: ["производная"], status: "ready", route: "/module/5/function-derivative-link" }),
    t("derivatives", "rate", "Производная как скорость", { level: 1, tags: ["производная", "скорость"], status: "ready", route: "/module/5/derivative-rate" }),
    t("derivatives", "rules", "Правила дифференцирования", { level: 2, tags: ["производная", "правила"], status: "ready", description: "Степенное правило, производные элементарных функций, произведение и частное." }),
    t("derivatives", "chain-rule", "Цепное правило", { level: 2, tags: ["производная", "цепное правило"], status: "ready", description: "Дифференцирование сложных функций слой за слоем." }),
    t("derivatives", "extrema", "Экстремумы и исследование функции", { level: 2, tags: ["экстремум", "исследование"], status: "ready", route: "/module/5/extrema" }),
    t("derivatives", "tangent-normal", "Касательная и нормаль", { level: 2, tags: ["касательная", "нормаль"], status: "ready", description: "Уравнения касательной и нормали через производную в точке." }),
    t("derivatives", "applications", "Применение производных", { level: 3, tags: ["производная", "приложения"], status: "ready", description: "Оптимизация и поиск наибольших/наименьших значений." }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 4. ИНТЕГРАЛЫ  [strang #5,7–11 + remix #6–8 + host viz]
// ─────────────────────────────────────────────────────────────────────────────
const integrals: Section = {
  id: "integrals",
  num: 4,
  title: "Интегралы",
  slug: "/integrals",
  icon: "Sigma",
  description: "Определённый и неопределённый интеграл, техники интегрирования и приложения.",
  sources: ["strang-calculus-ru", "remix-of", "host"],
  topics: [
    t("integrals", "definite", "Определённый интеграл и площадь", { level: 2, tags: ["интеграл", "площадь"], status: "ready", description: "Площадь под графиком как предел сумм Римана; формула Ньютона–Лейбница." }),
    t("integrals", "indefinite", "Неопределённый интеграл", { level: 2, tags: ["интеграл", "первообразная"], status: "ready", description: "Первообразная как операция, обратная дифференцированию." }),
    t("integrals", "substitution", "Интегрирование подстановкой", { level: 2, tags: ["интеграл", "подстановка"], status: "ready", description: "Обратное цепное правило: замена переменной." }),
    t("integrals", "by-parts", "Интегрирование по частям", { level: 3, tags: ["интеграл", "по частям"], status: "ready", description: "Обратное правило произведения: ∫u dv = uv − ∫v du." }),
    t("integrals", "techniques", "Техника интегрирования", { level: 3, tags: ["интеграл", "техника"], status: "ready", description: "Рациональные дроби, тригонометрические подстановки и приёмы." }),
    t("integrals", "applications", "Площади, длины дуг, объёмы", { level: 3, tags: ["интеграл", "объём"], status: "ready", description: "Геометрические приложения определённого интеграла." }),
    t("integrals", "riemann", "Интерактив: сумма Римана", { level: 2, tags: ["интеграл", "Риман", "визуализация"], status: "ready", route: "/visualizations/integral" }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 5. ПОСЛЕДОВАТЕЛЬНОСТИ И РЯДЫ  [strang #12–14 + remix #10–12 + _-_ chart]
// ─────────────────────────────────────────────────────────────────────────────
const series: Section = {
  id: "series",
  num: 5,
  title: "Последовательности и ряды",
  slug: "/series",
  icon: "ListOrdered",
  description: "Последовательности, числовые и степенные ряды, признаки сходимости, ряд Тейлора.",
  sources: ["strang-calculus-ru", "remix-of", "_-_"],
  topics: [
    t("series", "sequences", "Последовательности и пределы", { level: 2, tags: ["последовательность"], status: "ready", description: "Сходимость последовательностей, ε-N и основные пределы." }),
    t("series", "numeric", "Числовые ряды", { level: 2, tags: ["ряд"], status: "ready", description: "Частичные суммы, геометрический и гармонический ряды, необходимое условие." }),
    t("series", "convergence", "Признаки сходимости", { level: 3, tags: ["ряд", "сходимость"], status: "ready", description: "Сравнение, Д'Аламбер, Коши, Лейбниц и p-ряды." }),
    t("series", "power", "Степенные ряды", { level: 3, tags: ["ряд", "степенной"], status: "ready", description: "Радиус и интервал сходимости, почленные операции." }),
    t("series", "taylor", "Ряд Тейлора", { level: 3, tags: ["ряд", "Тейлор"], status: "ready", description: "Ряд Тейлора и Маклорена, ключевые разложения, приложения." }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 6. ДИФФЕРЕНЦИАЛЬНЫЕ УРАВНЕНИЯ  [_-_ гл.1–4 + remix #9]
// ─────────────────────────────────────────────────────────────────────────────
const diffeq: Section = {
  id: "diffeq",
  num: 6,
  title: "Дифференциальные уравнения",
  slug: "/diffeq",
  icon: "Waypoints",
  description: "ДУ первого и второго порядка, поля направлений, ряды Фурье и УрЧП.",
  sources: ["_-_", "remix-of"],
  topics: [
    t("diffeq", "first-order", "ДУ первого порядка", { level: 2, tags: ["ду", "первый порядок", "визуализация"], status: "ready", description: "dy/dt=f(t,y): рост, логистика, разделяющиеся уравнения (главы 1.x)." }),
    t("diffeq", "second-order", "ДУ второго порядка", { level: 3, tags: ["ду", "второй порядок"], status: "ready", description: "Колебания, демпфирование, резонанс, Лаплас (главы 2.x)." }),
    t("diffeq", "graphical", "Поля направлений и фазовые портреты", { level: 3, tags: ["ду", "фазовый портрет", "визуализация"], status: "ready", description: "Интерактив: поле направлений и фазовый портрет (главы 3.x)." }),
    t("diffeq", "fourier-pde", "Ряды Фурье и УрЧП", { level: 3, tags: ["Фурье", "урчп"], status: "ready", description: "Теплопроводность, волновое уравнение, Лаплас (главы 4.x)." }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 7. ЛИНЕЙНАЯ АЛГЕБРА  [_-_ гл.5–8 + linear_algebra_add]
// ─────────────────────────────────────────────────────────────────────────────
const linearAlgebra: Section = {
  id: "linear-algebra",
  num: 7,
  title: "Линейная алгебра",
  slug: "/linear-algebra",
  icon: "Grid3x3",
  description: "Матрицы, определители, векторные пространства, собственные значения, SVD и PCA.",
  sources: ["_-_", "linear_algebra_add"],
  topics: [
    t("linear-algebra", "matrices", "Матрицы, СЛАУ, метод Гаусса", { level: 2, tags: ["матрица", "Гаусс", "визуализация"], status: "ready", description: "Интерактив: устройство матрицы и метод Гаусса." }),
    t("linear-algebra", "determinants", "Определители и правило Крамера", { level: 2, tags: ["определитель", "Крамер", "визуализация"], status: "ready", description: "Геометрический смысл определителя, параллелограмм, правило Крамера." }),
    t("linear-algebra", "vector-spaces", "Векторные пространства", { level: 3, tags: ["векторное пространство"], status: "ready", description: "Четыре фундаментальных подпространства (главы 5.x)." }),
    t("linear-algebra", "eigen", "Собственные значения и диагонализация", { level: 3, tags: ["собственные значения"], status: "ready", description: "Av=λv, диагонализация, симметричные матрицы (главы 6.x)." }),
    t("linear-algebra", "svd-pca", "SVD, PCA, главные компоненты", { level: 3, tags: ["svd", "pca"], status: "ready", description: "Ковариация, SVD и PCA — мост к статистике (главы 7.x)." }),
    t("linear-algebra", "applications", "Приложения: графы, Марков, ЛП", { level: 3, tags: ["приложения"], status: "ready", description: "Графы, марковские цепи, ЛП, преобразование Фурье (главы 8.x)." }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 8. ТЕОРИЯ ВЕРОЯТНОСТЕЙ  [probability_add + probability_tasks_add]
// ─────────────────────────────────────────────────────────────────────────────
const probability: Section = {
  id: "probability",
  num: 8,
  title: "Теория вероятностей",
  slug: "/probability",
  icon: "Dices",
  description: "Комбинаторика, случайные события, теоремы вероятностей, распределения, задачи.",
  sources: ["probability_add", "probability_tasks_add", "host"],
  topics: [
    t("probability", "combinatorics", "Комбинаторика", { level: 2, tags: ["комбинаторика", "сочетания"], status: "ready", description: "Перестановки, размещения, сочетания и схема Бернулли." }),
    t("probability", "events", "Случайные события", { level: 1, tags: ["событие", "вероятность"], status: "ready", description: "Виды событий и классическое определение вероятности." }),
    t("probability", "theorems", "Теоремы сложения и умножения", { level: 2, tags: ["вероятность", "теорема"], status: "ready", description: "Сумма и произведение событий: совместные, независимые, зависимые." }),
    t("probability", "total-bayes", "Полная вероятность и формула Байеса", { level: 3, tags: ["Байес"], status: "ready", description: "Полная группа гипотез и апостериорные вероятности." }),
    t("probability", "distributions", "Распределения", { level: 2, tags: ["распределение", "биномиальное"], status: "ready", description: "Бернулли, формулы Лапласа, биномиальное распределение." }),
    t("probability", "confidence", "Доверительные интервалы", { level: 3, tags: ["доверительный интервал", "визуализация"], status: "ready", route: "/visualizations/probability" }),
    t("probability", "problems", "Сборник задач", { level: 2, tags: ["задачи", "практика"], status: "ready", description: "Разобранные задачи по комбинаторике и вероятности." }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 9. МАТЕМАТИЧЕСКАЯ СТАТИСТИКА  [statspark-analysis] ⭐ эталон дизайна
// ─────────────────────────────────────────────────────────────────────────────
const statistics: Section = {
  id: "statistics",
  num: 9,
  title: "Математическая статистика",
  slug: "/statistics",
  icon: "ChartColumnBig",
  description: "Проверка гипотез, ANOVA, групповые тесты, корреляция, факторный и кластерный анализ.",
  sources: ["statspark-analysis"],
  topics: [
    t("statistics", "hypothesis", "Проверка гипотез и ANOVA", { level: 3, tags: ["гипотеза", "ANOVA", "F-статистика"], status: "ready", description: "Однофакторный дисперсионный анализ, F-статистика, суммы квадратов." }),
    t("statistics", "group-tests", "Групповые тесты", { level: 3, tags: ["t-тест", "Манна–Уитни", "хи-квадрат"], status: "ready", description: "t-тесты, Welch, Манна–Уитни, Краскел–Уоллис, χ² и выбор теста." }),
    t("statistics", "correlation", "Корреляция", { level: 3, tags: ["корреляция", "Пирсон", "Спирмен"], status: "ready", description: "Пирсон, Спирмен, Кендэлл и доверительный интервал Fisher z." }),
    t("statistics", "factor", "Факторный анализ", { level: 3, tags: ["факторный анализ", "EFA", "PCA"], status: "ready", description: "EFA/CFA/PCA, KMO, вращение Varimax, матрица нагрузок." }),
    t("statistics", "cluster", "Кластерный анализ", { level: 3, tags: ["кластеризация", "k-means"], status: "ready", description: "Метод K-средних, выбор K, силуэтный коэффициент." }),
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// СБОРКА
// ─────────────────────────────────────────────────────────────────────────────
export const TOPIC_MAP: Section[] = [
  functions,
  limits,
  derivatives,
  integrals,
  series,
  diffeq,
  linearAlgebra,
  probability,
  statistics,
];

// ─────────────────────────────────────────────────────────────────────────────
// СЕЛЕКТОРЫ
// ─────────────────────────────────────────────────────────────────────────────

/** Плоский список всех тем во всех разделах (в порядке обучения). */
export const ALL_TOPICS: Topic[] = TOPIC_MAP.flatMap((s) => s.topics);

export const getSection = (id: string): Section | undefined =>
  TOPIC_MAP.find((s) => s.id === id);

export const getTopic = (id: string): Topic | undefined =>
  ALL_TOPICS.find((tp) => tp.id === id);

/** Целевой URL темы для ссылок: рабочий route, если задан, иначе канонический slug. */
export const topicHref = (topic: Topic): string => topic.route ?? topic.slug;

/** Соседи внутри раздела для блока «← Предыдущая / Следующая →». */
export const getSiblingTopics = (
  topicId: string
): { prev?: Topic; next?: Topic; section?: Section } => {
  const section = TOPIC_MAP.find((s) => s.topics.some((tp) => tp.id === topicId));
  if (!section) return {};
  const i = section.topics.findIndex((tp) => tp.id === topicId);
  return {
    section,
    prev: i > 0 ? section.topics[i - 1] : undefined,
    next: i < section.topics.length - 1 ? section.topics[i + 1] : undefined,
  };
};
