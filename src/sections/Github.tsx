import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Star, BookOpen, BarChart } from 'lucide-react';

export const Github: React.FC = () => {
  // Generate simulated contribution heatmap blocks
  const heatmapCells = useMemo(() => {
    const cells = [];
    const total = 53 * 7;
    for (let i = 0; i < total; i++) {
      const dayOfWeek = i % 7;
      const rand = Math.random();
      let level = 0;
      
      // Mimic typical developer patterns (gaps, weekday peaks)
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        if (rand > 0.8) level = Math.floor(Math.random() * 3);
      } else {
        if (rand > 0.85) level = 4;
        else if (rand > 0.6) level = 3;
        else if (rand > 0.3) level = 2;
        else if (rand > 0.1) level = 1;
      }
      cells.push({ id: i, level });
    }
    return cells;
  }, []);

  const stats = [
    { label: 'Repositories', value: '42', icon: <BookOpen className="w-4 h-4 text-[#00D4FF]" /> },
    { label: 'Stars Earned', value: '152', icon: <Star className="w-4 h-4 text-[#7B61FF]" /> },
    { label: 'Commits (2026)', value: '1,840', icon: <BarChart className="w-4 h-4 text-[#00FFC6]" /> },
    { label: 'Pull Requests', value: '36', icon: <GitPullRequest className="w-4 h-4 text-[#00D4FF]" /> },
  ];

  const languages = [
    { name: 'Python', percent: 45, color: '#00D4FF' },
    { name: 'TypeScript', percent: 30, color: '#7B61FF' },
    { name: 'JavaScript', percent: 15, color: '#00FFC6' },
    { name: 'Swift', percent: 10, color: '#FFD700' },
  ];

  return (
    <section id="github" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-[#7B61FF]/3 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#7B61FF] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            Activity Logs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            GitHub Open Source
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            Analytics and contributions gathered from open repositories, libraries integrations, and dev frameworks.
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glassmorphism p-6 rounded-xl border-white/5 hover:border-white/10 flex items-center justify-between"
            >
              <div className="flex flex-col gap-1">
                <span className="text-xs text-[#86868B] font-accent uppercase tracking-wider">{stat.label}</span>
                <span className="text-2xl font-bold text-white font-heading">{stat.value}</span>
              </div>
              <div className="p-3 bg-white/5 border border-white/5 rounded-lg">
                {stat.icon}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Heatmap & Languages Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Heatmap Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glassmorphism p-6 rounded-2xl border-white/5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-heading font-bold text-white">Contribution Heatmap</span>
              <span className="text-xs text-[#86868B] font-mono">1,840 commits in the past year</span>
            </div>

            {/* Grid Container */}
            <div className="overflow-x-auto w-full">
              <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[620px] pb-3">
                {heatmapCells.map((cell) => {
                  let bg = 'bg-white/[0.02] border border-white/[0.01]';
                  if (cell.level === 1) bg = 'bg-[#0e4429] border border-transparent';
                  else if (cell.level === 2) bg = 'bg-[#006d32] border border-transparent';
                  else if (cell.level === 3) bg = 'bg-[#26a641] border border-transparent';
                  else if (cell.level === 4) bg = 'bg-[#39d353] border border-transparent';

                  return (
                    <div
                      key={cell.id}
                      className={`w-2.5 h-2.5 rounded-sm transition-all hover:scale-125 ${bg}`}
                      title={`Commit level: ${cell.level}`}
                    />
                  );
                })}
              </div>
            </div>

            <div className="flex justify-end gap-1.5 items-center text-[10px] text-[#86868B] font-mono mt-4">
              <span>Less</span>
              <div className="w-2.5 h-2.5 rounded-sm bg-white/[0.02]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#0e4429]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#006d32]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#26a641]" />
              <div className="w-2.5 h-2.5 rounded-sm bg-[#39d353]" />
              <span>More</span>
            </div>
          </motion.div>

          {/* Languages Breakdown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-4 glassmorphism p-6 rounded-2xl border-white/5 flex flex-col justify-between"
          >
            <span className="text-sm font-heading font-bold text-white mb-6">Language Metrics</span>
            
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center mb-6">
              {/* Conic Gradient SVG representation */}
              <svg className="w-full h-full transform -rotate-90">
                {/* Python: 45% (dasharray: 45 55) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#00D4FF]" strokeDasharray="124.34 276.32" strokeDashoffset="0" />
                {/* TS: 30% (dasharray: 30 70) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#7B61FF]" strokeDasharray="82.89 276.32" strokeDashoffset="-124.34" />
                {/* JS: 15% (dasharray: 15 85) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#00FFC6]" strokeDasharray="41.45 276.32" strokeDashoffset="-207.23" />
                {/* Swift: 10% (dasharray: 10 90) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#FFD700]" strokeDasharray="27.63 276.32" strokeDashoffset="-248.68" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-xs text-[#86868B] uppercase">Top Tech</span>
                <span className="text-sm font-bold text-white">Python</span>
              </div>
            </div>

            {/* Labels */}
            <div className="flex flex-col gap-2.5">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-white/80">{lang.name}</span>
                  </div>
                  <span className="text-[#86868B] font-mono">{lang.percent}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Github;
