 import { useState, useMemo } from "react";
 import {
   LineChart,
   Line,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
   ReferenceLine,
 } from "recharts";
 import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
 import { Slider } from "@/components/ui/slider";
 import { Label } from "@/components/ui/label";
 import { Card, CardContent } from "@/components/ui/card";
 
 type EquationType = "exp-growth" | "exp-decay" | "variable" | "nonlinear";
 
 interface ChartDataPoint {
   t: number;
   y1: number;
   y2: number;
   y3: number;
   [key: string]: number;
 }
 
 const equationLabels: Record<EquationType, string> = {
   "exp-growth": "dy/dt = y (рост)",
   "exp-decay": "dy/dt = -y (убывание)",
   "variable": "dy/dt = 2ty",
   "nonlinear": "dy/dt = y² (нелинейное)",
 };
 
 export function DifferentialEquationChart() {
   const [equationType, setEquationType] = useState<EquationType>("exp-growth");
   const [initialValue, setInitialValue] = useState(1);
 
   const data = useMemo(() => {
     const points: ChartDataPoint[] = [];
     const tMax = equationType === "nonlinear" ? 0.9 / initialValue : 3;
     const step = tMax / 100;
 
     for (let t = 0; t <= tMax; t += step) {
       let y1: number, y2: number, y3: number;
 
       switch (equationType) {
         case "exp-growth":
           y1 = 0.5 * Math.exp(t);
           y2 = 1 * Math.exp(t);
           y3 = 2 * Math.exp(t);
           break;
         case "exp-decay":
           y1 = 0.5 * Math.exp(-t);
           y2 = 1 * Math.exp(-t);
           y3 = 2 * Math.exp(-t);
           break;
         case "variable":
           y1 = 0.5 * Math.exp(t * t);
           y2 = 1 * Math.exp(t * t);
           y3 = 2 * Math.exp(t * t);
           break;
         case "nonlinear":
           // y = 1/(C - t), where C = 1/y0
           const C1 = 1 / 0.5;
           const C2 = 1 / 1;
           const C3 = 1 / 2;
           y1 = t < C1 - 0.05 ? 1 / (C1 - t) : NaN;
           y2 = t < C2 - 0.05 ? 1 / (C2 - t) : NaN;
           y3 = t < C3 - 0.05 ? 1 / (C3 - t) : NaN;
           break;
         default:
           y1 = y2 = y3 = 0;
       }
 
       // Limit values for display
       const limit = 20;
       points.push({
         t: Math.round(t * 100) / 100,
         y1: Math.min(y1, limit),
         y2: Math.min(y2, limit),
         y3: Math.min(y3, limit),
       });
     }
 
     return points;
   }, [equationType, initialValue]);
 
   const yDomain = useMemo(() => {
     if (equationType === "exp-decay") return [0, 2.5];
     if (equationType === "nonlinear") return [0, 15];
     return [0, 20];
   }, [equationType]);
 
   return (
     <div className="space-y-6">
       <Tabs
         value={equationType}
         onValueChange={(v) => setEquationType(v as EquationType)}
       >
         <TabsList className="grid grid-cols-2 md:grid-cols-4 h-auto">
           {Object.entries(equationLabels).map(([key, label]) => (
             <TabsTrigger key={key} value={key} className="text-xs py-2">
               {label}
             </TabsTrigger>
           ))}
         </TabsList>
       </Tabs>
 
       <Card className="bg-muted/30">
         <CardContent className="pt-6">
           <div className="text-center text-sm text-muted-foreground mb-4">
             Семейство решений для разных начальных условий: y₀ = 0.5, 1, 2
           </div>
           <ResponsiveContainer width="100%" height={350}>
             <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
               <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
               <XAxis
                 dataKey="t"
                 label={{ value: "t", position: "insideBottomRight", offset: -5 }}
                 className="text-muted-foreground"
               />
               <YAxis
                 domain={yDomain}
                 label={{ value: "y", angle: -90, position: "insideLeft" }}
                 className="text-muted-foreground"
               />
               <Tooltip
                 contentStyle={{
                   backgroundColor: "hsl(var(--card))",
                   borderColor: "hsl(var(--border))",
                   borderRadius: "8px",
                 }}
                 labelStyle={{ color: "hsl(var(--foreground))" }}
               />
               <Legend />
               <ReferenceLine y={0} stroke="hsl(var(--muted-foreground))" />
               <Line
                 type="monotone"
                 dataKey="y1"
                 name="y₀ = 0.5"
                 stroke="hsl(var(--chart-1))"
                 strokeWidth={2}
                 dot={false}
                 connectNulls={false}
               />
               <Line
                 type="monotone"
                 dataKey="y2"
                 name="y₀ = 1"
                 stroke="hsl(var(--chart-2))"
                 strokeWidth={2}
                 dot={false}
                 connectNulls={false}
               />
               <Line
                 type="monotone"
                 dataKey="y3"
                 name="y₀ = 2"
                 stroke="hsl(var(--chart-3))"
                 strokeWidth={2}
                 dot={false}
                 connectNulls={false}
               />
             </LineChart>
           </ResponsiveContainer>
         </CardContent>
       </Card>
 
       {equationType === "nonlinear" && (
         <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
           <p className="text-sm">
             <strong>Обратите внимание:</strong> для нелинейного уравнения dy/dt = y² решения 
             «взрываются» за конечное время. Чем больше начальное значение y₀, тем раньше 
             происходит взрыв (при t = 1/y₀).
           </p>
         </div>
       )}
     </div>
   );
 }