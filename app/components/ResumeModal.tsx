"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { profile, socials, skills } from "../data/portfolio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setIsLoading(true); // reset loader when opened
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resumeUrl = "/resume/Rian Dana Bin Elwin Pratikno resume (1).pdf";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
      {/* CSS Animation Injector */}
      <style>{`
        @keyframes modalEntrance {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(15px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-entrance {
          animation: modalEntrance 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .glow-accent {
          box-shadow: 0 0 50px rgba(198, 40, 40, 0.12);
        }
      `}</style>

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#050505]/90 backdrop-blur-md cursor-pointer transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl h-[85vh] bg-[#0c0c0c] border border-white/10 flex flex-col md:flex-row z-10 rounded-sm overflow-hidden animate-modal-entrance glow-accent">
        
        {/* Left Panel: Profile Summary (1/3 width on desktop, full-width scrollable on mobile) */}
        <div 
          className="w-full md:w-[350px] border-b md:border-b-0 md:border-r border-white/5 bg-[#0e0e0e] flex flex-col justify-between md:shrink-0 overflow-y-auto h-full"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {/* Main Info */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header / Brand */}
            <div className="flex items-center justify-between md:hidden">
              <span className="text-[0.65rem] tracking-[0.2em] text-accent uppercase font-bold">Resume Viewer</span>
              <button
                onClick={onClose}
                className="text-muted hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Profile Avatar & Info */}
            <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-5">
              <div className="relative w-16 h-16 md:w-24 md:h-24 shrink-0 rounded-sm overflow-hidden border border-white/10 bg-surface-card">
                {/* Corner brackets for aesthetic */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-accent" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-accent" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-accent" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-highlight" />
                
                <Image
                  src={profile.photo}
                  alt={`${profile.name.first} ${profile.name.last}`}
                  fill
                  sizes="(max-width: 768px) 64px, 96px"
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-1">
                <h2 className="font-heading text-3xl md:text-4xl leading-none tracking-wide text-white">
                  {profile.name.first} <span className="text-highlight">{profile.name.last}</span>
                </h2>
                <p className="text-accent text-[0.6rem] md:text-[0.65rem] tracking-[0.25em] uppercase font-bold">
                  {profile.title}
                </p>
              </div>
            </div>

            {/* Quick Metadata */}
            <div className="pt-4 border-t border-white/5 space-y-2.5 text-xs text-muted">
              <div className="flex items-center gap-2.5">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-accent">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Active &bull; Open for opportunities</span>
              </div>
            </div>

            {/* Core Stack Pills */}
            <div className="pt-4 border-t border-white/5">
              <span className="text-[0.55rem] tracking-[0.2em] text-muted uppercase font-bold block mb-3">
                Core Competencies
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="text-[0.6rem] uppercase tracking-wider px-2 py-1 bg-white/5 border border-white/5 text-white/70">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Contacts & Socials Links */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <span className="text-[0.55rem] tracking-[0.2em] text-muted uppercase font-bold block mb-3">
                Find Me On
              </span>
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-white/[0.02] border border-white/5 hover:border-white/20 text-muted hover:text-white transition-all duration-300 text-[0.65rem] tracking-wider uppercase font-semibold rounded-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-2 bg-white/[0.02] border border-white/5 hover:border-white/20 text-muted hover:text-white transition-all duration-300 text-[0.65rem] tracking-wider uppercase font-semibold rounded-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 shrink-0">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar Footer Controls */}
          <div className="p-6 bg-black/30 border-t border-white/5 space-y-3">
            <a
              href={resumeUrl}
              download="Rian_Dana_Resume.pdf"
              className="w-full btn-primary bg-accent py-3 text-white text-[0.65rem] tracking-[0.2em] font-bold uppercase inline-flex items-center justify-center gap-2 rounded-sm"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
            
            <button
              onClick={handleCopyEmail}
              className="w-full py-2.5 border border-white/10 hover:border-white/20 text-muted hover:text-white transition-all text-[0.6rem] tracking-[0.2em] uppercase font-bold inline-flex items-center justify-center gap-1.5 rounded-sm"
            >
              {copied ? (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5 text-highlight">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-highlight">Email Copied!</span>
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>Copy Contact Email</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="w-full text-center text-muted hover:text-white text-[0.55rem] tracking-[0.2em] uppercase font-semibold transition-colors pt-2 block md:hidden"
            >
              Close Window
            </button>
          </div>
        </div>

        {/* Right Panel: Document Viewer Frame (Interactive macOS Browser Mockup) */}
        <div className="hidden md:flex flex-1 bg-surface flex-col overflow-hidden relative">
          
          {/* macOS Browser Header */}
          <div className="h-11 bg-[#121212] border-b border-white/5 flex items-center px-4 justify-between shrink-0 select-none">
            {/* Window control traffic lights */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>

            {/* Document tab */}
            <div className="bg-[#0c0c0c] border border-white/5 px-4 py-1.5 rounded-t-md text-[0.6rem] text-white/80 font-mono tracking-wider flex items-center gap-2 max-w-[220px] truncate">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              rian_dana_resume.pdf
            </div>

            {/* Close Button (Desktop) */}
            <button
              onClick={onClose}
              className="hidden md:flex items-center justify-center p-1.5 rounded-sm border border-white/5 hover:border-white/20 text-muted hover:text-white transition-all bg-white/[0.02]"
              aria-label="Close modal"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Document Content View */}
          <div className="flex-1 w-full bg-[#0a0a0a] relative overflow-hidden">
            {/* Standard PDF Frame */}
            <iframe
              src={`${resumeUrl}#toolbar=0&navpanes=0`}
              className="w-full h-full border-0 bg-[#0a0a0a]"
              title="Rian Dana Resume"
              onLoad={() => setIsLoading(false)}
            />

            {/* Loading Indicator */}
            {isLoading && (
              <div className="absolute inset-0 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 z-20 transition-all duration-300">
                {/* Techy pulsing loader */}
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  <div className="w-10 h-10 border border-white/5 rounded-full bg-[#141414] flex items-center justify-center text-accent text-[0.55rem] font-bold uppercase tracking-wider animate-pulse">
                    PDF
                  </div>
                </div>
                <div className="flex flex-col items-center gap-1.5 mt-2">
                  <span className="text-[0.65rem] tracking-[0.3em] text-white uppercase font-bold">Initializing Viewer</span>
                  <span className="text-[0.55rem] tracking-[0.1em] text-muted uppercase">Fetching secure document...</span>
                </div>
              </div>
            )}
            
            {/* Mobile Fallback Viewport overlay (informative message for smaller screens) */}
            <div className="absolute inset-x-0 bottom-0 bg-[#0e0e0e]/95 backdrop-blur-sm border-t border-white/5 p-4 flex md:hidden flex-col items-center justify-center text-center gap-3 z-30">
              <p className="text-[0.65rem] text-muted tracking-wide max-w-[280px]">
                Viewing files inside browser frames may be restricted on some mobile devices.
              </p>
              <a
                href={resumeUrl}
                download="Rian_Dana_Resume.pdf"
                className="btn-primary bg-accent px-4 py-2 text-white text-[0.6rem] tracking-[0.15em] font-bold uppercase inline-flex items-center gap-1.5 rounded-sm"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download PDF File
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
