import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { FormulaCard } from "@/components/probability/FormulaCard";

const ProbabilityEvents = () => (
  <TopicPageLayout topicId="probability-events">
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormulaCard title="Виды событий" color="primary">
        <ul className="space-y-2 text-muted-foreground list-disc list-inside">
          <li><span className="text-foreground font-semibold">Достоверное</span> — наступает всегда, <InlineMath math="P=1" />.</li>
          <li><span className="text-foreground font-semibold">Невозможное</span> — не наступает никогда, <InlineMath math="P=0" />.</li>
          <li><span className="text-foreground font-semibold">Случайное</span> — может наступить или нет, <InlineMath math="0 \le P \le 1" />.</li>
          <li><span className="text-foreground font-semibold">Несовместные</span> — не могут произойти одновременно.</li>
          <li><span className="text-foreground font-semibold">Независимые</span> — наступление одного не меняет вероятности другого.</li>
        </ul>
      </FormulaCard>

      <FormulaCard title="Классическое определение вероятности" color="secondary">
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(A) = \frac{m}{n}" />
        </div>
        <p className="text-muted-foreground">
          где <InlineMath math="m" /> — число благоприятствующих событию исходов, <InlineMath math="n" /> — число всех элементарных равновозможных исходов.
        </p>
      </FormulaCard>

      <FormulaCard title="Противоположное событие" color="accent">
        <p className="text-muted-foreground">
          <InlineMath math="\bar{A}" /> — событие, состоящее в том, что <InlineMath math="A" /> не произошло.
        </p>
        <div className="bg-muted/30 p-3 rounded-lg">
          <BlockMath math="P(A) + P(\bar{A}) = 1" />
        </div>
      </FormulaCard>
    </section>
  </TopicPageLayout>
);

export default ProbabilityEvents;
