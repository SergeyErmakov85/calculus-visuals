// Рендер оглавления главы (список «номер · заголовок · описание»).
import { Card } from "@/components/ui/card";
import type { OutlineItem } from "@/content/linearAlgebraOutline";

export const SectionOutline = ({
  title,
  items,
}: {
  title: string;
  items: OutlineItem[];
}) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Card key={item.number} className="p-5 border-2 border-primary/15 hover:border-primary/40 transition-all duration-300">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-sm text-accent font-bold shrink-0">{item.number}</span>
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  </div>
);
