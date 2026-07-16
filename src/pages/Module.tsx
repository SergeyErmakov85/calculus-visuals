import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { modules } from '@/data/courseData';
import { SEOHead } from '@/components/lesson/SEOHead';
import { Button } from '@/components/ui/button';
import { ScreenNavigation } from '@/components/ScreenNavigation';
import { Screen01 } from '@/components/screens/Screen01';
import { Screen02 } from '@/components/screens/Screen02';
import { Screen03 } from '@/components/screens/Screen03';
import { Screen04 } from '@/components/screens/Screen04';
import { CompassIcon } from '@/components/CompassIcon';

const screenComponents: Record<string, React.FC> = {
  '0.1': Screen01,
  '0.2': Screen02,
  '0.3': Screen03,
  '0.4': Screen04,
};

export default function ModulePage() {
  const navigate = useNavigate();
  const { moduleId } = useParams();
  const [currentScreenIndex, setCurrentScreenIndex] = useState(0);

  const module = modules.find(m => m.id === Number(moduleId));

  if (!module) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <SEOHead
          title="Модуль не найден — Интерактивный гид"
          description="Запрошенный модуль интерактивного гида не существует."
        />
        <p className="text-muted-foreground">Модуль не найден</p>
        <Button asChild>
          <Link to="/">На главную</Link>
        </Button>
      </div>
    );
  }

  const currentScreen = module.screens[currentScreenIndex];
  const ScreenComponent = currentScreen ? screenComponents[currentScreen.id] : null;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Модуль ${module.id}: ${module.title} — Интерактивный гид`}
        description={`${module.subtitle}. Пошаговое погружение: от интуиции к формуле.`}
      />
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <CompassIcon size={32} />
              <span className="font-serif font-semibold hidden sm:inline">Calculus Compass</span>
            </button>
            
            <div className="text-center">
              <h2 className="font-serif text-lg font-semibold text-foreground">
                Модуль {module.id}: {module.title}
              </h2>
              <p className="text-xs text-muted-foreground">{module.subtitle}</p>
            </div>
            
            <div className="text-sm text-muted-foreground" aria-label="Прогресс по экранам">
              {module.screens.length > 0
                ? `${currentScreenIndex + 1} / ${module.screens.length}`
                : "—"}
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {ScreenComponent ? (
          <ScreenComponent />
        ) : currentScreen ? (
          <div className="text-center py-20">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Экран {currentScreen.id}: {currentScreen.title}
            </h2>
            <p className="text-muted-foreground">
              {currentScreen.description}
            </p>
            <p className="mt-8 text-sm text-muted-foreground">
              Этот экран находится в разработке...
            </p>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Модуль в разработке
            </h2>
            <p className="text-muted-foreground mb-8">
              Экраны этого модуля ещё готовятся. Загляните в структурированные уроки —
              материал по теме уже доступен там.
            </p>
            <Button asChild variant="outline">
              <Link to="/#modules">К списку модулей</Link>
            </Button>
          </div>
        )}
      </main>

      {/* Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-md border-t border-border">
        <div className="container mx-auto px-4 py-3">
          <ScreenNavigation
            currentScreen={currentScreenIndex}
            totalScreens={module.screens.length}
            onPrevious={() => setCurrentScreenIndex(i => Math.max(0, i - 1))}
            onNext={() => setCurrentScreenIndex(i => Math.min(module.screens.length - 1, i + 1))}
            onHome={() => navigate('/')}
          />
        </div>
      </footer>
    </div>
  );
}
