"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionDivider({ bgClass = "bg-[#0a0a0a]" }: { bgClass?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`w-full overflow-hidden h-16 relative z-10 flex items-center justify-center ${bgClass}`}>
      <svg
        ref={ref}
        className="w-full max-w-7xl px-6 lg:px-12 h-[2px]"
        viewBox="0 0 1000 2"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0,1 L1000,1"
          stroke="url(#divider-grad)"
          strokeWidth="2"
          strokeDasharray="1000"
          strokeDashoffset={visible ? "0" : "1000"}
          className="transition-all duration-[1.5s] ease-in-out"
        />
        <defs>
          <linearGradient id="divider-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.01)" />
            <stop offset="25%" stopColor="rgba(198,40,40,0.15)" />
            <stop offset="50%" stopColor="rgba(198,40,40,0.8)" />
            <stop offset="75%" stopColor="rgba(198,40,40,0.15)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.01)" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
