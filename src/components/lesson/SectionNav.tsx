import { useEffect, useState } from "react";

export interface NavSection {
  id: string;
  label: string;
}

export const SectionNav = ({ sections }: { sections: NavSection[] }) => {
  const [active, setActive] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + 140;
      let current = sections[0]?.id ?? "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 96, behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Разделы урока"
      className="sticky top-2 z-30 -mx-2 px-2 py-2 mt-6 mb-2 backdrop-blur-md bg-background/70 rounded-xl border border-border/60"
    >
      <ul className="flex flex-wrap gap-1.5">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              onClick={() => go(s.id)}
              className={`px-3 py-1.5 rounded-lg text-xs md:text-sm transition-all ${
                active === s.id
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
