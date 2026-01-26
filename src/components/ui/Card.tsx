import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  style?: React.CSSProperties;
}

export const Card = ({
  children,

  className = "",
  hoverEffect = true,
}: CardProps) => {
  const hoverStyles = hoverEffect
    ? "hover:scale-[1.02] hover:-rotate-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.1)] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
    : "";

  return (
    <div
      // style={{ ...style }}
      className={`bg-bg-surface  rounded-xl p-8 shadow-card ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
};
