import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Lesson } from "@/data/courseStructure";

interface NextPrevLessonProps {
  prev: Lesson | null;
  next: Lesson | null;
}

export const NextPrevLesson = ({ prev, next }: NextPrevLessonProps) => (
  <div className="mt-10 flex flex-col md:flex-row gap-3 justify-between">
    {prev ? (
      <Button asChild variant="outline" className="group justify-start">
        <Link to={prev.path}>
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          <span className="flex flex-col items-start">
            <span className="text-xs text-muted-foreground">Назад</span>
            <span>{prev.title}</span>
          </span>
        </Link>
      </Button>
    ) : (
      <div />
    )}
    {next ? (
      <Button asChild className="group justify-end">
        <Link to={next.path}>
          <span className="flex flex-col items-end">
            <span className="text-xs opacity-80">Дальше</span>
            <span>{next.title}</span>
          </span>
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Button>
    ) : (
      <Button asChild variant="outline">
        <Link to="/">Завершить курс</Link>
      </Button>
    )}
  </div>
);
