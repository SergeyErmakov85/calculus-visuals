import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/lesson/SEOHead";
import { courseStructure, Module, Lesson } from "@/data/courseStructure";

interface LessonLayoutProps {
  moduleId: number;
  lessonPath: string;
  children: ReactNode;
}

export const LessonLayout = ({ moduleId, lessonPath, children }: LessonLayoutProps) => {
  const module = courseStructure.find((m) => m.id === moduleId);
  const currentLessonIndex = module?.lessons.findIndex((l) => l.path === lessonPath) ?? -1;
  
  const prevLesson = currentLessonIndex > 0 
    ? module?.lessons[currentLessonIndex - 1] 
    : moduleId > 0 
      ? courseStructure[moduleId - 1]?.lessons.slice(-1)[0]
      : null;
      
  const nextLesson = module && currentLessonIndex < module.lessons.length - 1
    ? module.lessons[currentLessonIndex + 1]
    : moduleId < courseStructure.length - 1
      ? courseStructure[moduleId + 1]?.lessons[0]
      : null;

  const currentLesson = module?.lessons[currentLessonIndex];

  if (!module || !currentLesson) {
    return (
      <div className="container py-16 text-center">
        <p className="text-muted-foreground">Урок не найден</p>
        <Button asChild className="mt-4">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${currentLesson.title} — Модуль ${module.id}: ${module.title}`}
        description={`Урок «${currentLesson.title}» модуля «${module.title}» курса Calculus Compass: теория, интерактивный график и разбор.`}
      />
      {/* Breadcrumb */}
      <nav aria-label="Хлебные крошки" className="border-b border-border bg-card/50">
        <div className="container py-4">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                Главная
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link to="/#modules" className="hover:text-accent transition-colors">
                Модуль {module.id}: {module.title}
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-foreground">
              {currentLesson.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Module sidebar indicator */}
      <div className="border-b border-border">
        <div className="container py-6">
          <div className="flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-semibold"
              style={{ backgroundColor: `hsl(var(--${module.color}))` }}
            >
              {module.id}
            </div>
            <div>
              <div className="text-sm text-muted-foreground">
                Модуль {module.id}
              </div>
              <h1 className="font-serif text-2xl font-semibold text-foreground">
                {currentLesson.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Lesson content */}
      <div className="container py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </div>

      {/* Lesson navigation in module */}
      <div className="border-t border-border bg-card/30">
        <div className="container py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Уроки модуля</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {module.lessons.map((lesson, index) => (
                <Link
                  key={lesson.id}
                  to={lesson.path}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    lesson.path === lessonPath
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {index + 1}. {lesson.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="border-t border-border">
        <div className="container py-6">
          <div className="max-w-4xl mx-auto flex justify-between">
            {prevLesson ? (
              <Button asChild variant="outline" className="group">
                <Link to={prevLesson.path}>
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  {prevLesson.title}
                </Link>
              </Button>
            ) : (
              <div />
            )}
            
            {nextLesson ? (
              <Button asChild className="group">
                <Link to={nextLesson.path}>
                  {nextLesson.title}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            ) : (
              <Button asChild variant="outline">
                <Link to="/">
                  Завершить курс
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
