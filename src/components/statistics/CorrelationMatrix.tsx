import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

// Данные для корреляционной матрицы (переменные опросника "Большая Пятёрка")
const variables = [
  "Общительность",
  "Энергичность", 
  "Организован.",
  "Ответствен.",
  "Спокойствие",
  "Уверенность",
  "Любознат.",
  "Креативн.",
  "Альтруизм",
  "Сотруднич."
];

// Корреляционная матрица (симметричная)
const correlationData = [
  [1.00, 0.72, 0.15, 0.18, 0.08, 0.22, 0.31, 0.28, 0.25, 0.19],
  [0.72, 1.00, 0.12, 0.21, 0.11, 0.19, 0.27, 0.24, 0.22, 0.16],
  [0.15, 0.12, 1.00, 0.68, 0.24, 0.31, 0.14, 0.09, 0.35, 0.29],
  [0.18, 0.21, 0.68, 1.00, 0.28, 0.34, 0.11, 0.13, 0.38, 0.32],
  [0.08, 0.11, 0.24, 0.28, 1.00, 0.65, 0.18, 0.15, 0.21, 0.27],
  [0.22, 0.19, 0.31, 0.34, 0.65, 1.00, 0.23, 0.19, 0.26, 0.31],
  [0.31, 0.27, 0.14, 0.11, 0.18, 0.23, 1.00, 0.71, 0.33, 0.28],
  [0.28, 0.24, 0.09, 0.13, 0.15, 0.19, 0.71, 1.00, 0.29, 0.24],
  [0.25, 0.22, 0.35, 0.38, 0.21, 0.26, 0.33, 0.29, 1.00, 0.62],
  [0.19, 0.16, 0.29, 0.32, 0.27, 0.31, 0.28, 0.24, 0.62, 1.00],
];

// Цветовая шкала для корреляции
const getCorrelationColor = (value: number): string => {
  if (value >= 0.7) return "bg-emerald-500";
  if (value >= 0.5) return "bg-emerald-400";
  if (value >= 0.3) return "bg-emerald-300";
  if (value >= 0.1) return "bg-emerald-100";
  if (value >= -0.1) return "bg-gray-100";
  if (value >= -0.3) return "bg-rose-100";
  if (value >= -0.5) return "bg-rose-300";
  if (value >= -0.7) return "bg-rose-400";
  return "bg-rose-500";
};

const getTextColor = (value: number): string => {
  if (Math.abs(value) >= 0.5) return "text-white";
  return "text-foreground";
};

// Факторная принадлежность переменных
const factorGroups: Record<number, string> = {
  0: "Экстраверсия",
  1: "Экстраверсия",
  2: "Добросовестность",
  3: "Добросовестность",
  4: "Эмоц. стабильность",
  5: "Эмоц. стабильность",
  6: "Открытость опыту",
  7: "Открытость опыту",
  8: "Доброжелательность",
  9: "Доброжелательность",
};

const factorColors: Record<string, string> = {
  "Экстраверсия": "bg-blue-500",
  "Добросовестность": "bg-purple-500",
  "Эмоц. стабильность": "bg-green-500",
  "Открытость опыту": "bg-orange-500",
  "Доброжелательность": "bg-pink-500",
};

