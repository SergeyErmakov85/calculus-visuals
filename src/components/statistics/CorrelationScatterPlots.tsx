import React, { useState } from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

// Generate data for different correlation types
const generateCorrelationData = (r: number, n: number = 50): { x: number; y: number }[] => {
  const data: { x: number; y: number }[] = [];
  
  for (let i = 0; i < n; i++) {
    const x = Math.random() * 10;
    // Generate y with specified correlation
    const noise = Math.sqrt(1 - r * r) * (Math.random() * 10 - 5);
    const y = r * x + noise + 5;
    data.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }
  
  return data;
};

// Generate non-linear (quadratic) data
const generateQuadraticData = (n: number = 50): { x: number; y: number }[] => {
  const data: { x: number; y: number }[] = [];
  
  for (let i = 0; i < n; i++) {
    const x = Math.random() * 10 - 5;
    const noise = Math.random() * 2 - 1;
    const y = -0.3 * x * x + 5 + noise;
    data.push({ x: parseFloat(x.toFixed(2)), y: parseFloat(y.toFixed(2)) });
  }
  
  return data;
};

// Generate data with outlier
const generateOutlierData = (n: number = 50): { x: number; y: number }[] => {
  const data = generateCorrelationData(0.7, n - 2);
  // Add outliers
  data.push({ x: 9, y: 1 });
  data.push({ x: 1, y: 12 });
  return data;
};

interface CorrelationExample {
  id: string;
  title: string;
  r: string;
  description: string;
  color: string;
  data: { x: number; y: number }[];
}

const correlationExamples: CorrelationExample[] = [
  {
    id: 'strong-positive',
    title: 'Сильная положительная',
    r: 'r ≈ 0.85',
    description: 'Чем выше X, тем выше Y. Точки плотно группируются вокруг линии с положительным наклоном.',
    color: 'hsl(142, 76%, 36%)',
    data: generateCorrelationData(0.85),
  },
  {
    id: 'moderate-positive',
    title: 'Умеренная положительная',
    r: 'r ≈ 0.50',
    description: 'Заметная тенденция роста Y при увеличении X, но с большим разбросом точек.',
    color: 'hsl(199, 89%, 48%)',
    data: generateCorrelationData(0.50),
  },
  {
    id: 'no-correlation',
    title: 'Отсутствие корреляции',
    r: 'r ≈ 0',
    description: 'Точки распределены хаотично. Нет линейной связи между переменными.',
    color: 'hsl(45, 93%, 47%)',
    data: generateCorrelationData(0.05),
  },
  {
    id: 'strong-negative',
    title: 'Сильная отрицательная',
    r: 'r ≈ -0.80',
    description: 'Чем выше X, тем ниже Y. Обратная зависимость с плотной группировкой точек.',
    color: 'hsl(0, 84%, 60%)',
    data: generateCorrelationData(-0.80),
  },
  {
    id: 'nonlinear',
    title: 'Нелинейная связь',
    r: 'r ≈ 0 (Пирсон!)',
    description: 'Параболическая зависимость. Пирсон близок к 0, но связь существует! Используйте Спирмена.',
    color: 'hsl(280, 87%, 65%)',
    data: generateQuadraticData(),
  },
  {
    id: 'outliers',
    title: 'Влияние выбросов',
    r: 'r искажён',
    description: 'Выбросы (отмечены) сильно влияют на r Пирсона. Спирмен более устойчив.',
    color: 'hsl(25, 95%, 53%)',
    data: generateOutlierData(),
  },
];

const CorrelationScatterPlots: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState<string>('strong-positive');
  
  const currentExample = correlationExamples.find(e => e.id === selectedExample) || correlationExamples[0];

  return (
    <div className="space-y-6">
      <div>
        <h4 className="font-bold mb-3 text-lg">Визуальные примеры корреляции</h4>
        <p className="text-sm text-muted-foreground mb-4">
          Выберите тип корреляции, чтобы увидеть характерное распределение точек на диаграмме рассеяния:
        </p>
      </div>
      
      {/* Selection buttons */}
      <div className="flex flex-wrap gap-2">
        {correlationExamples.map((example) => (
          <button
            key={example.id}
            onClick={() => setSelectedExample(example.id)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
              selectedExample === example.id
                ? 'bg-primary text-primary-foreground border-primary shadow-md'
                : 'bg-muted/50 text-foreground border-border hover:bg-muted hover:border-primary/50'
            }`}
          >
            {example.title}
          </button>
        ))}
      </div>

      {/* Chart display */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-card rounded-xl border border-border p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h5 className="font-semibold">{currentExample.title}</h5>
            <span 
              className="px-3 py-1 rounded-full text-sm font-mono font-bold"
              style={{ 
                backgroundColor: `${currentExample.color}20`,
                color: currentExample.color 
              }}
            >
              {currentExample.r}
            </span>
          </div>
          
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  type="number" 
                  dataKey="x" 
                  name="X" 
                  domain={['auto', 'auto']}
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <YAxis 
                  type="number" 
                  dataKey="y" 
                  name="Y"
                  domain={['auto', 'auto']}
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  axisLine={{ stroke: 'hsl(var(--border))' }}
                />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                    fontSize: '12px',
                  }}
                  formatter={(value: number) => [value.toFixed(2)]}
                />
                {currentExample.id === 'nonlinear' && (
                  <ReferenceLine y={5} stroke="hsl(var(--muted-foreground))" strokeDasharray="5 5" />
                )}
                <Scatter 
                  name="Данные" 
                  data={currentExample.data} 
                  fill={currentExample.color}
                  fillOpacity={0.7}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
            <h5 className="font-semibold mb-2">Описание</h5>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {currentExample.description}
            </p>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg border border-border">
            <h5 className="font-semibold mb-3">Шкала интерпретации |r|</h5>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>0.7 – 1.0: Сильная связь</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>0.4 – 0.7: Умеренная связь</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <span>0.2 – 0.4: Слабая связь</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span>0 – 0.2: Очень слабая / нет</span>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 p-4 rounded-lg border border-primary/20">
            <h5 className="font-semibold mb-2 text-primary">💡 Совет</h5>
            <p className="text-sm text-muted-foreground">
              Всегда визуализируйте данные перед расчётом корреляции! 
              График рассеяния покажет нелинейность и выбросы, которые скрывает число.
            </p>
          </div>
        </div>
      </div>

      {/* All examples grid */}
      <div>
        <h4 className="font-semibold mb-4">Все типы корреляций (обзор)</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {correlationExamples.map((example) => (
            <div 
              key={example.id}
              className={`bg-card rounded-lg border p-3 cursor-pointer transition-all duration-200 ${
                selectedExample === example.id 
                  ? 'border-primary shadow-md' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedExample(example.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium truncate">{example.title}</span>
                <span 
                  className="text-xs font-mono px-1.5 py-0.5 rounded"
                  style={{ 
                    backgroundColor: `${example.color}20`,
                    color: example.color 
                  }}
                >
                  {example.r.split(' ')[1]}
                </span>
              </div>
              <div className="h-[80px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ScatterChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                    <Scatter 
                      data={example.data} 
                      fill={example.color}
                      fillOpacity={0.6}
                    />
                  </ScatterChart>
                </ResponsiveContainer>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CorrelationScatterPlots;
