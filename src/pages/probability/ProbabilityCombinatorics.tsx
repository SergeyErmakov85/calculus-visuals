import { InlineMath, BlockMath } from "react-katex";
import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { FormulaCard } from "@/components/probability/FormulaCard";

const ProbabilityCombinatorics = () => (
  <TopicPageLayout topicId="probability-combinatorics">
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <FormulaCard title="Основные формулы" color="primary">
        <div>
          <p className="font-semibold text-foreground mb-2">а) Перестановки:</p>
          <div className="bg-muted/30 p-2 rounded-lg">
            <BlockMath math="P_n = n! = 1 \cdot 2 \cdot 3 \cdot \ldots \cdot (n-1) \cdot n" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">б) Размещения:</p>
          <div className="bg-muted/30 p-2 rounded-lg">
            <BlockMath math="A_n^m = n \cdot (n-1) \cdot \ldots \cdot (n-m+1)" />
          </div>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-2">в) Сочетания:</p>
          <div className="bg-muted/30 p-2 rounded-lg">
            <BlockMath math="C_n^k = \frac{A_n^k}{P_k} = \frac{n!}{(n-k)! \cdot k!}" />
          </div>
        </div>
      </FormulaCard>

      <FormulaCard title="Схема испытаний Бернулли" color="accent">
        <p className="text-muted-foreground">
          <InlineMath math="A" /> — случайное событие, <InlineMath math="\bar{A}" /> — событие A не произошло.
        </p>
        <div className="space-y-2 bg-muted/30 p-3 rounded-lg">
          <p className="text-foreground"><InlineMath math="p" /> — вероятность наступления события A</p>
          <p className="text-foreground"><InlineMath math="q" /> — вероятность того, что A не наступило</p>
          <div className="text-center mt-2">
            <BlockMath math="p + q = 1" />
            <BlockMath math="q = 1 - p" />
          </div>
        </div>
      </FormulaCard>

      <FormulaCard title="Перестановки (пример)" color="primary">
        <p className="text-muted-foreground">Количество элементов = 3</p>
        <div className="grid grid-cols-2 gap-2 text-center">
          {["①②③", "①③②", "②①③", "②③①", "③①②", "③②①"].map((p) => (
            <div key={p} className="bg-muted/30 p-2 rounded">{p}</div>
          ))}
        </div>
        <div className="bg-primary/10 p-2 rounded-lg border border-primary/20 text-center">
          <BlockMath math="P_3 = 3! = 6" />
        </div>
      </FormulaCard>

      <FormulaCard title="Сочетания (пример)" color="secondary">
        <p className="text-muted-foreground">Выбор 2 из 3 элементов (порядок не важен):</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {["①②", "①③", "②③"].map((c) => (
            <div key={c} className="bg-muted/30 p-2 rounded">{c}</div>
          ))}
        </div>
        <div className="bg-secondary/10 p-2 rounded-lg border border-secondary/20 text-center">
          <BlockMath math="C_3^2 = \frac{3!}{1! \cdot 2!} = 3" />
        </div>
      </FormulaCard>

      <FormulaCard title="Размещения (пример)" color="accent">
        <p className="text-muted-foreground">Выбор 2 из 3 элементов (порядок важен):</p>
        <div className="grid grid-cols-3 gap-2 text-center">
          {["①②", "②①", "①③", "③①", "②③", "③②"].map((a, i) => (
            <div key={`${a}-${i}`} className="bg-muted/30 p-2 rounded">{a}</div>
          ))}
        </div>
        <div className="bg-accent/10 p-2 rounded-lg border border-accent/20 text-center">
          <BlockMath math="A_3^2 = 3 \cdot 2 = 6" />
        </div>
      </FormulaCard>

      <FormulaCard title="Формулы событий (n=3)" color="secondary">
        <div className="grid grid-cols-2 gap-2">
          <div className="bg-muted/20 p-2 rounded-lg text-center">
            <BlockMath math="P(AAA) = p^3" />
          </div>
          <div className="bg-muted/20 p-2 rounded-lg text-center">
            <BlockMath math="P(\bar{A}\bar{A}\bar{A}) = q^3" />
          </div>
        </div>
        <div className="bg-muted/20 p-2 rounded-lg text-center">
          <BlockMath math="P(AA\bar{A}) = P(A\bar{A}A) = P(\bar{A}AA) = p^2q" />
        </div>
        <div className="bg-muted/20 p-2 rounded-lg text-center">
          <BlockMath math="P(A\bar{A}\bar{A}) = P(\bar{A}A\bar{A}) = P(\bar{A}\bar{A}A) = pq^2" />
        </div>
      </FormulaCard>
    </section>
  </TopicPageLayout>
);

export default ProbabilityCombinatorics;
