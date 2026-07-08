import React from "react";
import { motion } from "framer-motion";
import { MapPin, GraduationCap, Zap, Heart } from "lucide-react";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
});

const quickInfo = [
  { icon: MapPin, label: "Location", value: "Salem, Tamil Nadu, India" },
  {
    icon: GraduationCap,
    label: "Degree",
    value: "B.Tech — Information Technology",
  },
  { icon: Zap, label: "Status", value: "Open to Work · Fresher" },
  { icon: Heart, label: "Interests", value: "Full-Stack Dev, OSS, Clean Code" },
];

const skills = [
  ["React & Frontend", 90],
  ["Node.js & APIs", 82],
  ["Database Design", 78],
];

const About = () => (
  <section id="about" className="py-16 md:py-28 px-6 bg-[#111111]">
    <div className="max-w-[1200px] mx-auto">
      <motion.div {...fadeUp(0)} className="mb-16">
        <p className="text-[#84CC16] text-xs font-semibold uppercase tracking-widest mb-3">
          About Me
        </p>
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white leading-tight">
          The Engineer
          <br />
          Behind the Code
        </h2>
      </motion.div>

      {/* both columns stretch to the same height; only the card is centered
          within its column, so the bio column stays naturally top-anchored
          instead of leaving dead space above/below it */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
        {/* ── LEFT — Profile card, vertically centered in its column ── */}
        <div className="flex flex-col justify-center">
          <motion.div
            {...fadeUp(1)}
            className="relative max-w-[420px] mx-auto w-full"
          >
            <div className="absolute -inset-3 rounded-3xl bg-[#84CC16]/6 blur-2xl pointer-events-none" />

            <div className="relative rounded-2xl bg-[#0D1117] border border-white/[0.07] overflow-hidden p-6 shadow-2xl">
              {/* Profile block */}
              <div className="flex items-center gap-4 mb-6 pb-5 border-b border-white/[0.06]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#84CC16]/30 to-[#111111] border border-[#84CC16]/30 flex items-center justify-center shrink-0">
                  <span className="font-poppins font-bold text-[#84CC16] text-lg">
                    HJ
                  </span>
                </div>
                <div>
                  <p className="font-poppins font-semibold text-white text-base">
                    Harrish J
                  </p>
                  <p className="text-[#84CC16] text-xs mt-0.5">
                    Full-Stack Engineer
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  ["8.43", "CGPA"],
                  ["3+", "Projects"],
                  ["2027", "Grad"],
                ].map(([v, l]) => (
                  <div
                    key={l}
                    className="text-center p-3 rounded-xl bg-[#111111] border border-white/[0.06]"
                  >
                    <p className="font-poppins font-bold text-[#84CC16] text-lg">
                      {v}
                    </p>
                    <p className="text-[#A1A1AA] text-[9px] uppercase tracking-wider mt-0.5">
                      {l}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skill bars */}
              <div className="flex flex-col gap-3">
                {skills.map(([label, pct], i) => (
                  <div key={label}>
                    <div className="flex justify-between text-[10px] mb-1.5">
                      <span className="text-[#A1A1AA]">{label}</span>
                      <span className="text-[#84CC16] font-mono">{pct}%</span>
                    </div>
                    <div className="h-1 w-full rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + i * 0.12,
                          ease: "easeOut",
                        }}
                        className="h-1 rounded-full bg-[#84CC16]/70"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky status pill — echoes the hero's workspace note for continuity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: 0.55,
                type: "spring",
                stiffness: 200,
              }}
              className="absolute -top-3 -right-3 z-10"
            >
              <div className="rounded-full bg-[#84CC16] text-black text-[10px] font-bold font-mono px-3.5 py-1.5 shadow-[0_8px_24px_rgba(132,204,22,0.35)] flex items-center gap-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-black/70 animate-pulse" />
                open to work
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── RIGHT — Bio ── */}
        <div className="flex flex-col gap-7 justify-center">
          <motion.div {...fadeUp(1)}>
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed mb-4">
              I'm <span className="text-white font-semibold">Harrish J</span>, a
              passionate Full-Stack Developer from Salem, Tamil Nadu,
              specialising in building performant, scalable web applications.
              I'm completing my B.Tech in Information Technology at Bannari
              Amman Institute of Technology (Class of 2027, CGPA: 8.43).
            </p>
            <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed">
              My engineering philosophy is centred around{" "}
              <span className="text-white font-semibold">
                clean architecture, readable code, and purposeful design
              </span>
              . I believe great software should feel invisible — intuitive,
              fast, and reliable. I continuously explore new paradigms and tools
              to build systems that genuinely matter.
            </p>
          </motion.div>

          {/* Quick Info Grid */}
          <motion.div
            {...fadeUp(2)}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {quickInfo.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 p-4 rounded-[14px] bg-[#161616] border border-white/[0.07] hover:border-[#84CC16]/30 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-[#84CC16]/10 shrink-0">
                  <Icon
                    size={14}
                    className="text-[#84CC16] group-hover:rotate-[8deg] transition-transform duration-300"
                  />
                </div>
                <div>
                  <p className="text-[#A1A1AA] text-[9px] uppercase tracking-wider mb-0.5">
                    {label}
                  </p>
                  <p className="text-white text-xs font-medium leading-snug">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
