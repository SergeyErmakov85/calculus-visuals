import { ReactNode } from "react";
import { AlertTriangle, Lightbulb, BookOpen, CheckCircle } from "lucide-react";

interface InfoBlockProps {
  type: "important" | "mistake" | "tip" | "example";
  title: string;
  children: ReactNode;
}

const CONFIG = {
  important: { className: "important-block", icon: CheckCircle, iconColor: "text-accent" },
  mistake: { className: "mistake-block", icon: AlertTriangle, iconColor: "text-destructive" },
  tip: { className: "tip-block", icon: Lightbulb, iconColor: "text-success" },
  example: { className: "example-block", icon: BookOpen, iconColor: "text-primary" },
} as const;

const InfoBlock = ({ type, title, children }: InfoBlockProps) => {
  const { className, icon: Icon, iconColor } = CONFIG[type];
  return (
    <div className={className}>
      <div className="flex items-center gap-2 mb-3">
        <Icon size={20} className={iconColor} />
        <h4 className="font-serif font-semibold text-foreground">{title}</h4>
      </div>
      <div className="text-sm text-foreground/90 space-y-2">{children}</div>
    </div>
  );
};

export default InfoBlock;
