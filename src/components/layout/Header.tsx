import { Link, useLocation } from "react-router-dom";
import { Compass, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TOPIC_MAP } from "@/content/topicMap";
import { sectionIcon } from "@/components/navigation/sectionIcons";
import { GlobalSearch } from "@/components/navigation/GlobalSearch";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="relative">
            <Compass className="h-8 w-8 text-primary" />
            <div className="absolute inset-0 animate-pulse-subtle">
              <Compass className="h-8 w-8 text-accent opacity-30" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold text-foreground">
              Calculus Compass
            </span>
            <span className="text-xs text-muted-foreground">
              Математический анализ
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              isHome ? "text-accent" : "text-muted-foreground"
            )}
          >
            Главная
          </Link>
          <Link
            to="/module/0/function-definition"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname.startsWith("/module/") ? "text-accent" : "text-muted-foreground"
            )}
          >
            Уроки
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-accent focus:outline-none">
              Разделы
              <ChevronDown className="h-3.5 w-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-64">
              {TOPIC_MAP.map((section) => {
                const Icon = sectionIcon(section.icon);
                return (
                  <DropdownMenuItem key={section.id} asChild>
                    <Link to={section.slug} className="flex items-center gap-2 cursor-pointer">
                      <Icon className="h-4 w-4 text-accent shrink-0" />
                      <span className="truncate">
                        {section.num}. {section.title}
                      </span>
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            to="/guide/0"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname.startsWith("/guide/") ? "text-accent" : "text-muted-foreground"
            )}
          >
            Гид
          </Link>
          <Link
            to="/visualizations/integral"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname.startsWith("/visualizations/") ? "text-accent" : "text-muted-foreground"
            )}
          >
            Визуализации
          </Link>
          <Link
            to="/functions/polynomial"
            className={cn(
              "text-sm font-medium transition-colors hover:text-accent",
              location.pathname.startsWith("/functions/") ? "text-accent" : "text-muted-foreground"
            )}
          >
            Справочник
          </Link>
          <GlobalSearch />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <GlobalSearch />
          <button
            className="p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {[
              { to: "/", label: "Главная" },
              { to: "/module/0/function-definition", label: "Уроки" },
              { to: "/guide/0", label: "Интерактивный гид" },
              { to: "/visualizations/integral", label: "Визуализации" },
              { to: "/functions/polynomial", label: "Справочник функций" },
            ].map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className="text-sm font-medium text-foreground hover:text-accent"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            ))}

            <div className="pt-2 mt-2 border-t border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                Разделы
              </p>
              {TOPIC_MAP.map((section) => (
                <Link
                  key={section.id}
                  to={section.slug}
                  className="block py-1.5 text-sm text-foreground hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.num}. {section.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
