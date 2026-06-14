// Карточка формулы в стиле probability_add (KaTeX-шпаргалка), на семантических токенах.
import { ReactNode } from "react";
import { Card } from "@/components/ui/card";

type CardColor = "primary" | "secondary" | "accent";

const BORDER: Record<CardColor, string> = {
  primary: "border-primary/20 hover:border-primary/40",
  secondary: "border-secondary/20 hover:border-secondary/40",
  accent: "border-accent/20 hover:border-accent/40",
};

const TEXT: Record<CardColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent",
};

export const FormulaCard = ({
  title,
  color = "primary",
  children,
}: {
  title: string;
  color?: CardColor;
  children: ReactNode;
}) => (
  <Card
    className={`p-6 bg-gradient-to-br from-card via-card to-muted/20 border-2 ${BORDER[color]} transition-all duration-300`}
  >
    <h4 className={`text-lg font-bold mb-4 ${TEXT[color]}`}>{title}</h4>
    <div className="space-y-3 text-sm">{children}</div>
  </Card>
);
