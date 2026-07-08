import React from "react";
import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.08 },
});

/* Card categories — deliberately ordered so the bento spans below read
   large / small / small / large, a stack-shaped rhythm rather than a
   uniform grid. Languages is pulled out below since it's a different
   kind of category (what you speak, not what you build with). */
const skillCategories = [
  {
    title: "Frontend",
    color: "#60A5FA",
    span: "lg:col-span-2",
    skills: [
      "React.js",
      "Redux",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend",
    color: "#84CC16",
    span: "lg:col-span-1",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    color: "#FB923C",
    span: "lg:col-span-1",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Tools",
    color: "#C084FC",
    span: "lg:col-span-2",
    skills: ["Git", "GitHub", "Docker", "Postman", "VS Code", "npm", "Vercel"],
  },
];

const languages = ["JavaScript", "SQL", "Python", "HTML", "CSS"];

const Skills = () => (
  <section id="skills" className="py-28 px-6 bg-[#090909]">
    <div className="max-w-[1200px] mx-auto">
      <motion.div {...fadeUp(0)} className="mb-16">
        <p className="text-[#84CC16] text-xs font-semibold uppercase tracking-widest mb-3">
          Expertise
        </p>
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">
          Technical Skills
        </h2>
      </motion.div>

      {/* Bento grid — card width scales with category size, so "Frontend"
          and "Tools" (the two deepest areas) visually claim more room
          than "Database" without anyone having to say so in words. */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {skillCategories.map((cat, catIdx) => (
          <motion.div
            key={cat.title}
            {...fadeUp(catIdx)}
            style={{ "--accent": cat.color }}
            className={`relative p-6 rounded-[18px] bg-[#111111] border border-white/[0.07] overflow-hidden
              hover:border-[var(--accent)]/40 hover:-translate-y-1 hover:shadow-[0_0_30px_-8px_var(--accent)]
              transition-all duration-300 group ${cat.span}`}
          >
            {/* Gradient accent line, tinted to the category's own color */}
            <div
              className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: `linear-gradient(90deg, transparent, ${cat.color}80, transparent)`,
              }}
            />

            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="font-poppins font-semibold text-white text-sm">
                  {cat.title}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[#6B7280]">
                {cat.skills.length}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-[#161616] text-[#A1A1AA] border border-white/[0.06]
                    hover:bg-[var(--accent)] hover:text-black hover:border-[var(--accent)] hover:-translate-y-0.5 hover:scale-[1.03]
                    transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Languages — a quieter, comment-style strip instead of another
          card, since "what I write in" is a different claim than "what
          I build with" and doesn't need equal visual weight. */}
      <motion.div
        {...fadeUp(skillCategories.length)}
        className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 px-6 py-5 rounded-[18px] bg-[#111111]/60 border border-white/[0.05] font-mono text-xs"
      >
        <span className="text-[#6B7280]">// fluent in</span>
        {languages.map((lang, i) => (
          <React.Fragment key={lang}>
            <span className="text-[#38BDF8]">{lang}</span>
            {i < languages.length - 1 && (
              <span className="text-[#3D4450]">·</span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
