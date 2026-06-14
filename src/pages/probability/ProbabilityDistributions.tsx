import { InlineMath, BlockMath } from "react-katex";
import { Card } from "@/components/ui/card";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { FormulaCard } from "@/components/probability/FormulaCard";

const ProbabilityDistributions = () => (
  <TopicPageLayout topicId="probability-distributions">
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormulaCard title="Формула Бернулли" color="accent">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(k) = C_n^k \cdot p^k \cdot (1-p)^{n-k}" />
        </div>
        <p className="text-muted-foreground">
          Вероятность появления события ровно <InlineMath math="k" /> раз при <InlineMath math="n" /> независимых испытаниях.
        </p>
      </FormulaCard>

      <FormulaCard title="Наивероятнейшее число" color="primary">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="np - (1-p) \leq k_0 \leq np + p" />
        </div>
        <p className="text-muted-foreground">
          Наивероятнейшее число <InlineMath math="k_0" /> появления события при <InlineMath math="n" /> испытаниях.
        </p>
      </FormulaCard>

      <FormulaCard title="Локальная формула Лапласа" color="secondary">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(k) \approx \frac{1}{\sqrt{2\pi npq}} \cdot \varphi\left(\frac{k - np}{\sqrt{npq}}\right)" />
        </div>
        <p className="text-muted-foreground">
          где <InlineMath math="q = 1 - p" />, применяется при больших <InlineMath math="n" />.
        </p>
      </FormulaCard>

      <FormulaCard title="Интегральная формула Лапласа" color="accent">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(m_1, m_2) \approx \Phi\left(\frac{m_2 - np}{\sqrt{npq}}\right) - \Phi\left(\frac{m_1 - np}{\sqrt{npq}}\right)" />
        </div>
        <p className="text-muted-foreground">
          Вероятность появления события от <InlineMath math="m_1" /> до <InlineMath math="m_2" /> раз.
        </p>
      </FormulaCard>

      <FormulaCard title="Общая формула Бернулли" color="secondary">
        <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
          <BlockMath math="P(p, n, k) = C_n^k \cdot p^k \cdot q^{n-k}" />
          <p className="text-muted-foreground text-center mt-2">
            Событие <InlineMath math="A" /> наступит ровно <InlineMath math="k" /> раз после <InlineMath math="n" /> испытаний.
          </p>
        </div>
        <div className="bg-muted/30 p-4 rounded-lg">
          <p className="text-foreground mb-2 font-semibold">Биномиальное распределение:</p>
          <BlockMath math="M(X) = np" />
          <BlockMath math="D(X) = npq" />
          <BlockMath math="\sigma = \sqrt{npq}" />
        </div>
      </FormulaCard>

      <Card className="p-6 bg-gradient-to-br from-card via-primary/5 to-secondary/5 border-2 border-primary/30">
        <h4 className="text-lg font-bold mb-4 text-primary text-center">Треугольник Паскаля</h4>
        <div className="flex flex-col items-center space-y-1 font-mono text-sm">
          {[
            "1",
            "1 1",
            "1 2 1",
            "1 3 3 1",
            "1 4 6 4 1",
            "1 5 10 10 5 1",
            "1 6 15 20 15 6 1",
            "1 7 21 35 35 21 7 1",
            "1 8 28 56 70 56 28 8 1",
          ].map((row) => (
            <div key={row} className="text-center">{row}</div>
          ))}
          <div className="text-center text-primary font-bold">1 9 36 84 126 126 84 36 9 1</div>
        </div>
        <p className="text-xs text-muted-foreground mt-4 text-center">
          Биномиальные коэффициенты <InlineMath math="C_n^k" />
        </p>
      </Card>
    </section>
  </TopicPageLayout>
);

export default ProbabilityDistributions;
