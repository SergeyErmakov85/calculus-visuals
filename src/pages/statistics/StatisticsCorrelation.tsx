import { Card, CardContent } from "@/components/ui/card";
import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import CorrelationScatterPlots from "@/components/statistics/CorrelationScatterPlots";

const TAGS = ["Пирсон r", "Спирмен ρ", "Кендэлл τ", "Fisher z-CI"];

const StatisticsCorrelation = () => (
  <TopicPageLayout topicId="statistics-correlation">
    <section>
      <Card className="shadow-elegant">
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Корреляция (связь переменных)</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {TAGS.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 mb-6">
              <h4 className="font-bold mb-2">Выбор коэффициента:</h4>
              <ul className="space-y-2 text-sm">
                <li><span className="font-semibold text-primary">Пирсон r:</span> линейная связь для интервальных/отношений, приблизительная нормальность, отсутствие сильных выбросов.</li>
                <li><span className="font-semibold text-primary">Спирмен ρ:</span> ранговая монотонная связь; устойчив к выбросам и нелинейности.</li>
                <li><span className="font-semibold text-primary">Кендэлл τ:</span> ранговая связь на основе пар; лучший для малых n и/или большого числа связей.</li>
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Корреляция Пирсона</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="r=\frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum(x_i-\bar{x})^2\sum(y_i-\bar{y})^2}}" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Проверка значимости:</p>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="t=r\sqrt{\frac{n-2}{1-r^2}}, \quad \text{df}=n-2" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Спирмен (без связей)</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="\rho=1-\frac{6\sum d_i^2}{n(n^2-1)}" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    где <InlineMath math="d_i" /> — разности рангов
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Кендэлл τ<sub>b</sub></h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="\tau_b=\frac{C-D}{\sqrt{(C+D+T_x)(C+D+T_y)}}" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    где C — согласованные пары, D — несогласованные
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">ДИ для r (Fisher z)</h4>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <BlockMath math="z'=\frac{1}{2}\ln\left(\frac{1+r}{1-r}\right)" />
                    <BlockMath math="SE_z=\frac{1}{\sqrt{n-3}}" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-bold mb-2">Интерпретация и отчёт:</h4>
              <ul className="space-y-1 text-sm list-disc list-inside">
                <li>Сообщайте r (или ρ, τ), 95% ДИ, t/Z, df, p-value</li>
                <li>r² — доля объяснённой дисперсии для линейной модели</li>
                <li>Корреляция не равна причинности</li>
              </ul>
            </div>

            <CorrelationScatterPlots />
          </div>
        </CardContent>
      </Card>
    </section>
  </TopicPageLayout>
);

export default StatisticsCorrelation;
