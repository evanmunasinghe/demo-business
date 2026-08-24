"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

type CounterProps = {
  end: number;
  suffix?: string;
  duration?: number;
};

export default function Counter({ end, suffix = "", duration = 2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, end, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v).toLocaleString()}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, end, suffix, duration]);

  return <span ref={ref}>0{suffix}</span>;
}
