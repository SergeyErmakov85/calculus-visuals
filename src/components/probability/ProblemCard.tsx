import { ReactNode, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb } from "lucide-react";

interface ProblemCardProps {
  problem: string;
  solution: ReactNode;
}

export const ProblemCard = ({ problem, solution }: ProblemCardProps) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <Card className="p-6 space-y-4 border-2 hover:shadow-lg transition-all">
      <div className="space-y-2">
        <div className="flex items-start gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
            <span className="text-xs font-bold text-primary">?</span>
          </div>
          <p className="text-foreground leading-relaxed">{problem}</p>
        </div>
      </div>
      
      <Button
        onClick={() => setShowSolution(!showSolution)}
        variant="outline"
        className="w-full gap-2 hover:bg-secondary"
      >
        <Lightbulb className="w-4 h-4" />
        {showSolution ? "Скрыть решение" : "Показать решение"}
      </Button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          showSolution ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pt-4 border-t border-border space-y-3 bg-secondary/20 p-4 rounded-lg">
          {solution}
        </div>
      </div>
    </Card>
  );
};
