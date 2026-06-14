import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { FormulaCard } from "@/components/probability/FormulaCard";

const ProbabilityTotalBayes = () => (
  <TopicPageLayout topicId="probability-total-bayes">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormulaCard title="Формула полной вероятности" color="primary">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(A) = \sum_{k=1}^{n} P(H_k) \cdot P(A|H_k)" />
        </div>
        <p className="text-muted-foreground">
          где <InlineMath math="H_1, H_2, \ldots, H_n" /> — полная группа гипотез, <InlineMath math="H_i \cdot H_j = \emptyset" /> при <InlineMath math="i \neq j" />.
        </p>
      </FormulaCard>

      <FormulaCard title="Формула Байеса" color="secondary">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(H_m|A) = \frac{P(H_m) \cdot P(A|H_m)}{\sum_{k=1}^{n} P(H_k) \cdot P(A|H_k)}" />
        </div>
        <p className="text-muted-foreground">
          Вычисление апостериорных вероятностей гипотез после наступления события <InlineMath math="A" />.
        </p>
      </FormulaCard>
    </section>
  </TopicPageLayout>
);

export default ProbabilityTotalBayes;
