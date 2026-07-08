import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail } from 'lucide-react';

const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);
const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
  </svg>
);

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay: i * 0.1 },
});

const socialLinks = [
  { icon: GithubIcon, href: 'https://github.com/harrish159', label: 'GitHub' },
  { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/harrish-j-74547a292/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jkhr2005@gmail.com', label: 'Email' },
];

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [focused, setFocused] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      window.location.href = `mailto:jkhr2005@gmail.com?subject=Portfolio message from ${form.name}&body=${form.message}%0A%0AReply to: ${form.email}`;
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    }, 800);
  };

  return (
    <section id="contact" className="py-28 px-6 bg-[#111111]">
      <div className="max-w-[1200px] mx-auto">
        <motion.div {...fadeUp(0)} className="mb-16">
          <p className="text-[#84CC16] text-xs font-semibold uppercase tracking-widest mb-3">Connect</p>
          <h2 className="font-poppins text-4xl md:text-5xl font-bold text-white">Get in Touch</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Info Panel */}
          <motion.div
            {...fadeUp(1)}
            className="lg:col-span-2 relative overflow-hidden flex flex-col justify-between p-6 md:p-8 rounded-[18px] bg-[#161616]/80 backdrop-blur-sm border border-white/[0.07]"
          >
            {/* Subtle glass glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#84CC16]/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <h3 className="font-poppins font-bold text-white text-xl mb-3">Open for Opportunities</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-6">
                Currently seeking full-stack developer roles, internships, and collaborative projects. I respond within 24 hours.
              </p>
              <div className="mb-8">
                <p className="text-white/40 text-[10px] uppercase tracking-wider mb-2">Direct email</p>
                <a href="mailto:jkhr2005@gmail.com" className="text-[#84CC16] text-sm hover:underline transition-all">
                  jkhr2005@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="relative z-10 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 rounded-[12px] border border-white/[0.07] bg-[#111111] text-[#A1A1AA] hover:text-[#84CC16] hover:border-[#84CC16]/40 hover:shadow-[0_0_14px_rgba(132,204,22,0.12)] group transition-all duration-300"
                >
                  <Icon className="w-4 h-4 group-hover:rotate-[8deg] transition-transform duration-300" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form - Glass Card */}
          <motion.div
            {...fadeUp(2)}
            className="lg:col-span-3 relative overflow-hidden p-6 md:p-8 rounded-[18px] bg-[#161616]/80 backdrop-blur-sm border border-white/[0.07]"
          >
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#84CC16]/5 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A1A1AA] text-[10px] uppercase tracking-wider mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your Name"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all duration-300 ${
                      focused === 'name' ? 'border-[#84CC16]/50 shadow-[0_0_12px_rgba(132,204,22,0.1)]' : 'border-white/[0.07]'
                    }`}
                  />
                </div>
                <div>
                  <label className="block text-[#A1A1AA] text-[10px] uppercase tracking-wider mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all duration-300 ${
                      focused === 'email' ? 'border-[#84CC16]/50 shadow-[0_0_12px_rgba(132,204,22,0.1)]' : 'border-white/[0.07]'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#A1A1AA] text-[10px] uppercase tracking-wider mb-2">Message</label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-[#0A0A0A] border text-white text-sm placeholder:text-white/20 focus:outline-none transition-all duration-300 resize-none ${
                    focused === 'message' ? 'border-[#84CC16]/50 shadow-[0_0_12px_rgba(132,204,22,0.1)]' : 'border-white/[0.07]'
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#84CC16] text-black font-semibold text-sm w-full
                  hover:bg-[#A3E635] hover:-translate-y-0.5 hover:shadow-[0_0_24px_rgba(132,204,22,0.35)]
                  active:scale-[0.97] transition-all duration-300 disabled:opacity-60"
              >
                <Send size={15} />
                {status === 'idle' && 'Send Message'}
                {status === 'loading' && 'Sending...'}
                {status === 'sent' && 'Message Sent ✓'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
