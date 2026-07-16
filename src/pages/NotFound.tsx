import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, Compass, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { SEOHead } from "@/components/lesson/SEOHead";
import { TOPIC_MAP } from "@/content/topicMap";

const NotFound = () => {
  const location = useLocation();

  return (
    <Layout>
      <SEOHead
        title="Страница не найдена — Calculus Compass"
        description="Запрошенная страница не существует. Вернитесь на главную или выберите раздел курса."
      />
      <section className="container py-24 text-center">
        <Compass className="mx-auto mb-6 h-16 w-16 text-muted-foreground/40" aria-hidden />
        <p className="font-serif text-6xl font-bold text-foreground mb-2">404</p>
        <h1 className="text-xl font-medium text-foreground mb-2">Страница не найдена</h1>
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          Адрес <code className="px-1.5 py-0.5 rounded bg-muted text-sm">{location.pathname}</code>{" "}
          не существует или был перемещён.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14">
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" aria-hidden />
              На главную
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/#modules">
              <ArrowLeft className="mr-2 h-4 w-4" aria-hidden />
              К модулям курса
            </Link>
          </Button>
        </div>

        <nav aria-label="Разделы курса" className="max-w-2xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
            Возможно, вы искали
          </h2>
          <ul className="flex flex-wrap justify-center gap-2">
            {TOPIC_MAP.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.slug}
                  className="inline-block rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground hover:text-accent hover:border-accent/50 transition-colors"
                >
                  {section.num}. {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </Layout>
  );
};

export default NotFound;
