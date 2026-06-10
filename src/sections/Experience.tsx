import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Smartphone, Calendar, MapPin, Compass, Timer, ShieldAlert } from 'lucide-react';

export const Experience: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const achievements: string[] = [
    "Collaborated with clients to design, develop, and deploy custom web and mobile solutions tailored to their business requirements.",
    "Built responsive and user-friendly applications using React.js, Node.js, JavaScript, TypeScript, Firebase, and MongoDB.",
    "Gathered requirements directly from stakeholders, translated business needs into technical solutions, and ensured timely project delivery.",
    "Designed wireframes and prototypes using Figma to streamline development workflows and improve client communication.",
    "Developed scalable frontend interfaces and integrated backend services, focusing on performance, maintainability, and seamless user experiences.",
    "Managed end-to-end project lifecycles including planning, development, testing, deployment, and post-launch support.",
    "Maintained effective client relationships through regular communication and iterative improvements."
  ];

  // Slides data represent simulated applications (LOGI, ResQR, and Japa Companion)
  const simulatorSlides = [
    {
      title: 'LOGI E-commerce',
      subtitle: 'HealthTech Platform',
      icon: <Compass className="w-8 h-8 text-[#7B61FF]" />,
      bg: 'linear-gradient(180deg, #130C25 0%, #080511 100%)',
      cardContent: (
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>LOGI HEALTH</span>
            <span>STOREFRONT</span>
          </div>
          <p className="text-[11px] text-white/90 leading-relaxed">
            Low glycemic nutritional products catalog. Featuring Firebase hosting, real-time Firestore synchronization, and secure auth modules.
          </p>
        </div>
      ),
    },
    {
      title: 'ResQR sos Portal',
      subtitle: 'Emergency Locator',
      icon: <ShieldAlert className="w-8 h-8 text-[#00D4FF]" />,
      bg: 'linear-gradient(180deg, #071220 0%, #030810 100%)',
      cardContent: (
        <div className="flex flex-col items-center gap-3">
          <div className="w-16 h-16 rounded-full border-2 border-[#00D4FF] flex flex-col items-center justify-center shadow-[0_0_15px_rgba(0,212,255,0.2)]">
            <span className="text-sm font-bold font-heading text-white">SOS</span>
            <span className="text-[8px] text-[#00D4FF] uppercase font-bold">READY</span>
          </div>
          <div className="flex justify-between w-full text-[9px] text-[#86868B] px-2">
            <span>GPS: Hyderabad</span>
            <span>Responders: Alerted</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Japa Companion',
      subtitle: '108 Beads Tracker',
      icon: <Timer className="w-8 h-8 text-[#00FFC6]" />,
      bg: 'linear-gradient(180deg, #091314 0%, #030808 100%)',
      cardContent: (
        <div className="flex flex-col gap-2">
          <span className="text-[9px] text-[#86868B] uppercase font-bold">Session Activity</span>
          <div className="flex justify-between items-end h-12 gap-1.5 mt-2">
            <div className="w-full h-[45%] bg-[#00FFC6]/40 rounded-sm" />
            <div className="w-full h-[65%] bg-[#00FFC6]/40 rounded-sm" />
            <div className="w-full h-[55%] bg-[#00FFC6]/40 rounded-sm" />
            <div className="w-full h-[90%] bg-[#00FFC6] rounded-sm" />
            <div className="w-full h-[70%] bg-[#00FFC6]/40 rounded-sm" />
            <div className="w-full h-[95%] bg-[#00FFC6] rounded-sm" />
          </div>
        </div>
      ),
    },
  ];

  // Auto transition slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % simulatorSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [simulatorSlides.length]);

  return (
    <section id="experience" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[350px] h-[350px] rounded-full bg-[#7B61FF]/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-[#00D4FF]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left column info */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00FFC6] font-semibold w-fit mb-4"
          >
            <Smartphone className="w-3.5 h-3.5" />
            <span>Professional Experience</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-2"
          >
            Freelance Full Stack Developer
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex flex-wrap items-center gap-4 text-sm text-[#86868B] font-accent mb-8"
          >
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#7B61FF]" />
              <span>May 2024 – Present</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#00D4FF]" />
              <span>Hyderabad, India</span>
            </div>
          </motion.div>

          {/* Achievements List */}
          <div className="flex flex-col gap-5 mb-10">
            {achievements.map((ach, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="flex gap-4 items-start"
              >
                <div className="p-1 rounded-full bg-white/5 border border-white/5 text-[#00D4FF] mt-1 flex-shrink-0 animate-pulse">
                  <CheckCircle className="w-3.5 h-3.5" />
                </div>
                <p className="text-[#86868B] text-sm leading-relaxed">
                  {ach}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Dots controller */}
          <div className="flex items-center gap-3">
            {simulatorSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === idx ? 'w-8 bg-[#7B61FF]' : 'w-2.5 bg-white/10 hover:bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Right column Phone simulator device */}
        <div className="lg:col-span-5 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', duration: 0.8 }}
            className="relative"
          >
            {/* Ambient shadow behind phone */}
            <div className="absolute inset-0 bg-[#7B61FF]/10 rounded-[40px] blur-[30px] -z-10" />

            {/* iOS Frame */}
            <div className="w-[280px] h-[560px] bg-black border-[10px] border-[#222] rounded-[40px] shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_0_2px_rgba(255,255,255,0.08)] overflow-hidden relative">
              {/* Top Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#222] rounded-b-xl z-20" />

              {/* Status Bar simulation */}
              <div className="absolute top-1 left-0 w-full px-6 flex justify-between items-center z-20 text-[9px] text-white/50 font-sans">
                <span>9:41</span>
                <div className="flex items-center gap-1.5">
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="currentColor"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.34V5.33C17 4.6 16.4 4 15.67 4z"/></svg>
                </div>
              </div>

              {/* Screen Container */}
              <div className="w-full h-full relative bg-[#0B0B0D] pt-8 pb-14">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex flex-col justify-between px-6 box-border"
                    style={{ background: simulatorSlides[activeSlide].bg }}
                  >
                    {/* App Header */}
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[10px] font-heading font-bold text-[#00FFC6]">Workspace.io</span>
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    </div>

                    {/* App Body Content */}
                    <div className="flex-grow flex flex-col justify-center gap-6">
                      <div className="flex flex-col items-center text-center gap-2">
                        {simulatorSlides[activeSlide].icon}
                        <h3 className="text-white font-heading font-semibold text-sm mt-1">
                          {simulatorSlides[activeSlide].title}
                        </h3>
                        <p className="text-[9px] text-[#86868B]">
                          {simulatorSlides[activeSlide].subtitle}
                        </p>
                      </div>

                      {/* Display specific screen layouts */}
                      <div className="p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md">
                        {simulatorSlides[activeSlide].cardContent}
                      </div>
                    </div>

                    {/* App Footer Tab Bar */}
                    <div className="flex justify-around items-center border-t border-white/5 py-2.5 mx-[-24px] px-6 bg-black/40">
                      <div className={`flex flex-col items-center gap-1 ${activeSlide === 0 ? 'text-[#7B61FF]' : 'text-[#86868B]'}`}>
                        <Compass className="w-4 h-4" />
                        <span className="text-[7px]">LOGI</span>
                      </div>
                      <div className={`flex flex-col items-center gap-1 ${activeSlide === 1 ? 'text-[#00D4FF]' : 'text-[#86868B]'}`}>
                        <ShieldAlert className="w-4 h-4" />
                        <span className="text-[7px]">ResQR</span>
                      </div>
                      <div className={`flex flex-col items-center gap-1 ${activeSlide === 2 ? 'text-[#00FFC6]' : 'text-[#86868B]'}`}>
                        <Timer className="w-4 h-4" />
                        <span className="text-[7px]">Japa</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Home Indicator */}
              <div className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-white/40 rounded-full z-20" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
