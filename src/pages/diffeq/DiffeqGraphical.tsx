import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { SlopeFieldChart } from "@/components/diffeq/SlopeFieldChart";
import { PhasePortraitChart } from "@/components/diffeq/PhasePortraitChart";
import { GRAPHICAL } from "@/content/diffeqOutline";

const DiffeqGraphical = () => (
  <TopicPageLayout topicId="diffeq-graphical">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Не решая уравнение аналитически, можно понять поведение решений по полю направлений и фазовому портрету. Ниже — оба интерактивных инструмента.
      </p>
      <SlopeFieldChart showSolutionCurves />
    </section>

    <section>
      <PhasePortraitChart />
    </section>

    <section>
      <SectionOutline title="Глава 3 · Графические методы и нелинейные уравнения" items={GRAPHICAL} basePath="/diffeq/graphical" />
    </section>
  </TopicPageLayout>
);

export default DiffeqGraphical;
