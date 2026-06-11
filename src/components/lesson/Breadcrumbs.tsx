import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export const Breadcrumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Хлебные крошки" className="mb-4">
    <ol className="flex items-center gap-1 text-xs md:text-sm text-muted-foreground flex-wrap">
      {items.map((c, i) => (
        <li key={i} className="flex items-center gap-1">
          {i > 0 && <ChevronRight className="w-3.5 h-3.5 opacity-50" />}
          {c.href && i !== items.length - 1 ? (
            <Link to={c.href} className="hover:text-accent transition-colors">
              {c.label}
            </Link>
          ) : (
            <span className="text-foreground">{c.label}</span>
          )}
        </li>
      ))}
    </ol>
  </nav>
);
