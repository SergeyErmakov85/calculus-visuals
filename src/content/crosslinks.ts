// ─────────────────────────────────────────────────────────────────────────────
// crosslinks.ts — двунаправленные связи тема ↔ тема («принцип Википедии»).
//
// Здесь регистрируются МЕЖРАЗДЕЛЬНЫЕ смысловые мосты, которых не даёт линейный
// порядок next/prev. Каждая пара объявляется ОДИН раз — связь работает в обе
// стороны (см. getRelatedTopics). id тем = `${sectionId}-${slug}` из topicMap.
//
// Правило: связываем, а не дублируем контент (§6 SITE_ARCHITECTURE.md).
// ─────────────────────────────────────────────────────────────────────────────

import { getTopic, type Topic } from "./topicMap";

export interface CrossLink {
  a: string; // topic id
  b: string; // topic id
  /** За что связь — показывается подписью у ссылки. */
  note: string;
}

export const CROSSLINKS: CrossLink[] = [
  // Производные ↔ функции: исследование экстремумов опирается на параболу.
  { a: "derivatives-extrema", b: "functions-quadratic", note: "Экстремумы параболы — частный случай" },

  // Производные → дифференциальные уравнения.
  { a: "derivatives-applications", b: "diffeq-first-order", note: "Производная в составе уравнения" },

  // Интегралы ↔ ДУ: первообразная как простейшее ДУ.
  { a: "integrals-indefinite", b: "diffeq-first-order", note: "Интегрирование решает простейшее ДУ" },

  // Интегралы ↔ ряды: приложения и аппроксимация.
  { a: "integrals-applications", b: "series-taylor", note: "Аппроксимация и приближённое вычисление" },

  // Ряды ↔ производные: ряд Тейлора строится через производные.
  { a: "series-taylor", b: "derivatives-rules", note: "Коэффициенты Тейлора — производные в точке" },

  // Ряды Фурье ↔ степенные ряды.
  { a: "diffeq-fourier-pde", b: "series-power", note: "Разложение функций в ряд" },

  // Мост «линейная алгебра → статистика»: PCA ↔ факторный анализ.
  { a: "linear-algebra-svd-pca", b: "statistics-factor", note: "PCA как основа факторного анализа" },

  // Собственные значения ↔ ДУ второго порядка.
  { a: "linear-algebra-eigen", b: "diffeq-second-order", note: "Характеристическое уравнение и собств. значения" },

  // Ковариация (лин. алгебра) ↔ корреляция (статистика).
  { a: "linear-algebra-svd-pca", b: "statistics-correlation", note: "Ковариационная матрица и корреляция" },

  // Комбинаторика ↔ сборник задач.
  { a: "probability-combinatorics", b: "probability-problems", note: "Практика по комбинаторике" },

  // Доверительные интервалы ↔ проверка гипотез.
  { a: "probability-confidence", b: "statistics-hypothesis", note: "Оценивание и проверка гипотез" },

  // Распределения ↔ доверительные интервалы.
  { a: "probability-distributions", b: "probability-confidence", note: "Распределение лежит в основе интервала" },
];

/**
 * Все темы, связанные с данной, в обе стороны. Несуществующие id молча
 * отбрасываются (позволяет ссылаться на planned-темы заранее).
 */
export const getRelatedTopics = (topicId: string): Array<{ topic: Topic; note: string }> => {
  const out: Array<{ topic: Topic; note: string }> = [];
  for (const link of CROSSLINKS) {
    const otherId = link.a === topicId ? link.b : link.b === topicId ? link.a : null;
    if (!otherId) continue;
    const topic = getTopic(otherId);
    if (topic) out.push({ topic, note: link.note });
  }
  return out;
};
