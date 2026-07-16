import { useState } from "react";
import RiemannIntegralVisualization from "@/components/RiemannIntegralVisualization";
import ProblemsSection from "@/components/ProblemsSection";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/lesson/SEOHead";

const IntegralPage = () => {
  const [view, setView] = useState<"theory" | "problems">("theory");

  return (
    <Layout>
      <SEOHead
        title="Интеграл Римана — интерактивная визуализация"
        description="Интерактивная визуализация суммы Римана и предельного перехода к определённому интегралу. Теория и задачи с решениями."
      />
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Интеграл Римана
            </h1>
            <p className="text-muted-foreground text-sm mt-1">
              Интерактивная визуализация и связь с теорией вероятностей
            </p>
          </div>
          <div className="flex gap-2" role="group" aria-label="Режим просмотра">
            <Button
              variant={view === "theory" ? "default" : "outline"}
              onClick={() => setView("theory")}
              size="sm"
              aria-pressed={view === "theory"}
            >
              📖 Теория
            </Button>
            <Button
              variant={view === "problems" ? "default" : "outline"}
              onClick={() => setView("problems")}
              size="sm"
              aria-pressed={view === "problems"}
            >
              📝 Задачи
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {view === "theory" ? <RiemannIntegralVisualization /> : <ProblemsSection />}
      </div>
    </Layout>
  );
};

export default IntegralPage;
