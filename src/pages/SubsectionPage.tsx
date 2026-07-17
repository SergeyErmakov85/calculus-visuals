// ─────────────────────────────────────────────────────────────────────────────
// SubsectionPage — универсальная страница подраздела (главы) темы.
// Рендерится по /:sectionId/:topicSlug/:subSlug из реестра subsections.ts,
// напр. /diffeq/first-order/1-1. Контент: введение, ключевые формулы, итоги.
// ─────────────────────────────────────────────────────────────────────────────
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen, ListChecks } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Breadcrumbs } from "@/components/lesson/Breadcrumbs";
import { SEOHead } from "@/components/lesson/SEOHead";
import { Math } from "@/components/lesson/Math";
import { Card, CardContent } from "@/components/ui/card";
import { getSection, getTopic } from "@/content/topicMap";
import { getSubsections } from "@/content/subsections";
import NotFound from "./NotFound";

const SubsectionPage = () => {
  const { sectionId, topicSlug, subSlug } = useParams<{
    sectionId: string;
    topicSlug: string;
    subSlug: string;
  }>();

  const section = sectionId ? getSection(sectionId) : undefined;
  const topic = sectionId && topicSlug ? getTopic(`${sectionId}-${topicSlug}`) : undefined;
  const subsections =
    sectionId && topicSlug ? getSubsections(sectionId, topicSlug) : undefined;
  const index = subsections?.findIndex((s) => s.slug === subSlug) ?? -1;
  const sub = index >= 0 ? subsections![index] : undefined;

  if (!section || !topic || !subsections || !sub) return <NotFound />;

  const topicPath = `/${sectionId}/${topicSlug}`;
  const prev = index > 0 ? subsections[index - 1] : undefined;
  const next = index < subsections.length - 1 ? subsections[index + 1] : undefined;

  return (
    <Layout>
      <SEOHead
        title={`${sub.number} ${sub.title} — ${topic.title}`}
        description={sub.description}
      />
      <div className="container max-w-3xl py-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: section.title, href: section.slug },
            { label: topic.title, href: topicPath },
            { label: sub.number },
          ]}
        />

        {/* Заголовок */}
        <header className="mb-8">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
            {topic.title} · подраздел {sub.number}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
            <span className="font-mono text-accent mr-3">{sub.number}</span>
            {sub.title}
          </h1>
          <p className="text-muted-foreground mt-2">{sub.description}</p>
        </header>

        {/* Введение */}
        <section className="space-y-4">
          {sub.intro.map((p) => (
            <p key={p.slice(0, 40)} className="text-foreground/90 leading-relaxed">
              {p}
            </p>
          ))}
        </section>

        {/* Ключевые формулы */}
        {sub.formulas && sub.formulas.length > 0 && (
          <section className="mt-8 space-y-4">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide">
              <BookOpen className="h-4 w-4" /> Ключевые формулы
            </h2>
            {sub.formulas.map((f) => (
              <Card key={f.latex} className="border-primary/20">
                <CardContent className="p-5 overflow-x-auto">
                  <Math display>{f.latex}</Math>
                  {f.caption && (
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      {f.caption}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </section>
        )}

        {/* Главное */}
        {sub.keyPoints && sub.keyPoints.length > 0 && (
          <section className="mt-8">
            <h2 className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
              <ListChecks className="h-4 w-4" /> Главное
            </h2>
            <ul className="space-y-2">
              {sub.keyPoints.map((point) => (
                <li key={point} className="flex gap-3 text-foreground/90 leading-relaxed">
                  <span className="text-accent mt-0.5 shrink-0" aria-hidden>
                    •
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Навигация: назад к теме + prev/next по подразделам */}
        <nav className="mt-10 border-t border-border pt-6 space-y-4">
          <Link
            to={topicPath}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> К оглавлению: {topic.title}
          </Link>
          <div className="flex items-center justify-between gap-4">
            {prev ? (
              <Link
                to={`${topicPath}/${prev.slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>
                  <span className="block text-[11px] uppercase tracking-wide opacity-70">
                    Назад
                  </span>
                  {prev.number} · {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`${topicPath}/${next.slug}`}
                className="flex items-center gap-2 text-right text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <span>
                  <span className="block text-[11px] uppercase tracking-wide opacity-70">
                    Далее
                  </span>
                  {next.number} · {next.title}
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </nav>
      </div>
    </Layout>
  );
};

export default SubsectionPage;
