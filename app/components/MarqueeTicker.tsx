interface MarqueeTickerProps {
  items: string[];
  /** Duration in seconds for one full scroll cycle (default: 30) */
  speed?: number;
}

export default function MarqueeTicker({ items, speed = 30 }: MarqueeTickerProps) {
  const content = items.map((item, i) => (
    <span key={i} className="flex items-center shrink-0">
      <span className="uppercase tracking-[0.2em] text-[0.7rem] font-semibold text-white/20 whitespace-nowrap">
        {item}
      </span>
      <span className="text-accent/40 mx-4 text-[0.6rem] select-none" aria-hidden="true">
        ◆
      </span>
    </span>
  ));

  return (
    <div
      className="relative w-full overflow-hidden border-y border-dim py-4"
      aria-label="Scrolling ticker"
    >
      {/* Gradient fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 bg-gradient-to-r from-surface to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 bg-gradient-to-l from-surface to-transparent" />

      {/* Scrolling track — duplicated for seamless loop */}
      <div
        className="marquee-track flex"
        style={{ "--marquee-speed": `${speed}s` } as React.CSSProperties}
      >
        {/* First copy */}
        <div className="flex shrink-0">{content}</div>
        {/* Duplicate for seamless loop */}
        <div className="flex shrink-0" aria-hidden="true">{content}</div>
      </div>
    </div>
  );
}
