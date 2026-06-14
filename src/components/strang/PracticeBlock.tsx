import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown, ChevronRight, Eye, EyeOff } from "lucide-react";
import { renderKatex } from "@/lib/katexAutoRender";

interface PracticeBlockProps {
  number: number;
  title: string;
  children: ReactNode;
  solution: ReactNode;
  answer: string;
}

const PracticeBlock = ({ number, title, children, solution, answer }: PracticeBlockProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const solutionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) renderKatex(solutionRef.current);
  }, [isOpen]);

  return (
    <div className="my-4 p-4 bg-card border border-border rounded-lg shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-sm">
          {number}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-foreground mb-2">{title}</h4>
          <div className="text-muted-foreground">{children}</div>

          <div className="mt-3 border-t border-border/50 pt-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
            >
              {isOpen ? (
                <>
                  <EyeOff className="h-4 w-4" />
                  <span>Скрыть решение</span>
                  <ChevronDown className="h-4 w-4" />
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4" />
                  <span>Показать решение</span>
                  <ChevronRight className="h-4 w-4" />
                </>
              )}
            </button>

            {isOpen && (
              <div ref={solutionRef} className="mt-3 pl-4 border-l-2 border-primary/30">
                <div className="space-y-2 text-sm">{solution}</div>
                <div className="mt-3 p-2 bg-accent/10 border border-accent/30 rounded-md">
                  <span className="font-semibold text-primary">Ответ: </span>
                  <span>{answer}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeBlock;
