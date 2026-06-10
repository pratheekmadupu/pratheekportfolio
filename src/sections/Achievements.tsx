import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Server, Cpu, Shield, Calendar } from 'lucide-react';

interface Certification {
  year: string;
  title: string;
  issuer: string;
  description: string;
  scope: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
}

export const Achievements: React.FC = () => {
  const certifications: Certification[] = [
    {
      year: '2025',
      title: 'Security Basics (MDL-238)',
      issuer: 'IBM SkillsBuild',
      description: 'Acquired core competencies in cybersecurity principles, threat landscaping, cryptographic practices, and cloud security frameworks.',
      scope: 'Threat vectors, access management auditing, and OWASP defense practices.',
      icon: <Shield className="w-5 h-5 text-[#FF3366]" />,
      color: '#FF3366',
      glowColor: 'rgba(255, 51, 102, 0.15)',
    },
    {
      year: '2025',
      title: 'Plan and Prepare to Develop AI Solutions on Azure',
      issuer: 'Microsoft Learn',
      description: 'Certified in preparing environment resources, structuring data pipelines, and training machine learning endpoints on Azure Cloud.',
      scope: 'Azure ML Studio pipelines, computer vision services, and cognitive AI endpoints.',
      icon: <Award className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
      glowColor: 'rgba(0, 212, 255, 0.15)',
    },
    {
      year: '2025',
      title: 'AWS Fundamentals',
      issuer: 'AWS Training & Certification',
      description: 'Credential verifying cloud computing concepts, IAM security configurations, and auto-scaling microservices architectures.',
      scope: 'IAM policies, EC2 hosting, VPC configurations, and S3 bucket setups.',
      icon: <Server className="w-5 h-5 text-[#FF9900]" />,
      color: '#FF9900',
      glowColor: 'rgba(255, 153, 0, 0.15)',
    },
    {
      year: '2025',
      title: 'Certificate of Merit',
      issuer: "TECHNOVATE'25",
      description: 'Recognized for outstanding technical project execution and presentation in the TECHNOVATE innovation symposium.',
      scope: 'Awarded top honors for prototype validation, latency tuning, and engineering depth.',
      icon: <Trophy className="w-5 h-5 text-[#00FFC6]" />,
      color: '#00FFC6',
      glowColor: 'rgba(0, 255, 198, 0.15)',
    },
    {
      year: '2019',
      title: 'National-Level Appreciation Certificate',
      issuer: 'SP Robotics Maker Lab',
      description: 'Awarded appreciation honors at a national scale for robotics construction, embedded programming, and hardware sensors interface.',
      scope: 'Embedded C, Arduino microcontroller logic, and automated obstacle bypass pathing.',
      icon: <Cpu className="w-5 h-5 text-[#7B61FF]" />,
      color: '#7B61FF',
      glowColor: 'rgba(123, 97, 255, 0.15)',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#7B61FF]/2 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-[#00D4FF]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00D4FF] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            Milestones
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            Certifications &amp; Achievements
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            A timeline of professional certifications, security badges, cloud foundations, and national robotics accolades.
          </motion.p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 max-w-4xl mx-auto pl-8 sm:pl-12 flex flex-col gap-12 text-left">
          {certifications.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Marker Dot */}
              <div
                className="absolute left-[-41px] sm:left-[-57px] top-1.5 w-6 h-6 rounded-full border border-white/10 flex items-center justify-center bg-[#050505] shadow-[0_0_15px_rgba(255,255,255,0.05)]"
                style={{ borderColor: item.color }}
              >
                <div
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
              </div>

              {/* Glassmorphism Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="glassmorphism p-6 sm:p-8 rounded-2xl border-white/5 hover:border-white/10 relative overflow-hidden flex flex-col md:flex-row justify-between gap-6 group transition-all duration-300"
              >
                {/* Subtle Hover Ambient Glow */}
                <div
                  className="absolute inset-0 bg-radial transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none -z-10"
                  style={{
                    backgroundImage: `radial-gradient(circle at 10% 10%, ${item.glowColor} 0%, transparent 60%)`,
                  }}
                />

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-black text-[10px] font-bold font-mono uppercase tracking-wider flex items-center gap-1"
                      style={{ backgroundColor: item.color }}
                    >
                      <Calendar className="w-3 h-3 text-black" />
                      {item.year}
                    </span>
                    <span className="text-[10px] font-mono text-[#86868B] border border-white/5 bg-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {item.issuer}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Scope Details */}
                  <div className="border-t border-white/5 pt-4 flex flex-col gap-1.5">
                    <span className="text-[9px] uppercase font-bold text-[#86868B] tracking-wider">Key Learnings / Core Focus</span>
                    <p className="text-xs text-white/70 leading-relaxed font-sans">{item.scope}</p>
                  </div>
                </div>

                {/* Big decorative Icon */}
                <div className="flex-shrink-0 flex items-start justify-end md:justify-center md:items-center">
                  <div
                    className="p-4 rounded-2xl bg-white/5 border border-white/5 text-white/90 group-hover:scale-110 transition-transform duration-300"
                    style={{ color: item.color }}
                  >
                    {item.icon}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
