"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -100, y: -100 });
  const dotPos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [isTouch, setIsTouch] = useState(true); // default to hidden (SSR safe)

  useEffect(() => {
    const touch =
      "ontouchstart" in window ||
      window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(touch);
    if (touch) return;

    document.body.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, [data-cursor="hover"]'
      );
      const blendTarget = target.closest(".btn-primary");

      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      if (interactive) {
        dot.style.width = "5px";
        dot.style.height = "5px";
        dot.style.background = "#fff";
        ring.style.width = "54px";
        ring.style.height = "54px";
        ring.style.borderColor = "rgba(198, 40, 40, 0.6)";
      } else {
        dot.style.width = "8px";
        dot.style.height = "8px";
        dot.style.background = "#c62828";
        ring.style.width = "36px";
        ring.style.height = "36px";
        ring.style.borderColor = "#c62828";
      }

      if (blendTarget) {
        ring.style.mixBlendMode = "difference";
        ring.style.background = "#fff";
        ring.style.borderColor = "#fff";
      } else {
        ring.style.mixBlendMode = "normal";
        ring.style.background = "transparent";
      }
    };

    const DOT_EASE = 0.25;
    const RING_EASE = 0.12;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      dotPos.current.x = lerp(dotPos.current.x, mouse.current.x, DOT_EASE);
      dotPos.current.y = lerp(dotPos.current.y, mouse.current.y, DOT_EASE);
      ringPos.current.x = lerp(ringPos.current.x, mouse.current.x, RING_EASE);
      ringPos.current.y = lerp(ringPos.current.y, mouse.current.y, RING_EASE);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x - 4}px, ${dotPos.current.y - 4}px)`;
      }
      if (ringRef.current) {
        const w = parseFloat(ringRef.current.style.width || "36") / 2;
        ringRef.current.style.transform = `translate(${ringPos.current.x - w}px, ${ringPos.current.y - w}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isTouch) return null;

  const baseStyles: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 999,
    willChange: "transform",
    transition: "width 0.25s ease, height 0.25s ease, background 0.25s ease, border-color 0.25s ease",
  };

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          ...baseStyles,
          width: 8,
          height: 8,
          background: "#c62828",
        }}
      />
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          ...baseStyles,
          width: 36,
          height: 36,
          border: "1.5px solid #c62828",
          background: "transparent",
        }}
      />
    </>
  );
}
