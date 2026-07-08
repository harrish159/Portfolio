import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border-dark bg-bg-main">
      <div className="max-w-[1200px] mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-text-sec text-sm text-center md:text-left">
          © 2027 <span className="text-white font-semibold">HARRISH J</span>. All rights reserved.
        </p>
        <p className="text-text-sec text-sm text-center md:text-left">
          Designed & Developed with{' '}
          <span className="text-accent-lime">♥</span>
          {' '}using{' '}
          <span className="text-white">React + Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
