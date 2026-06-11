import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface HeroCardProps {
  hook: string;
  context: string;
  Icon: LucideIcon;
}

export const HeroCard = ({ hook, context, Icon }: HeroCardProps) => (
  <Card className="border-accent/20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10 backdrop-blur-sm overflow-hidden">
    <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
      <div className="flex-1 space-y-3">
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground leading-tight">
          {hook}
        </h3>
        <p className="text-muted-foreground leading-relaxed">{context}</p>
      </div>
      <div
        className="shrink-0 w-20 h-20 rounded-2xl border border-accent/40 bg-accent/10 flex items-center justify-center"
        style={{ boxShadow: "0 0 32px hsl(var(--accent) / 0.45)" }}
      >
        <Icon
          className="w-12 h-12 text-accent"
          style={{ filter: "drop-shadow(0 0 10px hsl(var(--accent) / 0.7))" }}
        />
      </div>
    </CardContent>
  </Card>
);
