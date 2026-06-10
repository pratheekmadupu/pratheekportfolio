import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Shield, Globe } from 'lucide-react';

interface Milestone {
  phase: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  items: string[];
}

export const Startup: React.FC = () => {
  const roadmap: Milestone[] = [
    {
      phase: 'Phase 01',
      title: 'Incubation & Strategy',
      description: 'Analyzing critical pain-points, validating product-market fit, and designing product strategy blueprints.',
      icon: <Lightbulb className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
      items: ['Accident response studies', 'Paramedic feedback loops', 'Feasibility reports'],
    },
    {
      phase: 'Phase 02',
      title: 'Interactive Prototypes',
      description: 'Drafting Figma wireframes, developing rapid MVP layouts, and refining user flows to maximize speed.',
      icon: <Rocket className="w-5 h-5 text-[#7B61FF]" />,
      color: '#7B61FF',
      items: ['Next.js / React build systems', 'Figma user journeys', 'Mock databases caching'],
    },
    {
      phase: 'Phase 03',
      title: 'Security Auditing',
      description: 'Leveraging B.Tech cybersecurity frameworks to audit code, encrypt data packets, and verify key handshakes.',
      icon: <Shield className="w-5 h-5 text-[#00FFC6]" />,
      color: '#00FFC6',
      items: ['OWASP vulnerability scans', 'Encrypted QR profile cards', 'Signature validation'],
    },
    {
      phase: 'Phase 04',
      title: 'Distribution Channels',
      description: 'Forging business partnerships, deploying systems, and integrating with institutional databases.',
      icon: <Globe className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
      items: ['Insurance provider APIs', 'Municipal rescue integration', 'Vercel hosting scaling'],
    },
  ];

  return (
    <section id="startup" className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-[#00FFC6]/2 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Title & Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00FFC6] font-semibold tracking-wider uppercase inline-block mb-3"
            >
              Startup Founder
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
            >
              From Developer to <br />
              <span className="text-gradient font-bold">Startup Builder</span>
            </motion.h2>
          </div>
          <div className="lg:col-span-6">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#86868B] text-base sm:text-lg leading-relaxed"
            >
              Software is only as valuable as the real-world utility it creates. I translate engineering modules, networking, and system securities into functional startup strategies to deploy responsive services for communities.
            </motion.p>
          </div>
        </div>

        {/* Roadmap Roadmap Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmap.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-white/10 flex flex-col justify-between relative overflow-hidden group"
            >
              {/* Background gradient line simulation */}
              <div
                className="absolute top-0 left-0 w-full h-[2px] transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100"
                style={{
                  background: `linear-gradient(90deg, ${step.color}, #ffffff)`,
                }}
              />

              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-mono font-bold text-[#86868B] uppercase tracking-wider">{step.phase}</span>
                  <div
                    className="p-2.5 rounded-xl text-black"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-white mb-3">{step.title}</h3>
                <p className="text-xs text-[#86868B] leading-relaxed mb-6">{step.description}</p>
              </div>

              {/* Milestones list */}
              <ul className="flex flex-col gap-2 border-t border-white/5 pt-4">
                {step.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-[10px] font-mono text-white/70 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#00FFC6]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Startup;
