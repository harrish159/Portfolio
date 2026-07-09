import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch, ShieldAlert } from 'lucide-react';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
});

const projects = [
  {
    id: "01",
    title: "Lab Slot Management",
    description:
      "A web-based laboratory booking system enabling faculty to create sessions and students to reserve slots in real-time. Features role-based access control and booking validation.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "Material UI"],
    demo: "https://laboratory-management-mauve.vercel.app/",
    code: "https://github.com/MohithIT203/Laboratory-Management.git",
    badge: "Full-Stack",
    accent: "#60A5FA",
  },
  {
    id: "02",
    title: "Faculty Skill Gap Analysis",
    description:
      "Analytics platform assessing faculty competencies and identifying skill gaps. Delivers interactive dashboards and data-driven training recommendations.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "Tailwind CSS",
      "Chart.js",
    ],
    demo: "https://skill-gap-analysis-harrishj.vercel.app/",
    code: "https://github.com/harrish159/Skill_gap_analysis.git",
    badge: "Full-Stack",
    accent: "#84CC16",
  },
  {
    id: "03",
    title: "Internship Recommendation System",
    description:
      "A smart platform that recommends the most suitable internships to students by analyzing their skills, qualifications, and preferences. It helps students discover the right opportunities quickly and efficiently.",
    tech: ["React.js", "Node.js", "Express.js", "MySQL", "CSS", "REST API"],
    demo: null,
    code: "https://github.com/MohithIT203/sih-internship.git",
    badge: "Full-Stack",
    accent: "#C084FC",
  },
];

const Projects = () => (
  <section id="projects" className="py-16 md:py-28 px-6 bg-[#111111]">
    <div className="max-w-[1200px] mx-auto">
      <motion.div {...fadeUp(0)} className="mb-16">
        <p className="text-[#84CC16] text-xs font-semibold uppercase tracking-widest mb-3">Work</p>
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Featured Projects</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            {...fadeUp(idx * 0.5)}
            className="group relative flex flex-col rounded-[18px] bg-[#161616] border border-white/[0.07] overflow-hidden
              hover:-translate-y-[6px] hover:border-[#84CC16]/40
              hover:shadow-[0_0_40px_rgba(132,204,22,0.08)]
              transition-all duration-400"
            style={{ '--accent': project.accent }}
          >
            {/* Animated border glow on hover */}
            <div className="absolute inset-0 rounded-[18px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: `inset 0 0 0 1px ${project.accent}30` }} />

            {/* Project Image Placeholder with ID overlay */}
            <div className="relative h-44 bg-[#0D1117] overflow-hidden border-b border-white/[0.05]">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 flex items-end px-5 pb-4">
                <span className="font-poppins text-[80px] font-black leading-none select-none"
                  style={{ color: project.accent, opacity: 0.07 }}>
                  {project.id}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#84CC16]/0 group-hover:bg-[#84CC16]/[0.03] transition-colors duration-500" />
              {/* Badge */}
              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold bg-[#161616] border border-white/[0.08] text-[#A1A1AA] uppercase tracking-wider">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-4">
              <div>
                <h3 className="font-poppins font-bold text-white text-base mb-2 group-hover:text-[#84CC16] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{project.description}</p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md text-[10px] bg-[#111111] text-[#A1A1AA] border border-white/[0.06]">
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Row */}
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/[0.06]">
                {project.demo ? (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#84CC16] hover:underline"
                  >
                    <ExternalLink size={12} /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-xs text-white/20 cursor-not-allowed">
                    <ShieldAlert size={12} /> No Demo
                  </span>
                )}
                <a href={project.code} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors"
                >
                  <GitBranch size={12} /> Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
