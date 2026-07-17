// Рендер оглавления главы (список «номер · заголовок · описание»).
// При заданном basePath каждая карточка — ссылка на страницу подраздела
// `${basePath}/${item.slug}`; без basePath — статичная карточка.
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { OutlineItem } from "@/content/linearAlgebraOutline";

const ItemCard = ({ item, linked }: { item: OutlineItem; linked: boolean }) => (
  <Card className="h-full p-5 border-2 border-primary/15 hover:border-primary/40 transition-all duration-300">
    <div className="flex items-baseline gap-3">
      <span className="font-mono text-sm text-accent font-bold shrink-0">{item.number}</span>
      <div className="min-w-0 flex-1">
        <h3 className="font-semibold text-foreground flex items-start justify-between gap-2">
          <span>{item.title}</span>
          {linked && <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-accent" aria-hidden />}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
      </div>
    </div>
  </Card>
);

export const SectionOutline = ({
  title,
  items,
  basePath,
}: {
  title: string;
  items: OutlineItem[];
  /** База ссылок на страницы подразделов, напр. "/diffeq/first-order". */
  basePath?: string;
}) => (
  <div>
    <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) =>
        basePath ? (
          <Link key={item.number} to={`${basePath}/${item.slug}`} className="block h-full">
            <ItemCard item={item} linked />
          </Link>
        ) : (
          <ItemCard key={item.number} item={item} linked={false} />
        )
      )}
    </div>
  </div>
);
