import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";

export const GaussianEliminationVisualization = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Система уравнений: 2x + y = 5, x + 3y = 8
  const initialMatrix = [
    [2, 1, 5],
    [1, 3, 8]
  ];

  // Шаги решения
  const steps = [
    {
      matrix: [[2, 1, 5], [1, 3, 8]],
      description: "Исходная расширенная матрица системы",
      highlight: null,
      equation: "2x + y = 5\nx + 3y = 8"
    },
    {
      matrix: [[1, 0.5, 2.5], [1, 3, 8]],
      description: "Делим первую строку на 2 (нормализация)",
      highlight: [0],
      equation: "x + 0.5y = 2.5\nx + 3y = 8"
    },
    {
      matrix: [[1, 0.5, 2.5], [0, 2.5, 5.5]],
      description: "Вычитаем первую строку из второй",
      highlight: [1],
      equation: "x + 0.5y = 2.5\n2.5y = 5.5"
    },
    {
      matrix: [[1, 0.5, 2.5], [0, 1, 2.2]],
      description: "Делим вторую строку на 2.5",
      highlight: [1],
      equation: "x + 0.5y = 2.5\ny = 2.2"
    },
    {
      matrix: [[1, 0, 1.4], [0, 1, 2.2]],
      description: "Исключаем y из первого уравнения",
      highlight: [0, 1],
      equation: "x = 1.4\ny = 2.2"
    }
  ];

  useEffect(() => {
    if (isPlaying && step < steps.length - 1) {
      const timer = setTimeout(() => {
        setStep(step + 1);
      }, 2000);
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

  return (
    <Card className="p-8 bg-gradient-to-br from-card to-muted/20">
      <div className="space-y-6">
        {/* Controls */}
        <div className="flex justify-center gap-4">
          <Button
            onClick={handlePlayPause}
            variant="default"
            size="lg"
            className="gap-2"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            {isPlaying ? "Пауза" : step >= steps.length - 1 ? "Начать заново" : "Воспроизвести"}
          </Button>
          <Button
            onClick={handleReset}
            variant="outline"
            size="lg"
            className="gap-2"
          >
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
          <p className="mt-3 text-lg font-medium text-foreground">
            {currentStep.description}
          </p>
        </div>

        {/* Visualization */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Matrix Visualization */}
          <div className="flex-1">
            <div className="flex items-center justify-center gap-2">
              {/* Left bracket */}
              <div className="flex flex-col justify-center">
                <svg width="20" height="120" viewBox="0 0 20 120">
                  <path
                    d="M 15 5 L 5 5 L 5 115 L 15 115"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground"
                  />
                </svg>
              </div>

              {/* Matrix content */}
              <div className="space-y-2">
                {currentStep.matrix.map((row, rowIndex) => (
                  <div
                    key={rowIndex}
                    className={`flex gap-4 p-4 rounded-lg transition-all duration-500 ${
                      currentStep.highlight?.includes(rowIndex)
                        ? "bg-primary/20 scale-105"
                        : "bg-muted/40"
                    }`}
                  >
                    {row.map((cell, cellIndex) => (
                      <div key={cellIndex} className="flex items-center">
                        <span
                          className={`text-2xl font-mono font-semibold transition-all duration-500 ${
                            currentStep.highlight?.includes(rowIndex)
                              ? "text-primary"
                              : "text-foreground"
                          }`}
                          style={{ minWidth: "60px", textAlign: "center" }}
                        >
                          {cell.toFixed(1)}
                        </span>
                        {cellIndex === 1 && (
                          <span className="mx-2 text-xl text-muted-foreground">|</span>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Right bracket */}
              <div className="flex flex-col justify-center">
                <svg width="20" height="120" viewBox="0 0 20 120">
                  <path
                    d="M 5 5 L 15 5 L 15 115 L 5 115"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Equations Display */}
          <div className="flex-1">
            <Card className="p-6 bg-secondary/10 border-2 border-secondary/30">
              <h4 className="text-sm font-semibold text-secondary mb-4">
                Система уравнений:
              </h4>
              <pre className="text-xl font-mono text-foreground whitespace-pre-wrap">
                {currentStep.equation}
              </pre>
            </Card>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-500"
            style={{ width: `${((step + 1) / steps.length) * 100}%` }}
          />
        </div>

        {/* Final Result */}
        {step === steps.length - 1 && (
          <Card className="p-6 bg-gradient-to-r from-success/10 to-success/5 border-2 border-success/30 animate-fade-in">
            <div className="text-center space-y-2">
              <h4 className="text-xl font-bold text-success">✓ Решение найдено!</h4>
              <p className="text-lg text-foreground">
                <span className="font-semibold">x = 1.4</span> и{" "}
                <span className="font-semibold">y = 2.2</span>
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Проверка: 2(1.4) + 2.2 = 5.0 ✓ и 1.4 + 3(2.2) = 8.0 ✓
              </p>
            </div>
          </Card>
        )}
      </div>
    </Card>
  );
};
