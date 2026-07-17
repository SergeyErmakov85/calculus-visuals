import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { DifferentialEquationChart } from "@/components/diffeq/DifferentialEquationChart";
import { FIRST_ORDER } from "@/content/diffeqOutline";

const DiffeqFirstOrder = () => (
  <TopicPageLayout topicId="diffeq-first-order">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Уравнение первого порядка связывает функцию и её первую производную: <em>dy/dt = f(t, y)</em>. От экспоненциального роста до логистической модели — ниже интерактивный график решений.
      </p>
      <DifferentialEquationChart />
    </section>

    <section>
      <SectionOutline title="Глава 1 · ДУ первого порядка" items={FIRST_ORDER} basePath="/diffeq/first-order" />
    </section>
  </TopicPageLayout>
);

export default DiffeqFirstOrder;
