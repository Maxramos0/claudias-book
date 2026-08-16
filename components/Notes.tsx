import type { CSSProperties, ReactNode } from "react";

type StickyProps = {
  children: ReactNode;
  rotate?: number;
  className?: string;
};

/** Yellow taped post-it — drops onto the page, then the tape slaps on. */
export function Sticky({ children, rotate = -1.8, className = "" }: StickyProps) {
  return (
    <p
      className={`sticky ${className}`.trim()}
      style={{ "--tilt": `${rotate}deg` } as CSSProperties}
    >
      {children}
    </p>
  );
}

type ScribbleProps = {
  children: ReactNode;
  variant?: "pen" | "marker";
  rotate?: number;
  className?: string;
};

/** Ballpoint / marker — writes itself in when the page opens. */
export function Scribble({
  children,
  variant = "pen",
  rotate = -2.4,
  className = "",
}: ScribbleProps) {
  return (
    <span
      className={`scribble ${variant} ${className}`.trim()}
      style={{ "--tilt": `${rotate}deg` } as CSSProperties}
    >
      {children}
    </span>
  );
}
