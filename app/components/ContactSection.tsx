import ScrollReveal from "./ScrollReveal";
import { socials } from "../data/portfolio";

/* ── Icons ─────────────────────────────────────── */

const EmailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className="w-4 h-4"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 4L12 13 2 4" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

/* ── Contact Section ───────────────────────────── */

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Watermark text */}
      <div className="watermark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        TALK
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
        {/* Label with lines on both sides */}
        <ScrollReveal>
          <div className="flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-accent" />
            <span className="text-[0.7rem] tracking-[0.2em] text-accent uppercase font-semibold">
              Get In Touch
            </span>
            <span className="w-8 h-px bg-accent" />
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal delay={100}>
          <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[0.85] mt-6">
            <span className="heading-gradient">LET&apos;S</span> <span className="text-highlight">TALK</span>
          </h2>
        </ScrollReveal>

        {/* Description */}
        <ScrollReveal delay={150}>
          <p className="text-muted mt-6 text-sm lg:text-base max-w-md mx-auto leading-relaxed">
            Have a project in mind or just want to connect? My inbox is always
            open.
          </p>
        </ScrollReveal>

        {/* Action buttons */}
        <ScrollReveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
            <a
              href={`mailto:${socials.email}`}
              id="contact-email"
              className="btn-primary inline-flex items-center gap-2 bg-accent px-6 py-3 text-white text-xs tracking-[0.15em] font-bold uppercase"
            >
              <EmailIcon />
              Send Email
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-github"
              className="btn-outline inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-white text-xs tracking-[0.15em] font-bold uppercase"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              id="contact-linkedin"
              className="btn-outline inline-flex items-center gap-2 border border-white/20 px-6 py-3 text-white text-xs tracking-[0.15em] font-bold uppercase"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
