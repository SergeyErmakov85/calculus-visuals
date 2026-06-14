import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { MatrixVisualization } from "@/components/linear-algebra/MatrixVisualization";
import { GaussianEliminationVisualization } from "@/components/linear-algebra/GaussianEliminationVisualization";

const LinearAlgebraMatrices = () => (
  <TopicPageLayout topicId="linear-algebra-matrices">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Матрица — компактная запись системы линейных уравнений и линейного преобразования. Ниже — интерактивные визуализации: как устроена матрица и как метод Гаусса приводит её к ступенчатому виду.
      </p>
      <MatrixVisualization />
    </section>

    <section>
      <GaussianEliminationVisualization />
    </section>
  </TopicPageLayout>
);

export default LinearAlgebraMatrices;
