import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { EIGEN } from "@/content/linearAlgebraOutline";

const LinearAlgebraEigen = () => (
  <TopicPageLayout topicId="linear-algebra-eigen">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Собственный вектор <em>v</em> не меняет направления под действием матрицы: <em>Av = λv</em>. Собственные значения раскрывают устойчивость систем ДУ, диагонализацию и поведение симметричных матриц.
      </p>
      <SectionOutline title="Глава 6 · Собственные значения и собственные векторы" items={EIGEN} basePath="/linear-algebra/eigen" />
    </section>
  </TopicPageLayout>
);

export default LinearAlgebraEigen;
