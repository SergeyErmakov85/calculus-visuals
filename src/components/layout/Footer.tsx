import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { TOPIC_MAP } from "@/content/topicMap";

/** Единый футер сайта — используется в Layout и FunctionPageLayout. */
export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50 mt-16">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2 text-foreground mb-2">
              <Compass className="h-5 w-5 text-primary" aria-hidden />
              <span className="font-serif text-base font-semibold">Calculus Compass</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Курс высшей математики, где график — главный инструмент понимания.
            </p>
          </div>

          <nav aria-label="Разделы курса (футер)">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
              Разделы
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-1.5">
              {TOPIC_MAP.map((section) => (
                <li key={section.id}>
                  <Link
                    to={section.slug}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {section.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="text-xs text-muted-foreground/70 mt-8 pt-6 border-t border-border">
          Образовательный проект по математическому анализу · Анализ через форму и график
        </p>
      </div>
    </footer>
  );
};
