import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, RotateCcw, Pause } from "lucide-react";

export const ParallelogramVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Два вектора
  const v1 = { x: 4, y: 2 };
  const v2 = { x: 1, y: 3 };

  // Определитель = площадь параллелограмма
  const determinant = v1.x * v2.y - v1.y * v2.x;
  const area = Math.abs(determinant);

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

  // Масштаб для координатной плоскости
  const scale = 40;
  const originX = 100;
  const originY = 300;

  return (
    <div className="space-y-8">
      <Card className="p-8 bg-gradient-to-br from-card to-muted/30">
        <div className="flex flex-col items-center gap-8">
          {/* SVG Visualization */}
          <svg viewBox="0 0 900 450" className="w-full max-w-5xl">
            {/* Coordinate grid */}
            <g>
              {/* Grid lines */}
              {[...Array(11)].map((_, i) => (
                <g key={i}>
                  <line
                    x1={originX + i * scale}
                    y1={originY - 5 * scale}
                    x2={originX + i * scale}
                    y2={originY + scale}
                    className="stroke-muted/20 stroke-1"
                  />
                  <line
                    x1={originX}
                    y1={originY - i * scale}
                    x2={originX + 10 * scale}
                    y2={originY - i * scale}
                    className="stroke-muted/20 stroke-1"
                  />
                </g>
              ))}
              
              {/* Axes */}
              <line
                x1={originX}
                y1={originY - 5 * scale}
                x2={originX}
                y2={originY + scale}
                className="stroke-foreground/40 stroke-2"
              />
              <line
                x1={originX}
                y1={originY}
                x2={originX + 10 * scale}
                y2={originY}
                className="stroke-foreground/40 stroke-2"
              />
              
              {/* Axis labels */}
              <text x={originX + 10 * scale + 10} y={originY + 5} className="fill-foreground text-sm">x</text>
              <text x={originX - 15} y={originY - 5 * scale - 5} className="fill-foreground text-sm">y</text>
            </g>

            {/* Vector v1 */}
            {step >= 1 && (
              <g>
                <defs>
                  <marker
                    id="arrowhead-v1"
                    markerWidth="10"
                    markerHeight="10"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" className="fill-primary" />
                  </marker>
                </defs>
                <line
                  x1={originX}
                  y1={originY}
                  x2={originX + v1.x * scale}
                  y2={originY - v1.y * scale}
                  className="stroke-primary stroke-3"
                  markerEnd="url(#arrowhead-v1)"
                  strokeDasharray={step === 1 ? "5,5" : "0"}
                >
                  {step === 1 && <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />}
                </line>
                <text
                  x={originX + v1.x * scale / 2 - 15}
                  y={originY - v1.y * scale / 2 - 10}
                  className="fill-primary text-lg font-bold"
                >
                  v₁({v1.x}, {v1.y})
                </text>
              </g>
            )}

            {/* Vector v2 */}
            {step >= 2 && (
              <g>
                <defs>
                  <marker
                    id="arrowhead-v2"
                    markerWidth="10"
                    markerHeight="10"
                    refX="8"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 10 3, 0 6" className="fill-secondary" />
                  </marker>
                </defs>
                <line
                  x1={originX}
                  y1={originY}
                  x2={originX + v2.x * scale}
                  y2={originY - v2.y * scale}
                  className="stroke-secondary stroke-3"
                  markerEnd="url(#arrowhead-v2)"
                  strokeDasharray={step === 2 ? "5,5" : "0"}
                >
                  {step === 2 && <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite" />}
                </line>
                <text
                  x={originX + v2.x * scale / 2 + 10}
                  y={originY - v2.y * scale / 2 + 20}
                  className="fill-secondary text-lg font-bold"
                >
                  v₂({v2.x}, {v2.y})
                </text>
              </g>
            )}

            {/* Parallelogram */}
            {step >= 3 && (
              <g>
                <polygon
                  points={`
                    ${originX},${originY}
                    ${originX + v1.x * scale},${originY - v1.y * scale}
                    ${originX + v1.x * scale + v2.x * scale},${originY - v1.y * scale - v2.y * scale}
                    ${originX + v2.x * scale},${originY - v2.y * scale}
                  `}
                  className="fill-success/20 stroke-success stroke-3"
                  strokeDasharray={step === 3 ? "8,4" : "0"}
                >
                  {step === 3 && <animate attributeName="stroke-dashoffset" from="12" to="0" dur="1.5s" repeatCount="indefinite" />}
                </polygon>
                
                {/* Dashed lines to complete parallelogram */}
                <line
                  x1={originX + v1.x * scale}
                  y1={originY - v1.y * scale}
                  x2={originX + v1.x * scale + v2.x * scale}
                  y2={originY - v1.y * scale - v2.y * scale}
                  className="stroke-secondary/50 stroke-2"
                  strokeDasharray="4,4"
                />
                <line
                  x1={originX + v2.x * scale}
                  y1={originY - v2.y * scale}
                  x2={originX + v1.x * scale + v2.x * scale}
                  y2={originY - v1.y * scale - v2.y * scale}
                  className="stroke-primary/50 stroke-2"
                  strokeDasharray="4,4"
                />
              </g>
            )}

            {/* Formula and calculation */}
            <g transform="translate(520, 80)">
              <rect
                width="340"
                height="320"
                rx="12"
                className="fill-card stroke-border stroke-2"
              />
              
              <text x="170" y="30" textAnchor="middle" className="fill-foreground text-xl font-bold">
                Вычисление площади
              </text>

              {step >= 1 && (
                <>
                  <g transform="translate(20, 60)">
                    <text x="0" y="0" className="fill-foreground text-base font-semibold">
                      Шаг 1: Составим матрицу
                    </text>
                    <g transform="translate(40, 15)">
                      <text x="0" y="20" className="fill-muted-foreground text-sm">из координат векторов:</text>
                      
                      {/* Matrix brackets */}
                      <path d="M 0,35 L 0,95 M 0,35 L 5,35 M 0,95 L 5,95" 
                            className="stroke-primary stroke-2 fill-none" />
                      <path d="M 130,35 L 130,95 M 130,35 L 125,35 M 130,95 L 125,95" 
                            className="stroke-primary stroke-2 fill-none" />
                      
                      {/* Matrix elements */}
                      <text x="30" y="60" className="fill-primary text-lg font-bold">{v1.x}</text>
                      <text x="80" y="60" className="fill-secondary text-lg font-bold">{v2.x}</text>
                      <text x="30" y="85" className="fill-primary text-lg font-bold">{v1.y}</text>
                      <text x="80" y="85" className="fill-secondary text-lg font-bold">{v2.y}</text>
                    </g>
                  </g>
                </>
              )}

              {step >= 3 && (
                <>
                  <g transform="translate(20, 180)">
                    <text x="0" y="0" className="fill-foreground text-base font-semibold">
                      Шаг 2: Определитель
                    </text>
                    <g transform="translate(40, 15)">
                      <text x="0" y="20" className="fill-foreground text-sm">
                        det = 
                        <tspan className="fill-primary"> {v1.x}</tspan>
                        <tspan> × </tspan>
                        <tspan className="fill-secondary">{v2.y}</tspan>
                        <tspan> − </tspan>
                        <tspan className="fill-primary">{v1.y}</tspan>
                        <tspan> × </tspan>
                        <tspan className="fill-secondary">{v2.x}</tspan>
                      </text>
                      <text x="0" y="45" className="fill-foreground text-sm">
                        det = {v1.x * v2.y} − {v1.y * v2.x} = <tspan className="fill-accent font-bold">{determinant}</tspan>
                      </text>
                    </g>
                  </g>
                </>
              )}

              {step >= 4 && (
                <>
                  <g transform="translate(20, 260)">
                    <rect
                      width="300"
                      height="45"
                      rx="8"
                      className="fill-success/20 stroke-success stroke-2"
                    />
                    <text x="150" y="20" textAnchor="middle" className="fill-foreground text-base font-semibold">
                      Площадь параллелограмма:
                    </text>
                    <text x="150" y="38" textAnchor="middle" className="fill-success text-xl font-bold">
                      S = |det| = {area}
                    </text>
                  </g>
                </>
              )}
            </g>
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
