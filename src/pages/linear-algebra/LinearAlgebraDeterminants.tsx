import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { DeterminantVisualization } from "@/components/linear-algebra/DeterminantVisualization";
import { ParallelogramVisualization } from "@/components/linear-algebra/ParallelogramVisualization";
import { CramerRuleVisualization } from "@/components/linear-algebra/CramerRuleVisualization";

const LinearAlgebraDeterminants = () => (
  <TopicPageLayout topicId="linear-algebra-determinants">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Определитель измеряет, во сколько раз преобразование меняет площадь (объём) и обратима ли матрица. Геометрически — это площадь параллелограмма, построенного на столбцах.
      </p>
      <DeterminantVisualization />
    </section>

    <section>
      <ParallelogramVisualization />
    </section>

    <section>
      <CramerRuleVisualization />
    </section>
  </TopicPageLayout>
);

export default LinearAlgebraDeterminants;
