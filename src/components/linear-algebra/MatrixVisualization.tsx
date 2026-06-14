import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Pause } from "lucide-react";

export const MatrixVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Матрица данных X (3 наблюдения × 2 переменные)
  const X = [
    [2, 1],
    [3, 2],
    [1, 3]
  ];

  // Матрица факторных нагрузок L (2 переменные × 1 фактор)
  const L = [
    [0.8],
    [0.6]
  ];

  // Результат XL (3 × 1)
  const result = X.map(row => 
    [row[0] * L[0][0] + row[1] * L[1][0]]
  );

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

  const getCellHighlight = (matrixType: 'X' | 'L' | 'R', i: number, j: number) => {
    if (!isPlaying || step === 0) return "";
    
    const currentRow = step - 1;
    
    if (matrixType === 'X' && i === currentRow) {
      return "animate-pulse";
    }
    if (matrixType === 'L') {
      return "animate-pulse";
    }
    if (matrixType === 'R' && i === currentRow && step > 0) {
      return "fill-success/20 stroke-success";
    }
    
    return "";
  };

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
        <div className="flex flex-col items-center gap-8">
          {/* SVG Visualization */}
          <svg viewBox="0 0 900 400" className="w-full max-w-5xl">
            {/* Matrix X */}
            <g transform="translate(50, 80)">
              <text x="60" y="-20" className="fill-foreground text-xl font-bold">X (Данные)</text>
              <text x="40" y="-5" className="fill-muted-foreground text-sm">3×2</text>
              
              {/* Bracket */}
              <path d="M 0,0 L 0,180 M 0,0 L 10,0 M 0,180 L 10,180" 
                    className="stroke-primary stroke-2 fill-none" />
              <path d="M 140,0 L 140,180 M 140,0 L 130,0 M 140,180 L 130,180" 
                    className="stroke-primary stroke-2 fill-none" />
              
              {X.map((row, i) => (
                <g key={i} transform={`translate(0, ${i * 60})`}>
                  {row.map((val, j) => (
                    <g key={j} transform={`translate(${j * 70 + 20}, 20)`}>
                      <rect 
                        width="50" 
                        height="40" 
                        rx="8"
                        className={`fill-primary/10 stroke-primary stroke-2 transition-all ${getCellHighlight('X', i, j)}`}
                      />
                      <text 
                        x="25" 
                        y="27" 
                        textAnchor="middle" 
                        className="fill-foreground text-lg font-semibold"
                      >
                        {val}
                      </text>
                    </g>
                  ))}
                </g>
              ))}
            </g>

            {/* Multiplication sign */}
            <g transform="translate(240, 180)">
              <circle cx="0" cy="0" r="20" className="fill-accent/20 stroke-accent stroke-2" />
              <text x="0" y="8" textAnchor="middle" className="fill-accent text-2xl font-bold">×</text>
            </g>

            {/* Matrix L */}
            <g transform="translate(320, 130)">
              <text x="20" y="-20" className="fill-foreground text-xl font-bold">L (Нагрузки)</text>
              <text x="20" y="-5" className="fill-muted-foreground text-sm">2×1</text>
              
              <path d="M 0,0 L 0,120 M 0,0 L 10,0 M 0,120 L 10,120" 
                    className="stroke-secondary stroke-2 fill-none" />
              <path d="M 80,0 L 80,120 M 80,0 L 70,0 M 80,120 L 70,120" 
                    className="stroke-secondary stroke-2 fill-none" />
              
              {L.map((row, i) => (
                <g key={i} transform={`translate(15, ${i * 60 + 20})`}>
                  <rect 
                    width="50" 
                    height="40" 
                    rx="8"
                    className={`fill-secondary/10 stroke-secondary stroke-2 transition-all ${getCellHighlight('L', i, 0)}`}
                  />
                  <text 
                    x="25" 
                    y="27" 
                    textAnchor="middle" 
                    className="fill-foreground text-lg font-semibold"
                  >
                    {row[0]}
                  </text>
                </g>
              ))}
            </g>

            {/* Equals sign */}
            <g transform="translate(450, 180)">
              <circle cx="0" cy="0" r="20" className="fill-success/20 stroke-success stroke-2" />
              <text x="0" y="8" textAnchor="middle" className="fill-success text-2xl font-bold">=</text>
            </g>

            {/* Result Matrix */}
            <g transform="translate(530, 80)">
              <text x="35" y="-20" className="fill-foreground text-xl font-bold">Факторы</text>
              <text x="30" y="-5" className="fill-muted-foreground text-sm">3×1</text>
              
              <path d="M 0,0 L 0,180 M 0,0 L 10,0 M 0,180 L 10,180" 
                    className="stroke-success stroke-2 fill-none" />
              <path d="M 110,0 L 110,180 M 110,0 L 100,0 M 110,180 L 100,180" 
                    className="stroke-success stroke-2 fill-none" />
              
              {result.map((row, i) => (
                <g key={i} transform={`translate(15, ${i * 60 + 20})`}>
                  <rect 
                    width="80" 
                    height="40" 
                    rx="8"
                    className={`fill-success/10 stroke-success stroke-2 transition-all ${getCellHighlight('R', i, 0)}`}
                  />
                  <text 
                    x="40" 
                    y="27" 
                    textAnchor="middle" 
                    className="fill-foreground text-lg font-semibold"
                  >
                    {row[0].toFixed(1)}
                  </text>
                </g>
              ))}
            </g>

            {/* Calculation details */}
            {step > 0 && step <= maxSteps && (
              <g transform="translate(680, 100)">
                <rect 
                  width="200" 
                  height="80" 
                  rx="12" 
                  className="fill-accent/10 stroke-accent stroke-2"
                />
                <text x="100" y="25" textAnchor="middle" className="fill-foreground text-sm font-semibold">
                  Строка {step}:
                </text>
                <text x="100" y="45" textAnchor="middle" className="fill-muted-foreground text-xs">
                  {X[step-1][0]} × {L[0][0]} + {X[step-1][1]} × {L[1][0]}
                </text>
                <text x="100" y="65" textAnchor="middle" className="fill-accent text-base font-bold">
                  = {result[step-1][0].toFixed(1)}
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
