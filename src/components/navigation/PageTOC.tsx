// ─────────────────────────────────────────────────────────────────────────────
// PageTOC — оглавление страницы темы. После монтирования сканирует заголовки
// h2 внутри переданного контейнера, проставляет им id и строит навигацию с
// подсветкой активной секции (scrollspy). Показывается на широких экранах.
// ─────────────────────────────────────────────────────────────────────────────
import { useEffect, useState, type RefObject } from "react";
import { List } from "lucide-react";

interface Heading {
  id: string;
  text: string;
}

const slugify = (s: string, i: number) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/(^-|-$)/g, "")
    .slice(0, 40) || `section-${i}`;

export const PageTOC = ({ containerRef }: { containerRef: RefObject<HTMLElement> }) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2"));
    const found: Heading[] = nodes.map((node, i) => {
      const text = node.textContent?.trim() ?? "";
      if (!node.id) node.id = slugify(text, i);
      node.style.scrollMarginTop = "6rem";
      return { id: node.id, text };
    });
    setHeadings(found);

    if (found.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0 }
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [containerRef]);

  if (headings.length < 2) return null;

  return (
    <nav aria-label="Оглавление страницы" className="text-sm">
      <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
        <List className="h-4 w-4" /> На этой странице
      </p>
      <ul className="space-y-1.5 border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={
                "block border-l-2 -ml-px pl-3 leading-snug transition-colors " +
                (activeId === h.id
                  ? "border-accent text-accent font-medium"
                  : "border-transparent text-muted-foreground hover:text-foreground")
              }
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
