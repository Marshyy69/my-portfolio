"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const dismiss = useCallback(() => {
    setFadeOut(true);
    // Restore scrolling immediately when fade-out starts
    document.body.style.overflow = "";
    setTimeout(() => setVisible(false), 600);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Inject keyframes for progress bar
    const style = document.createElement("style");
    style.textContent = `
      @keyframes loading-progress {
        0%   { width: 0%; }
        60%  { width: 70%; }
        100% { width: 100%; }
      }
    `;
    document.head.appendChild(style);

    const timer = setTimeout(dismiss, 1200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      style.parentNode?.removeChild(style);
    };
  }, [dismiss]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] bg-[#0a0a0a] flex flex-col items-center justify-center transition-opacity duration-500 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
      aria-live="polite"
      aria-label="Loading"
    >
      {/* Centered pulsing logo */}
      <div className="animate-pulse">
        <div className="relative h-24 w-48 overflow-hidden flex items-center justify-center">
          <Image
            src="/RdLogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-auto max-w-none"
            priority
          />
        </div>
      </div>

      {/* Accent progress line at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
        <div
          className="h-full bg-[#c62828]"
          style={{
            animation:
              "loading-progress 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
          }}
        />
      </div>
    </div>
  );
}
