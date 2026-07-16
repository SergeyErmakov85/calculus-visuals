import { useState, useMemo, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

type EquationType = "linear" | "separable" | "logistic" | "custom";

interface SlopeFieldChartProps {
  width?: number;
  height?: number;
  showSolutionCurves?: boolean;
}

const equationLabels: Record<EquationType, string> = {
  "linear": "dy/dt = -y",
  "separable": "dy/dt = ty",
  "logistic": "dy/dt = y(1-y)",
  "custom": "dy/dt = t - y",
};

// Slope functions for each equation type
const slopeFunctions: Record<EquationType, (t: number, y: number) => number> = {
  "linear": (_, y) => -y,
  "separable": (t, y) => t * y,
  "logistic": (_, y) => y * (1 - y),
  "custom": (t, y) => t - y,
};

// Coordinate ranges of the field
const tMin = -2, tMax = 3;
const yMin = -2, yMax = 3;
const margin = 40;

// Analytical solutions for plotting curves
const solutionFunctions: Record<EquationType, (t: number, y0: number, t0?: number) => number> = {
  "linear": (t, y0) => y0 * Math.exp(-t),
  "separable": (t, y0) => y0 * Math.exp(t * t / 2),
  "logistic": (t, y0) => {
    if (y0 <= 0) return 0;
    if (y0 >= 1) return 1;
    const c = (1 / y0) - 1;
    return 1 / (1 + c * Math.exp(-t));
  },
  "custom": (t, y0) => t - 1 + (y0 + 1) * Math.exp(-t), // y = t - 1 + Ce^(-t)
};

export function SlopeFieldChart({ 
  width = 500, 
  height = 400,
  showSolutionCurves = true 
}: SlopeFieldChartProps) {
  const [equationType, setEquationType] = useState<EquationType>("linear");
  const [selectedY0, setSelectedY0] = useState([1]);
  const [showMultipleCurves, setShowMultipleCurves] = useState(true);

  const gridSize = 20;
  const innerWidth = width - 2 * margin;
  const innerHeight = height - 2 * margin;

  // Convert data coordinates to SVG coordinates
  const toSvgX = useCallback(
    (t: number) => margin + ((t - tMin) / (tMax - tMin)) * innerWidth,
    [innerWidth]
  );
  const toSvgY = useCallback(
    (y: number) => margin + ((yMax - y) / (yMax - yMin)) * innerHeight,
    [innerHeight]
  );

  // Generate slope field arrows
  const slopeField = useMemo(() => {
    const arrows: { x: number; y: number; angle: number; length: number }[] = [];
    const slopeFunc = slopeFunctions[equationType];
    
    const stepT = (tMax - tMin) / gridSize;
    const stepY = (yMax - yMin) / gridSize;
    const arrowLength = Math.min(innerWidth / gridSize, innerHeight / gridSize) * 0.4;

    for (let ti = 0; ti <= gridSize; ti++) {
      for (let yi = 0; yi <= gridSize; yi++) {
        const t = tMin + ti * stepT;
        const y = yMin + yi * stepY;
        const slope = slopeFunc(t, y);
        
        // Clamp slope for visualization
        const clampedSlope = Math.max(-10, Math.min(10, slope));
        const angle = Math.atan(clampedSlope);
        
        arrows.push({
          x: toSvgX(t),
          y: toSvgY(y),
          angle,
          length: arrowLength,
        });
      }
    }
    return arrows;
  }, [equationType, innerWidth, innerHeight, toSvgX, toSvgY]);

  // Generate solution curves
  const solutionCurves = useMemo(() => {
    if (!showSolutionCurves) return [];
    
    const curves: { points: string; color: string; isSelected: boolean }[] = [];
    const solutionFunc = solutionFunctions[equationType];
    
    const y0Values = showMultipleCurves 
      ? [-1.5, -1, -0.5, 0.5, 1, 1.5, 2]
      : [selectedY0[0]];
    
    const colors = [
      "hsl(var(--chart-1))",
      "hsl(var(--chart-2))",
      "hsl(var(--chart-3))",
      "hsl(var(--chart-4))",
      "hsl(var(--chart-5))",
      "hsl(var(--primary))",
      "hsl(var(--accent))",
    ];

    y0Values.forEach((y0, index) => {
      const points: string[] = [];
      const dt = 0.05;
      
      for (let t = tMin; t <= tMax; t += dt) {
        const y = solutionFunc(t, y0);
        
        // Only plot if within bounds
        if (y >= yMin - 1 && y <= yMax + 1) {
          points.push(`${toSvgX(t)},${toSvgY(y)}`);
        }
      }
      
      if (points.length > 1) {
        curves.push({
          points: points.join(" "),
          color: showMultipleCurves ? colors[index % colors.length] : "hsl(var(--primary))",
          isSelected: Math.abs(y0 - selectedY0[0]) < 0.01,
        });
      }
    });
    
    return curves;
  }, [equationType, selectedY0, showMultipleCurves, showSolutionCurves, toSvgX, toSvgY]);

  return (
    <div className="space-y-4">
      <Tabs value={equationType} onValueChange={(v) => setEquationType(v as EquationType)}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
          {Object.entries(equationLabels).map(([key, label]) => (
            <TabsTrigger key={key} value={key} className="text-xs py-2">
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <Card className="bg-muted/30">
        <CardContent className="pt-4">
          <svg width="100%" viewBox={`0 0 ${width} ${height}`} className="mx-auto block max-w-full">
            {/* Background */}
            <rect x={margin} y={margin} width={innerWidth} height={innerHeight} fill="hsl(var(--card))" />
            
            {/* Grid lines */}
            {Array.from({ length: 11 }, (_, i) => {
              const t = tMin + (i / 10) * (tMax - tMin);
              const x = toSvgX(t);
              return (
                <line
                  key={`v-${i}`}
                  x1={x}
                  y1={margin}
                  x2={x}
                  y2={height - margin}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              );
            })}
            {Array.from({ length: 11 }, (_, i) => {
              const y = yMin + (i / 10) * (yMax - yMin);
              const svgY = toSvgY(y);
              return (
                <line
                  key={`h-${i}`}
                  x1={margin}
                  y1={svgY}
                  x2={width - margin}
                  y2={svgY}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                  strokeDasharray="2,2"
                />
              );
            })}

            {/* Axes */}
            <line
              x1={toSvgX(0)}
              y1={margin}
              x2={toSvgX(0)}
              y2={height - margin}
              stroke="hsl(var(--foreground))"
              strokeWidth="1.5"
            />
            <line
              x1={margin}
              y1={toSvgY(0)}
              x2={width - margin}
              y2={toSvgY(0)}
              stroke="hsl(var(--foreground))"
              strokeWidth="1.5"
            />

            {/* Slope field arrows */}
            {slopeField.map((arrow, i) => {
              const dx = Math.cos(arrow.angle) * arrow.length / 2;
              const dy = -Math.sin(arrow.angle) * arrow.length / 2;
              return (
                <line
                  key={i}
                  x1={arrow.x - dx}
                  y1={arrow.y - dy}
                  x2={arrow.x + dx}
                  y2={arrow.y + dy}
                  stroke="hsl(var(--muted-foreground))"
                  strokeWidth="1"
                  strokeLinecap="round"
                  opacity="0.6"
                />
              );
            })}

            {/* Solution curves */}
            {solutionCurves.map((curve, i) => (
              <polyline
                key={i}
                points={curve.points}
                fill="none"
                stroke={curve.color}
                strokeWidth={curve.isSelected && !showMultipleCurves ? 3 : 2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ))}

            {/* Axis labels */}
            <text x={width - margin + 10} y={toSvgY(0) + 4} className="fill-foreground text-xs">t</text>
            <text x={toSvgX(0) - 4} y={margin - 10} className="fill-foreground text-xs">y</text>
            
            {/* Tick labels */}
            {[-2, -1, 0, 1, 2, 3].map((t) => (
              <text
                key={`t-${t}`}
                x={toSvgX(t)}
                y={toSvgY(0) + 15}
                textAnchor="middle"
                className="fill-muted-foreground text-[10px]"
              >
                {t}
              </text>
            ))}
            {[-2, -1, 1, 2, 3].map((y) => (
              <text
                key={`y-${y}`}
                x={toSvgX(0) - 10}
                y={toSvgY(y) + 3}
                textAnchor="end"
                className="fill-muted-foreground text-[10px]"
              >
                {y}
              </text>
            ))}
          </svg>
        </CardContent>
      </Card>

      {showSolutionCurves && (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="flex items-center gap-2">
            <Button
              variant={showMultipleCurves ? "default" : "outline"}
              size="sm"
              onClick={() => setShowMultipleCurves(true)}
            >
              Семейство решений
            </Button>
            <Button
              variant={!showMultipleCurves ? "default" : "outline"}
              size="sm"
              onClick={() => setShowMultipleCurves(false)}
            >
              Одно решение
            </Button>
          </div>
          
          {!showMultipleCurves && (
            <div className="flex items-center gap-4 flex-1">
              <Label className="text-sm whitespace-nowrap">y₀ = {selectedY0[0].toFixed(1)}</Label>
              <Slider
                value={selectedY0}
                onValueChange={setSelectedY0}
                min={-1.5}
                max={2.5}
                step={0.1}
                className="flex-1 max-w-48"
              />
            </div>
          )}
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center">
        Поле направлений показывает наклон касательной к решению в каждой точке (t, y)
      </p>
    </div>
  );
}
