"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { projects } from "../data/portfolio";

/* ── Icons ─────────────────────────────────────── */

const PhoneIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line
      x1="12"
      y1="18"
      x2="12"
      y2="18.01"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <polyline points="16,18 22,12 16,6" />
    <polyline points="8,6 2,12 8,18" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubSmallIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <polyline points="15,18 9,12 15,6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <polyline points="9,6 15,12 9,18" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
    <polyline points="15,3 21,3 21,9" />
    <polyline points="9,21 3,21 3,15" />
    <line x1="21" y1="3" x2="14" y2="10" />
    <line x1="3" y1="21" x2="10" y2="14" />
  </svg>
);

/* ── Screenshot data is now in app/data/portfolio.ts ── */

/* ── Fullscreen Lightbox Modal ─────────────────── */

function LightboxModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: {
  images: { src: string; alt: string }[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-10 text-white/60 hover:text-white transition-colors duration-200"
        aria-label="Close lightbox"
      >
        <CloseIcon />
      </button>

      {/* Counter */}
      <div className="absolute top-6 left-6 z-10 text-white/50 text-xs tracking-[0.15em] uppercase font-semibold">
        {currentIndex + 1} / {images.length}
      </div>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          className="absolute left-4 md:left-8 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
          aria-label="Previous screenshot"
        >
          <ChevronLeftIcon />
        </button>
      )}

      {/* Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh] z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          width={1200}
          height={800}
          className="max-w-full max-h-[85vh] object-contain rounded-sm"
        />
        <p className="text-center text-white/50 text-xs tracking-wider mt-3 uppercase">
          {images[currentIndex].alt}
        </p>
      </div>

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          className="absolute right-4 md:right-8 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white/20 hover:text-white transition-all duration-200"
          aria-label="Next screenshot"
        >
          <ChevronRightIcon />
        </button>
      )}
    </div>
  );
}

/* ── Screenshot Gallery / Placeholder ──────────── */

function ScreenshotGallery({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % images.length);
  }, [images.length]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + images.length) % images.length);
  }, [images.length]);

  /* Auto-advance every 4 seconds */
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [images.length, next]);

  /* ── Empty state: elegant placeholder ── */
  if (images.length === 0) {
    return (
      <div className="relative flex flex-col items-center justify-center gap-6 py-8">
        {/* Animated phone mockup */}
        <div className="relative group">
          {/* Glow */}
          <div className="absolute -inset-4 bg-accent/10 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-700" />

          {/* Phone frame */}
          <div className="relative w-[140px] h-[260px] rounded-2xl border-2 border-white/10 bg-surface-card overflow-hidden">
            {/* Notch */}
            <div className="mx-auto mt-2 w-14 h-3 rounded-full bg-white/8" />

            {/* Screen content - animated lines */}
            <div className="px-4 mt-6 space-y-3">
              <div className="h-2 w-full rounded bg-white/6 animate-pulse" />
              <div className="h-2 w-3/4 rounded bg-white/4 animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="h-8 w-full rounded bg-white/4 animate-pulse mt-4" style={{ animationDelay: "0.4s" }} />
              <div className="h-2 w-1/2 rounded bg-white/6 animate-pulse" style={{ animationDelay: "0.6s" }} />
              <div className="grid grid-cols-3 gap-1.5 mt-4">
                <div className="h-8 rounded bg-accent/15 animate-pulse" style={{ animationDelay: "0.8s" }} />
                <div className="h-8 rounded bg-highlight/10 animate-pulse" style={{ animationDelay: "1.0s" }} />
                <div className="h-8 rounded bg-white/5 animate-pulse" style={{ animationDelay: "1.2s" }} />
              </div>
              <div className="h-14 w-full rounded bg-white/3 animate-pulse mt-3" style={{ animationDelay: "1.4s" }} />
            </div>

            {/* Home bar */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 rounded-full bg-white/15" />
          </div>
        </div>

        <div className="text-center">
          <p className="text-white/25 text-[0.65rem] tracking-[0.2em] uppercase font-semibold">
            Screenshots Coming Soon
          </p>
          <p className="text-white/10 text-[0.55rem] tracking-wider mt-1">
            Add images to /projects/mochiroam/
          </p>
        </div>
      </div>
    );
  }

  /* ── Gallery with images ── */
  return (
    <>
      <div className="relative group/gallery">
        {/* Main image */}
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          {images.map((img, i) => (
            <div
              key={img.src}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                i === current
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          ))}

          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-surface-card to-transparent" />

          {/* Expand button */}
          <button
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded bg-black/50 backdrop-blur-sm text-white/60 hover:text-white opacity-0 group-hover/gallery:opacity-100 transition-all duration-300"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(true);
            }}
            aria-label="View fullscreen"
          >
            <ExpandIcon />
          </button>

          {/* Caption */}
          <div className="absolute bottom-3 left-3 right-3">
            <p className="text-white/70 text-[0.6rem] tracking-wider uppercase font-medium">
              {images[current].alt}
            </p>
          </div>
        </div>

        {/* Navigation arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:bg-black/60 opacity-0 group-hover/gallery:opacity-100 transition-all duration-300"
              aria-label="Previous screenshot"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-sm text-white/60 hover:text-white hover:bg-black/60 opacity-0 group-hover/gallery:opacity-100 transition-all duration-300"
              aria-label="Next screenshot"
            >
              <ChevronRightIcon />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 mt-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === current
                    ? "w-5 h-1.5 bg-accent"
                    : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <LightboxModal
          images={images}
          currentIndex={current}
          onClose={() => setLightboxOpen(false)}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}

/* ── Projects Section ──────────────────────────── */

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background number */}
      <div className="bg-number right-4 top-8 lg:right-12">02</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <span className="section-label">My Work</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[0.85] mt-6">
            <span className="heading-gradient block">PROJECTS</span>
            <span className="text-highlight">BUILT</span>
          </h2>
        </ScrollReveal>

        {/* ── Project Cards ── */}
        {projects.map((project, idx) => (
          <ScrollReveal key={project.name + project.nameHighlight} delay={200 + idx * 100}>
            <div
              className="project-card grid grid-cols-1 lg:grid-cols-2 mt-16 border border-dim"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
                e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
              }}
            >
              {/* Left panel — Screenshot Gallery */}
              <div className="bg-surface-card p-8 lg:p-10 flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 border border-accent flex items-center justify-center text-accent">
                      <PhoneIcon />
                    </div>
                    {project.screenshots.length > 0 && (
                      <span className="text-white/20 text-[0.6rem] tracking-[0.15em] uppercase">
                        {project.screenshots.length} screenshot{project.screenshots.length !== 1 ? "s" : ""}
                      </span>
                    )}
                  </div>

                  <p className="text-[0.65rem] tracking-[0.15em] text-muted uppercase">
                    {project.number} — {project.type}
                  </p>
                  <h3 className="font-heading text-4xl lg:text-5xl mt-2 text-white">
                    {project.name}<span className="text-highlight">{project.nameHighlight}</span>
                  </h3>
                </div>

                {/* Gallery area */}
                <div className="mt-6">
                  <ScreenshotGallery images={project.screenshots} />
                </div>

                <div className="flex flex-wrap gap-2 mt-6">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right panel */}
              <div className="bg-surface-card/50 p-8 lg:p-10 border-t lg:border-t-0 lg:border-l border-dim flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="inline-flex items-center gap-1.5 bg-highlight/15 text-highlight px-3 py-1 text-[0.6rem] tracking-[0.1em] uppercase font-semibold">
                      {project.status}
                    </span>
                    <span className="text-muted">
                      <CodeIcon />
                    </span>
                  </div>

                  <p className="text-muted leading-relaxed text-sm">
                    {project.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-muted text-sm"
                      >
                        <span className="text-accent mt-1 text-[0.55rem]">▶</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-6 mt-8">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted hover:text-white transition-colors duration-300"
                    >
                      <GitHubSmallIcon />
                      View Code
                    </a>
                  )}
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-muted hover:text-white transition-colors duration-300"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* More coming */}
        <ScrollReveal delay={300}>
          <p className="text-center text-subtle text-xs tracking-[0.2em] uppercase mt-12">
            More Projects On The Way…
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
