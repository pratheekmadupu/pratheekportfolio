import React, { useState } from 'react';
import { BookOpen, X, Play, ShieldAlert, DollarSign, Terminal, Settings } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  techStack: string[];
  github: string;
  color: string;
  visualMockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [activeModal, setActiveModal] = useState<{ type: 'demo' | 'case'; id: string } | null>(null);
  
  // Custom calculator state for fintech demo
  const [budgetIncome, setBudgetIncome] = useState<number>(5000);
  const [calculatedBudget, setCalculatedBudget] = useState<{ needs: number; wants: number; savings: number } | null>(null);

  // Robot serial commands log
  const [robotLogs, setRobotLogs] = useState<string[]>([
    '[SYSTEM] COM3 serial connection initialized.',
    '[SYSTEM] Arduino handshake verified.',
  ]);

  const projectsList: Project[] = [
    {
      id: 'resqr',
      title: 'ResQR',
      subtitle: 'Emergency Response Startup',
      description: 'An emergency response platform designed to bridge communication lags in critical road accidents. Scans geolocate crash sites and load encrypted health data cards for emergency responders.',
      techStack: ['Startup Strategy', 'Encrypted Profiles', 'Geolocation Tracing', 'Market Validation'],
      github: 'https://github.com',
      color: '#00D4FF',
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#00D4FF]/3 border border-[#00D4FF]/10 rounded-xl">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>SYSTEM DASHBOARD</span>
            <span className="text-[#00D4FF] font-bold">ONLINE</span>
          </div>
          <div className="bg-[#00D4FF]/5 border border-[#00D4FF]/20 rounded-lg p-3 flex items-center gap-3">
            <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-ping" />
            <span className="text-[11px] text-white/90">Triage response node active: Hyderabad</span>
          </div>
          <div className="h-6 w-full bg-white/5 rounded flex items-center px-3 text-[10px] text-white/50">
            Scanning modules listening...
          </div>
        </div>
      ),
    },
    {
      id: 'logi',
      title: 'LOGI E-commerce',
      subtitle: 'Nutrition E-Commerce Platform',
      description: 'A full-stack nutrition platform equipped with secure roles authorization, dynamic catalogs, item search pathways, shopping cart calculators, and transaction records.',
      techStack: ['ReactJS', 'NodeJS', 'MongoDB', 'ExpressJS'],
      github: 'https://github.com',
      color: '#7B61FF',
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#7B61FF]/3 border border-[#7B61FF]/10 rounded-xl">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>LOGI CATALOG</span>
            <span>$USD</span>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex-shrink-0" />
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-white">Whey Isolate</span>
              <span className="text-[10px] text-[#86868B]">$64.99 • In Stock</span>
            </div>
          </div>
          <button className="w-full py-1.5 rounded-lg bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] text-black text-[11px] font-bold cursor-pointer">
            Add to Cart
          </button>
        </div>
      ),
    },
    {
      id: 'fintech',
      title: 'FinTech Manager',
      subtitle: 'Financial Management System',
      description: 'An advanced analytics platform constructed to calculate wealth growth charts, track expenditures, compile budgets, and integrate multi-currency calculation pipelines.',
      techStack: ['ReactJS', 'Finance APIs', 'TailwindCSS', 'ChartJS'],
      github: 'https://github.com',
      color: '#00FFC6',
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#00FFC6]/3 border border-[#00FFC6]/10 rounded-xl">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#86868B] uppercase">Net Worth</span>
              <span className="text-lg font-bold text-white mt-1">$124,582.00</span>
            </div>
            <span className="text-[10px] text-[#00FFC6] font-semibold bg-[#00FFC6]/10 px-2 py-0.5 rounded-full">+12.4%</span>
          </div>
          <div className="flex items-end h-12 gap-1 mt-4">
            <div className="w-full h-[30%] bg-white/5 rounded-t-sm" />
            <div className="w-full h-[50%] bg-white/5 rounded-t-sm" />
            <div className="w-full h-[70%] bg-white/5 rounded-t-sm" />
            <div className="w-full h-[95%] bg-[#00FFC6] rounded-t-sm" />
          </div>
        </div>
      ),
    },
    {
      id: 'eshop',
      title: 'eShop Deployment',
      subtitle: 'E-commerce Platform',
      description: 'A multi-version release e-commerce system featuring containerized microservices, indexing optimizations, advanced inventory catalogs, search paths, and dashboard analytics.',
      techStack: ['NextJS', 'PostgreSQL', 'Docker', 'Redis'],
      github: 'https://github.com',
      color: '#00D4FF',
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#00D4FF]/3 border border-[#00D4FF]/10 rounded-xl">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>DEPLOYMENT SYSTEM</span>
            <span className="text-[#00FFC6]">ACTIVE</span>
          </div>
          <div className="flex flex-col gap-1.5 font-mono text-[9px] text-[#86868B]">
            <div>✓ v2.1.0: SQL index optimization</div>
            <div>✓ v2.0.4: Redis caching pipelines</div>
            <div>✓ v2.0.0: Microservices setup</div>
          </div>
          <div className="text-[10px] text-white/50">3 containers online</div>
        </div>
      ),
    },
    {
      id: 'robot',
      title: 'Computer Control Robot',
      subtitle: 'IoT Project',
      description: 'An internet-guided robotics framework communicating over serial lines, enabling user GUI inputs to control motor speed, steering, and sensor logs via Arduino firmware.',
      techStack: ['Arduino', 'Embedded C', 'Serial Protocols', 'Robotics'],
      github: 'https://github.com',
      color: '#7B61FF',
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#7B61FF]/3 border border-[#7B61FF]/10 rounded-xl">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>ARDUINO SERIAL</span>
            <span className="text-[#7B61FF]">COM3</span>
          </div>
          <code className="block font-mono text-[8.5px] text-[#00FFC6] bg-black/60 p-2 rounded border border-white/5">
            [CMD] MOVE_FWD(10)<br />
            [OK] Motor current draw: 120mA<br />
            [OK] Steering aligned.
          </code>
          <div className="text-[9px] text-[#86868B]">Battery: 11.8V (94%)</div>
        </div>
      ),
    },
  ];

  const handleDemoAction = (action: string) => {
    if (action === 'alert') {
      alert("Simulation Success: Incident Broadcast Alert published! Geolocation coordinates 17.3850° N, 78.4867° E targeted. Close emergency units notified.");
    } else if (action === 'checkout') {
      alert("Simulation Success: Payment captured via simulator. Gateway response code 200. Signature Hash verified [7b61ff...]");
    }
  };

  const handleFintechCalc = () => {
    const income = budgetIncome;
    setCalculatedBudget({
      needs: +(income * 0.5).toFixed(2),
      wants: +(income * 0.3).toFixed(2),
      savings: +(income * 0.2).toFixed(2),
    });
  };

  const handleRobotCMD = (cmd: string) => {
    let logMsg = '';
    if (cmd === 'FORWARD') logMsg = '[CMD] MOVE_FORWARD_STEP(10) -> Motors: 255rpm';
    else if (cmd === 'LEFT') logMsg = '[CMD] TURN_LEFT_STEP(5) -> Motor A: 200rpm, Motor B: 0rpm';
    else if (cmd === 'STOP') logMsg = '[CMD] STOP_SHUTDOWN() -> Current draw: 0mA';
    else if (cmd === 'RIGHT') logMsg = '[CMD] TURN_RIGHT_STEP(5) -> Motor A: 0rpm, Motor B: 200rpm';
    else if (cmd === 'BACKWARD') logMsg = '[CMD] MOVE_BACKWARD_STEP(10) -> Motors: -255rpm';
    
    setRobotLogs(prev => [...prev, logMsg]);
  };

  const renderModalContent = () => {
    if (!activeModal) return null;
    const { id, type } = activeModal;

    if (type === 'case') {
      if (id === 'resqr') {
        return (
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold font-heading text-white flex items-center gap-2">
              <ShieldAlert className="text-[#00D4FF]" />
              <span>ResQR: Emergency Response Platform Case Study</span>
            </h2>
            <p className="text-[#86868B] text-sm leading-relaxed">
              ResQR is a startup conceptualization aiming to bypass information retrieval delays during serious accidents. Standard methods of identifying a victim's background (blood types, ICE contacts, medical logs) are slow, resulting in hazardous healthcare delays.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <h4 className="text-white font-semibold mb-2">Emergency Protocols</h4>
                <p className="text-xs text-[#86868B] leading-relaxed">Employs automated geolocation parsing, zero-knowledge QR links routing, and medical encryption keys.</p>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <h4 className="text-white font-semibold mb-2">Product Strategy</h4>
                <p className="text-xs text-[#86868B] leading-relaxed">Integrating scanning modules with helmet decals, vehicle dashboards, driver IDs, and insurance platforms.</p>
              </div>
            </div>
            <h3 className="text-lg font-bold font-heading text-white">System Security Architecture</h3>
            <p className="text-[#86868B] text-xs leading-relaxed">
              Authorized emergency terminals decrypt medical details from QR codes using encrypted session authentication. No databases retain unencrypted personal health records, preventing leak hazards while ensuring paramedic access within 2 seconds.
            </p>
            <button
              onClick={() => setActiveModal(null)}
              className="mt-4 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-xs font-accent self-end cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        );
      }
      return (
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold font-heading text-white">Case Study: {id.toUpperCase()}</h2>
          <p className="text-[#86868B] text-sm">Detailed product validation reports, framework diagrams, and release logs are compiled inside the repository database.</p>
          <button
            onClick={() => setActiveModal(null)}
            className="mt-4 px-6 py-2.5 bg-white/10 text-white rounded-full text-xs font-accent cursor-pointer"
          >
            Close Document
          </button>
        </div>
      );
    }

    // Live Demos
    if (id === 'resqr') {
      return (
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <ShieldAlert className="text-[#00D4FF]" />
            <span>ResQR Simulation Dashboard</span>
          </h2>
          <p className="text-xs text-[#86868B]">Interact with a victim lookup simulation.</p>
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5 flex flex-col gap-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-red-500 tracking-wider">⚠️ EMERGENCY LOOKUP ACTIVE</span>
              <span className="bg-red-500 text-black px-2 py-0.5 rounded text-[10px] font-bold">CRITICAL PROFILE</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div><span className="text-[#86868B]">Name:</span> <p className="font-medium text-white">Pratheek Madupu</p></div>
              <div><span className="text-[#86868B]">Blood Group:</span> <p className="font-medium text-red-400">O Positive (O+)</p></div>
              <div><span className="text-[#86868B]">Allergies:</span> <p className="font-medium text-white">Penicillin compounds</p></div>
              <div><span className="text-[#86868B]">ICE Phone:</span> <p className="font-medium text-[#00D4FF]">+91 98765 43210</p></div>
            </div>
          </div>
          <button
            onClick={() => handleDemoAction('alert')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-500 to-[#7B61FF] text-white text-xs font-bold font-accent hover:opacity-90 cursor-pointer"
          >
            Simulate Rescue Broadcast
          </button>
        </div>
      );
    }

    if (id === 'logi') {
      return (
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold font-heading text-white">LOGI Checkout Simulator</h2>
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col gap-3">
            <div className="flex justify-between text-xs text-[#86868B] border-b border-white/5 pb-2">
              <span>PRODUCT</span>
              <span>PRICE</span>
            </div>
            <div className="flex justify-between text-xs text-white">
              <span>1x LOGI Whey Protein (Chocolate)</span>
              <span>$64.99</span>
            </div>
            <div className="flex justify-between text-xs text-white">
              <span>1x LOGI Creatine Monohydrate</span>
              <span>$29.99</span>
            </div>
            <div className="flex justify-between text-xs text-[#00FFC6] font-bold border-t border-white/5 pt-2">
              <span>SUBTOTAL</span>
              <span>$94.98</span>
            </div>
          </div>
          <button
            onClick={() => handleDemoAction('checkout')}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] text-black text-xs font-bold font-accent cursor-pointer"
          >
            Pay with Razorpay Simulation
          </button>
        </div>
      );
    }

    if (id === 'fintech') {
      return (
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold font-heading text-white flex items-center gap-1">
            <DollarSign className="w-5 h-5 text-[#00FFC6]" />
            <span>FinTech Allocation Planner</span>
          </h2>
          <div className="flex flex-col gap-3">
            <label className="text-xs text-[#86868B]">Enter Monthly Net Income ($)</label>
            <input
              type="number"
              value={budgetIncome}
              onChange={(e) => setBudgetIncome(Number(e.target.value))}
              className="bg-white/5 border border-white/10 rounded-xl p-3 text-white text-sm focus:outline-none focus:border-[#7B61FF]"
            />
            <button
              onClick={handleFintechCalc}
              className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold font-accent cursor-pointer mt-1"
            >
              Run 50/30/20 Budget Formula
            </button>
            {calculatedBudget && (
              <div className="p-4 rounded-xl border border-white/5 bg-[#050507] mt-3 flex flex-col gap-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-[#86868B]">Needs (50%):</span>
                  <span className="text-white font-semibold">${calculatedBudget.needs}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#86868B]">Wants (30%):</span>
                  <span className="text-white font-semibold">${calculatedBudget.wants}</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-2">
                  <span className="text-[#86868B]">Savings / Investments (20%):</span>
                  <span className="text-[#00FFC6] font-bold">${calculatedBudget.savings}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (id === 'robot') {
      return (
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Terminal className="text-[#7B61FF]" />
            <span>Computer Control Robot GUI</span>
          </h2>
          <p className="text-xs text-[#86868B]">Simulate wireless commands to the Arduino motor controller board.</p>
          
          <div className="flex flex-col gap-3 items-center">
            <button onClick={() => handleRobotCMD('FORWARD')} className="px-4 py-2 border border-white/5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-accent cursor-pointer">▲ FORWARD</button>
            <div className="flex gap-2">
              <button onClick={() => handleRobotCMD('LEFT')} className="px-4 py-2 border border-white/5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-accent cursor-pointer">◀ LEFT</button>
              <button onClick={() => handleRobotCMD('STOP')} className="px-4 py-2 border border-red-500/20 bg-red-500/10 text-red-400 rounded-lg text-xs font-accent cursor-pointer">■ STOP</button>
              <button onClick={() => handleRobotCMD('RIGHT')} className="px-4 py-2 border border-white/5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-accent cursor-pointer">▶ RIGHT</button>
            </div>
            <button onClick={() => handleRobotCMD('BACKWARD')} className="px-4 py-2 border border-white/5 bg-white/5 hover:bg-white/10 text-white rounded-lg text-xs font-accent cursor-pointer">▼ REVERSE</button>
          </div>

          <div className="bg-black/80 rounded-xl p-3 border border-white/5 font-mono text-[9px] text-[#00FFC6] h-32 overflow-y-auto">
            {robotLogs.map((log, idx) => (
              <div key={idx} className="mb-1">{log}</div>
            ))}
          </div>
        </div>
      );
    }

    if (id === 'eshop') {
      return (
        <div className="flex flex-col gap-5">
          <h2 className="text-xl font-bold font-heading text-white flex items-center gap-2">
            <Settings className="text-[#00D4FF]" />
            <span>eShop Server Dashboard</span>
          </h2>
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02]">
            <span className="text-[10px] text-[#86868B] uppercase font-bold">Release History Logs</span>
            <ul className="flex flex-col gap-2 mt-3 text-xs text-[#86868B]">
              <li><strong className="text-white">v2.1.0-alpha:</strong> Optimized SQL index layouts for faster item searches under high concurrent traffic loads.</li>
              <li><strong className="text-white">v2.0.4:</strong> Set up Redis pipelining channels to buffer and cache catalog requests.</li>
              <li><strong className="text-white">v2.0.0:</strong> Refactored backend structure to load in containerized Docker environments.</li>
            </ul>
          </div>
          <button
            onClick={() => setActiveModal(null)}
            className="w-full py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white text-xs font-bold font-accent cursor-pointer"
          >
            Close Dashboard
          </button>
        </div>
      );
    }

    return null;
  };

  return (
    <section id="projects" className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#00FFC6]/2 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#7B61FF]/2 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00D4FF] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            Portfolio
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            Featured Projects
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] max-w-xl mx-auto text-base sm:text-lg"
          >
            Explore interactive simulated live demos and product validation papers of software engineering, robotics, and startup systems.
          </motion.p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="glassmorphism rounded-2xl flex flex-col justify-between overflow-hidden border-white/5 hover:border-white/10 h-full group"
            >
              {/* Graphic Mockup Panel */}
              <div className="h-44 p-4 border-b border-white/5 bg-black/40 flex items-center justify-center relative overflow-hidden">
                {project.visualMockup}
              </div>

              {/* Text Body */}
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <span className="text-[10px] uppercase font-bold font-accent tracking-wider" style={{ color: project.color }}>
                    {project.subtitle}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-white mt-1 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#86868B] leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.map((tech, techIdx) => (
                    <span key={techIdx} className="text-[9px] font-mono text-[#86868B] bg-white/5 border border-white/5 px-2 py-0.5 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-3 mt-auto">
                  <button
                    onClick={() => setActiveModal({ type: 'demo', id: project.id })}
                    className="flex-grow py-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#7B61FF] hover:text-black border border-white/5 text-white/80 hover:border-transparent text-xs font-semibold font-accent flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </button>

                  <button
                    onClick={() => setActiveModal({ type: 'case', id: project.id })}
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-[#86868B] hover:text-white cursor-pointer"
                    title="Case Study"
                  >
                    <BookOpen className="w-4 h-4" />
                  </button>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-[#86868B] hover:text-white cursor-pointer"
                    title="GitHub Repository"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Global Interactive Project Modals Container */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glassmorphism w-full max-w-xl p-6 rounded-2xl relative z-10 border-white/10 max-h-[85vh] overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 text-[#86868B] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Dynamic Content */}
              {renderModalContent()}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
