import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Play, Award, Layers, ShieldCheck, X, Sliders } from 'lucide-react';
import UniverseParticles from '../components/UniverseParticles';

interface Skill {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Programming' | 'AI' | 'Infrastructure' | 'Hardware' | 'Cybersecurity';
  orbit: number;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  projects: string;
  color: string;
}

export const TechUniverse: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [orbitSpeed, setOrbitSpeed] = useState<number>(1); // Speed multiplier: 0.5, 1, 2
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  
  // Local storage / active view mode: 'universe' or 'grid' (for mobile-friendly list)
  const [viewMode, setViewMode] = useState<'universe' | 'grid'>('universe');

  // Center skill default value
  const [centerSkillName, setCenterSkillName] = useState<string>('Robotics');

  // Complete resume skills list
  const skillsList: Skill[] = useMemo(() => [
    // Orbit 1: Frontend (Radius 1)
    { id: 'react', name: 'React', category: 'Frontend', orbit: 1, level: 'Expert', projects: 'LOGI E-commerce, eShop, Portfolio', color: '#00D4FF' },
    { id: 'nextjs', name: 'NextJS', category: 'Frontend', orbit: 1, level: 'Advanced', projects: 'eShop, Prabhupada.io App', color: '#00D4FF' },
    { id: 'typescript', name: 'TypeScript', category: 'Frontend', orbit: 1, level: 'Expert', projects: 'LOGI, eShop, Portfolio', color: '#00D4FF' },
    { id: 'tailwindcss', name: 'TailwindCSS', category: 'Frontend', orbit: 1, level: 'Expert', projects: 'Fintech Manager, Portfolio', color: '#00D4FF' },

    // Orbit 2: Backend (Radius 2)
    { id: 'nodejs', name: 'NodeJS', category: 'Backend', orbit: 2, level: 'Advanced', projects: 'LOGI E-commerce, API nodes', color: '#7B61FF' },
    { id: 'graphql', name: 'GraphQL', category: 'Backend', orbit: 2, level: 'Intermediate', projects: 'eShop search protocols', color: '#7B61FF' },
    { id: 'firebase', name: 'Firebase', category: 'Backend', orbit: 2, level: 'Advanced', projects: 'Prabhupada.io iOS App', color: '#7B61FF' },
    { id: 'mongodb', name: 'MongoDB', category: 'Backend', orbit: 2, level: 'Advanced', projects: 'LOGI E-commerce', color: '#7B61FF' },

    // Orbit 3: Programming (Radius 3)
    { id: 'python', name: 'Python', category: 'Programming', orbit: 3, level: 'Expert', projects: 'Cybersecurity Scanners, AI Classifier', color: '#00FFC6' },
    { id: 'javascript', name: 'JavaScript', category: 'Programming', orbit: 3, level: 'Expert', projects: 'Robotics Interface, Web scripts', color: '#00FFC6' },
    { id: 'java', name: 'Java', category: 'Programming', orbit: 3, level: 'Intermediate', projects: 'System Analytics Tool', color: '#00FFC6' },
    { id: 'swift', name: 'Swift', category: 'Programming', orbit: 3, level: 'Advanced', projects: 'Prabhupada.io iOS App', color: '#00FFC6' },

    // Orbit 4: AI & Data (Radius 4)
    { id: 'machine-learning', name: 'Machine Learning', category: 'AI', orbit: 4, level: 'Advanced', projects: 'AI Classifier, Smart Farm', color: '#FFD700' },
    { id: 'data-analytics', name: 'Data Analytics', category: 'AI', orbit: 4, level: 'Advanced', projects: 'Fintech Manager, Agri-Sensor Data', color: '#FFD700' },
    { id: 'ai-dev', name: 'AI Development', category: 'AI', orbit: 4, level: 'Advanced', projects: 'Microsoft AI Fundamentals Labs', color: '#FFD700' },

    // Orbit 5: Infrastructure (Radius 5)
    { id: 'aws', name: 'AWS', category: 'Infrastructure', orbit: 5, level: 'Intermediate', projects: 'Cloud Hosting solutions', color: '#FF9900' },
    { id: 'docker', name: 'Docker', category: 'Infrastructure', orbit: 5, level: 'Intermediate', projects: 'eShop Containers deployment', color: '#FF9900' },
    { id: 'git', name: 'Git', category: 'Infrastructure', orbit: 5, level: 'Expert', projects: 'Open source repositories', color: '#FF9900' },
    { id: 'sql', name: 'SQL', category: 'Infrastructure', orbit: 5, level: 'Advanced', projects: 'eShop PostgreSQL, MySQL', color: '#FF9900' },
    { id: 'postgresql', name: 'PostgreSQL', category: 'Infrastructure', orbit: 5, level: 'Advanced', projects: 'eShop catalogs database', color: '#FF9900' },
    { id: 'mysql', name: 'MySQL', category: 'Infrastructure', orbit: 5, level: 'Advanced', projects: 'Enterprise analytics nodes', color: '#FF9900' },
    { id: 'redis', name: 'Redis', category: 'Infrastructure', orbit: 5, level: 'Intermediate', projects: 'eShop caching pipelines', color: '#FF9900' },

    // Orbit 6: Hardware & Security (Radius 6)
    { id: 'arduino', name: 'Arduino', category: 'Hardware', orbit: 6, level: 'Advanced', projects: 'Computer Control Robot, Smart Farm', color: '#FF3366' },
    { id: 'embedded-c', name: 'Embedded C', category: 'Hardware', orbit: 6, level: 'Advanced', projects: 'Robot Motors controller', color: '#FF3366' },
    { id: 'robotics', name: 'Robotics', category: 'Hardware', orbit: 6, level: 'Expert', projects: 'Technovate Pathfinders, Robot COM3', color: '#FF3366' },
    { id: 'iot', name: 'IoT', category: 'Hardware', orbit: 6, level: 'Advanced', projects: 'Technovate sensor arrays', color: '#FF3366' },
    { id: 'cybersecurity', name: 'Cybersecurity', category: 'Cybersecurity', orbit: 6, level: 'Advanced', projects: 'OWASP Security Audits, ResQR Encrypted cards', color: '#9933FF' },
  ], []);

  // Unique categories
  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'AI', 'Infrastructure', 'Hardware', 'Cybersecurity'];

  // Check window width for responsive stack mode
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 768) {
        setViewMode('grid');
      } else {
        setViewMode('universe');
      }
    };
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  // Filter skills based on search query and category tab filter
  const filteredSkills = useMemo(() => {
    return skillsList.filter(skill => {
      const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeFilter === 'All' || skill.category === activeFilter;
      return matchesSearch && matchesCategory;
    });
  }, [skillsList, searchQuery, activeFilter]);

  // Group skills by orbit for calculating spacing angle
  const skillsByOrbit = useMemo(() => {
    const orbits: { [key: number]: Skill[] } = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };
    skillsList.forEach(skill => {
      if (orbits[skill.orbit]) {
        orbits[skill.orbit].push(skill);
      }
    });
    return orbits;
  }, [skillsList]);

  // Speed mapping (base duration in seconds)
  const getSpeed = (orbitNumber: number) => {
    const baseSpeeds = [0, 25, 35, 45, 55, 65, 75]; // seconds per orbit rotation
    return `${baseSpeeds[orbitNumber] / orbitSpeed}s`;
  };

  // Stats Data
  const stats = [
    { value: '20+', label: 'Technologies', icon: <Layers className="w-4 h-4 text-[#00D4FF]" /> },
    { value: '5+', label: 'Major Projects', icon: <Play className="w-4 h-4 text-[#7B61FF]" /> },
    { value: '4+', label: 'Certifications', icon: <Award className="w-4 h-4 text-[#00FFC6]" /> },
    { value: '1', label: 'National Award', icon: <ShieldCheck className="w-4 h-4 text-[#FF3366]" /> },
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden min-h-screen flex flex-col justify-between">
      {/* 3D Particle Field Background */}
      <UniverseParticles />

      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-[#7B61FF]/3 blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#00FFC6]/3 blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex-grow flex flex-col justify-between gap-12">
        
        {/* Header: Title and Search/Controls */}
        <div className="flex flex-col gap-6">
          <div className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-8">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00D4FF] font-semibold tracking-wider uppercase inline-block mb-3"
              >
                Skills Ecosystem
              </motion.span>
              <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
                Tech Universe
              </h2>
              <p className="text-xs text-[#86868B] max-w-md mt-2">
                An interactive orbital galaxy mapping my engineering stack. Hover on skills to pause rotation and reveal metadata logs.
              </p>
            </div>

            {/* Controls panel */}
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4">
              {/* Search input */}
              <div className="relative w-full sm:w-64">
                <Search className="w-4 h-4 text-[#86868B] absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search technology..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/5 rounded-xl py-2 pl-9 pr-4 text-xs text-white focus:outline-none focus:border-[#7B61FF] transition-all"
                />
              </div>

              {/* View toggle (desktop only helper) */}
              <div className="hidden md:flex bg-white/5 border border-white/5 rounded-xl p-0.5">
                <button
                  onClick={() => setViewMode('universe')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                    viewMode === 'universe' ? 'bg-[#7B61FF] text-white' : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  Universe View
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-semibold transition-all ${
                    viewMode === 'grid' ? 'bg-[#7B61FF] text-white' : 'text-[#86868B] hover:text-white'
                  }`}
                >
                  Grid View
                </button>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 overflow-x-auto pb-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-xl text-[10px] font-bold font-accent transition-all cursor-pointer border ${
                  activeFilter === cat
                    ? 'bg-white text-black border-transparent shadow-[0_0_15px_rgba(255,255,255,0.15)]'
                    : 'bg-white/5 text-[#86868B] border-white/5 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit speed controller floating bar (only in Universe view) */}
        {viewMode === 'universe' && (
          <div className="flex items-center justify-center gap-6 bg-white/[0.02] border border-white/5 rounded-2xl px-6 py-3 w-fit mx-auto">
            <div className="flex items-center gap-2 text-xs text-[#86868B] font-accent">
              <Sliders className="w-3.5 h-3.5 text-[#00D4FF]" />
              <span>Orbit Speed:</span>
            </div>
            <div className="flex gap-2">
              {[0.5, 1, 2].map((s) => (
                <button
                  key={s}
                  onClick={() => setOrbitSpeed(s)}
                  className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-all ${
                    orbitSpeed === s ? 'bg-[#00D4FF] text-black font-bold' : 'bg-white/5 text-[#86868B] hover:text-white'
                  }`}
                >
                  {s}x
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Display Area */}
        <div className="flex-grow flex items-center justify-center min-h-[500px] relative">
          
          {viewMode === 'universe' ? (
            /* ================= UNIVERSE VIEW ================= */
            <div className="relative w-[500px] h-[500px] lg:w-[600px] lg:h-[600px] flex items-center justify-center">
              
              {/* Concentric Orbit Paths */}
              {[1, 2, 3, 4, 5, 6].map((o) => (
                <div
                  key={o}
                  className="orbit-line"
                  style={{
                    width: `calc(2 * var(--radius-${o}))`,
                    height: `calc(2 * var(--radius-${o}))`,
                    borderColor: activeFilter !== 'All' ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.08)',
                  }}
                />
              ))}

              {/* Shifting Center Gravity Node */}
              <motion.div
                layout
                className="absolute z-20 flex flex-col items-center justify-center w-[120px] h-[120px] lg:w-[140px] lg:h-[140px] rounded-full glassmorphism border-dashed border-[#7B61FF]/40 shadow-[0_0_35px_rgba(123,97,255,0.15)] flex-shrink-0 cursor-pointer group text-center p-3 floating-element"
                whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(123,97,255,0.3)' }}
                onClick={() => {
                  const match = skillsList.find(s => s.name === centerSkillName);
                  if (match) setSelectedSkill(match);
                }}
              >
                <div className="w-1.5 h-1.5 bg-[#00FFC6] rounded-full animate-ping absolute top-4" />
                <span className="text-[9px] uppercase font-bold text-[#86868B] tracking-wider mb-1">GRAVITY</span>
                <h3 className="text-xs lg:text-sm font-heading font-extrabold text-white uppercase tracking-tight truncate max-w-full">
                  {centerSkillName}
                </h3>
                <span className="text-[7.5px] text-[#00D4FF] font-mono mt-1 opacity-70 group-hover:opacity-100 transition-opacity">
                  Click log card
                </span>
              </motion.div>

              {/* Orbiting items */}
              {skillsList.map((skill) => {
                const orbitItems = skillsByOrbit[skill.orbit] || [];
                const totalInOrbit = orbitItems.length;
                const indexInOrbit = orbitItems.findIndex(s => s.id === skill.id);
                
                // Calculate spacing angles dynamically
                const startAngle = `${(indexInOrbit / totalInOrbit) * 360}deg`;
                
                // Check if this skill is targeted by active filter / search query
                const isQueryMatch = searchQuery === '' || skill.name.toLowerCase().includes(searchQuery.toLowerCase());
                const isCatMatch = activeFilter === 'All' || skill.category === activeFilter;
                const isHighlighted = isQueryMatch && isCatMatch;

                return (
                  <div
                    key={skill.id}
                    className="orbit-item group"
                    style={{
                      '--start-angle': startAngle,
                      '--orbit-radius': `var(--radius-${skill.orbit})`,
                      '--speed': getSpeed(skill.orbit),
                      '--play-state': isHighlighted ? 'running' : 'paused',
                    } as React.CSSProperties}
                  >
                    <motion.button
                      whileHover={{ scale: 1.15, zIndex: 100 }}
                      onClick={() => {
                        setCenterSkillName(skill.name);
                        setSelectedSkill(skill);
                      }}
                      className={`px-3 py-1.5 rounded-full border text-[9px] font-mono cursor-pointer transition-all duration-300 flex items-center gap-1.5 ${
                        isHighlighted
                          ? 'bg-black/85 backdrop-blur-md text-white hover:text-black font-semibold'
                          : 'bg-black/20 text-[#86868B]/40 border-transparent opacity-20 pointer-events-none'
                      }`}
                      style={{
                        borderColor: isHighlighted ? `${skill.color}40` : 'transparent',
                        boxShadow: isHighlighted ? `0 0 10px ${skill.color}15` : 'none',
                      }}
                      onMouseEnter={(e) => {
                        // Dynamically apply box glow on hover
                        if (isHighlighted) {
                          e.currentTarget.style.boxShadow = `0 0 18px ${skill.color}60`;
                          e.currentTarget.style.backgroundColor = skill.color;
                          e.currentTarget.style.color = '#000000';
                          e.currentTarget.style.borderColor = skill.color;
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isHighlighted) {
                          e.currentTarget.style.boxShadow = `0 0 10px ${skill.color}15`;
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.borderColor = `${skill.color}40`;
                        }
                      }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: skill.color }} />
                      <span>{skill.name}</span>
                    </motion.button>
                  </div>
                );
              })}

            </div>
          ) : (
            /* ================= GRID / MOBILE VIEW ================= */
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
              {filteredSkills.map((skill) => (
                <motion.div
                  key={skill.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -4, borderColor: skill.color }}
                  className="glassmorphism p-5 rounded-xl border-white/5 cursor-pointer flex flex-col justify-between transition-colors group"
                  onClick={() => setSelectedSkill(skill)}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[8px] font-mono uppercase tracking-wider text-[#86868B]">{skill.category}</span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: skill.color }} />
                  </div>
                  <h4 className="text-sm font-heading font-bold text-white group-hover:text-white transition-colors">{skill.name}</h4>
                  <div className="border-t border-white/5 pt-3 mt-3 flex justify-between items-center text-[10px]">
                    <span className="text-[#86868B] font-accent">Level</span>
                    <span className="font-mono text-white font-semibold">{skill.level}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>

        {/* Stats Panel & Helper */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-white/5 pt-8 mb-4">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glassmorphism p-4 rounded-xl border-white/5 flex items-center gap-4"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex-shrink-0">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white font-heading">{item.value}</span>
                <span className="text-[10px] text-[#86868B] uppercase font-bold tracking-wider font-accent">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Interactive Skill Details Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <div className="fixed inset-0 z-[2000] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSkill(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glassmorphism w-full max-w-md p-6 rounded-2xl border-white/10 relative z-10 overflow-hidden"
              style={{
                boxShadow: `0 0 40px ${selectedSkill.color}15`,
              }}
            >
              {/* Corner Glow Matching Skill Color */}
              <div
                className="absolute -top-12 -right-12 w-24 h-24 rounded-full blur-2xl opacity-20 pointer-events-none"
                style={{ backgroundColor: selectedSkill.color }}
              />

              {/* Close button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="absolute top-4 right-4 text-[#86868B] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-5">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedSkill.color }} />
                <div>
                  <span className="text-[9px] uppercase font-mono font-bold text-[#86868B] tracking-wider">
                    {selectedSkill.category} Skill
                  </span>
                  <h3 className="text-xl font-heading font-extrabold text-white mt-0.5">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col gap-4 text-xs">
                <div className="flex justify-between items-center p-3 rounded-xl border border-white/5 bg-white/[0.01]">
                  <span className="text-[#86868B] font-accent">Experience Level</span>
                  <span
                    className="font-mono font-bold px-2.5 py-0.5 rounded-full text-[10px]"
                    style={{
                      color: selectedSkill.color,
                      backgroundColor: `${selectedSkill.color}12`,
                      border: `1px solid ${selectedSkill.color}25`,
                    }}
                  >
                    {selectedSkill.level}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-[#86868B] uppercase font-bold text-[9px] tracking-wider">Representative Projects</span>
                  <p className="text-white/80 leading-relaxed font-sans border border-white/5 bg-white/[0.01] p-3 rounded-xl">
                    {selectedSkill.projects}
                  </p>
                </div>
              </div>

              {/* Footer action button */}
              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 w-full py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white text-xs font-bold font-accent transition-all cursor-pointer text-center"
              >
                Dismiss Logs
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
export default TechUniverse;
