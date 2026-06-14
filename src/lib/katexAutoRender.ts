// Рендер LaTeX внутри обычного DOM-узла через KaTeX auto-render.
// Заменяет MathJax в перенесённом контенте strang/remix: разметка $...$ / $$...$$
// остаётся в тексте как есть, а KaTeX типографирует её на месте.
import renderMathInElement from "katex/contrib/auto-render";

export const renderKatex = (el: HTMLElement | null): void => {
  if (!el) return;
  renderMathInElement(el, {
    delimiters: [
      { left: "$$", right: "$$", display: true },
      { left: "\\[", right: "\\]", display: true },
      { left: "$", right: "$", display: false },
      { left: "\\(", right: "\\)", display: false },
    ],
    throwOnError: false,
  });
};
