import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Pause } from "lucide-react";

export const CovarianceVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Матрица данных X (3 объекта × 2 переменные)
  const X = [
    [2, 1],
    [3, 2],
    [2, 1.5]
  ];

  // Средние значения
  const mean1 = (X[0][0] + X[1][0] + X[2][0]) / 3; // 2.33
  const mean2 = (X[0][1] + X[1][1] + X[2][1]) / 3; // 1.5

  // Центрированные данные
  const centeredX = X.map(row => [
    row[0] - mean1,
    row[1] - mean2
  ]);

  // Матрица ковариации (2×2)
  const n = X.length;
  const cov11 = centeredX.reduce((sum, row) => sum + row[0] * row[0], 0) / (n - 1);
  const cov12 = centeredX.reduce((sum, row) => sum + row[0] * row[1], 0) / (n - 1);
  const cov22 = centeredX.reduce((sum, row) => sum + row[1] * row[1], 0) / (n - 1);

  const covMatrix = [
    [cov11, cov12],
    [cov12, cov22]
  ];

  // Веса (упрощённая версия - первый собственный вектор)
  const weights = [0.82, 0.57];

  const maxSteps = 4;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && step < maxSteps) {
      interval = setTimeout(() => {
        setStep(s => s + 1);
      }, 2500);
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
          <svg viewBox="0 0 1000 500" className="w-full max-w-6xl">
            {/* Original Data Matrix X */}
            <g transform="translate(50, 80)">
              <text x="40" y="-20" className="fill-foreground text-lg font-bold">Шаг 1: Данные X</text>
              <text x="40" y="-5" className="fill-muted-foreground text-xs">3×2 матрица</text>
              
              <path d="M 0,0 L 0,140 M 0,0 L 8,0 M 0,140 L 8,140" 
                    className="stroke-primary stroke-2 fill-none" />
              <path d="M 100,0 L 100,140 M 100,0 L 92,0 M 100,140 L 92,140" 
                    className="stroke-primary stroke-2 fill-none" />
              
              {X.map((row, i) => (
                <g key={i} transform={`translate(10, ${i * 45})`}>
                  {row.map((val, j) => (
                    <g key={j} transform={`translate(${j * 45}, 5)`}>
                      <rect 
                        width="38" 
                        height="38" 
                        rx="6"
                        className={`${step === 0 ? 'fill-primary/20 animate-pulse' : 'fill-primary/10'} stroke-primary stroke-2 transition-all`}
                      />
                      <text 
                        x="19" 
                        y="25" 
                        textAnchor="middle" 
                        className="fill-foreground text-sm font-semibold"
                      >
                        {val.toFixed(1)}
                      </text>
                    </g>
                  ))}
                </g>
              ))}
            </g>

            {/* Arrow */}
            {step >= 1 && (
              <g transform="translate(180, 150)">
                <line x1="0" y1="0" x2="50" y2="0" className="stroke-secondary stroke-2" markerEnd="url(#arrowhead1)" />
                <defs>
                  <marker id="arrowhead1" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" className="fill-secondary" />
                  </marker>
                </defs>
                <text x="25" y="-10" textAnchor="middle" className="fill-secondary text-xs font-semibold">
                  центрирование
                </text>
              </g>
            )}

            {/* Centered Data */}
            {step >= 1 && (
              <g transform="translate(250, 80)">
                <text x="40" y="-20" className="fill-foreground text-lg font-bold">Шаг 2: Центрирование</text>
                <text x="40" y="-5" className="fill-muted-foreground text-xs">X - mean(X)</text>
                
                <path d="M 0,0 L 0,140 M 0,0 L 8,0 M 0,140 L 8,140" 
                      className="stroke-secondary stroke-2 fill-none" />
                <path d="M 110,0 L 110,140 M 110,0 L 102,0 M 110,140 L 102,140" 
                      className="stroke-secondary stroke-2 fill-none" />
                
                {centeredX.map((row, i) => (
                  <g key={i} transform={`translate(10, ${i * 45})`}>
                    {row.map((val, j) => (
                      <g key={j} transform={`translate(${j * 50}, 5)`}>
                        <rect 
                          width="42" 
                          height="38" 
                          rx="6"
                          className={`${step === 1 ? 'fill-secondary/20 animate-pulse' : 'fill-secondary/10'} stroke-secondary stroke-2 transition-all`}
                        />
                        <text 
                          x="21" 
                          y="25" 
                          textAnchor="middle" 
                          className="fill-foreground text-xs font-semibold"
                        >
                          {val.toFixed(2)}
                        </text>
                      </g>
                    ))}
                  </g>
                ))}
              </g>
            )}

            {/* Arrow to Covariance */}
            {step >= 2 && (
              <g transform="translate(390, 150)">
                <line x1="0" y1="0" x2="60" y2="0" className="stroke-accent stroke-2" markerEnd="url(#arrowhead2)" />
                <defs>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" className="fill-accent" />
                  </marker>
                </defs>
                <text x="30" y="-10" textAnchor="middle" className="fill-accent text-xs font-semibold">
                  XᵀX/(n-1)
                </text>
              </g>
            )}

            {/* Covariance Matrix */}
            {step >= 2 && (
              <g transform="translate(470, 100)">
                <text x="50" y="-20" className="fill-foreground text-lg font-bold">Шаг 3: Ковариация</text>
                <text x="50" y="-5" className="fill-muted-foreground text-xs">Σ (2×2)</text>
                
                <path d="M 0,0 L 0,100 M 0,0 L 8,0 M 0,100 L 8,100" 
                      className="stroke-accent stroke-2 fill-none" />
                <path d="M 100,0 L 100,100 M 100,0 L 92,0 M 100,100 L 92,100" 
                      className="stroke-accent stroke-2 fill-none" />
                
                {covMatrix.map((row, i) => (
                  <g key={i} transform={`translate(10, ${i * 48})`}>
                    {row.map((val, j) => (
                      <g key={j} transform={`translate(${j * 45}, 5)`}>
                        <rect 
                          width="38" 
                          height="38" 
                          rx="6"
                          className={`${step === 2 ? 'fill-accent/20 animate-pulse' : 'fill-accent/10'} stroke-accent stroke-2 transition-all`}
                        />
                        <text 
                          x="19" 
                          y="25" 
                          textAnchor="middle" 
                          className="fill-foreground text-xs font-semibold"
                        >
                          {val.toFixed(2)}
                        </text>
                      </g>
                    ))}
                  </g>
                ))}
              </g>
            )}

            {/* Arrow to Weights */}
            {step >= 3 && (
              <g transform="translate(600, 150)">
                <line x1="0" y1="0" x2="70" y2="0" className="stroke-success stroke-2" markerEnd="url(#arrowhead3)" />
                <defs>
                  <marker id="arrowhead3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                    <polygon points="0 0, 10 3, 0 6" className="fill-success" />
                  </marker>
                </defs>
                <text x="35" y="-10" textAnchor="middle" className="fill-success text-xs font-semibold">
                  собственный
                </text>
                <text x="35" y="5" textAnchor="middle" className="fill-success text-xs font-semibold">
                  вектор
                </text>
              </g>
            )}

            {/* Weights (Factor Loadings) */}
            {step >= 3 && (
              <g transform="translate(690, 120)">
                <text x="30" y="-20" className="fill-foreground text-lg font-bold">Шаг 4: Веса</text>
                <text x="30" y="-5" className="fill-muted-foreground text-xs">Нагрузки L</text>
                
                <path d="M 0,0 L 0,100 M 0,0 L 8,0 M 0,100 L 8,100" 
                      className="stroke-success stroke-2 fill-none" />
                <path d="M 60,0 L 60,100 M 60,0 L 52,0 M 60,100 L 52,100" 
                      className="stroke-success stroke-2 fill-none" />
                
                {weights.map((val, i) => (
                  <g key={i} transform={`translate(10, ${i * 48 + 5})`}>
                    <rect 
                      width="42" 
                      height="38" 
                      rx="6"
                      className={`${step === 3 ? 'fill-success/20 animate-pulse' : 'fill-success/10'} stroke-success stroke-2 transition-all`}
                    />
                    <text 
                      x="21" 
                      y="25" 
                      textAnchor="middle" 
                      className="fill-foreground text-sm font-semibold"
                    >
                      {val.toFixed(2)}
                    </text>
                  </g>
                ))}
              </g>
            )}

            {/* Explanation Box */}
            {step >= 4 && (
              <g transform="translate(50, 280)">
                <rect 
                  width="680" 
                  height="90" 
                  rx="12"
                  className="fill-primary/5 stroke-primary stroke-2"
                />
                <text x="340" y="30" textAnchor="middle" className="fill-foreground text-base font-semibold">
                  💡 Веса показывают важность каждой переменной для фактора
                </text>
                <text x="340" y="55" textAnchor="middle" className="fill-muted-foreground text-sm">
                  Переменная 1: вес = {weights[0].toFixed(2)} (сильная связь)
                </text>
                <text x="340" y="75" textAnchor="middle" className="fill-muted-foreground text-sm">
                  Переменная 2: вес = {weights[1].toFixed(2)} (умеренная связь)
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
