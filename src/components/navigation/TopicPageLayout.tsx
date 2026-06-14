// ─────────────────────────────────────────────────────────────────────────────
// TopicPageLayout — единый каркас страницы темы (на базе topicMap).
// Сайдбар раздела + хлебные крошки + заголовок + контент + ←/→ + связанные темы.
// Используется всеми перенесёнными разделами (статистика, и далее).
// ─────────────────────────────────────────────────────────────────────────────
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Link2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/lesson/Breadcrumbs";
import { CourseSidebar } from "@/components/navigation/CourseSidebar";
import { getTopic, getSiblingTopics, topicHref } from "@/content/topicMap";
import { getNextSection } from "@/content/learningPath";
import { getRelatedTopics } from "@/content/crosslinks";

const LEVEL_LABEL: Record<number, string> = {
  1: "Начальный",
  2: "Средний",
  3: "Продвинутый",
};

export const TopicPageLayout = ({
  topicId,
  children,
}: {
  topicId: string;
  children: ReactNode;
}) => {
  const topic = getTopic(topicId);
  const { prev, next, section } = getSiblingTopics(topicId);
  const related = getRelatedTopics(topicId);
  const nextSection = section ? getNextSection(section.id) : undefined;

  return (
    <Layout>
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <CourseSidebar activeSectionId={section?.id} />
            </div>
          </aside>

          {/* Content */}
          <article className="min-w-0">
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                ...(section ? [{ label: section.title, href: section.slug }] : []),
                { label: topic?.title ?? "" },
              ]}
            />

            {topic && (
              <header className="mb-8">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  {section?.title}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {topic.title}
                </h1>
                {topic.description && (
                  <p className="text-muted-foreground mt-2 max-w-2xl">
                    {topic.description}
                  </p>
                )}
                <span className="inline-block mt-3 text-[11px] px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                  {LEVEL_LABEL[topic.level]}
                </span>
              </header>
            )}

            {/* Тело темы */}
            <div className="space-y-10">{children}</div>

            {/* Связанные темы */}
            {related.length > 0 && (
              <section className="mt-12 border-t border-border pt-6">
                <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                  <Link2 className="h-4 w-4" /> Связанные материалы
                </h2>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {related.map(({ topic: rt, note }) => (
                    <li key={rt.id}>
                      <Link
                        to={topicHref(rt)}
                        className="block rounded-lg border border-border p-3 hover:border-accent/50 transition-colors"
                      >
                        <span className="font-medium text-foreground">{rt.title}</span>
                        <span className="block text-xs text-muted-foreground">{note}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Внутрираздельная навигация */}
            <nav className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-6">
              {prev ? (
                <Link
                  to={topicHref(prev)}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide opacity-70">
                      Назад
                    </span>
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={topicHref(next)}
                  className="flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide opacity-70">
                      Далее
                    </span>
                    {next.title}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : nextSection ? (
                <Link
                  to={nextSection.slug}
                  className="flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <span>
                    <span className="block text-[11px] uppercase tracking-wide opacity-70">
                      Следующий раздел
                    </span>
                    {nextSection.title}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ) : (
                <span />
              )}
            </nav>
          </article>
        </div>
      </div>
    </Layout>
  );
};
