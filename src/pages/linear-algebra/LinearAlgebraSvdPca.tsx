import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { CovarianceVisualization } from "@/components/linear-algebra/CovarianceVisualization";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { SVD_PCA } from "@/content/linearAlgebraOutline";

const LinearAlgebraSvdPca = () => (
  <TopicPageLayout topicId="linear-algebra-svd-pca">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        SVD раскладывает любую матрицу на вращение, растяжение и вращение (A=UΣVᵀ). На этом строится PCA — снижение размерности через ковариационную матрицу данных, мост к факторному анализу в статистике.
      </p>
      <CovarianceVisualization />
    </section>

    <section>
      <SectionOutline title="Глава 7 · SVD и линейные преобразования" items={SVD_PCA} basePath="/linear-algebra/svd-pca" />
    </section>
  </TopicPageLayout>
);

export default LinearAlgebraSvdPca;
