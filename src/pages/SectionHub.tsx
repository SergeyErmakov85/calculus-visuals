// ─────────────────────────────────────────────────────────────────────────────
// SectionHub — универсальный хаб раздела. Рендерится по /:sectionId из topicMap.
// Слева — дерево разделов (CourseSidebar), справа — карточки тем раздела.
// ─────────────────────────────────────────────────────────────────────────────
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/lesson/Breadcrumbs";
import { SEOHead } from "@/components/lesson/SEOHead";
import { CourseSidebar } from "@/components/navigation/CourseSidebar";
import { sectionIcon } from "@/components/navigation/sectionIcons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { getSection, topicHref, type Topic } from "@/content/topicMap";
import { getNextSection, getPrevSection } from "@/content/learningPath";
import NotFound from "./NotFound";

const LEVEL_LABEL: Record<number, string> = {
  1: "Начальный",
  2: "Средний",
  3: "Продвинутый",
};

const TopicCard = ({ topic }: { topic: Topic }) => {
  const planned = topic.status === "planned";
  const inner = (
    <Card
      className={cn(
        "h-full transition-all",
        planned
          ? "opacity-60 border-dashed"
          : "hover:border-accent/50 hover:shadow-md cursor-pointer"
      )}
    >
      <CardContent className="p-5 flex flex-col gap-2 h-full">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-serif text-lg font-semibold text-foreground leading-snug">
            {topic.title}
          </h3>
          {planned ? (
            <Badge variant="secondary" className="shrink-0">
              Скоро
            </Badge>
          ) : (
            <ArrowRight className="h-4 w-4 mt-1 shrink-0 text-accent" />
          )}
        </div>
        {topic.description && (
          <p className="text-sm text-muted-foreground leading-relaxed">
            {topic.description}
          </p>
        )}
        <div className="mt-auto pt-2 flex items-center gap-2">
          <Badge variant="outline" className="text-[11px]">
            {LEVEL_LABEL[topic.level]}
          </Badge>
          {topic.tags.slice(0, 2).map((tag) => (
            <span key={tag} className="text-[11px] text-muted-foreground/70">
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  if (planned) return inner;
  return (
    <Link to={topicHref(topic)} className="block h-full">
      {inner}
    </Link>
  );
};

const SectionHub = () => {
  const { sectionId } = useParams<{ sectionId: string }>();
  const section = sectionId ? getSection(sectionId) : undefined;

  if (!section) return <NotFound />;

  const Icon = sectionIcon(section.icon);
  const prev = getPrevSection(section.id);
  const next = getNextSection(section.id);
  const readyCount = section.topics.filter((t) => t.status === "ready").length;

  return (
    <Layout>
      <SEOHead
        title={`${section.title} — Calculus Compass`}
        description={section.description}
      />
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <CourseSidebar activeSectionId={section.id} />
            </div>
          </aside>

          {/* Content */}
          <div>
            <Breadcrumbs
              items={[{ label: "Главная", href: "/" }, { label: section.title }]}
            />

            {/* Hero */}
            <div className="flex items-start gap-4 mb-8">
              <div className="shrink-0 w-14 h-14 rounded-2xl border border-accent/30 bg-accent/10 flex items-center justify-center">
                <Icon className="w-7 h-7 text-accent" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Раздел {section.num}
                </p>
                <h1 className="font-serif text-3xl font-bold text-foreground">
                  {section.title}
                </h1>
                <p className="text-muted-foreground mt-2 max-w-2xl">
                  {section.description}
                </p>
                <p className="text-xs text-muted-foreground/70 mt-2">
                  {readyCount} из {section.topics.length} тем готовы
                </p>
              </div>
            </div>

            {/* Topic grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {section.topics.map((topic) => (
                <TopicCard key={topic.id} topic={topic} />
              ))}
            </div>

            {/* Section nav */}
            <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
              {prev ? (
                <Link
                  to={prev.slug}
                  className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide opacity-70">
                      Предыдущий раздел
                    </span>
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link
                  to={next.slug}
                  className="group flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide opacity-70">
                      Следующий раздел
                    </span>
                    {next.title}
                  </span>
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SectionHub;
