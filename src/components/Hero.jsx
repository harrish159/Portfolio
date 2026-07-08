import React from "react";
import { motion } from "framer-motion";

/* ───────────────────────────── helpers ───────────────────────────── */
const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);
const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const EmailIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

/* ─────────────────────── VS Code Editor Panel ────────────────────── */
const codeLines = [
  { tokens: [{ c: "#6B7280", t: "// harrish.js — Full-Stack Engineer" }] },
  { tokens: [] },
  {
    tokens: [
      { c: "#C084FC", t: "import" },
      { c: "#ffffff", t: " React " },
      { c: "#C084FC", t: "from" },
      { c: "#A3E635", t: " 'react'" },
      { c: "#6B7280", t: ";" },
    ],
  },
  {
    tokens: [
      { c: "#C084FC", t: "import" },
      { c: "#ffffff", t: " express " },
      { c: "#C084FC", t: "from" },
      { c: "#A3E635", t: " 'express'" },
      { c: "#6B7280", t: ";" },
    ],
  },
  { tokens: [] },
  {
    tokens: [
      { c: "#6B7280", t: "const " },
      { c: "#60A5FA", t: "developer" },
      { c: "#ffffff", t: " = {" },
    ],
  },
  {
    tokens: [
      { c: "#ffffff", t: "  name: " },
      { c: "#A3E635", t: '"Harrish J"' },
      { c: "#6B7280", t: "," },
    ],
  },
  {
    tokens: [
      { c: "#ffffff", t: "  role: " },
      { c: "#A3E635", t: '"Full-Stack Engineer"' },
      { c: "#6B7280", t: "," },
    ],
  },
  {
    tokens: [
      { c: "#ffffff", t: "  stack: [" },
      { c: "#A3E635", t: '"React"' },
      { c: "#6B7280", t: ", " },
      { c: "#A3E635", t: '"Node"' },
      { c: "#6B7280", t: ", " },
      { c: "#A3E635", t: '"MySQL"' },
      { c: "#6B7280", t: "]," },
    ],
  },
  {
    tokens: [
      { c: "#ffffff", t: "  cgpa: " },
      { c: "#FB923C", t: "8.43" },
      { c: "#6B7280", t: "," },
    ],
  },
  {
    tokens: [
      { c: "#ffffff", t: "  available: " },
      { c: "#84CC16", t: "true" },
    ],
  },
  { tokens: [{ c: "#ffffff", t: "};" }] },
  { tokens: [] },
  {
    tokens: [
      { c: "#C084FC", t: "export default" },
      { c: "#ffffff", t: " developer" },
      { c: "#6B7280", t: ";" },
    ],
  },
];

