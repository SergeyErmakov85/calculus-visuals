import { InlineMath, BlockMath } from "react-katex";

interface MathProps {
  children: string;
  display?: boolean;
}

export const Math = ({ children, display = false }: MathProps) =>
  display ? <BlockMath math={children} /> : <InlineMath math={children} />;
