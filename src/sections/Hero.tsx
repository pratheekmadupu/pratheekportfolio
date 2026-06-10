import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send, Sparkles } from 'lucide-react';
import ThreeGlobe from '../components/ThreeGlobe';

export const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    'Full Stack Developer',
    'Cybersecurity Enthusiast',
    'Startup Builder',
    'React & Node Specialist',
  ];

  // Mouse move glow effect
  const heroRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setGlowPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Typing effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIdx];
    let timer: number;

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx - 1));
        setCharIdx(prev => prev - 1);
      }, 50);
    } else {
      timer = window.setTimeout(() => {
        setTypedText(currentPhrase.substring(0, charIdx + 1));
        setCharIdx(prev => prev + 1);
      }, 100);
    }

    // Deleting conditions
    if (!isDeleting && charIdx === currentPhrase.length) {
      timer = window.setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIdx === 0) {
      setIsDeleting(false);
      setPhraseIdx(prev => (prev + 1) % phrases.length);
    }

    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  const stats = [
    { label: 'Projects Built', value: '10+' },
    { label: 'GitHub Repos', value: '25+' },
    { label: 'Certifications', value: '5' },
    { label: 'Startup Ventures', value: '2' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center pt-20 overflow-hidden bg-[#050505]"
    >
      {/* Ambient Mouse Glow Backdrop */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-10 bg-radial from-[#7B61FF] via-[#00D4FF] to-transparent pointer-events-none transition-all duration-300 blur-[80px]"
        style={{
          left: `${glowPos.x}px`,
          top: `${glowPos.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Background Gradients */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-[#7B61FF] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[#00D4FF] opacity-5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column Content */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00D4FF] font-semibold w-fit mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full Stack Developer | Cybersecurity Enthusiast | Startup Builder</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading leading-tight tracking-tight text-white mb-6"
          >
            Pratheek Madupu <br />
            <span className="text-gradient">Building Secure Products</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#86868B] text-lg sm:text-xl font-body max-w-xl mb-4"
          >
            Based in Hyderabad, India • Crafting full-stack web solutions, securing application layers, and launching impactful startups.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="h-10 text-xl font-accent font-semibold text-white/90 flex items-center gap-2 mb-8"
          >
            <span>I am a</span>
            <span className="text-[#7B61FF] font-bold underline decoration-[#00FFC6]">{typedText}</span>
            <span className="w-[2px] h-6 bg-white animate-pulse" />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black font-semibold font-accent text-sm flex items-center gap-2 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] transition-all cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="px-6 py-3.5 rounded-full border border-white/10 bg-white/5 text-white font-semibold font-accent text-sm flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#00FFC6]" />
              <span>Contact Me</span>
            </a>

            <button
              onClick={() => window.open('https://github.com/pratheekmadupu', '_blank')}
              className="px-6 py-3.5 rounded-full border border-white/5 text-white/80 hover:text-white font-semibold font-accent text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#00D4FF]" />
              <span>Visit GitHub Profile</span>
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/5"
          >
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold font-heading text-white flex items-center">
                  {stat.value}
                </span>
                <span className="text-xs text-[#86868B] font-accent uppercase tracking-wider mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column Canvas Globe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 h-[400px] lg:h-[500px] w-full flex items-center justify-center relative"
        >
          {/* Globe Wrapper */}
          <div className="w-full h-full max-w-[420px] max-h-[420px]">
            <ThreeGlobe />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
