import { useEffect, useRef, useState } from "react";

type AnimatedBoxRenderState = {
  isVisible: boolean;
};

type AnimatedBoxProps = {
  children: React.ReactNode | ((state: AnimatedBoxRenderState) => React.ReactNode);
  className?: string;
  enterThreshold?: number;
  exitThreshold?: number;
};

export default function AnimatedBox({
  children,
  className = "",
  enterThreshold = 0.7,
  exitThreshold = 0.7,
}: AnimatedBoxProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        if (ratio >= enterThreshold) {
          setIsVisible(true);
        } else if (ratio <= exitThreshold) {
          setIsVisible(false);
        }
      },
      { threshold: [0, exitThreshold, enterThreshold, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [enterThreshold, exitThreshold]);

  const content =
    typeof children === "function" ? children({ isVisible }) : children;

  return (
    <div ref={ref}>
      <div
        className={`transition-all duration-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } ${className}`}
      >
        {content}
      </div>
    </div>
  );
}
