import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export type FindingColor = "primary" | "accent" | "success" | "graph2";

export interface Finding {
  title: string;
  text: string;
  icon: LucideIcon;
  color: FindingColor;
}

const COLOR_MAP: Record<FindingColor, string> = {
  primary:
    "border-primary/30 hover:border-primary/70 hover:shadow-[0_0_24px_hsl(var(--primary)/0.35)] [&_svg]:text-primary",
  accent:
    "border-accent/30 hover:border-accent/70 hover:shadow-[0_0_24px_hsl(var(--accent)/0.35)] [&_svg]:text-accent",
  success:
    "border-[hsl(var(--success))]/30 hover:border-[hsl(var(--success))]/70 hover:shadow-[0_0_24px_hsl(var(--success)/0.35)] [&_svg]:text-[hsl(var(--success))]",
  graph2:
    "border-[hsl(var(--graph-secondary))]/30 hover:border-[hsl(var(--graph-secondary))]/70 hover:shadow-[0_0_24px_hsl(var(--graph-secondary)/0.35)] [&_svg]:text-[hsl(var(--graph-secondary))]",
};

export const KeyFindingsGrid = ({ findings }: { findings: Finding[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {findings.map(({ title, text, icon: Icon, color }) => (
      <Card
        key={title}
        className={`group bg-card/60 backdrop-blur-sm transition-all duration-300 hover:scale-105 ${COLOR_MAP[color]}`}
      >
        <CardContent className="p-5 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h4 className="font-bold text-foreground leading-snug">{title}</h4>
            <Icon className="w-6 h-6 shrink-0 transition-transform group-hover:scale-110" />
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
        </CardContent>
      </Card>
    ))}
  </div>
);
