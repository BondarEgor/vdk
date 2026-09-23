import { ReactNode, useEffect, useRef, useState } from "react";
import s from "./Reveal.module.css";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className = "" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    io.observe(ref.current);

    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { "--d": `${delay}ms` } : undefined}
      className={`${s.reveal} ${shown ? s.shown : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
