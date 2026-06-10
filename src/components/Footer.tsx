import React from 'react';
import { Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-heading font-bold text-white text-sm">
          <Terminal className="w-4 h-4 text-[#00D4FF]" />
          <span>PRATHEEK MADUPU</span>
        </div>
        
        <p className="text-xs text-[#86868B] font-mono">
          © {currentYear} Pratheek Madupu. All rights reserved. Built with React + R3F + Tailwind CSS.
        </p>

        <div className="flex items-center gap-6 text-xs text-[#86868B] font-accent">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
