"use client";

import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const resumeUrl = "/resume/Rian Dana Bin Elwin Pratikno resume (1).pdf";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-surface/90 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-5xl h-[85vh] bg-surface-card border border-white/10 flex flex-col z-10 rounded-sm overflow-hidden animate-word-fade-in">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-dim">
          <h3 className="font-heading text-xl text-white tracking-wider uppercase">
            MY RESUME
          </h3>
          <button
            onClick={onClose}
            className="text-muted hover:text-white transition-colors p-1"
            aria-label="Close modal"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 w-full bg-surface relative">
          <iframe
            src={`${resumeUrl}#toolbar=0`}
            className="w-full h-full border-0 bg-surface"
            title="Rian Dana Resume"
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-dim bg-surface-card/50">
          <a
            href={resumeUrl}
            download="Rian_Dana_Resume.pdf"
            className="btn-primary bg-accent px-4 py-2 text-white text-[0.65rem] tracking-[0.15em] font-bold uppercase inline-flex items-center gap-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              className="w-3.5 h-3.5"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download PDF
          </a>
          <button
            onClick={onClose}
            className="text-[0.65rem] tracking-[0.15em] font-bold uppercase text-muted hover:text-white transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
