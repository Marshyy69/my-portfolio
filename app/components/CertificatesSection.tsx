import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";
import { certificates } from "../data/portfolio";

/* ── Certificate icon ──────────────────────────── */

const CertIcon = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1.5"
    className="w-5 h-5"
  >
    <rect x="4" y="2" width="16" height="20" rx="1" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="8" y1="10" x2="16" y2="10" />
    <line x1="8" y1="14" x2="12" y2="14" />
  </svg>
);

/* ── Certificates Section ──────────────────────── */

export default function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      {/* Background number */}
      <div className="bg-number right-4 top-8 lg:right-12">02</div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <ScrollReveal>
          <span className="section-label">Credentials</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[0.85] mt-6">
            <span className="heading-gradient">CERTIFI</span>
            <span className="text-highlight">CATES</span>
          </h2>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {certificates.map((cert, i) => (
            <ScrollReveal key={cert.name} delay={150 + i * 80}>
              <TiltCard
                href={cert.link}
                className="cert-card group cursor-pointer block hover:border-white/40 pb-6"
              >
                <div
                  className="w-9 h-9 border flex items-center justify-center mb-4 transition-colors duration-300"
                  style={{ borderColor: cert.color }}
                >
                  <CertIcon color={cert.color} />
                </div>
                <p
                  className="text-[0.65rem] tracking-[0.1em] uppercase"
                  style={{ color: cert.color }}
                >
                  {cert.year} &mdash; {cert.issuer}
                </p>
                <h3 className="font-bold text-sm mt-1.5 text-white uppercase tracking-wide transition-colors duration-300 group-hover:text-highlight">
                  {cert.name}
                </h3>

                {/* Verification footer in normal flow */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[0.65rem] tracking-wider text-muted hover:text-white uppercase font-semibold">
                      Verify Online
                    </span>
                  </div>

                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-3.5 h-3.5 text-muted"
                    >
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
