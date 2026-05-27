"use client";

import React, { useRef, useState, type ReactNode } from "react";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  href: string;
}

export default function TiltCard({
  children,
  className = "",
  href,
}: TiltCardProps) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate mouse position relative to the center of the card
    const x = e.clientX - rect.left - width / 2;
    const y = e.clientY - rect.top - height / 2;

    // Normalize coordinates (-0.5 to 0.5) and multiply by max tilt angle
    const maxTilt = 10; // degrees
    const rotateX = -(y / (height / 2)) * maxTilt;
    const rotateY = (x / (width / 2)) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
    );
  };

  const handleMouseLeave = () => {
    setTransformStyle(
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
    );
  };

  return (
    <a
      ref={cardRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: transformStyle,
        transition:
          "transform 0.15s cubic-bezier(0.25, 1, 0.5, 1), border-color 0.3s ease",
        transformStyle: "preserve-3d",
      }}
    >
      {children}
    </a>
  );
}
