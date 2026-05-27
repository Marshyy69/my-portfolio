/* ══════════════════════════════════════════════════════════════
   PORTFOLIO DATA — Single source of truth
   ══════════════════════════════════════════════════════════════
   Edit this file to update your entire portfolio.
   Components import from here — no need to touch JSX code.
   ══════════════════════════════════════════════════════════════ */

/* ── Profile ──────────────────────────────────────── */

export const profile = {
  name: {
    first: "RIAN",
    last: "DANA",
  },
  title: "Software Engineering Student",
  location: "Kuala Lumpur, Malaysia",
  photo: "/Me.jpeg",
  logo: "/RdLogo.png",
  bio: {
    hero: "I build digital products that live at the intersection of clean code and bold design. Passionate about creating mobile and web apps that users actually love.",
    about: [
      "I'm a software engineer with a passion for turning complex problems into elegant digital solutions. With experience across the full stack, I specialize in building mobile and web applications that are both functional and beautifully crafted.",
      "When I'm not coding, I'm exploring new technologies, contributing to open source, and continuously leveling up my craft. I believe great software lives at the intersection of technical excellence and user empathy.",
    ],
  },
};

/* ── Social Links ─────────────────────────────────── */

export const socials = {
  github: "https://github.com/Marshyy69",
  linkedin: "https://www.linkedin.com/in/rian-dana-a85502261/",
  email: "rianbanana2002@gmail.com",
};

/* ── Stats ────────────────────────────────────────── */

export const stats = [
  { number: "Fresh", label: "GRADUATE" },
  { number: "3", label: "PROJECTS" },
  { number: "7", label: "CERTS" },
];

/* ── Skills ───────────────────────────────────────── */

export const skills = [
  "React",
  "Flutter",
  "Node.js",
  "MongoDB",
  "Firebase",
  "Supabase",
  "C#",
  "Tailwind CSS",
];

/* ── Projects ─────────────────────────────────────── */

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export interface Project {
  number: string;
  type: string;
  name: string;
  nameHighlight: string;
  status: "Live" | "In Progress" | "Archived";
  description: string;
  features: string[];
  techStack: string[];
  screenshots: ProjectScreenshot[];
  links: {
    github?: string;
    demo?: string;
  };
}

export const projects: Project[] = [
  {
    number: "01",
    type: "Mobile App",
    name: "MOCHI",
    nameHighlight: "ROAM",
    status: "Live",
    description:
      "A travel companion app designed for modern explorers. MochiRoam helps you discover hidden gems, plan multi-stop adventures, and capture your journey in real-time — built with offline-first architecture and seamless map integration.",
    features: [
      "Conversational AI travel assistant that generates personalized day-by-day itineraries",
      "Smart dietary filters including a strict Halal mode for Muslim-friendly travel",
      "Real-time restaurant and activity recommendations integrated with Google Maps data",
      "Community explore feed to rate, save, and share trip memories with other travelers",
      "Customizable trip preferences based on budget, vibe, accommodation, and group size",
    ],
    techStack: ["Flutter", "Node.js", "Google Gemini API", "Supabase"],
    screenshots: [
      { src: "/projects/mochiroam/homePage1.jpg", alt: "Home — Popular Destinations" },
      { src: "/projects/mochiroam/chatPage2.jpg", alt: "AI Chat — Trip Planning" },
      { src: "/projects/mochiroam/itineraryList3.jpg", alt: "My Journeys — Trip List" },
      { src: "/projects/mochiroam/itineraryPage4.jpg", alt: "Itinerary — Day-by-Day Plan" },
      { src: "/projects/mochiroam/postPage5.jpg", alt: "Create Memory — Trip Review" },
      { src: "/projects/mochiroam/explorePage6.jpg", alt: "Explore — Community Feed" },
      { src: "/projects/mochiroam/settingPage7.jpg", alt: "Account — Settings & Preferences" },
    ],
    links: {
      github: "https://github.com/Marshyy69/mochiroam_ai",
    },
  },
];

/* ── Certificates ─────────────────────────────────── */

export interface Certificate {
  year: string;
  issuer: string;
  name: string;
  color: string;
  link: string;
  file: string;
}

export const certificates: Certificate[] = [
  {
    year: "2025",
    issuer: "Google",
    name: "Foundations of Project Management",
    color: "#4285F4",
    link: "https://coursera.org/verify/I08ELI06EJG7",
    file: "/certs/Rian Dana certificates 1-3_page-0001.jpg",
  },
  {
    year: "2025",
    issuer: "Google",
    name: "Project Initiation: Starting a Successful Project",
    color: "#EA4335",
    link: "https://coursera.org/verify/GC4UU07STVGK",
    file: "/certs/Rian Dana certificates 1-3_page-0002.jpg",
  },
  {
    year: "2025",
    issuer: "Google",
    name: "Project Planning: Putting It All Together",
    color: "#FBBC05",
    link: "https://coursera.org/verify/V2MMFBMB7IX6",
    file: "/certs/Rian Dana certificates 1-3_page-0003.jpg",
  },
  {
    year: "2025",
    issuer: "Google",
    name: "Project Execution: Running the Project",
    color: "#34A853",
    link: "https://coursera.org/verify/HN9WBAFJXG6C",
    file: "/certs/Course 4 - Running the project_page-0001.jpg",
  },
  {
    year: "2025",
    issuer: "Google",
    name: "Agile Project Management",
    color: "#4285F4",
    link: "https://coursera.org/verify/S4CVLV3MO0XJ",
    file: "/certs/Course 5 - Agile Project Management_page-0001.jpg",
  },
  {
    year: "2025",
    issuer: "Google",
    name: "Capstone: Applying Project Management in the Real World",
    color: "#EA4335",
    link: "https://coursera.org/verify/JCD8V5XTVZQ2",
    file: "/certs/Course 6 - Applying project managemnet in the real world_page-0001.jpg",
  },
  {
    year: "2025",
    issuer: "Google",
    name: "Accelerate Your Job Search with AI",
    color: "#FBBC05",
    link: "https://coursera.org/verify/0FIHEVTI9PN0",
    file: "/certs/Course 7 - Accelerate your job search with AI_page-0001.jpg",
  },
];

/* ── Navigation ───────────────────────────────────── */

export const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#certificates", label: "CERTIFICATES" },
  { href: "#contact", label: "CONTACT" },
];
