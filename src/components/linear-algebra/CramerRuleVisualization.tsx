import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

export const CramerRuleVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Система уравнений: 2x + 3y = 8, 4x + y = 6
  const a = 2, b = 3, c = 4, d = 1;
  const b1 = 8, b2 = 6;

  // Вычисление определителей
  const detA = a * d - b * c; // 2*1 - 3*4 = 2 - 12 = -10
  const detX = b1 * d - b * b2; // 8*1 - 3*6 = 8 - 18 = -10
  const detY = a * b2 - b1 * c; // 2*6 - 8*4 = 12 - 32 = -20

  const x = detX / detA; // -10 / -10 = 1
  const y = detY / detA; // -20 / -10 = 2

  const steps = [
    {
      title: "Исходная система",
      description: "Записываем систему линейных уравнений и матрицу коэффициентов A",
      activeMatrix: "main",
      showDet: false,
      showResult: false
    },
    {
      title: "Определитель det(A)",
      description: `Вычисляем определитель основной матрицы: det(A) = ${a}×${d} - ${b}×${c} = ${a*d} - ${b*c} = ${detA}`,
      activeMatrix: "main",
      showDet: true,
      detValue: detA,
      showResult: false
    },
    {
      title: "Матрица для x (Ax)",
      description: "Заменяем первый столбец матрицы A на столбец свободных членов",
      activeMatrix: "x",
      showDet: false,
      showResult: false
    },
    {
      title: "Определитель det(Ax)",
      description: `Вычисляем определитель: det(Ax) = ${b1}×${d} - ${b}×${b2} = ${b1*d} - ${b*b2} = ${detX}`,
      activeMatrix: "x",
      showDet: true,
      detValue: detX,
      showResult: false
    },
    {
      title: "Матрица для y (Ay)",
      description: "Заменяем второй столбец матрицы A на столбец свободных членов",
      activeMatrix: "y",
      showDet: false,
      showResult: false
    },
    {
      title: "Определитель det(Ay)",
      description: `Вычисляем определитель: det(Ay) = ${a}×${b2} - ${b1}×${c} = ${a*b2} - ${b1*c} = ${detY}`,
      activeMatrix: "y",
      showDet: true,
      detValue: detY,
      showResult: false
    },
    {
      title: "Решение системы",
      description: "Находим x и y по формулам Крамера",
      activeMatrix: "result",
      showDet: false,
      showResult: true
    }
  ];

  useEffect(() => {
    if (isPlaying && step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else if (step >= steps.length - 1) {
      setIsPlaying(false);
    }
  }, [isPlaying, step, steps.length]);

  const handlePlayPause = () => {
    if (step >= steps.length - 1) {
      setStep(0);
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const handleReset = () => {
    setStep(0);
    setIsPlaying(false);
  };

  const currentStep = steps[step];

  const MatrixDisplay = ({ 
    matrix, 
    label, 
    isActive, 
    highlightCol 
  }: { 
    matrix: number[][], 
    label: string, 
    isActive: boolean,
    highlightCol?: number 
  }) => (
    <div className={`flex flex-col items-center transition-all duration-500 ${isActive ? 'scale-110' : 'opacity-60'}`}>
      <span className="text-sm font-semibold text-muted-foreground mb-2">{label}</span>
      <div className="flex items-center gap-1">
        <svg width="12" height="80" viewBox="0 0 12 80">
          <path d="M 10 5 L 3 5 L 3 75 L 10 75" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        </svg>
        <div className="space-y-1">
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-3">
              {row.map((cell, cellIndex) => (
                <span
                  key={cellIndex}
                  className={`text-xl font-mono font-semibold w-8 text-center transition-all duration-300 ${
                    highlightCol === cellIndex ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
        <svg width="12" height="80" viewBox="0 0 12 80">
          <path d="M 2 5 L 9 5 L 9 75 L 2 75" fill="none" stroke="currentColor" strokeWidth="2" className="text-foreground" />
        </svg>
      </div>
    </div>
  );

  const mainMatrix = [[a, b], [c, d]];
  const xMatrix = [[b1, b], [b2, d]];
  const yMatrix = [[a, b1], [c, b2]];

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-muted/20">
      <div className="space-y-6">
        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button onClick={handlePlayPause} variant="default" size="lg" className="gap-2">
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Пауза" : step >= steps.length - 1 ? "Начать заново" : "Воспроизвести"}
          </Button>
          <Button onClick={handleReset} variant="outline" size="lg" className="gap-2">
            <RotateCcw className="w-4 h-4" />
            Сброс
          </Button>
        </div>

        {/* Step Indicator */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
            <span className="text-sm font-semibold text-primary">
              Шаг {step + 1} из {steps.length}
            </span>
          </div>
          <h4 className="mt-3 text-xl font-bold text-foreground">{currentStep.title}</h4>
          <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">{currentStep.description}</p>
        </div>

        {/* System Display */}
        <Card className="p-4 bg-muted/30 border-2 border-muted max-w-md mx-auto">
          <p className="text-sm text-muted-foreground text-center mb-2">Система уравнений:</p>
          <div className="font-mono text-lg text-center space-y-1">
            <div>{a}x + {b}y = {b1}</div>
            <div>{c}x + {d}y = {b2}</div>
          </div>
        </Card>

        {/* Matrices Visualization */}
        <div className="flex flex-wrap justify-center items-start gap-8 py-6">
          <MatrixDisplay
            matrix={mainMatrix}
            label="A (основная)"
            isActive={currentStep.activeMatrix === "main"}
          />
          <MatrixDisplay
            matrix={xMatrix}
            label="Ax (для x)"
            isActive={currentStep.activeMatrix === "x"}
            highlightCol={0}
          />
          <MatrixDisplay
            matrix={yMatrix}
            label="Ay (для y)"
            isActive={currentStep.activeMatrix === "y"}
            highlightCol={1}
          />
        </div>

        {/* Determinant Calculation */}
        {currentStep.showDet && (
          <Card className="p-6 bg-gradient-to-r from-secondary/10 to-secondary/5 border-2 border-secondary/30 max-w-lg mx-auto animate-fade-in">
            <div className="text-center">
              <p className="text-lg font-semibold text-secondary mb-2">Вычисление определителя:</p>
              <div className="flex items-center justify-center gap-3 text-2xl font-mono">
                <span className="text-success">
                  {currentStep.activeMatrix === "main" && `${a}×${d}`}
                  {currentStep.activeMatrix === "x" && `${b1}×${d}`}
                  {currentStep.activeMatrix === "y" && `${a}×${b2}`}
                </span>
                <span className="text-muted-foreground">−</span>
                <span className="text-destructive">
                  {currentStep.activeMatrix === "main" && `${b}×${c}`}
                  {currentStep.activeMatrix === "x" && `${b}×${b2}`}
                  {currentStep.activeMatrix === "y" && `${b1}×${c}`}
                </span>
                <span className="text-muted-foreground">=</span>
                <span className="text-primary font-bold">{currentStep.detValue}</span>
              </div>
            </div>
          </Card>
        )}

        {/* Final Result */}
        {currentStep.showResult && (
          <Card className="p-6 bg-gradient-to-r from-success/10 to-success/5 border-2 border-success/30 animate-fade-in">
            <div className="text-center space-y-4">
              <h4 className="text-xl font-bold text-success">✓ Решение по формулам Крамера</h4>
              <div className="flex flex-wrap justify-center gap-8 text-lg">
                <div className="space-y-2">
                  <div className="font-mono text-muted-foreground">
                    x = det(Ax) / det(A)
                  </div>
                  <div className="font-mono text-xl">
                    x = {detX} / {detA} = <span className="text-primary font-bold">{x}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-mono text-muted-foreground">
                    y = det(Ay) / det(A)
                  </div>
                  <div className="font-mono text-xl">
                    y = {detY} / {detA} = <span className="text-primary font-bold">{y}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">
                Проверка: {a}({x}) + {b}({y}) = {a*x + b*y} ✓ и {c}({x}) + {d}({y}) = {c*x + d*y} ✓
              </p>
            </div>
          </Card>
        )}

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>
      </div>
    </Card>
  );
};