export const CorrelationMatrix = () => {
  const [hoveredCell, setHoveredCell] = useState<{row: number; col: number} | null>(null);
  const [selectedVariable, setSelectedVariable] = useState<number | null>(null);

  const handleCellHover = (row: number, col: number) => {
    setHoveredCell({ row, col });
  };

  const handleCellLeave = () => {
    setHoveredCell(null);
  };

  const handleVariableClick = (index: number) => {
    setSelectedVariable(selectedVariable === index ? null : index);
  };

  const isHighlighted = (row: number, col: number) => {
    if (selectedVariable === null) return false;
    return row === selectedVariable || col === selectedVariable;
  };

  return (
    <Card className="shadow-elegant">
      <CardHeader>
        <CardTitle className="text-2xl">Интерактивная корреляционная матрица</CardTitle>
        <CardDescription className="text-base">
          Визуализация связей между переменными опросника "Большая Пятёрка"
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-sm text-muted-foreground">
          Нажмите на название переменной для выделения её корреляций. Наведите на ячейку для просмотра деталей.
        </p>

        {/* Легенда факторов */}
        <div className="flex flex-wrap gap-3 justify-center">
          {Object.entries(factorColors).map(([factor, color]) => (
            <div key={factor} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${color}`}></div>
              <span className="text-xs">{factor}</span>
            </div>
          ))}
        </div>

        {/* Heatmap */}
        <div className="overflow-x-auto">
          <TooltipProvider>
            <div className="inline-block min-w-full">
              <div className="grid" style={{ gridTemplateColumns: `100px repeat(${variables.length}, 1fr)` }}>
                {/* Header row */}
                <div className="p-1"></div>
                {variables.map((variable, idx) => (
                  <div
                    key={`header-${idx}`}
                    className={`p-1 text-center cursor-pointer transition-all duration-200 ${
                      selectedVariable === idx ? "bg-primary/20 rounded" : ""
                    }`}
                    onClick={() => handleVariableClick(idx)}
                  >
                    <div className="flex flex-col items-center gap-1">
                      <div className={`w-2 h-2 rounded-full ${factorColors[factorGroups[idx]]}`}></div>
                      <span className="text-[10px] font-medium writing-mode-vertical transform -rotate-45 origin-center whitespace-nowrap">
                        {variable}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Matrix rows */}
                {variables.map((rowVar, rowIdx) => (
                  <>
                    {/* Row label */}
                    <div
                      key={`row-label-${rowIdx}`}
                      className={`p-1 flex items-center gap-1 cursor-pointer transition-all duration-200 ${
                        selectedVariable === rowIdx ? "bg-primary/20 rounded" : ""
                      }`}
                      onClick={() => handleVariableClick(rowIdx)}
                    >
                      <div className={`w-2 h-2 rounded-full ${factorColors[factorGroups[rowIdx]]}`}></div>
                      <span className="text-xs font-medium truncate">{rowVar}</span>
                    </div>

                    {/* Correlation cells */}
                    {correlationData[rowIdx].map((value, colIdx) => (
                      <Tooltip key={`cell-${rowIdx}-${colIdx}`}>
                        <TooltipTrigger asChild>
                          <div
                            className={`
                              aspect-square flex items-center justify-center text-[10px] font-mono cursor-pointer
                              transition-all duration-200 rounded-sm m-0.5
                              ${getCorrelationColor(value)} ${getTextColor(value)}
                              ${hoveredCell?.row === rowIdx && hoveredCell?.col === colIdx 
                                ? "ring-2 ring-primary ring-offset-1 scale-110 z-10" 
                                : ""}
                              ${isHighlighted(rowIdx, colIdx) 
                                ? "ring-2 ring-primary/50" 
                                : ""}
                              ${rowIdx === colIdx ? "ring-1 ring-foreground/30" : ""}
                            `}
                            onMouseEnter={() => handleCellHover(rowIdx, colIdx)}
                            onMouseLeave={handleCellLeave}
                          >
                            {value.toFixed(2)}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                          <div className="space-y-1">
                            <p className="font-bold">
                              {variables[rowIdx]} × {variables[colIdx]}
                            </p>
                            <p>
                              Корреляция: <span className="font-mono">{value.toFixed(3)}</span>
                            </p>
                            <p className="text-muted-foreground text-xs">
                              {value >= 0.7 && "Сильная положительная связь"}
                              {value >= 0.5 && value < 0.7 && "Умеренная положительная связь"}
                              {value >= 0.3 && value < 0.5 && "Слабая положительная связь"}
                              {value >= 0.1 && value < 0.3 && "Очень слабая связь"}
                              {value > -0.1 && value < 0.1 && "Связь отсутствует"}
                              {value <= -0.1 && value > -0.3 && "Очень слабая отрицательная связь"}
                              {value <= -0.3 && value > -0.5 && "Слабая отрицательная связь"}
                              {value <= -0.5 && value > -0.7 && "Умеренная отрицательная связь"}
                              {value <= -0.7 && "Сильная отрицательная связь"}
                            </p>
                            <p className="text-xs">
                              Факторы: {factorGroups[rowIdx]} / {factorGroups[colIdx]}
                            </p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>

        {/* Color scale legend */}
        <div className="flex items-center justify-center gap-2 pt-4">
          <span className="text-xs text-muted-foreground">-1.0</span>
          <div className="flex">
            <div className="w-6 h-4 bg-rose-500 rounded-l"></div>
            <div className="w-6 h-4 bg-rose-400"></div>
            <div className="w-6 h-4 bg-rose-300"></div>
            <div className="w-6 h-4 bg-rose-100"></div>
            <div className="w-6 h-4 bg-gray-100"></div>
            <div className="w-6 h-4 bg-emerald-100"></div>
            <div className="w-6 h-4 bg-emerald-300"></div>
            <div className="w-6 h-4 bg-emerald-400"></div>
            <div className="w-6 h-4 bg-emerald-500 rounded-r"></div>
          </div>
          <span className="text-xs text-muted-foreground">+1.0</span>
        </div>

        {/* Interpretation */}
        <div className="bg-accent/10 p-4 rounded-lg border border-accent/20 space-y-3">
          <h4 className="font-bold">Интерпретация матрицы:</h4>
          <ul className="text-sm space-y-2">
            <li>
              • <strong>Высокие корреляции внутри факторов:</strong> Переменные одного фактора (напр. "Общительность" и "Энергичность" — экстраверсия) имеют высокие корреляции (r ≥ 0.6)
            </li>
            <li>
              • <strong>Низкие корреляции между факторами:</strong> Переменные разных факторов имеют слабые корреляции (r &lt; 0.4), что подтверждает независимость факторов
            </li>
            <li>
              • <strong>KMO-тест:</strong> При таком паттерне корреляций KMO будет высоким (≥ 0.8), что свидетельствует о пригодности данных для факторного анализа
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
