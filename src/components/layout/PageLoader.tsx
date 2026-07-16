import { Compass } from "lucide-react";

/** Fallback для Suspense при подгрузке lazy-страниц: скелет с фирменным компасом. */
export const PageLoader = () => (
  <div
    className="min-h-screen bg-background flex flex-col"
    role="status"
    aria-label="Загрузка страницы"
  >
    {/* Скелет шапки, чтобы контент не «прыгал» */}
    <div className="h-16 border-b border-border bg-background/95" aria-hidden />
    <div className="flex-1 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <Compass className="h-10 w-10 text-primary animate-spin [animation-duration:2.5s]" />
        <span className="text-sm text-muted-foreground">Загрузка…</span>
      </div>
    </div>
  </div>
);
