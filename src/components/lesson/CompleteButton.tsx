import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { isLessonComplete, markLessonComplete } from "@/lib/progress";

export const CompleteButton = ({ lessonId }: { lessonId: string }) => {
  const [done, setDone] = useState<boolean>(() => isLessonComplete(lessonId));

  useEffect(() => {
    if (done) return;
    const onScroll = () => {
      const pct =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      if (pct >= 90) {
        markLessonComplete(lessonId);
        setDone(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [done, lessonId]);

  return (
    <Button
      onClick={() => {
        markLessonComplete(lessonId);
        setDone(true);
      }}
      disabled={done}
      size="lg"
      className="w-full md:w-auto bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground font-semibold shadow-[0_0_24px_hsl(var(--primary)/0.45)] hover:shadow-[0_0_32px_hsl(var(--accent)/0.55)] hover:scale-[1.02] transition-all disabled:opacity-80 disabled:cursor-default"
    >
      {done ? (
        <>
          <CheckCircle2 className="w-5 h-5 mr-2" />
          Пройдено
        </>
      ) : (
        <>Отметить урок как пройденный ✓</>
      )}
    </Button>
  );
};

export const CompletionCard = ({ lessonId }: { lessonId: string }) => (
  <Card className="mt-8 border-accent/30 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 backdrop-blur-sm">
    <CardContent className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        Дочитали до конца? Зафиксируйте прогресс — это сохранится в вашем браузере.
      </p>
      <CompleteButton lessonId={lessonId} />
    </CardContent>
  </Card>
);