const VSCodePanel = () => (
  <div className="rounded-xl bg-[#0D1117] border border-white/[0.07] shadow-2xl overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3 bg-[#161B22] border-b border-white/[0.07]">
      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
      <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      <span className="ml-4 text-[10px] text-[#6B7280] font-mono">
        harrish.js — portfolio
      </span>
    </div>
    <div className="px-4 py-4 font-mono text-[11px] leading-[1.8] select-none">
      {codeLines.map((line, i) => (
        <div key={i} className="flex items-start gap-4">
          <span className="text-[#3D4450] w-4 shrink-0 text-right">
            {i + 1}
          </span>
          <span>
            {line.tokens.map((tok, j) => (
              <span key={j} style={{ color: tok.c }}>
                {tok.t}
              </span>
            ))}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ───────────────── Terminal — now prints the stack itself ────────── */
const TerminalWidget = () => (
  <div className="rounded-xl bg-[#0A0A0A] border border-white/[0.08] overflow-hidden w-[280px]">
    <div className="flex items-center gap-2 px-3 py-2 bg-[#141414] border-b border-white/[0.06]">
      <span className="w-2 h-2 rounded-full bg-white/10" />
      <span className="text-[10px] text-[#6B7280] font-mono">zsh</span>
    </div>
    <div className="px-3 py-3 font-mono text-[10px] leading-[1.75] space-y-0.5">
      <p>
        <span className="text-[#84CC16]">$</span>
        <span className="text-[#A1A1AA]"> cat stack.txt</span>
      </p>
      <p className="text-[#60A5FA]"> React · Node · Express</p>
      <p className="text-[#60A5FA]"> MySQL · Tailwind · Docker</p>
      <p className="mt-1">
        <span className="text-[#84CC16]">$</span>
        <span className="text-[#A1A1AA]"> status --check</span>
      </p>
      <p className="text-[#84CC16]"> ✓ open to opportunities</p>
    </div>
  </div>
);

/* ───────────────────── Sticky "available" note ────────────────────── */
const StatusNote = () => (
  <div className="rounded-full bg-[#84CC16] text-black text-[11px] font-bold font-mono px-4 py-2 shadow-[0_8px_24px_rgba(132,204,22,0.35)] flex items-center gap-1.5 whitespace-nowrap">
    <span className="w-1.5 h-1.5 rounded-full bg-black/70 animate-pulse" />
    available for hire
  </div>
);

/* ─────────────────── Right side: layered workspace ─────────────────
   Signature element: an "overlapping desktop windows" collage — the
   editor anchors it, the terminal is pinned beneath at an offset with
   a slight rotation, and a sticky status note perches on the top
   corner, the way real windows sit on a real desktop. */
const WorkspaceComposition = () => (
  <div className="relative w-full">
    <div className="absolute -inset-6 rounded-3xl bg-[#84CC16]/8 blur-3xl pointer-events-none" />

    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative z-10"
    >
      <VSCodePanel />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: 3 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="relative z-20 -mt-10 ml-auto mr-[-8px] shadow-2xl"
      style={{ width: "fit-content" }}
    >
      <TerminalWidget />
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
      animate={{ opacity: 1, scale: 1, rotate: 8 }}
      transition={{
        duration: 0.5,
        delay: 0.65,
        type: "spring",
        stiffness: 200,
      }}
      className="absolute -top-4 -right-3 z-30"
    >
      <StatusNote />
    </motion.div>
  </div>
);

/* ─────────────────────── Stat Card ──────────────────────────────── */
const StatCard = ({ value, label, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex flex-col items-center justify-center p-4 rounded-[16px] bg-[#111111] border border-white/[0.07] hover:border-[#84CC16]/30 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(132,204,22,0.07)] transition-all duration-300 text-center"
  >
    <span className="font-poppins text-2xl font-bold text-white">{value}</span>
    <span className="text-[#A1A1AA] text-[10px] uppercase tracking-widest mt-1">
      {label}
    </span>
  </motion.div>
);

/* ═══════════════════════════ HERO ════════════════════════════════════ */
const Hero = () => {
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-center">
          {/* ── LEFT: Name + content ── */}
          <div className="flex flex-col gap-6">
            <motion.div
              {...fadeUp(0.1)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.08] bg-[#111111] text-[#A1A1AA] text-xs w-fit"
            >
              <span>👋</span>
              <span className="font-medium">Hello, I'm</span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.2)}
              className="font-poppins text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold leading-none tracking-tight text-white"
            >
              HARRISH
              <br />
              <span className="text-[#84CC16]">J</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="font-poppins text-lg md:text-xl font-semibold text-[#A1A1AA]"
            >
              Full-Stack Engineer
            </motion.p>

            <motion.p
              {...fadeUp(0.35)}
              className="text-[#A1A1AA] text-sm md:text-base leading-relaxed max-w-md"
            >
              I build scalable, high-performance web applications with React,
              Node.js, Express, and MySQL — focused on clean architecture and
              exceptional user experiences.
            </motion.p>

            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm text-black bg-[#84CC16] hover:bg-[#A3E635] hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(132,204,22,0.35)] transition-all duration-300"
              >
                View Projects
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1PGRj_snV-sFHyvhWjTMJnrBSYl7r0pRh/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white border border-white/10 bg-white/5 hover:border-[#84CC16]/50 hover:text-[#84CC16] hover:-translate-y-1 transition-all duration-300"
              >
                Download Resume
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.45)} className="flex items-center gap-3">
              {[
                {
                  Icon: GithubIcon,
                  href: "https://github.com/harrish159",
                  label: "GitHub",
                },
                {
                  Icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/harrish-j-74547a292/",
                  label: "LinkedIn",
                },
                {
                  Icon: EmailIcon,
                  href: "mailto:jkhr2005@gmail.com",
                  label: "Email",
                },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-full border border-white/[0.08] bg-[#111111] text-[#A1A1AA] hover:text-[#84CC16] hover:border-[#84CC16]/40 hover:shadow-[0_0_14px_rgba(132,204,22,0.15)] group transition-all duration-300"
                >
                  <Icon className="w-4 h-4 group-hover:rotate-[8deg] transition-transform duration-300" />
                </a>
              ))}
            </motion.div>

            <div className="grid grid-cols-4 gap-3 mt-2">
              <StatCard value="8.43" label="CGPA" delay={0.5} />
              <StatCard value="3+" label="Projects" delay={0.55} />
              <StatCard value="2027" label="Grad Year" delay={0.6} />
              <StatCard value="React" label="Tech Stack" delay={0.65} />
            </div>
          </div>

          {/* ── RIGHT: layered workspace composition ── */}
          <div className="pt-6 lg:pt-0">
            <WorkspaceComposition />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
