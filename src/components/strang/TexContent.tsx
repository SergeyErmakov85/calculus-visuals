// Обёртка, типографирующая весь LaTeX ($...$ / $$...$$) внутри через KaTeX.
import { ReactNode, useEffect, useRef } from "react";
import { renderKatex } from "@/lib/katexAutoRender";

export const TexContent = ({ children }: { children: ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    renderKatex(ref.current);
  });
  return <div ref={ref}>{children}</div>;
};
