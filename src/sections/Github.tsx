import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { GitPullRequest, Star, BookOpen, BarChart, ArrowUpRight, Eye } from 'lucide-react';

const GithubIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const Github: React.FC = () => {
  const [profileData, setProfileData] = React.useState({
    avatarUrl: 'https://avatars.githubusercontent.com/u/220449809?v=4',
    followers: 1,
    following: 1,
    publicRepos: 34,
    totalStars: 24,
  });

  React.useEffect(() => {
    fetch('https://api.github.com/users/pratheekmadupu')
      .then(res => {
        if (!res.ok) throw new Error('Rate limit or network error');
        return res.json();
      })
      .then(data => {
        if (data && data.avatar_url) {
          setProfileData(prev => ({
            ...prev,
            avatarUrl: data.avatar_url,
            followers: data.followers !== undefined ? data.followers : prev.followers,
            following: data.following !== undefined ? data.following : prev.following,
            publicRepos: data.public_repos !== undefined ? data.public_repos : prev.publicRepos,
          }));
        }
      })
      .catch(err => console.warn('Using fallback profile data:', err));

    fetch('https://api.github.com/users/pratheekmadupu/repos?per_page=100')
      .then(res => {
        if (!res.ok) throw new Error('Rate limit or network error');
        return res.json();
      })
      .then(repos => {
        if (Array.isArray(repos)) {
          const starsSum = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
          setProfileData(prev => ({
            ...prev,
            totalStars: starsSum,
          }));
        }
      })
      .catch(err => console.warn('Using fallback repositories data:', err));
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
    { label: 'Public Repositories', value: String(profileData.publicRepos), icon: <BookOpen className="w-4 h-4 text-[#00D4FF]" /> },
    { label: 'Total Stars', value: String(profileData.totalStars), icon: <Star className="w-4 h-4 text-[#7B61FF]" /> },
    { label: 'Commits (2026)', value: '1,284', icon: <BarChart className="w-4 h-4 text-[#00FFC6]" /> },
    { label: 'Pull Requests', value: '28', icon: <GitPullRequest className="w-4 h-4 text-[#00D4FF]" /> },
  ];

  const languages = [
    { name: 'HTML/CSS', percent: 45, color: '#e34c26' },
    { name: 'JavaScript', percent: 25, color: '#f1e05a' },
    { name: 'TypeScript', percent: 20, color: '#3178c6' },
    { name: 'Python', percent: 10, color: '#3572A5' },
  ];

  const featuredRepos = [
    {
      name: 'LOGI',
      description: 'Founded and developed a health-focused startup web platform promoting low glycemic nutritional products using React.js and Firebase.',
      language: 'HTML/CSS',
      languageColor: '#e34c26',
      stars: '1',
      forks: '0',
      url: 'https://github.com/pratheekmadupu/LOGI',
    },
    {
      name: 'emergency-qr',
      description: 'The core emergency response platform application logic utilizing encrypted health profiles, SOS alerts, and map routing integrations.',
      language: 'HTML/CSS',
      languageColor: '#e34c26',
      stars: '1',
      forks: '0',
      url: 'https://github.com/pratheekmadupu/emergency-qr',
    },
    {
      name: 'finrl',
      description: 'Personal finance management system constructed to track wealth pipelines, compiling budgets, expenditures, and income streams.',
      language: 'HTML/CSS',
      languageColor: '#e34c26',
      stars: '0',
      forks: '0',
      url: 'https://github.com/pratheekmadupu/finrl',
    },
    {
      name: '3d',
      description: 'Dynamic 3D universe environments, landing web architectures, and advanced WebGL particles visualization tools using TypeScript.',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: '0',
      forks: '0',
      url: 'https://github.com/pratheekmadupu/3d',
    },
  ];

  return (
    <section id="github" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-[#7B61FF]/3 rounded-full blur-[90px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
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
            GitHub Showcase
          </motion.h2>
          
          {/* User Info Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glassmorphism p-6 rounded-2xl border-white/5 flex flex-col sm:flex-row items-center gap-6 max-w-xl w-full mb-8"
          >
            <img 
              src={profileData.avatarUrl} 
              alt="Pratheek Madupu GitHub Avatar" 
              className="w-16 h-16 rounded-full border-2 border-[#7B61FF]/40 shadow-lg"
            />
            <div className="flex-grow text-center sm:text-left">
              <h3 className="text-lg font-bold text-white">Pratheek Madupu</h3>
              <p className="text-sm text-[#86868B] font-mono mt-0.5">@pratheekmadupu</p>
              <div className="flex items-center justify-center sm:justify-start gap-3 mt-2 text-xs text-white/70">
                <span>Followers: {profileData.followers}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                <span>Following: {profileData.following}</span>
              </div>
            </div>
            
            <button
              onClick={() => window.open('https://github.com/pratheekmadupu', '_blank')}
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold font-accent text-xs flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <GithubIcon className="w-4 h-4 text-[#00D4FF]" />
              <span>Visit GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#86868B]" />
            </button>
          </motion.div>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          {/* Heatmap Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glassmorphism p-6 rounded-2xl border-white/5 flex flex-col justify-between"
          >
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-heading font-bold text-white">Contribution Heatmap</span>
              <span className="text-xs text-[#86868B] font-mono">1,284 commits in the past year</span>
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
                {/* HTML/CSS: 45% (dasharray: 45 55) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#e34c26]" strokeDasharray="124.34 276.32" strokeDashoffset="0" />
                {/* JS: 25% (dasharray: 25 75) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#f1e05a]" strokeDasharray="69.08 276.32" strokeDashoffset="-124.34" />
                {/* TS: 20% (dasharray: 20 80) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#3178c6]" strokeDasharray="55.26 276.32" strokeDashoffset="-193.42" />
                {/* Python: 10% (dasharray: 10 90) */}
                <circle cx="56" cy="56" r="44" className="fill-none stroke-[12] stroke-[#3572A5]" strokeDasharray="27.63 276.32" strokeDashoffset="-248.68" />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-[9px] text-[#86868B] uppercase">Top Tech</span>
                <span className="text-xs font-bold text-white">HTML/CSS</span>
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

        {/* Featured Repositories Header */}
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
            <Star className="w-4 h-4 text-[#7B61FF]" />
            <span>Featured Open Source Repositories</span>
          </h3>
        </div>

        {/* Featured Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredRepos.map((repo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="glassmorphism p-6 rounded-2xl border-white/5 hover:border-white/10 flex flex-col justify-between group cursor-pointer"
              onClick={() => window.open(repo.url, '_blank')}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white group-hover:text-[#00D4FF] transition-colors flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#86868B]" />
                    {repo.name}
                  </span>
                  <Eye className="w-4 h-4 text-white/35 group-hover:text-white transition-colors" />
                </div>
                <p className="text-xs text-[#86868B] leading-relaxed mb-6">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center justify-between border-t border-white/5 pt-4 text-[10px] text-[#86868B] font-mono">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: repo.languageColor }} />
                    <span>{repo.language}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    <span>{repo.stars}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="6" y1="3" x2="6" y2="15" />
                      <circle cx="18" cy="6" r="3" />
                      <circle cx="6" cy="18" r="3" />
                      <path d="M18 9a9 9 0 0 1-9 9" />
                    </svg>
                    <span>{repo.forks}</span>
                  </div>
                </div>
                <span className="text-[#7B61FF] font-semibold flex items-center gap-0.5 group-hover:underline">
                  Repo Link <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Github;

