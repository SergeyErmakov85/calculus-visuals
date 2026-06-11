import { LucideIcon } from "lucide-react";

interface LessonHeaderProps {
  moduleNumber: number;
  moduleTitle: string;
  lessonTitle: string;
  subtitle?: string;
  Icon?: LucideIcon;
  accent?: string; // hsl(var(--...)) — module color
}

export const LessonHeader = ({
  moduleNumber,
  moduleTitle,
  lessonTitle,
  subtitle,
  Icon,
  accent = "var(--accent)",
}: LessonHeaderProps) => {
  return (
    <header className="mt-4 mb-6 flex items-start gap-5">
      <div
        className="shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm flex items-center justify-center"
        style={{ boxShadow: `0 0 28px hsl(${accent} / 0.35)` }}
      >
        {Icon ? (
          <Icon
            className="w-7 h-7 md:w-8 md:h-8"
            style={{ color: `hsl(${accent})` }}
          />
        ) : (
          <span
            className="font-serif text-2xl font-semibold"
            style={{ color: `hsl(${accent})` }}
          >
            {moduleNumber}
          </span>
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          Модуль {moduleNumber} · {moduleTitle}
        </div>
        <h1 className="mt-1 font-serif text-3xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          {lessonTitle}
        </h1>
        {subtitle && (
          <p className="mt-2 text-muted-foreground md:text-lg">{subtitle}</p>
        )}
      </div>
    </header>
  );
};
