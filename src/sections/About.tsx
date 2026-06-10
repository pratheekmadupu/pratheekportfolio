import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Laptop, Trophy, Zap } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

export const About: React.FC = () => {
  const timeline: TimelineItem[] = [
    {
      year: '2019',
      title: 'National Level Robotics Recognition',
      description: 'Awarded honors at robotics events for building automated pathfinder and arduino-controlled robotic configurations.',
      icon: <Trophy className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
    },
    {
      year: '2023',
      title: 'Started B.Tech Cybersecurity',
      description: 'Joined engineering systems to study cryptography, zero-trust infrastructure, secure computing, and system threat modeling.',
      icon: <Shield className="w-5 h-5 text-[#7B61FF]" />,
      color: '#7B61FF',
    },
    {
      year: '2024',
      title: 'Freelance iOS & Web Development',
      description: 'Launched client products, wrote full-stack platforms, and published native apps like Prabhupada.io on the iOS App Store.',
      icon: <Laptop className="w-5 h-5 text-[#00FFC6]" />,
      color: '#00FFC6',
    },
    {
      year: '2025',
      title: 'Award Winning IoT Projects',
      description: 'Awarded Technovate merit awards and robotics honors. Constructed telemetry and automated microcontrollers.',
      icon: <Zap className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
    },
    {
      year: '2026',
      title: 'Building Startups & AI Products',
      description: 'Incubating ResQR (emergency response system) and integrating LLMs and ML layers to establish autonomous software workflows.',
      icon: <Brain className="w-5 h-5 text-[#7B61FF]" />,
      color: '#7B61FF',
    },
  ];

  return (
    <section id="about" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-10 right-1/4 w-[300px] h-[300px] rounded-full bg-[#00FFC6]/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] rounded-full bg-[#7B61FF]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#7B61FF] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            My Story
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            An Innovator's Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            Combining strict system-level security, clean React architectures, and product strategy to design high-performance digital ecosystems.
          </motion.p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative pl-6 sm:pl-0">
          {/* Central Line */}
          <div className="absolute left-[29px] sm:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-[#00D4FF] via-[#7B61FF] to-[#00FFC6] transform -translate-x-1/2" />

          {timeline.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className="relative mb-16 last:mb-0 w-full flex flex-col sm:flex-row items-start sm:items-center">
                {/* Timeline dot */}
                <div
                  className="absolute left-[29px] sm:left-1/2 top-4 sm:top-auto w-10 h-10 rounded-full bg-black border-2 flex items-center justify-center z-10 transform -translate-x-1/2 shadow-[0_0_15px_rgba(0,0,0,0.8)]"
                  style={{ borderColor: item.color }}
                >
                  {item.icon}
                </div>

                {/* Left side box (empty on odd on desktop) */}
                <div className={`w-full sm:w-1/2 pr-0 sm:pr-12 pl-12 sm:pl-0 flex justify-end ${isEven ? 'sm:flex' : 'sm:hidden'}`}>
                  {isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      className="glassmorphism p-6 rounded-2xl w-full max-w-md hover:border-white/10 transition-colors"
                    >
                      <span className="text-sm font-bold font-accent" style={{ color: item.color }}>{item.year}</span>
                      <h3 className="text-white text-lg font-heading font-semibold mt-2 mb-3">{item.title}</h3>
                      <p className="text-[#86868B] text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  )}
                </div>

                {/* Right side box (empty on even on desktop) */}
                <div className={`w-full sm:w-1/2 pl-12 sm:pl-12 flex justify-start ${!isEven ? 'sm:flex' : 'sm:hidden'}`}>
                  {!isEven && (
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-100px' }}
                      transition={{ duration: 0.5, type: 'spring' }}
                      className="glassmorphism p-6 rounded-2xl w-full max-w-md hover:border-white/10 transition-colors"
                    >
                      <span className="text-sm font-bold font-accent" style={{ color: item.color }}>{item.year}</span>
                      <h3 className="text-white text-lg font-heading font-semibold mt-2 mb-3">{item.title}</h3>
                      <p className="text-[#86868B] text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default About;
