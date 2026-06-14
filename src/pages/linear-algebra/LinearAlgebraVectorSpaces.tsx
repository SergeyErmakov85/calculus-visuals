import { TopicPageLayout } from "@/components/navigation/TopicPageLayout";
import { SectionOutline } from "@/components/linear-algebra/SectionOutline";
import { VECTOR_SPACES } from "@/content/linearAlgebraOutline";

const LinearAlgebraVectorSpaces = () => (
  <TopicPageLayout topicId="linear-algebra-vector-spaces">
    <section className="space-y-4">
      <p className="text-muted-foreground">
        Векторное пространство — множество, замкнутое относительно сложения и умножения на скаляр. Четыре фундаментальных подпространства матрицы описывают всё про решения системы Av=b.
      </p>
      <SectionOutline title="Глава 5 · Векторные пространства и подпространства" items={VECTOR_SPACES} />
    </section>
  </TopicPageLayout>
);

export default LinearAlgebraVectorSpaces;
