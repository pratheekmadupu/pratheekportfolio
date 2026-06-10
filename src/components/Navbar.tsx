import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Terminal } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Startup', id: 'startup' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Track active section
      const scrollPosition = window.scrollY + 120;
      const sections = navItems.map(item => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-16 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/70 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('home');
          }}
          className="flex items-center gap-2 font-heading font-bold text-lg text-white"
        >
          <Terminal className="w-5 h-5 text-[#00D4FF]" />
          <span>PRATHEEK</span>
          <span className="text-white/40 font-normal text-sm">/ DEVELOPER</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 font-accent text-sm text-[#86868B]">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`transition-colors hover:text-white relative py-1 ${
                  activeSection === item.id ? 'text-white' : ''
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#00D4FF] to-[#7B61FF]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border border-white/5 bg-white/5 rounded-full text-white/70 hover:text-white transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="px-5 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFC6] text-black hover:shadow-[0_0_15px_rgba(123,97,255,0.4)] transition-all cursor-pointer font-accent"
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border border-white/5 bg-white/5 rounded-full text-white/70 hover:text-white cursor-pointer"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-white/70 hover:text-white cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed top-16 left-0 w-full h-[calc(100vh-64px)] bg-[#050505]/98 backdrop-blur-lg border-t border-white/5 flex flex-col px-6 py-10 gap-8 z-50">
          <ul className="flex flex-col gap-6 text-lg font-accent text-[#86868B]">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`block transition-colors hover:text-white ${
                    activeSection === item.id ? 'text-white' : ''
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="w-full py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFC6] text-black font-accent"
          >
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  );
};
