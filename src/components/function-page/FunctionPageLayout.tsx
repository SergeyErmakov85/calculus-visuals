import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, LucideIcon } from "lucide-react";
import { Header } from "../layout/Header";
import { Footer } from "../layout/Footer";
import { SEOHead } from "@/components/lesson/SEOHead";

interface FunctionPageLayoutProps {
  title: string;
  description: string;
  icon: LucideIcon;
  children: ReactNode;
}

export const FunctionPageLayout = ({ 
  title, 
  description, 
  icon: Icon, 
  children 
}: FunctionPageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead title={`${title} — Справочник функций`} description={description} />
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="border-b border-border bg-gradient-to-b from-secondary/30 to-transparent">
          <div className="container py-12 md:py-16">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Вернуться к компасу
            </Link>
            
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-3">
                  {title}
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content */}
        <section className="container py-12">
          {children}
        </section>
      </main>
      
      <Footer />
    </div>
  );
};
