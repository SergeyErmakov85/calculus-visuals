// ─────────────────────────────────────────────────────────────────────────────
// learningPath.ts — треки обучения (порядок разделов) и рекомендации «далее».
//
// Источник истины структуры — topicMap.ts. Здесь описываются только маршруты
// прохождения: какой раздел за каким и какие «мосты» между ветками.
// Соответствует §2 SITE_ARCHITECTURE.md.
// ─────────────────────────────────────────────────────────────────────────────

import { TOPIC_MAP, type Section } from "./topicMap";

export interface Track {
  id: string;
  title: string;
  description: string;
  /** Порядок разделов (по section.id). */
  sectionIds: string[];
  /** Уровень входа: с него рекомендуется начинать. */
  level: 1 | 2 | 3;
}

export const TRACKS: Track[] = [
  {
    id: "calculus-basics",
    title: "Базовый матанализ",
    description: "Путь новичка: от функций до рядов.",
    sectionIds: ["functions", "limits", "derivatives", "integrals", "series"],
    level: 1,
  },
  {
    id: "calculus-advanced",
    title: "Продвинутый матанализ",
    description: "Дифференциальные уравнения (нужны производные и интегралы).",
    sectionIds: ["series", "diffeq"],
    level: 3,
  },
  {
    id: "linear-algebra",
    title: "Линейная алгебра",
    description: "Самостоятельный вход; мост к статистике через SVD/PCA.",
    sectionIds: ["linear-algebra"],
    level: 2,
  },
  {
    id: "probstat",
    title: "Вероятность и статистика",
    description: "От теории вероятностей к мат. статистике (мост: PCA → факторный анализ).",
    sectionIds: ["probability", "statistics"],
    level: 2,
  },
];

/** Трек по умолчанию для блока «Рекомендованный путь» на главной. */
export const DEFAULT_TRACK_ID = "calculus-basics";

/**
 * Глобальный порядок разделов (для перехода «следующий раздел» на границе).
 * Совпадает с порядком в TOPIC_MAP (num 1..9).
 */
export const SECTION_ORDER: string[] = TOPIC_MAP.map((s) => s.id);

/** Следующий раздел после текущего в общем порядке. */
export const getNextSection = (sectionId: string): Section | undefined => {
  const i = SECTION_ORDER.indexOf(sectionId);
  if (i === -1 || i + 1 >= TOPIC_MAP.length) return undefined;
  return TOPIC_MAP[i + 1];
};

/** Предыдущий раздел перед текущим в общем порядке. */
export const getPrevSection = (sectionId: string): Section | undefined => {
  const i = SECTION_ORDER.indexOf(sectionId);
  if (i <= 0) return undefined;
  return TOPIC_MAP[i - 1];
};
