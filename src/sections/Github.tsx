import React, { useMemo, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Star, BookOpen, BarChart, Users, ExternalLink } from 'lucide-react';

export const Github: React.FC = () => {
  // Dynamic states with fallback values
  const [profile, setProfile] = useState({
    avatarUrl: 'https://avatars.githubusercontent.com/u/104933996?v=4',
    publicRepos: 25,
    followers: 18,
    username: '@pratheekmadupu',
    bio: 'Full Stack Developer | Cybersecurity Enthusiast | Startup Builder'
  });

  const [featuredRepos, setFeaturedRepos] = useState([
    { name: 'logi-nutrition', description: 'Low Glycemic catalog web application built with React and Firestore database protocols.', stars: 6, language: 'JavaScript', url: 'https://github.com/pratheekmadupu' },
    { name: 'resqr-sos', description: 'Emergency response platform broadcasting live geolocations via custom SMS API routing.', stars: 9, language: 'TypeScript', url: 'https://github.com/pratheekmadupu' },
    { name: 'finrl-manager', description: 'Personal wealth tracking application implementing the 50/30/20 budgeting calculations.', stars: 4, language: 'JavaScript', url: 'https://github.com/pratheekmadupu' },
    { name: 'accessshield-rbac', description: 'Cybersecurity auth portal simulating Role-Based Access Control and MFA tokens.', stars: 5, language: 'JavaScript', url: 'https://github.com/pratheekmadupu' }
  ]);

  useEffect(() => {
    // Fetch user details
    fetch('https://api.github.com/users/pratheekmadupu')
      .then(res => res.json())
      .then(data => {
        if (data && data.login) {
          setProfile({
            avatarUrl: data.avatar_url || 'https://avatars.githubusercontent.com/u/104933996?v=4',
            publicRepos: data.public_repos ?? 25,
            followers: data.followers ?? 18,
            username: `@${data.login}`,
            bio: data.bio || 'Full Stack Developer | Cybersecurity Enthusiast | Startup Builder'
          });
        }
      })
      .catch(() => {}); // fallback silent

    // Fetch repositories
    fetch('https://api.github.com/users/pratheekmadupu/repos?sort=updated&per_page=12')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          const nonForks = data
            .filter(r => !r.fork)
            .map(r => ({
              name: r.name,
              description: r.description || 'Open source project and developer utility.',
              stars: r.stargazers_count,
              language: r.language || 'JavaScript',
              url: r.html_url
            }))
            .slice(0, 4);
          if (nonForks.length > 0) {
            setFeaturedRepos(nonForks);
          }
        }
      })
      .catch(() => {}); // fallback silent
  }, []);

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
    { label: 'Total Repositories', value: profile.publicRepos, icon: <BookOpen className="w-4 h-4 text-[#00D4FF]" /> },
    { label: 'Followers', value: profile.followers, icon: <Users className="w-4 h-4 text-[#7B61FF]" /> },
    { label: 'Languages Used', value: '4 Main', icon: <BarChart className="w-4 h-4 text-[#00FFC6]" /> },
    { label: 'Pull Requests', value: '18+', icon: <GitPullRequest className="w-4 h-4 text-[#FF3366]" /> },
  ];

  const languages = [
    { name: 'JavaScript', percent: 45, color: '#00FFC6' },
    { name: 'TypeScript', percent: 35, color: '#7B61FF' },
    { name: 'HTML/CSS', percent: 12, color: '#00D4FF' },
    { name: 'Embedded C', percent: 8, color: '#9933FF' },
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
            Open Source
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            GitHub Activity
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            Live synchronization with GitHub profiles. Tracking open-source packages, contribution loops, and featured repositories.
          </motion.p>
        </div>

        {/* Profile Card & Stats Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* User Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-6 rounded-2xl border-white/5 flex flex-col justify-between items-start text-left"
          >
            <div className="flex gap-4 items-center mb-4">
              <img
                src={profile.avatarUrl}
                alt="GitHub Avatar"
                className="w-14 h-14 rounded-full border-2 border-[#7B61FF] bg-black/40"
              />
              <div className="flex flex-col">
                <span className="text-base font-bold text-white font-heading font-sans">Pratheek Madupu</span>
                <span className="text-xs text-[#00D4FF] font-mono">{profile.username}</span>
              </div>
            </div>
            <p className="text-xs text-[#86868B] leading-relaxed mb-6">
              {profile.bio}
            </p>
            <a
              href="https://github.com/pratheekmadupu"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-lg bg-[#7B61FF] hover:bg-[#7B61FF]/90 text-black text-xs font-bold font-accent flex items-center gap-2 hover:shadow-[0_0_15px_rgba(123,97,255,0.4)] transition-all cursor-pointer"
            >
              <span>Visit GitHub</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </motion.div>

          {/* Stats Badges Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glassmorphism p-5 rounded-2xl border-white/5 hover:border-white/10 flex items-center justify-between text-left"
              >
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-[#86868B] font-accent uppercase tracking-wider">{stat.label}</span>
                  <span className="text-2xl font-bold text-white font-heading">{stat.value}</span>
                </div>
                <div className="p-2.5 bg-white/5 border border-white/5 rounded-lg">
                  {stat.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Heatmap & Languages Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Heatmap Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glassmorphism p-6 rounded-2xl border-white/5 flex flex-col justify-between text-left"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-heading font-bold text-white">Contribution Heatmap</span>
              <span className="text-xs text-[#86868B] font-mono">365-day tracking cycle</span>
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
            className="lg:col-span-4 glassmorphism p-6 rounded-2xl border-white/5 flex flex-col justify-between text-left"
          >
            <span className="text-sm font-heading font-bold text-white mb-6">Language Metrics</span>
            
            <div className="relative w-28 h-28 mx-auto flex items-center justify-center mb-6">
              <svg className="w-full h-full transform -rotate-90">
                {/* JavaScript: 45% */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#00FFC6]" strokeDasharray="124.34 276.32" strokeDashoffset="0" />
                {/* TypeScript: 35% */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#7B61FF]" strokeDasharray="96.71 276.32" strokeDashoffset="-124.34" />
                {/* HTML/CSS: 12% */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#00D4FF]" strokeDasharray="33.16 276.32" strokeDashoffset="-221.05" />
                {/* Embedded C: 8% */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#9933FF]" strokeDasharray="22.10 276.32" strokeDashoffset="-254.21" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-[9px] text-[#86868B] uppercase">Top Tech</span>
                <span className="text-xs font-bold text-white">JavaScript</span>
              </div>
            </div>

            {/* Labels */}
            <div className="flex flex-col gap-2.5">
              {languages.map((lang, idx) => (
                <div key={idx} className="flex justify-between items-center text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }} />
                    <span className="text-white/80">{lang.name}</span>
                  </div>
                  <span className="text-[#86868B]">{lang.percent}%</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Featured Repos Grid */}
        <div className="text-left mb-6">
          <span className="text-xs text-[#86868B] uppercase font-bold tracking-wider mb-4 block">Featured Repositories</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredRepos.map((repo, idx) => (
              <motion.a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="glassmorphism p-5 rounded-2xl border-white/5 hover:border-white/10 flex flex-col justify-between items-start text-left cursor-pointer group hover:bg-white/[0.02] transition-all"
              >
                <div className="w-full">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-sm font-bold text-white font-heading group-hover:text-[#7B61FF] transition-colors">
                      {repo.name}
                    </h4>
                    <ExternalLink className="w-3.5 h-3.5 text-[#86868B] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-xs text-[#86868B] leading-relaxed mb-4">
                    {repo.description}
                  </p>
                </div>
                <div className="flex justify-between items-center w-full text-[10px] text-[#86868B] font-mono mt-auto">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.language === 'TypeScript' ? '#7B61FF' : '#00FFC6' }} />
                    {repo.language}
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    {repo.stars} stars
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Github;
