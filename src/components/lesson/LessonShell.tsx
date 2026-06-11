import { ReactNode } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { ScrollProgressBar } from "./ScrollProgressBar";
import { Breadcrumbs } from "./Breadcrumbs";
import { LessonHeader } from "./LessonHeader";
import { SectionNav, NavSection } from "./SectionNav";
import { HeroCard } from "./HeroCard";
import { TldrBox } from "./TldrBox";
import { KeyFindingsGrid, Finding } from "./KeyFindingsGrid";
import { CompletionCard } from "./CompleteButton";
import { NextPrevLesson } from "./NextPrevLesson";
import { RelatedMaterials, RelatedItem } from "./RelatedMaterials";
import { SEOHead } from "./SEOHead";
import { courseStructure } from "@/data/courseStructure";

export const SECTION_CLASS =
  "scroll-mt-24 py-12 md:py-16 px-5 md:px-10 bg-card/60 backdrop-blur-sm rounded-2xl border border-border/60";
export const SECTION_TITLE_CLASS =
  "font-serif text-2xl md:text-3xl font-semibold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6";

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export interface LessonSection {
  id: string;
  label: string;
  content: ReactNode;
}

export interface LessonShellInnerProps {
  lessonId: string;
  moduleId: number;
  lessonPath: string;
  hookTitle: string;
  hookContext: string;
  HeroIcon: LucideIcon;
  tldr: ReactNode[];
  findings: Finding[];
  sections: LessonSection[];
  related?: RelatedItem[];
  seoTitle?: string;
  seoDescription?: string;
}

export const LessonShellInner = ({
  lessonId,
  moduleId,
  lessonPath,
  hookTitle,
  hookContext,
  HeroIcon,
  tldr,
  findings,
  sections,
  related = [],
  seoTitle,
  seoDescription,
}: LessonShellInnerProps) => {
  const module = courseStructure.find((m) => m.id === moduleId);
  const lessonIndex =
    module?.lessons.findIndex((l) => l.path === lessonPath) ?? -1;
  const currentLesson = module?.lessons[lessonIndex];

  const prev =
    lessonIndex > 0
      ? module!.lessons[lessonIndex - 1]
      : moduleId > 0
      ? courseStructure[moduleId - 1]?.lessons.slice(-1)[0] ?? null
      : null;
  const next =
    module && lessonIndex < module.lessons.length - 1
      ? module.lessons[lessonIndex + 1]
      : moduleId < courseStructure.length - 1
      ? courseStructure[moduleId + 1]?.lessons[0] ?? null
      : null;

  if (!module || !currentLesson) {
    return (
      <div className="container py-16 text-center text-muted-foreground">
        Урок не найден
      </div>
    );
  }

  const navSections: NavSection[] = [
    { id: "intro", label: "Введение" },
    ...sections.map(({ id, label }) => ({ id, label })),
  ];
  const accent = `var(--${module.color})`;

  return (
    <>
      <SEOHead
        title={seoTitle ?? `${currentLesson.title} · Calculus Compass`}
        description={seoDescription ?? currentLesson.description}
      />
      <ScrollProgressBar />
      <a
        href="#lesson-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-primary focus:text-primary-foreground"
      >
        Перейти к содержанию
      </a>
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <Breadcrumbs
          items={[
            { label: "Главная", href: "/" },
            { label: `Модуль ${module.id}: ${module.title}`, href: "/" },
            { label: currentLesson.title },
          ]}
        />

        <LessonHeader
          moduleNumber={module.id}
          moduleTitle={module.title}
          lessonTitle={currentLesson.title}
          subtitle={currentLesson.description}
          accent={accent}
        />

        <SectionNav sections={navSections} />

        <div id="lesson-content" className="space-y-8 mt-8">
          <motion.section
            id="intro"
            className={SECTION_CLASS}
            variants={SECTION_VARIANTS}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className={SECTION_TITLE_CLASS}>Введение</h2>
            <div className="space-y-6">
              <HeroCard hook={hookTitle} context={hookContext} Icon={HeroIcon} />
              <TldrBox items={tldr} />
              <KeyFindingsGrid findings={findings} />
            </div>
          </motion.section>

          {sections.map((s, i) => (
            <motion.section
              key={s.id}
              id={s.id}
              className={SECTION_CLASS}
              variants={SECTION_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: Math.min(i * 0.05, 0.25),
              }}
            >
              <h2 className={SECTION_TITLE_CLASS}>{s.label}</h2>
              {s.content}
            </motion.section>
          ))}
        </div>

        <RelatedMaterials items={related} />
        <CompletionCard lessonId={lessonId} />
        <NextPrevLesson prev={prev} next={next} />
      </div>
    </>
  );
};

export const LessonShell = (props: LessonShellInnerProps) => (
  <Layout>
    <LessonShellInner {...props} />
  </Layout>
);
