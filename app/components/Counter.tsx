"use client";

import { useEffect, useState, useRef } from "react";

interface CounterProps {
  value: string;
}

export default function Counter({ value }: CounterProps) {
  const [count, setCount] = useState(0);
  const isNumeric = !isNaN(Number(value));
  const target = isNumeric ? Number(value) : 0;
  const ref = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!isNumeric) return;

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isNumeric]);

  useEffect(() => {
    if (!hasStarted || !isNumeric) return;

    let start = 0;
    const duration = 1200; // Total counting time in ms
    const stepTime = Math.max(Math.floor(duration / target), 15);

    if (target === 0) return;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [hasStarted, target, isNumeric]);

  if (!isNumeric) {
    return <span>{value}</span>;
  }

  return <span ref={ref}>{count}</span>;
}
