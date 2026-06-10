import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Server, Cpu } from 'lucide-react';

interface AchievementCard {
  title: string;
  issuer: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  glowColor: string;
  details: string;
}

export const Achievements: React.FC = () => {
  const achievements: AchievementCard[] = [
    {
      title: 'National Level Robotics Recognition',
      issuer: 'National Robotics Forum',
      description: 'Honored with recognition awards for building automated obstacle bypass sensors and pathfinder microcontrollers.',
      icon: <Cpu className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
      glowColor: 'rgba(0, 212, 255, 0.15)',
      details: 'Arduino and Embedded C integration, motor calibration algorithms, and path planning modeling.',
    },
    {
      title: 'TECHNOVATE Merit Award',
      issuer: 'TECHNOVATE',
      description: 'Awarded top honors for constructing an internet-managed smart agriculture sensor array compiling metrics dynamically.',
      icon: <Trophy className="w-5 h-5 text-[#7B61FF]" />,
      color: '#7B61FF',
      glowColor: 'rgba(123, 97, 255, 0.15)',
      details: 'Evaluated on system scalability, wireless hardware latency, and real-time dashboard responsiveness.',
    },
    {
      title: 'AWS Academy Cloud Foundations',
      issuer: 'Amazon Web Services',
      description: 'Professional cloud computing credential verifying architecture guidelines, server deployments, and security configurations.',
      icon: <Server className="w-5 h-5 text-[#00FFC6]" />,
      color: '#00FFC6',
      glowColor: 'rgba(0, 255, 198, 0.15)',
      details: 'Validates IAM access policies, EC2 hosting parameters, VPC setups, and server security structures.',
    },
    {
      title: 'Microsoft AI Fundamentals',
      issuer: 'Microsoft',
      description: 'Certified in Machine Learning parameters, computer vision services, language processing pipelines, and conversational AI.',
      icon: <Award className="w-5 h-5 text-[#00D4FF]" />,
      color: '#00D4FF',
      glowColor: 'rgba(0, 212, 255, 0.15)',
      details: 'Azure ML Studio pipelines, computer vision models, NLP translation rules, and generative AI guidelines.',
    },
  ];

  return (
    <section id="achievements" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-[#7B61FF]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00D4FF] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            Credentials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            Certificates &amp; Awards
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            A collection of verified academic awards, cloud certifications, and robotics honors I have earned.
          </motion.p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="glassmorphism p-8 rounded-2xl border-white/5 relative overflow-hidden flex flex-col justify-between group transition-all duration-300"
              style={{
                boxShadow: `0 0 0px transparent`,
              }}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className="absolute inset-0 bg-radial transition-opacity duration-500 opacity-0 group-hover:opacity-100 pointer-events-none -z-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 10% 10%, ${item.glowColor} 0%, transparent 60%)`,
                }}
              />

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="p-3 rounded-xl text-black"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-mono text-[#86868B] border border-white/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.issuer}
                  </span>
                </div>

                <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#86868B] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Detail block */}
              <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
                <span className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Scope / Domain</span>
                <p className="text-xs text-white/70 leading-relaxed font-sans">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Achievements;
