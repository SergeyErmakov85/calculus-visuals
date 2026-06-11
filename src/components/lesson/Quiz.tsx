import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, HelpCircle } from "lucide-react";

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const Quiz = ({ questions }: { questions: QuizQuestion[] }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  return (
    <div className="space-y-5">
      {questions.map((q, qi) => {
        const picked = answers[qi];
        const answered = picked !== undefined;
        return (
          <Card
            key={qi}
            className="border-accent/30 bg-card/60 backdrop-blur-sm"
          >
            <CardContent className="p-5 md:p-6 space-y-4">
              <div className="flex items-start gap-3">
                <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                <h4 className="font-serif text-lg md:text-xl font-semibold text-foreground">
                  {q.question}
                </h4>
              </div>
              <div className="grid gap-2">
                {q.options.map((opt, oi) => {
                  const isPicked = picked === oi;
                  const isCorrect = oi === q.correctAnswer;
                  const showState = answered && (isPicked || isCorrect);
                  return (
                    <Button
                      key={oi}
                      variant="outline"
                      disabled={answered}
                      onClick={() =>
                        setAnswers((a) => ({ ...a, [qi]: oi }))
                      }
                      className={`justify-start text-left h-auto py-3 whitespace-normal ${
                        showState && isCorrect
                          ? "border-[hsl(var(--success))] bg-[hsl(var(--success))]/10 text-foreground"
                          : showState && isPicked && !isCorrect
                          ? "border-destructive bg-destructive/10 text-foreground"
                          : ""
                      }`}
                    >
                      <span className="flex items-center gap-2 w-full">
                        {showState && isCorrect && (
                          <Check className="w-4 h-4 text-[hsl(var(--success))]" />
                        )}
                        {showState && isPicked && !isCorrect && (
                          <X className="w-4 h-4 text-destructive" />
                        )}
                        <span>{opt}</span>
                      </span>
                    </Button>
                  );
                })}
              </div>
              {answered && (
                <div className="rounded-lg border border-border bg-muted/40 p-4 text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Объяснение. </strong>
                  {q.explanation}
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
