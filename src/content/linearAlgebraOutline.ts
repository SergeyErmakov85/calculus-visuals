// Оглавления глав 5–8 курса линейной алгебры (источник: проект `_-_`, Стрэнг).
// Контент подразделов живёт в subsections.ts — здесь только срезы реестра,
// чтобы страницы тем рендерили оглавление со ссылками на страницы подразделов.

import { SUBSECTIONS, type Subsection } from "@/content/subsections";

/** Элемент оглавления главы; slug ведёт на страницу подраздела. */
export type OutlineItem = Pick<
  Subsection,
  "number" | "title" | "description" | "slug"
>;

export const VECTOR_SPACES: OutlineItem[] = SUBSECTIONS["linear-algebra/vector-spaces"];
export const EIGEN: OutlineItem[] = SUBSECTIONS["linear-algebra/eigen"];
export const SVD_PCA: OutlineItem[] = SUBSECTIONS["linear-algebra/svd-pca"];
export const APPLICATIONS: OutlineItem[] = SUBSECTIONS["linear-algebra/applications"];
