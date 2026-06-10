import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Code, Cpu, Database, Cpu as RoboticsIcon, Brain } from 'lucide-react';

interface Skill {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const skillCategories: SkillCategory[] = [
    {
      title: 'Programming',
      icon: <Terminal className="w-5 h-5" />,
      color: '#00D4FF',
      skills: [
        { name: 'Python', percentage: 92 },
        { name: 'TypeScript', percentage: 88 },
        { name: 'JavaScript', percentage: 90 },
        { name: 'Java', percentage: 80 },
      ],
    },
    {
      title: 'Frontend',
      icon: <Code className="w-5 h-5" />,
      color: '#7B61FF',
      skills: [
        { name: 'React', percentage: 90 },
        { name: 'HTML5', percentage: 95 },
        { name: 'CSS3', percentage: 92 },
        { name: 'Tailwind CSS', percentage: 94 },
      ],
    },
    {
      title: 'Backend',
      icon: <Cpu className="w-5 h-5" />,
      color: '#00FFC6',
      skills: [
        { name: 'Node.js', percentage: 86 },
        { name: 'Express', percentage: 88 },
        { name: 'REST APIs', percentage: 90 },
        { name: 'GraphQL', percentage: 80 },
      ],
    },
    {
      title: 'Database',
      icon: <Database className="w-5 h-5" />,
      color: '#00D4FF',
      skills: [
        { name: 'MongoDB', percentage: 84 },
        { name: 'PostgreSQL', percentage: 82 },
        { name: 'MySQL', percentage: 85 },
        { name: 'Redis', percentage: 76 },
      ],
    },
    {
      title: 'AI',
      icon: <Brain className="w-5 h-5" />,
      color: '#7B61FF',
      skills: [
        { name: 'Machine Learning', percentage: 78 },
        { name: 'Data Analysis', percentage: 82 },
        { name: 'AI Applications', percentage: 85 },
      ],
    },
    {
      title: 'IoT',
      icon: <RoboticsIcon className="w-5 h-5" />,
      color: '#00FFC6',
      skills: [
        { name: 'Arduino', percentage: 88 },
        { name: 'Embedded C', percentage: 84 },
        { name: 'Robotics', percentage: 80 },
      ],
    },
  ];

  const filteredCategories =
    activeTab === 'All'
      ? skillCategories
      : skillCategories.filter(cat => cat.title === activeTab);

  return (
    <section id="skills" className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-[250px] h-[250px] rounded-full bg-[#00D4FF]/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-[#7B61FF]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00FFC6] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            Technical Stack
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            Expertise &amp; Capabilities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            An interactive dashboard categorizing technologies I write, implement, and compile across various domains.
          </motion.p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold font-accent cursor-pointer transition-all border ${
              activeTab === 'All'
                ? 'bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black border-transparent shadow-[0_0_15px_rgba(0,212,255,0.25)]'
                : 'bg-white/5 text-[#86868B] border-white/5 hover:text-white'
            }`}
          >
            All Fields
          </button>
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat.title)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold font-accent cursor-pointer transition-all border flex items-center gap-1.5 ${
                activeTab === cat.title
                  ? 'bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                  : 'bg-white/5 text-[#86868B] border-white/5 hover:text-white'
              }`}
            >
              {cat.icon}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((cat) => (
              <motion.div
                key={cat.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: 'spring' }}
                className="glassmorphism p-8 rounded-2xl relative overflow-hidden group border-white/5 hover:border-white/10"
              >
                {/* Background Corner Glow */}
                <div
                  className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-10 transition-opacity group-hover:opacity-25"
                  style={{ backgroundColor: cat.color }}
                />

                <div className="flex items-center gap-3 border-b border-white/5 pb-5 mb-6">
                  <div
                    className="p-2.5 rounded-lg text-black"
                    style={{ backgroundColor: cat.color }}
                  >
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills Circular & Progress list */}
                <div className="flex flex-col gap-6">
                  {cat.skills.map((skill, skillIdx) => {
                    const radius = 22;
                    const circumference = 2 * Math.PI * radius;
                    const strokeDashoffset = circumference - (skill.percentage / 100) * circumference;

                    return (
                      <div key={skillIdx} className="flex items-center justify-between gap-4">
                        <div className="flex flex-col gap-1 w-full">
                          <div className="flex justify-between text-sm">
                            <span className="text-white/80 font-medium">{skill.name}</span>
                            <span className="text-[#86868B] font-mono text-xs">{skill.percentage}%</span>
                          </div>
                          {/* Linear Bar */}
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.1 }}
                              className="h-full rounded-full"
                              style={{
                                background: `linear-gradient(90deg, ${cat.color}, #ffffff)`,
                              }}
                            />
                          </div>
                        </div>

                        {/* Circular Progress Gauge */}
                        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
                          <svg className="w-full h-full transform -rotate-90">
                            <circle
                              cx="24"
                              cy="24"
                              r={radius}
                              className="fill-none stroke-white/5 stroke-2"
                            />
                            <motion.circle
                              cx="24"
                              cy="24"
                              r={radius}
                              className="fill-none stroke-2 stroke-linecap-round"
                              style={{ stroke: cat.color }}
                              initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
                              whileInView={{ strokeDashoffset }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, ease: 'easeOut' }}
                            />
                          </svg>
                          <span className="absolute text-[9px] font-mono font-bold text-white/70">
                            {skill.percentage}%
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
export default Skills;
