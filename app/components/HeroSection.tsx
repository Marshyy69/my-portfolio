"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { profile, socials } from "../data/portfolio";
import ResumeModal from "./ResumeModal";

/* ── Inline SVG icons ──────────────────────────── */

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-5 h-5"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

/* ── Word Cycler ──────────────────────────────── */

const WORDS = ["mobile apps", "web experiences", "bold designs", "clean code"];
const CYCLE_MS = 2500;
const FADE_MS = 400;

function WordCycler() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false);

      // after fade-out completes, swap word & fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % WORDS.length);
        setVisible(true);
      }, FADE_MS);
    }, CYCLE_MS);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-flex items-baseline">
      <span
        className="text-highlight transition-opacity duration-400 ease-in-out"
        style={{ opacity: visible ? 1 : 0 }}
      >
        {WORDS[index]}
      </span>
      <span className="ml-0.5 animate-pulse text-highlight">|</span>
    </span>
  );
}

/* ── Hero Section ──────────────────────────────── */

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background decorative number */}
      <div className="bg-number right-4 bottom-4 lg:right-12 lg:bottom-12">
        01
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* ── Left: Content ── */}
        <div className="z-10">
          <ScrollReveal>
            <span className="section-label">{profile.title}</span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] mt-6 text-white">
              HELLO, I&apos;M
              <br />
              {profile.name.first}
              <br />
              <span className="text-highlight">{profile.name.last}</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <p className="mt-5 font-body text-lg lg:text-xl text-muted">
              I build <WordCycler />
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="mt-4 text-muted leading-relaxed max-w-md text-sm lg:text-base">
              {profile.bio.hero}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={250}>
            <div className="flex items-center gap-2 mt-4 text-muted text-sm">
              <MapPinIcon />
              <span>{profile.location}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <a
                href="#projects"
                id="cta-view-work"
                className="btn-primary inline-flex items-center gap-2 bg-accent px-6 py-3 text-white text-xs tracking-[0.15em] font-bold uppercase"
              >
                View My Work
              </a>
              <button
                onClick={() => setResumeOpen(true)}
                id="cta-view-resume"
                className="btn-outline inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-white text-xs tracking-[0.15em] font-bold uppercase cursor-pointer"
              >
                View My Resume
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={350}>
            <div className="flex items-center gap-5 mt-8">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors duration-300"
                aria-label="GitHub profile"
              >
                <GitHubIcon />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-white transition-colors duration-300"
                aria-label="LinkedIn profile"
              >
                <LinkedInIcon />
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="text-muted hover:text-white transition-colors duration-300"
                aria-label="Send email"
              >
                <EmailIcon />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Right: Photo area ── */}
        <div className="relative hidden lg:flex items-center justify-center">
          <div className="relative w-[320px] h-[400px]">
            {/* Corner brackets */}
            <div
              className="absolute inset-0 pointer-events-none transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${scrollY * 0.08}px)` }}
            >
              <div className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent" />
              <div className="absolute -top-3 -right-3 w-8 h-8 border-t-2 border-r-2 border-accent" />
              <div className="absolute -bottom-3 -left-3 w-8 h-8 border-b-2 border-l-2 border-accent" />
              <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-highlight" />
            </div>

            {/* Photo */}
            <div
              className="w-full h-full overflow-hidden transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${scrollY * 0.02}px)` }}
            >
              <Image
                src={profile.photo}
                alt={`${profile.name.first} ${profile.name.last}`}
                width={320}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Vertical rotated text */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <span
              className="text-[0.65rem] tracking-[0.3em] text-subtle uppercase"
              style={{ writingMode: "vertical-rl" }}
            >
              {profile.title}
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator absolute bottom-8 left-6 lg:left-12 flex items-center gap-2 text-muted text-xs tracking-[0.2em]">
        <span>↓</span>
        <span>SCROLL</span>
      </div>

      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </section>
  );
}
