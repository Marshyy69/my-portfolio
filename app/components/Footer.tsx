import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-dim py-6 bg-[#121212]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-subtle text-[0.65rem] tracking-[0.1em] uppercase">
          &copy; {new Date().getFullYear()} {profile.name.first} {profile.name.last} &mdash; {profile.title}
        </p>

        {/* Built with */}
        <div className="flex items-center gap-2 text-subtle text-[0.65rem] tracking-[0.1em] uppercase">
          <span className="inline-block w-2.5 h-2.5 bg-accent" />
          <span className="inline-block w-2.5 h-2.5 bg-highlight" />
          <span>Built with Next Js</span>
        </div>
      </div>
    </footer>
  );
}
