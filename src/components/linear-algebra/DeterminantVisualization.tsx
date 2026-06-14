import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Pause } from "lucide-react";

export const DeterminantVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Матрица 2×2
  const matrix = [
    [3, 2],
    [1, 4]
  ];

  const a = matrix[0][0];
  const b = matrix[0][1];
  const c = matrix[1][0];
  const d = matrix[1][1];

  // Определитель: ad - bc
  const determinant = a * d - b * c;

  const maxSteps = 3;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && step < maxSteps) {
      interval = setTimeout(() => {
        setStep(s => s + 1);
      }, 2000);
    } else if (step >= maxSteps) {
      setIsPlaying(false);
    }
    return () => clearTimeout(interval);
  }, [isPlaying, step]);

  const handlePlay = () => {
    if (step >= maxSteps) {
      setStep(0);
    }
    setIsPlaying(true);
  };

  const handleReset = () => {
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
        <div className="flex flex-col items-center gap-8">
          {/* SVG Visualization */}
          <svg viewBox="0 0 900 450" className="w-full max-w-5xl">
            {/* Matrix A */}
            <g transform="translate(100, 100)">
              <text x="50" y="-20" className="fill-foreground text-xl font-bold">Матрица A</text>
              <text x="50" y="-5" className="fill-muted-foreground text-sm">2×2</text>
              
              {/* Bracket */}
              <path d="M 0,0 L 0,140 M 0,0 L 10,0 M 0,140 L 10,140" 
                    className="stroke-primary stroke-2 fill-none" />
              <path d="M 150,0 L 150,140 M 150,0 L 140,0 M 150,140 L 140,140" 
                    className="stroke-primary stroke-2 fill-none" />
              
              {matrix.map((row, i) => (
                <g key={i} transform={`translate(0, ${i * 70})`}>
                  {row.map((val, j) => {
                    const isMainDiagonal = (i === 0 && j === 0) || (i === 1 && j === 1);
                    const isAntiDiagonal = (i === 0 && j === 1) || (i === 1 && j === 0);
                    const highlight = step === 1 && isMainDiagonal ? "animate-pulse fill-primary/20" :
                                    step === 2 && isAntiDiagonal ? "animate-pulse fill-destructive/20" : "";
                    
                    return (
                      <g key={j} transform={`translate(${j * 75 + 20}, 20)`}>
                        <rect 
                          width="55" 
                          height="50" 
                          rx="8"
                          className={`fill-primary/10 stroke-primary stroke-2 transition-all ${highlight}`}
                        />
                        <text 
                          x="27" 
                          y="33" 
                          textAnchor="middle" 
                          className="fill-foreground text-xl font-semibold"
                        >
                          {val}
                        </text>
                        {/* Labels */}
                        <text 
                          x="27" 
                          y="-8" 
                          textAnchor="middle" 
                          className="fill-muted-foreground text-xs font-mono"
                        >
                          {i === 0 && j === 0 ? 'a' : i === 0 && j === 1 ? 'b' : i === 1 && j === 0 ? 'c' : 'd'}
                        </text>
                      </g>
                    );
                  })}
                </g>
              ))}

              {/* Diagonal lines */}
              {step >= 1 && (
                <>
                  {/* Main diagonal (a*d) - green */}
                  <line 
                    x1="47" y1="45" x2="122" y2="120"
                    className="stroke-success stroke-3"
                    strokeDasharray="5,5"
                  />
                  {step >= 2 && (
                    /* Anti diagonal (b*c) - red */
                    <line 
                      x1="122" y1="45" x2="47" y2="120"
                      className="stroke-destructive stroke-3"
                      strokeDasharray="5,5"
                    />
                  )}
                </>
              )}
            </g>

            {/* Formula */}
            <g transform="translate(330, 150)">
              <text x="0" y="0" className="fill-foreground text-xl font-bold">
                det(A) = 
              </text>
              
              {step >= 1 && (
                <>
                  <text x="100" y="0" className="fill-success text-xl font-bold">
                    a·d
                  </text>
                  {step >= 2 && (
                    <>
                      <text x="160" y="0" className="fill-foreground text-xl font-bold">
                        −
                      </text>
                      <text x="190" y="0" className="fill-destructive text-xl font-bold">
                        b·c
                      </text>
                    </>
                  )}
                </>
              )}

              {step === 0 && (
                <text x="100" y="0" className="fill-muted-foreground text-lg">
                  ?
                </text>
              )}
            </g>

            {/* Step explanations */}
            <g transform="translate(330, 200)">
              {step >= 1 && (
                <>
                  <rect 
                    width="250" 
                    height="60" 
                    rx="10"
                    className="fill-success/10 stroke-success stroke-2"
                  />
                  <text x="125" y="25" textAnchor="middle" className="fill-foreground text-base font-semibold">
                    Главная диагональ
                  </text>
                  <text x="125" y="45" textAnchor="middle" className="fill-success text-lg font-bold">
                    {a} × {d} = {a * d}
                  </text>
                </>
              )}

              {step >= 2 && (
                <g transform="translate(0, 75)">
                  <rect 
                    width="250" 
                    height="60" 
                    rx="10"
                    className="fill-destructive/10 stroke-destructive stroke-2"
                  />
                  <text x="125" y="25" textAnchor="middle" className="fill-foreground text-base font-semibold">
                    Побочная диагональ
                  </text>
                  <text x="125" y="45" textAnchor="middle" className="fill-destructive text-lg font-bold">
                    {b} × {c} = {b * c}
                  </text>
                </g>
              )}

              {step >= 3 && (
                <g transform="translate(0, 160)">
                  <rect 
                    width="250" 
                    height="70" 
                    rx="10"
                    className="fill-accent/10 stroke-accent stroke-2"
                  />
                  <text x="125" y="25" textAnchor="middle" className="fill-foreground text-base font-semibold">
                    Результат
                  </text>
                  <text x="125" y="50" textAnchor="middle" className="fill-accent text-xl font-bold">
                    det(A) = {determinant}
                  </text>
                </g>
              )}
            </g>

            {/* General formula display */}
            {step === 0 && (
              <g transform="translate(320, 220)">
                <rect 
                  width="270" 
                  height="90" 
                  rx="12"
                  className="fill-muted/20 stroke-border stroke-2"
                />
                <text x="135" y="30" textAnchor="middle" className="fill-foreground text-base font-semibold">
                  Формула определителя 2×2:
                </text>
                <text x="135" y="60" textAnchor="middle" className="fill-primary text-lg font-mono">
                  det(A) = ad - bc
                </text>
              </g>
            )}
          </svg>

          {/* Controls */}
          <div className="flex gap-4">
            <Button 
              onClick={handlePlay} 
              disabled={isPlaying}
              className="bg-gradient-to-r from-primary to-primary-glow"
            >
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {step >= maxSteps ? "Повторить" : isPlaying ? "Идёт анимация" : "Запустить"}
            </Button>
            <Button 
              onClick={handleReset} 
              variant="outline"
              className="border-2"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Сбросить
            </Button>
          </div>

          {/* Step indicator */}
          <div className="flex gap-2">
            {[...Array(maxSteps + 1)].map((_, i) => (
              <div
                key={i}
                className={`h-2 w-12 rounded-full transition-all ${
                  i <= step ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};
