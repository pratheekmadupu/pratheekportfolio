import React, { useState } from 'react';
import { X, Play, ShieldAlert, Lock, Upload, Heart, ExternalLink, Activity, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: string;
  role?: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  color: string;
  highlights: string[];
  visualMockup: React.ReactNode;
}

export const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // States for interactive simulations inside modals
  // 1. LOGI: Glycemic index lookup
  const [foodQuery, setFoodQuery] = useState('');
  const [foodResult, setFoodResult] = useState<{ name: string; gi: number; status: 'Low' | 'Medium' | 'High' } | null>(null);

  // 2. ResQR: SOS trigger
  const [sosStatus, setSosStatus] = useState<'idle' | 'triggered' | 'notified'>('idle');
  const [emergencyName] = useState('Pratheek Madupu');
  const [emergencyBlood] = useState('O+');

  // 3. FINRL: Budget planner
  const [incomeInput, setIncomeInput] = useState<number>(5000);
  const [budgetPlan, setBudgetPlan] = useState<{ needs: number; wants: number; savings: number } | null>(null);

  // 4. AccessShield: RBAC simulation
  const [activeRole, setActiveRole] = useState<'Guest' | 'User' | 'Administrator'>('Guest');
  const [auditLog, setAuditLog] = useState<string[]>(['[SYSTEM] RBAC Engine Initialized. Active Role: Guest']);

  // 5. SecureVault: Encryption simulation
  const [plaintextFile, setPlaintextFile] = useState('');
  const [encryptedFile, setEncryptedFile] = useState('');
  const [vaultKey, setVaultKey] = useState('');
  const [isEncrypting, setIsEncrypting] = useState(false);

  // 6. Robot: Serial Command logs
  const [robotLogList, setRobotLogList] = useState<string[]>([
    '[SYSTEM] COM3 serial connection active.',
    '[SYSTEM] Arduino Uno handshake verified.'
  ]);

  const projectsList: Project[] = [
    {
      id: 'logi',
      title: 'LOGI',
      category: 'HealthTech Startup',
      role: 'Founder & Full Stack Developer',
      description: 'A health-focused startup and digital-first catalog facilitating low glycemic diet adoption.',
      techStack: ['React.js', 'Firebase', 'JavaScript', 'Cloud Firestore'],
      liveUrl: 'https://logi.company',
      color: '#7B61FF',
      highlights: [
        'Founded and developed a health-focused startup advocating low glycemic diets.',
        'Created a responsive e-commerce web platform integrating Firebase Authentication and Hosting.',
        'Managed cloud databases using Firebase Cloud Firestore for real-time inventory management.'
      ],
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#7B61FF]/3 border border-[#7B61FF]/10 rounded-xl font-sans text-left">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>LOGI HEALTH</span>
            <span className="text-[#00FFC6] font-bold">100% ONLINE</span>
          </div>
          <div className="flex gap-3 items-center my-2">
            <div className="w-9 h-9 rounded-lg bg-[#7B61FF]/10 border border-[#7B61FF]/20 flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#7B61FF]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-white">Glycemic Index Catalog</span>
              <span className="text-[9px] text-[#86868B]">Firebase Realtime Database</span>
            </div>
          </div>
          <div className="w-full py-1.5 rounded-lg bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] text-black text-[10px] font-bold text-center">
            Explore Low GI Products
          </div>
        </div>
      )
    },
    {
      id: 'resqr',
      title: 'ResQR',
      category: 'Emergency Response Platform',
      role: 'Product Developer',
      description: 'An emergency response application mapping real-time locations and ICE health profiles for accident victims.',
      techStack: ['React.js', 'Node.js', 'Firebase', 'Google Maps API'],
      liveUrl: 'https://resqr.co.in',
      color: '#00D4FF',
      highlights: [
        'Developed emergency response system to locate and identify road accident victims.',
        'Implemented SOS notifications broadcasting geolocations via API pipelines.',
        'Integrated encrypted ICE health profiles accessible in seconds via dynamic QR scanning.'
      ],
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#00D4FF]/3 border border-[#00D4FF]/10 rounded-xl font-sans text-left">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>ResQR LOCATOR</span>
            <span className="text-red-500 font-semibold animate-pulse">● SOS LISTENER</span>
          </div>
          <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-2.5 flex items-center gap-2.5 my-2">
            <ShieldAlert className="w-4 h-4 text-red-500 animate-bounce" />
            <div className="flex flex-col">
              <span className="text-[10px] text-white font-bold">Beacon Detected</span>
              <span className="text-[8px] text-[#86868B]">Coordinates: 17.3850° N</span>
            </div>
          </div>
          <div className="text-[10px] text-[#86868B] font-mono">
            Awaiting response ping...
          </div>
        </div>
      )
    },
    {
      id: 'finrl',
      title: 'FINRL',
      category: 'FinTech Application',
      role: 'Full Stack Developer',
      description: 'Personal budget management application automating the 50/30/20 division of resources.',
      techStack: ['React.js', 'Firebase', 'Tailwind CSS', 'Chart.js'],
      color: '#00FFC6',
      highlights: [
        'Designed budget monitoring software tracking income, spendings, and savings targets.',
        'Structured real-time financial dashboards displaying currency allocation matrices.',
        'Optimized system state management to execute high-speed calculations.'
      ],
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#00FFC6]/3 border border-[#00FFC6]/10 rounded-xl font-sans text-left">
          <div className="flex justify-between items-start">
            <div className="flex flex-col">
              <span className="text-[9px] text-[#86868B] uppercase font-bold">Monthly Savings</span>
              <span className="text-base font-bold text-white mt-0.5">$1,840.00</span>
            </div>
            <span className="text-[8px] text-[#00FFC6] font-semibold bg-[#00FFC6]/10 px-2 py-0.5 rounded-full">+20% Saved</span>
          </div>
          <div className="flex items-end h-10 gap-1 mt-3">
            <div className="w-full h-[35%] bg-white/5 rounded-t-sm" />
            <div className="w-full h-[55%] bg-white/5 rounded-t-sm" />
            <div className="w-full h-[85%] bg-[#00FFC6] rounded-t-sm" />
          </div>
        </div>
      )
    },
    {
      id: 'accessshield',
      title: 'AccessShield',
      category: 'Cybersecurity Project',
      role: 'Security Engineer',
      description: 'Authentication portal demonstrating Role-Based Access Control and MFA tokens configuration.',
      techStack: ['React.js', 'Firebase Authentication', 'Cloud Firestore'],
      color: '#FF3366',
      highlights: [
        'Engineered secure portal implementing Role-Based Access Control (RBAC).',
        'Configured MFA tokens validation layers to harden identity vectors.',
        'Conducted security audits against OWASP vulnerabilities to check validation scripts.'
      ],
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#FF3366]/3 border border-[#FF3366]/10 rounded-xl font-mono text-[9px] text-left">
          <div className="flex justify-between items-center text-[#86868B] font-sans">
            <span>AccessShield MFA</span>
            <span className="text-[#FF3366]">PROTECTED</span>
          </div>
          <code className="block bg-black/60 p-2 rounded border border-white/5 text-[#00FFC6] my-2">
            [MFA] Verify token: 839-204<br />
            [OK] Token accepted.<br />
            [OK] Role: admin access granted.
          </code>
          <div className="flex items-center gap-1 text-[#86868B] font-sans">
            <Lock className="w-3 h-3 text-[#FF3366]" />
            <span>Encrypted handshakes active</span>
          </div>
        </div>
      )
    },
    {
      id: 'securevault',
      title: 'SecureVault',
      category: 'Cybersecurity Project',
      role: 'Security & Systems Developer',
      description: 'Document repository using client-side cryptographic hashing and AES-256 local encryption.',
      techStack: ['React.js', 'Node.js', 'Firebase', 'CryptoJS'],
      color: '#FF9900',
      highlights: [
        'Created a document hosting vault executing secure file encryption.',
        'Applied client-side cryptographic hashing preventing unauthorized server reads.',
        'Wrote custom access controls rules validating document keys.'
      ],
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#FF9900]/3 border border-[#FF9900]/10 rounded-xl font-sans text-left">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>SecureVault CLOUD</span>
            <span className="text-[#FF9900]">ZERO-KNOWLEDGE</span>
          </div>
          <div className="border border-dashed border-[#FF9900]/30 rounded-lg p-2.5 flex items-center justify-center gap-2 my-2 bg-white/[0.01]">
            <Upload className="w-4 h-4 text-[#FF9900]" />
            <span className="text-[10px] text-[#86868B]">Drag & Drop to Encrypt</span>
          </div>
          <div className="text-[9px] text-[#86868B] font-mono text-center">
            AES-256 local client execution
          </div>
        </div>
      )
    },
    {
      id: 'robot',
      title: 'Computer-Controlled Robot',
      category: 'IoT & Robotics',
      role: 'IoT Developer',
      description: 'Firmware controller and hardware pathfinder handling serial communications and ultrasonic feedback.',
      techStack: ['Arduino', 'Embedded C', 'Serial Protocols', 'Sensors'],
      color: '#9933FF',
      highlights: [
        'Engineered a computer-guided robot executing real-time locomotion.',
        'Programmed Arduino board firmware handling telemetry data streams.',
        'Configured ultrasonic sensors resolving obstacle avoidance pathing.'
      ],
      visualMockup: (
        <div className="w-full h-full flex flex-col justify-between p-5 bg-[#9933FF]/3 border border-[#9933FF]/10 rounded-xl font-sans text-left">
          <div className="flex justify-between items-center text-[10px] text-[#86868B]">
            <span>ARDUINO SERIAL</span>
            <span className="text-[#9933FF] font-mono font-bold">COM3</span>
          </div>
          <div className="flex gap-2 justify-center my-2">
            <div className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white">FWD</div>
            <div className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white">L</div>
            <div className="px-2 py-1 bg-red-500/20 border border-red-500/30 rounded font-mono text-[9px] text-red-400">STOP</div>
            <div className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[9px] text-white">R</div>
          </div>
          <div className="text-[9px] text-[#86868B] font-mono">
            Actuator telemetry: 255 RPM
          </div>
        </div>
      )
    }
  ];

  // LOGI: Glycemic Index query execution
  const executeFoodGI = (query: string) => {
    if (!query) return;
    const foods: { [key: string]: { name: string; gi: number; status: 'Low' | 'Medium' | 'High' } } = {
      apple: { name: 'Fresh Apple', gi: 39, status: 'Low' },
      banana: { name: 'Ripe Banana', gi: 51, status: 'Low' },
      oats: { name: 'Rolled Oats', gi: 55, status: 'Low' },
      rice: { name: 'White Rice', gi: 72, status: 'High' },
      bread: { name: 'White Bread', gi: 75, status: 'High' },
      sugar: { name: 'Sucrose (Sugar)', gi: 65, status: 'Medium' },
      lentils: { name: 'Boiled Lentils', gi: 32, status: 'Low' }
    };
    const key = query.toLowerCase().trim();
    if (foods[key]) {
      setFoodResult(foods[key]);
    } else {
      // Generate simulated result
      const giVal = Math.floor(Math.random() * 55) + 30; // 30-85
      let status: 'Low' | 'Medium' | 'High' = 'Low';
      if (giVal > 69) status = 'High';
      else if (giVal > 54) status = 'Medium';

      setFoodResult({
        name: query.charAt(0).toUpperCase() + query.slice(1),
        gi: giVal,
        status
      });
    }
  };

  // FINRL: calculate budget allocation
  const calculateBudget = () => {
    setBudgetPlan({
      needs: +(incomeInput * 0.5).toFixed(2),
      wants: +(incomeInput * 0.3).toFixed(2),
      savings: +(incomeInput * 0.2).toFixed(2)
    });
  };

  // AccessShield: RBAC Simulation
  const triggerRBACRole = (role: 'Guest' | 'User' | 'Administrator') => {
    setActiveRole(role);
    let logMsg = '';
    if (role === 'Guest') logMsg = `[AUDIT] Role changed to Guest. READ permissions allowed. WRITE/DELETE blocked.`;
    else if (role === 'User') logMsg = `[AUDIT] Role changed to User. READ/WRITE allowed. DELETE blocked.`;
    else logMsg = `[AUDIT] Role changed to Administrator. Full CRUD permissions verified via Auth context.`;
    setAuditLog(prev => [...prev, logMsg]);
  };

  // SecureVault: local encryption simulation
  const handleLocalEncryption = () => {
    if (!plaintextFile) return;
    setIsEncrypting(true);
    setTimeout(() => {
      // Mock ciphertext output
      const cipher = 'U2FsdGVkX1' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
      setEncryptedFile(cipher);
      setVaultKey('vault_key_' + Math.random().toString(36).substring(2, 8));
      setIsEncrypting(false);
    }, 1200);
  };

  // Robot: Command trigger simulation
  const handleRobotCommand = (cmd: string) => {
    let msg = '';
    if (cmd === 'FORWARD') msg = '[CMD] MOVE_FWD(255) -> Motor speeds synced at 255rpm. Telemetry healthy.';
    else if (cmd === 'BACKWARD') msg = '[CMD] MOVE_BWD(255) -> Reversing gears engaged. Sensor alerts checking.';
    else if (cmd === 'LEFT') msg = '[CMD] TURN_L(200) -> Left wheel speed 0rpm, Right wheel speed 200rpm.';
    else if (cmd === 'RIGHT') msg = '[CMD] TURN_R(200) -> Left wheel speed 200rpm, Right wheel speed 0rpm.';
    else msg = '[CMD] STOP_ALL() -> Inertial brake activated. Telemetry current draw 0mA.';
    setRobotLogList(prev => [...prev, msg]);
  };

  // Render Interactive Modals
  const renderInteractiveDemo = (id: string) => {
    if (id === 'logi') {
      return (
        <div className="flex flex-col gap-4 font-sans text-left mt-2">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <span className="text-[10px] text-[#7B61FF] font-bold uppercase tracking-wider block mb-2">Glycemic Index Checker</span>
            <p className="text-[11px] text-[#86868B] mb-3 leading-relaxed">
              LOGI is an advocate for low glycemic nutritional profiles. Enter a food name (e.g. apple, rice, oats, bread) to test the database index classification.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={foodQuery}
                onChange={(e) => setFoodQuery(e.target.value)}
                placeholder="e.g. apple, rice..."
                className="flex-grow bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#7B61FF]"
              />
              <button
                onClick={() => executeFoodGI(foodQuery)}
                className="px-4 py-2 bg-[#7B61FF] text-black font-semibold rounded-lg text-xs hover:opacity-90"
              >
                Search
              </button>
            </div>

            {foodResult && (
              <div className="mt-4 p-3 rounded-lg border border-white/5 bg-black/60 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#86868B] block">Food Profile</span>
                  <span className="text-white font-bold">{foodResult.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[#86868B] block">Glycemic Index</span>
                  <span className={`font-mono font-bold ${
                    foodResult.status === 'Low' ? 'text-[#00FFC6]' : foodResult.status === 'Medium' ? 'text-[#FF9900]' : 'text-red-500'
                  }`}>
                    {foodResult.gi} ({foodResult.status})
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (id === 'resqr') {
      return (
        <div className="flex flex-col gap-4 font-sans text-left mt-2">
          <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider block mb-2">SOS Broadcast Simulation</span>
            <p className="text-[11px] text-[#86868B] mb-3 leading-relaxed">
              Test the SOS GPS locator routing. Clicking the button broadcasts coordinates to local triages and displays medical profile details.
            </p>

            {sosStatus === 'idle' ? (
              <button
                onClick={() => {
                  setSosStatus('triggered');
                  setTimeout(() => setSosStatus('notified'), 2000);
                }}
                className="w-full py-2.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-bold text-xs"
              >
                Simulate SOS Accident Beacon
              </button>
            ) : (
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  <span className="text-white font-bold">Beacon Transmitting Location: 17.3850° N, 78.4867° E</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[10px] border-t border-white/5 pt-2 text-[#86868B]">
                  <div>Patient Name: <span className="text-white block mt-0.5">{emergencyName}</span></div>
                  <div>Blood Group: <span className="text-red-400 block mt-0.5">{emergencyBlood}</span></div>
                  <div>Allergies: <span className="text-white block mt-0.5">None Declared</span></div>
                  <div>Emergency Contact: <span className="text-[#00D4FF] block mt-0.5">+91 70752 09102</span></div>
                </div>

                {sosStatus === 'notified' && (
                  <div className="text-[10px] bg-green-500/10 border border-green-500/20 text-green-400 p-2 rounded-lg text-center font-semibold mt-2">
                    ✓ Success: Paramedics Dispatched &amp; ICE Contacts Notified.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      );
    }

    if (id === 'finrl') {
      return (
        <div className="flex flex-col gap-4 font-sans text-left mt-2">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <span className="text-[10px] text-[#00FFC6] font-bold uppercase tracking-wider block mb-2">50/30/20 Budget Allocator</span>
            <p className="text-[11px] text-[#86868B] mb-3 leading-relaxed">
              Simulate income targets allocation. Enter your monthly net salary to parse funds into Needs, Wants, and Savings.
            </p>
            <div className="flex gap-2 mb-3">
              <input
                type="number"
                value={incomeInput}
                onChange={(e) => setIncomeInput(Number(e.target.value))}
                className="flex-grow bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#00FFC6]"
              />
              <button
                onClick={calculateBudget}
                className="px-4 py-2 bg-[#00FFC6] text-black font-semibold rounded-lg text-xs hover:opacity-90"
              >
                Allocate
              </button>
            </div>

            {budgetPlan && (
              <div className="p-3 rounded-lg border border-white/5 bg-black/60 flex flex-col gap-2 text-xs font-mono">
                <div className="flex justify-between text-[#86868B]">
                  <span>Needs (50%):</span>
                  <span className="text-white font-bold">${budgetPlan.needs}</span>
                </div>
                <div className="flex justify-between text-[#86868B]">
                  <span>Wants (30%):</span>
                  <span className="text-white font-bold">${budgetPlan.wants}</span>
                </div>
                <div className="flex justify-between border-t border-white/5 pt-1.5 text-[#86868B]">
                  <span>Savings (20%):</span>
                  <span className="text-[#00FFC6] font-bold">${budgetPlan.savings}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (id === 'accessshield') {
      return (
        <div className="flex flex-col gap-4 font-sans text-left mt-2">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <span className="text-[10px] text-[#FF3366] font-bold uppercase tracking-wider block mb-2">RBAC Permission Matrix Simulator</span>
            <p className="text-[11px] text-[#86868B] mb-3 leading-relaxed">
              AccessShield maps multi-factor identity tokens. Toggle the active login roles to check live security database access levels.
            </p>
            <div className="flex gap-2 mb-4">
              {(['Guest', 'User', 'Administrator'] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => triggerRBACRole(role)}
                  className={`flex-grow py-1.5 rounded-lg text-[10px] font-bold transition-all ${
                    activeRole === role ? 'bg-[#FF3366] text-white' : 'bg-white/5 text-[#86868B] hover:text-white'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

            <div className="bg-black/60 rounded-lg p-3 border border-white/5 font-mono text-[9px] text-[#00FFC6] h-28 overflow-y-auto">
              {auditLog.map((log, index) => (
                <div key={index} className="mb-1">{log}</div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (id === 'securevault') {
      return (
        <div className="flex flex-col gap-4 font-sans text-left mt-2">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <span className="text-[10px] text-[#FF9900] font-bold uppercase tracking-wider block mb-2">Client-Side Encryption Pipeline</span>
            <p className="text-[11px] text-[#86868B] mb-3 leading-relaxed">
              SecureVault encrypts documents client-side before sending. Type a mock document secrets string below to simulate the cryptographic pipeline.
            </p>
            <textarea
              rows={2}
              value={plaintextFile}
              onChange={(e) => setPlaintextFile(e.target.value)}
              placeholder="Type sensitive files here (e.g. confidential-finances.pdf)..."
              className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs text-white focus:outline-none focus:border-[#FF9900] mb-3 resize-none"
            />
            <button
              onClick={handleLocalEncryption}
              disabled={isEncrypting || !plaintextFile}
              className="w-full py-2 bg-[#FF9900] text-black font-semibold rounded-lg text-xs hover:opacity-90 disabled:opacity-50"
            >
              {isEncrypting ? 'Encrypting & Generating Key...' : 'Encrypt & Upload Document'}
            </button>

            {encryptedFile && (
              <div className="mt-4 p-3 rounded-lg border border-white/5 bg-black/60 flex flex-col gap-2 text-[10px] font-mono">
                <div className="truncate text-[#86868B]">
                  Ciphertext: <span className="text-[#FF9900]">{encryptedFile}</span>
                </div>
                <div className="text-[#86868B]">
                  Decryption Key: <span className="text-white font-bold">{vaultKey}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    }

    if (id === 'robot') {
      return (
        <div className="flex flex-col gap-4 font-sans text-left mt-2">
          <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
            <span className="text-[10px] text-[#9933FF] font-bold uppercase tracking-wider block mb-2">Arduino Serial Command Console</span>
            <p className="text-[11px] text-[#86868B] mb-3 leading-relaxed">
              Test low-level telemetry commands sent via Arduino board. Press controller buttons to transmit instructions.
            </p>
            <div className="flex flex-col gap-2 items-center mb-4">
              <button
                onClick={() => handleRobotCommand('FORWARD')}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] text-white hover:bg-white/10"
              >
                ▲ FORWARD
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => handleRobotCommand('LEFT')}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] text-white hover:bg-white/10"
                >
                  ◀ LEFT
                </button>
                <button
                  onClick={() => handleRobotCommand('STOP')}
                  className="px-4 py-1.5 bg-red-600/20 border border-red-500/30 rounded text-[10px] text-red-400 hover:bg-red-500/10 font-bold"
                >
                  ■ STOP
                </button>
                <button
                  onClick={() => handleRobotCommand('RIGHT')}
                  className="px-4 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] text-white hover:bg-white/10"
                >
                  ▶ RIGHT
                </button>
              </div>
              <button
                onClick={() => handleRobotCommand('BACKWARD')}
                className="px-4 py-1.5 bg-white/5 border border-white/10 rounded text-[10px] text-white hover:bg-white/10"
              >
                ▼ REVERSE
              </button>
            </div>

            <div className="bg-black/60 rounded-lg p-3 border border-white/5 font-mono text-[9px] text-[#00FFC6] h-28 overflow-y-auto">
              {robotLogList.map((log, index) => (
                <div key={index} className="mb-1">{log}</div>
              ))}
            </div>
          </div>
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
            My Works
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
            Explore interactive live mockups and full system dashboard simulators showcasing full stack developer, cybersecurity, and IoT skills.
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
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] uppercase font-bold font-accent tracking-wider" style={{ color: project.color }}>
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-white mb-2">
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
                    onClick={() => setActiveProject(project)}
                    className="flex-grow py-2 rounded-lg bg-white/5 hover:bg-gradient-to-r hover:from-[#00D4FF] hover:to-[#7B61FF] hover:text-black border border-white/5 text-white/80 hover:border-transparent text-xs font-semibold font-accent flex items-center justify-center gap-1.5 transition-all cursor-pointer animate-pulse"
                  >
                    <Play className="w-3.5 h-3.5" />
                    <span>
                      {project.id === 'accessshield' ? 'View Architecture' : 
                       project.id === 'securevault' ? 'Explore Project' : 
                       project.id === 'robot' ? 'Learn More' : 'View Details'}
                    </span>
                  </button>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-[#86868B] hover:text-white cursor-pointer"
                      title="Visit Live Website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href="https://github.com/pratheekmadupu"
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
        {activeProject && (
          <div className="fixed inset-0 z-[1000] flex items-center justify-center px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glassmorphism w-full max-w-xl p-6 sm:p-8 rounded-2xl relative z-10 border-white/10 max-h-[85vh] overflow-y-auto"
              style={{
                boxShadow: `0 0 40px ${activeProject.color}15`,
              }}
            >
              {/* Close button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-[#86868B] hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="border-b border-white/5 pb-4 mb-4 text-left">
                <span className="text-[10px] font-mono uppercase font-bold tracking-wider" style={{ color: activeProject.color }}>
                  {activeProject.category}
                </span>
                <h2 className="text-2xl font-bold font-heading text-white mt-1">
                  {activeProject.title}
                </h2>
                {activeProject.role && (
                  <span className="text-xs text-[#86868B] block mt-1">
                    Role: <strong className="text-white/80 font-normal">{activeProject.role}</strong>
                  </span>
                )}
              </div>

              {/* Highlights */}
              <div className="text-left mb-6">
                <h4 className="text-xs text-[#86868B] uppercase font-bold tracking-wider mb-2.5">Feature Highlights</h4>
                <ul className="flex flex-col gap-2 text-xs text-[#86868B]">
                  {activeProject.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-2 items-start leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FFC6] mt-1.5 flex-shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Details / Interactive Demo */}
              <div className="border-t border-white/5 pt-4 text-left mb-6">
                <h4 className="text-xs text-[#86868B] uppercase font-bold tracking-wider mb-2.5 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-[#00FFC6]" />
                  <span>Interactive Project Sandbox</span>
                </h4>
                {renderInteractiveDemo(activeProject.id)}
              </div>

              {/* Action buttons */}
              <div className="flex gap-3 justify-end items-center mt-6">
                {activeProject.liveUrl && (
                  <button
                    onClick={() => window.open(activeProject.liveUrl, '_blank')}
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-white font-semibold text-xs flex items-center gap-1.5 cursor-pointer"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Visit Website</span>
                  </button>
                )}
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00D4FF] to-[#7B61FF] text-black font-semibold text-xs cursor-pointer"
                >
                  Dismiss Console
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Projects;
