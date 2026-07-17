import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { SECOND_ORDER } from "@/content/diffeqOutline";

const DiffeqSecondOrder = () => (
  <TopicPageLayout topicId="diffeq-second-order">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Уравнения второго порядка <em>Ay″ + By′ + Cy = f(t)</em> описывают колебания, демпфирование и резонанс. Характеристическое уравнение и его корни связывают эту тему с собственными значениями.
      </p>
      <SectionOutline title="Глава 2 · ДУ второго порядка" items={SECOND_ORDER} basePath="/diffeq/second-order" />
    </section>
  </TopicPageLayout>
);

export default DiffeqSecondOrder;
