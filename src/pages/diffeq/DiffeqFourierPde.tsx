import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { FOURIER_PDE } from "@/content/diffeqOutline";

const DiffeqFourierPde = () => (
  <TopicPageLayout topicId="diffeq-fourier-pde">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Ряды Фурье раскладывают периодическую функцию в сумму синусов и косинусов и служат ключом к уравнениям в частных производных: теплопроводности, волновому и Лапласа.
      </p>
      <SectionOutline title="Глава 4 · Ряды Фурье и уравнения в частных производных" items={FOURIER_PDE} />
    </section>
  </TopicPageLayout>
);

export default DiffeqFourierPde;
