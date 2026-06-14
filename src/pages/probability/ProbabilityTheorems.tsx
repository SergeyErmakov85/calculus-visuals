import { BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { FormulaCard } from "@/components/probability/FormulaCard";

const ProbabilityTheorems = () => (
  <TopicPageLayout topicId="probability-theorems">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormulaCard title="Вероятность суммы событий" color="primary">
        <div>
          <p className="font-semibold text-foreground mb-2">Несовместные события:</p>
          <div className="bg-muted/30 p-2 rounded-lg">
            <BlockMath math="P(A + B) = P(A) + P(B)" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">Совместные события:</p>
          <div className="bg-muted/30 p-2 rounded-lg">
            <BlockMath math="P(A + B) = P(A) + P(B) - P(AB)" />
          </div>
        </div>
      </FormulaCard>

      <FormulaCard title="Вероятность произведения событий" color="accent">
        <div>
          <p className="font-semibold text-foreground mb-2">Независимые события:</p>
          <div className="bg-muted/30 p-2 rounded-lg">
            <BlockMath math="P(A \cdot B) = P(A) \cdot P(B)" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">Зависимые события:</p>
          <div className="bg-muted/30 p-2 rounded-lg space-y-1">
            <BlockMath math="P(A \cdot B) = P(A) \cdot P(B|A)" />
            <BlockMath math="P(A \cdot B) = P(B) \cdot P(A|B)" />
          </div>
        </div>
      </FormulaCard>
    </section>
  </TopicPageLayout>
);

export default ProbabilityTheorems;
