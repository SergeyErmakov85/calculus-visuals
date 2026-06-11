import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface RelatedItem {
  title: string;
  description?: string;
  href: string;
}

export const RelatedMaterials = ({ items }: { items: RelatedItem[] }) => {
  if (!items.length) return null;
  return (
    <section className="mt-10">
      <h3 className="font-serif text-2xl font-semibold mb-4 text-foreground">
        Связанные материалы
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {items.map((it) => (
          <Link key={it.href} to={it.href} className="group">
            <Card className="h-full border-border hover:border-accent/60 transition-all hover:shadow-[0_0_24px_hsl(var(--accent)/0.2)] bg-card/60 backdrop-blur-sm">
              <CardContent className="p-4 flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium text-foreground">{it.title}</div>
                  {it.description && (
                    <div className="text-xs text-muted-foreground mt-1">
                      {it.description}
                    </div>
                  )}
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors shrink-0" />
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};
