import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About', target: 'about' },
    { label: 'Skills', target: 'skills' },
    { label: 'Projects', target: 'projects' },
    { label: 'Education', target: 'education' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 border-b transition-all duration-500 ${
        isScrolled
          ? 'bg-[#090909]/80 backdrop-blur-xl border-white/[0.06] py-4'
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex justify-between items-center">
        {/* Brand */}
        <a href="#home" className="font-poppins font-bold text-xl tracking-tight text-white hover:text-[#84CC16] transition-colors duration-300">
          HJ<span className="text-[#84CC16]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              className={`relative text-sm font-medium transition-colors duration-300 group ${
                activeSection === item.target ? 'text-[#84CC16]' : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-0.5 left-0 h-px bg-[#84CC16] transition-all duration-300 ${activeSection === item.target ? 'w-full' : 'w-0 group-hover:w-full'}`} />
            </a>
          ))}
        </div>

        {/* Resume CTA */}
        <a
          href="https://drive.google.com/file/d/1PGRj_snV-sFHyvhWjTMJnrBSYl7r0pRh/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5 text-white hover:bg-[#84CC16] hover:text-black hover:border-[#84CC16] hover:shadow-[0_0_20px_rgba(132,204,22,0.25)] transition-all duration-300"
        >
          Resume
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[3px]' : ''}`} />
          <span className={`w-5 h-px bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/[0.06] px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.target}
              href={`#${item.target}`}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium transition-colors ${activeSection === item.target ? 'text-[#84CC16]' : 'text-[#A1A1AA]'}`}
            >
              {item.label}
            </a>
          ))}
          <a href="https://drive.google.com/file/d/1PGRj_snV-sFHyvhWjTMJnrBSYl7r0pRh/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="mt-2 px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-wider border border-white/10 bg-white/5 text-white text-center hover:bg-[#84CC16] hover:text-black transition-all duration-300">
            Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
