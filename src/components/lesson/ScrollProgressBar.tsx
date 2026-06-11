import { useEffect, useState } from "react";

export const ScrollProgressBar = ({
  className = "bg-gradient-to-r from-primary via-accent to-primary",
}: {
  className?: string;
}) => {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-transparent">
      <div
        className={`h-full ${className} transition-[width] duration-100`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
};
