import { ReactNode } from "react";
import { Sparkles } from "lucide-react";

export const TldrBox = ({ items }: { items: ReactNode[] }) => (
  <div className="rounded-2xl border border-accent/30 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 backdrop-blur-sm p-5 md:p-6">
    <div className="flex items-center gap-2 mb-3">
      <Sparkles className="w-4 h-4 text-accent" />
      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
        Если кратко
      </span>
    </div>
    <ul className="space-y-2 text-sm md:text-base text-foreground/90">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 leading-relaxed">
          <span className="text-accent shrink-0">·</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);
