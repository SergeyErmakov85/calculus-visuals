// Маппинг строкового имени иконки (из topicMap.Section.icon) в компонент lucide.
import {
  Spline,
  TrendingDown,
  Activity,
  Sigma,
  ListOrdered,
  Waypoints,
  Grid3x3,
  Dices,
  ChartColumnBig,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Spline,
  TrendingDown,
  Activity,
  Sigma,
  ListOrdered,
  Waypoints,
  Grid3x3,
  Dices,
  ChartColumnBig,
};

/** Возвращает компонент иконки по имени; BookOpen — запасной. */
export const sectionIcon = (name: string): LucideIcon => ICONS[name] ?? BookOpen;
