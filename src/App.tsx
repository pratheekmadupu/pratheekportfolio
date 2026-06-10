import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { TechUniverse } from './sections/TechUniverse';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Github } from './sections/Github';
import { Startup } from './sections/Startup';
import { Achievements } from './sections/Achievements';
import { Testimonials } from './sections/Testimonials';
import { Contact } from './sections/Contact';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  // Apply light/dark mode changes to document.documentElement
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add('dark');
      htmlElement.style.backgroundColor = '#050505';
      htmlElement.style.color = '#F5F5F7';
      // Apply variables overrides
      htmlElement.style.setProperty('--bg-primary', '#050505');
      htmlElement.style.setProperty('--bg-secondary', '#0B0B0B');
      htmlElement.style.setProperty('--bg-tertiary', '#121214');
      htmlElement.style.setProperty('--card-bg', 'rgba(15, 15, 20, 0.6)');
      htmlElement.style.setProperty('--text-primary', '#F5F5F7');
      htmlElement.style.setProperty('--text-secondary', '#86868B');
    } else {
      htmlElement.classList.remove('dark');
      htmlElement.style.backgroundColor = '#FAFAFC';
      htmlElement.style.color = '#1D1D1F';
      // Apply variables overrides
      htmlElement.style.setProperty('--bg-primary', '#FAFAFC');
      htmlElement.style.setProperty('--bg-secondary', '#FFFFFF');
      htmlElement.style.setProperty('--bg-tertiary', '#F0F0F2');
      htmlElement.style.setProperty('--card-bg', 'rgba(245, 245, 247, 0.6)');
      htmlElement.style.setProperty('--text-primary', '#1D1D1F');
      htmlElement.style.setProperty('--text-secondary', '#515154');
    }
  }, [darkMode]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onFinished={() => setIsLoading(false)} />
      ) : (
        <div className={`min-h-screen transition-colors duration-500 bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[#7B61FF]/30 selection:text-white`}>
          {/* Custom Cursor */}
          <CustomCursor />

          {/* Scroll Progress Bar */}
          <ScrollProgress />

          {/* Sticky Navigation */}
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* Landing Sections */}
          <Hero />
          <About />
          <TechUniverse />
          <Experience />
          <Projects />
          <Github />
          <Startup />
          <Achievements />
          <Testimonials />
          <Contact />

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
};
export default App;
