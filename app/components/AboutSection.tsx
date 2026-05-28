import ScrollReveal from "./ScrollReveal";
import MarqueeTicker from "./MarqueeTicker";
import Counter from "./Counter";
import { profile, stats, skills } from "../data/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-12 lg:py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* ── Top row: Title + Description ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left – heading */}
          <div>
            <ScrollReveal>
              <span className="section-label">About Me</span>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="font-heading text-6xl sm:text-7xl lg:text-8xl leading-[0.95] mt-3 flex flex-col">
                <span className="heading-gradient block">WHO</span>
                <span className="heading-gradient block">AM</span>
                <span className="text-highlight block">I</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Right – bio */}
          <div className="flex flex-col justify-center">
            {profile.bio.about.map((paragraph, i) => (
              <ScrollReveal key={i} delay={150 + i * 50}>
                <p className={`text-muted leading-relaxed text-sm lg:text-base ${i > 0 ? "mt-5" : ""}`}>
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* ── Skill Ticker ── */}
        <ScrollReveal delay={220}>
          <div className="-mx-6 lg:-mx-12 mt-8">
            <MarqueeTicker
              items={[...skills, "TypeScript", "Next.js", "Dart", "Git", "REST APIs", "Figma"]}
              speed={25}
            />
          </div>
        </ScrollReveal>

        {/* ── Bottom row: Stats + Skills ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-8">
          {/* Stats */}
          <ScrollReveal delay={250}>
            <div className="flex items-end gap-0">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-end">
                  <div className="pr-4 sm:pr-6 lg:pr-10">
                    <div className="font-heading text-4xl lg:text-5xl text-highlight leading-none">
                      <Counter value={stat.number} />
                    </div>
                    <div className="text-[0.6rem] tracking-[0.15em] text-muted uppercase mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                  {i < stats.length - 1 && (
                    <div className="w-px h-14 bg-dim mr-4 sm:mr-6 lg:mr-10 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Core skills */}
          <ScrollReveal delay={300}>
            <div>
              <span className="text-[0.65rem] tracking-[0.2em] text-muted uppercase font-semibold">
                Core Skills
              </span>
              <div className="flex flex-wrap gap-3 mt-4">
                {skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
