import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { APPLICATIONS } from "@/content/linearAlgebraOutline";

const LinearAlgebraApplications = () => (
  <TopicPageLayout topicId="linear-algebra-applications">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Линейная алгебра — язык приложений: графы и сети, марковские цепи, оптимизация и преобразование Фурье. Везде матрица описывает структуру и динамику системы.
      </p>
      <SectionOutline title="Глава 8 · Приложения линейной алгебры" items={APPLICATIONS} basePath="/linear-algebra/applications" />
    </section>
  </TopicPageLayout>
);

export default LinearAlgebraApplications;
