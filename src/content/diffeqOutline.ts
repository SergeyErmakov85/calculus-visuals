// Оглавления глав 1–4 курса дифференциальных уравнений (источник: проект `_-_`, Стрэнг).
// Контент подразделов живёт в subsections.ts — здесь только срезы реестра,
// чтобы страницы тем рендерили оглавление со ссылками на страницы подразделов.

import { SUBSECTIONS } from "@/content/subsections";
import type { OutlineItem } from "@/content/linearAlgebraOutline";

export type { OutlineItem };

export const FIRST_ORDER: OutlineItem[] = SUBSECTIONS["diffeq/first-order"];
export const SECOND_ORDER: OutlineItem[] = SUBSECTIONS["diffeq/second-order"];
export const GRAPHICAL: OutlineItem[] = SUBSECTIONS["diffeq/graphical"];
export const FOURIER_PDE: OutlineItem[] = SUBSECTIONS["diffeq/fourier-pde"];
