import { useState, useMemo, useEffect, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Play, Pause, RotateCcw } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type SystemType = "stable-node" | "unstable-node" | "saddle" | "stable-spiral" | "center";

const systems: Record<SystemType, { matrix: [[number, number], [number, number]]; name: string; description: string }> = {
  "stable-node": {
    matrix: [[-2, 0], [0, -1]],
    name: "Устойчивый узел",
    description: "Оба λ < 0, действительные"
  },
  "unstable-node": {
    matrix: [[1, 0], [0, 2]],
    name: "Неустойчивый узел",
    description: "Оба λ > 0, действительные"
  },
  "saddle": {
    matrix: [[1, 0], [0, -2]],
    name: "Седло",
    description: "λ₁ > 0, λ₂ < 0"
  },
  "stable-spiral": {
    matrix: [[-0.2, 1], [-1, -0.2]],
    name: "Устойчивый фокус",
    description: "Re(λ) < 0, комплексные"
  },
  "center": {
    matrix: [[0, 1], [-1, 0]],
    name: "Центр",
    description: "Re(λ) = 0, чисто мнимые"
  }
};

interface Trajectory {
  points: Array<{ x: number; y: number }>;
  color: string;
}

export function PhasePortraitChart() {
  const [systemType, setSystemType] = useState<SystemType>("stable-spiral");
  const [time, setTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const system = systems[systemType];
  const [[a, b], [c, d]] = system.matrix;

  // Generate initial points for trajectories
  const initialPoints = useMemo(() => [
    { x: 1.5, y: 0.5, color: "#3b82f6" },
    { x: -1.5, y: 0.5, color: "#10b981" },
    { x: 0.5, y: 1.5, color: "#f59e0b" },
    { x: -0.5, y: -1.5, color: "#ef4444" },
    { x: 1, y: 1, color: "#8b5cf6" },
    { x: -1, y: -1, color: "#ec4899" },
  ], []);

  // Compute trajectory using Euler method
  const computeTrajectory = useCallback((x0: number, y0: number, maxTime: number, dt: number = 0.02) => {
    const points: Array<{ x: number; y: number }> = [];
    let x = x0, y = y0;
    
    for (let t = 0; t <= maxTime; t += dt) {
      points.push({ x, y });
      const dx = a * x + b * y;
      const dy = c * x + d * y;
      x += dx * dt;
      y += dy * dt;
      
      // Clamp to prevent overflow
      if (Math.abs(x) > 5 || Math.abs(y) > 5) break;
    }
    return points;
  }, [a, b, c, d]);

  // Generate all trajectories
  const trajectories: Trajectory[] = useMemo(() => {
    return initialPoints.map(({ x, y, color }) => ({
      points: computeTrajectory(x, y, 10),
      color
    }));
  }, [initialPoints, computeTrajectory]);

  // Animation
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setTime(prev => {
        const next = prev + 0.05;
        if (next > 10) {
          setIsPlaying(false);
          return 10;
        }
        return next;
      });
    }, 50);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const scale = 60;
  const cx = 200, cy = 200;

  // Get current position on trajectory
  const getCurrentPoint = (trajectory: Trajectory) => {
    const idx = Math.min(Math.floor(time / 0.02), trajectory.points.length - 1);
    return trajectory.points[idx] || trajectory.points[trajectory.points.length - 1];
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4 items-center">
        <Select value={systemType} onValueChange={(v) => { setSystemType(v as SystemType); setTime(0); }}>
          <SelectTrigger className="w-48">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(systems).map(([key, { name }]) => (
              <SelectItem key={key} value={key}>{name}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <span className="text-sm text-muted-foreground">{system.description}</span>
      </div>

      <svg viewBox="0 0 400 400" className="w-full max-w-lg mx-auto bg-muted/30 rounded-lg">
        {/* Grid */}
        <defs>
          <pattern id="phaseGrid" width="30" height="30" patternUnits="userSpaceOnUse">
            <path d="M 30 0 L 0 0 0 30" fill="none" stroke="currentColor" strokeOpacity="0.1" />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#phaseGrid)" />
        
        {/* Axes */}
        <line x1="0" y1={cy} x2="400" y2={cy} stroke="currentColor" strokeOpacity="0.4" />
        <line x1={cx} y1="0" x2={cx} y2="400" stroke="currentColor" strokeOpacity="0.4" />
        <text x="385" y={cy - 10} className="text-xs fill-current opacity-60">u₁</text>
        <text x={cx + 10} y="15" className="text-xs fill-current opacity-60">u₂</text>

        {/* Vector field arrows */}
        {Array.from({ length: 7 }, (_, i) => 
          Array.from({ length: 7 }, (_, j) => {
            const x = (i - 3) * 1;
            const y = (j - 3) * 1;
            if (x === 0 && y === 0) return null;
            const dx = a * x + b * y;
            const dy = c * x + d * y;
            const len = Math.sqrt(dx * dx + dy * dy);
            const normDx = (dx / len) * 15;
            const normDy = (dy / len) * 15;
            return (
              <line
                key={`${i}-${j}`}
                x1={cx + x * scale}
                y1={cy - y * scale}
                x2={cx + x * scale + normDx}
                y2={cy - y * scale - normDy}
                stroke="currentColor"
                strokeOpacity="0.2"
                strokeWidth="1"
                markerEnd="url(#fieldArrow)"
              />
            );
          })
        )}

        <defs>
          <marker id="fieldArrow" markerWidth="6" markerHeight="4" refX="5" refY="2" orient="auto">
            <polygon points="0 0, 6 2, 0 4" fill="currentColor" fillOpacity="0.3" />
          </marker>
        </defs>

        {/* Trajectories */}
        {trajectories.map((traj, i) => {
          const maxIdx = Math.min(Math.floor(time / 0.02), traj.points.length - 1);
          const visiblePoints = traj.points.slice(0, maxIdx + 1);
          if (visiblePoints.length < 2) return null;
          
          const pathD = visiblePoints
            .map((p, idx) => `${idx === 0 ? 'M' : 'L'} ${cx + p.x * scale} ${cy - p.y * scale}`)
            .join(' ');
          
          return (
            <g key={i}>
              <path
                d={pathD}
                fill="none"
                stroke={traj.color}
                strokeWidth="2"
                strokeOpacity="0.8"
              />
              {/* Current position marker */}
              <circle
                cx={cx + getCurrentPoint(traj).x * scale}
                cy={cy - getCurrentPoint(traj).y * scale}
                r="5"
                fill={traj.color}
              />
            </g>
          );
        })}

        {/* Origin */}
        <circle cx={cx} cy={cy} r="4" fill="hsl(var(--primary))" />
      </svg>

      <div className="flex items-center gap-4">
        <Button size="icon" variant="outline" onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
        <Button size="icon" variant="outline" onClick={() => { setTime(0); setIsPlaying(false); }}>
          <RotateCcw className="h-4 w-4" />
        </Button>
        <div className="flex-1">
          <Slider
            value={[time]}
            onValueChange={(val) => setTime(val[0])}
            min={0}
            max={10}
            step={0.1}
          />
        </div>
        <span className="text-sm font-mono w-20">t = {time.toFixed(1)}</span>
      </div>

      <p className="text-sm text-muted-foreground text-center">
        Фазовый портрет системы du/dt = Au — траектории показывают эволюцию состояния во времени
      </p>
    </div>
  );
}
