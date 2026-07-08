import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CalendarDays, Star, Building2 } from 'lucide-react';

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
});

const Education = () => (
  <section id="education" className="py-28 px-6 bg-[#090909]">
    <div className="max-w-[1200px] mx-auto">
      <motion.div {...fadeUp(0)} className="mb-16">
        <p className="text-[#84CC16] text-xs font-semibold uppercase tracking-widest mb-3">Background</p>
        <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Education</h2>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-8 md:pl-12">
        {/* Vertical Line */}
        <div className="absolute left-3 md:left-5 top-0 bottom-0 w-px bg-gradient-to-b from-[#84CC16]/40 via-white/[0.06] to-transparent" />

        <motion.div {...fadeUp(1)} className="relative">
          {/* Dot */}
          <div className="absolute -left-8 md:-left-12 top-6 w-4 h-4 rounded-full bg-[#84CC16] border-4 border-[#090909] shadow-[0_0_10px_rgba(132,204,22,0.4)]" />

          {/* Card */}
          <div className="p-6 md:p-8 rounded-[18px] bg-[#111111] border border-white/[0.07] hover:border-[#84CC16]/25 transition-all duration-300">
            {/* Top Row */}
            <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
              <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-[#84CC16]/10 text-[#84CC16] border border-[#84CC16]/20 uppercase tracking-wider">
                Currently Enrolled
              </span>
              <div className="flex items-center gap-2 text-[#A1A1AA] text-xs font-mono">
                <CalendarDays size={13} />
                <span>2023 — 2027</span>
              </div>
            </div>

            {/* Degree */}
            <div className="flex items-start gap-3 mb-4">
              <div className="mt-0.5 p-2 rounded-lg bg-[#84CC16]/10 shrink-0">
                <GraduationCap size={18} className="text-[#84CC16]" />
              </div>
              <div>
                <h3 className="font-poppins font-bold text-white text-lg md:text-xl leading-tight">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-[#84CC16] font-medium text-sm mt-0.5">Information Technology</p>
              </div>
            </div>

            {/* Institution */}
            <div className="flex items-center gap-2 text-[#A1A1AA] text-sm mb-6">
              <Building2 size={14} />
              <span>Bannari Amman Institute of Technology</span>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-white/[0.06]">
              <div className="text-center p-3 rounded-xl bg-[#0A0A0A] border border-white/[0.05]">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <Star size={11} className="text-[#84CC16]" />
                  <span className="font-poppins font-bold text-white text-xl">8.43</span>
                </div>
                <p className="text-[#A1A1AA] text-[9px] uppercase tracking-wider">CGPA</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#0A0A0A] border border-white/[0.05]">
                <span className="font-poppins font-bold text-white text-xl block mb-1">2027</span>
                <p className="text-[#A1A1AA] text-[9px] uppercase tracking-wider">Graduation</p>
              </div>
              <div className="text-center p-3 rounded-xl bg-[#0A0A0A] border border-white/[0.05]">
                <span className="font-poppins font-bold text-white text-xl block mb-1">4 yr</span>
                <p className="text-[#A1A1AA] text-[9px] uppercase tracking-wider">Duration</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Education;
