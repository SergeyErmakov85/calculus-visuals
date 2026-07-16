import { ConfidenceInterval } from "@/components/ConfidenceInterval";
import { ProbabilityTheory } from "@/components/ProbabilityTheory";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/lesson/SEOHead";

const ConfidenceIntervalPage = () => {
  return (
    <Layout>
      <SEOHead
        title="Доверительный интервал — визуализация теории вероятностей"
        description="Основные формулы теории вероятностей и интерактивная визуализация доверительного интервала в нормальном распределении."
      />
      <div className="py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          <header className="text-center space-y-4 mb-12">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-top duration-700">
              Теория вероятности
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
              Основные формулы и понятия теории вероятностей
            </p>
          </header>

          <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
            <ProbabilityTheory />
          </div>

          <section aria-labelledby="viz-heading" className="space-y-12">
            <div className="text-center space-y-4 mt-24 mb-12">
              <h2
                id="viz-heading"
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-in fade-in slide-in-from-top duration-700"
              >
                Визуализация статистики
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-700 delay-150">
                Интерактивная иллюстрация доверительного интервала в нормальном распределении
              </p>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <ConfidenceInterval />
            </div>

            <p className="text-center text-sm text-muted-foreground pt-8">
              Перемещайте слайдер, чтобы изменить уровень доверия и увидеть, как изменяется ширина интервала
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ConfidenceIntervalPage;
