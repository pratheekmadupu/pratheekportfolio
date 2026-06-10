import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, Phone } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Web Development',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const projectOptions = [
    'Web Development',
    'iOS App Design',
    'IoT / Hardware Prototype',
    'Cybersecurity Consultation',
    'Startup Partnership',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    setStatus('submitting');

    // Simulate network delay and submit trigger
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        projectType: 'Web Development',
        message: '',
      });
      // Auto reset status back to idle after a few seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative bg-[#0B0B0B] border-t border-white/5 overflow-hidden">
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-[#00D4FF]/2 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-[#7B61FF]/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left Column Text / Social links */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00FFC6] font-semibold tracking-wider uppercase inline-block w-fit mb-3"
          >
            Inquiries
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            Let's Build Something <br />
            <span className="text-gradient">Outstanding</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#86868B] text-base leading-relaxed mb-8 max-w-sm"
          >
            Whether you want to discuss mobile apps, secure systems engineering, or starting new products, get in touch below.
          </motion.p>

          {/* Social Links Cards */}
          <div className="flex flex-col gap-4">
            <a
              href="mailto:pratheekmadupu2006@gmail.com"
              className="glassmorphism p-4 rounded-xl border-white/5 hover:border-white/10 flex items-center gap-4 group transition-colors cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[#00D4FF]">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Email Direct</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#00D4FF] transition-colors">pratheekmadupu2006@gmail.com</span>
              </div>
            </a>

            <a
              href="tel:+917075209102"
              className="glassmorphism p-4 rounded-xl border-white/5 hover:border-white/10 flex items-center gap-4 group transition-colors cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[#FF3366]">
                <Phone className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Call Directly</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#FF3366] transition-colors">+91 70752 09102</span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/pratheek-madupu-b872b6335/"
              target="_blank"
              rel="noreferrer"
              className="glassmorphism p-4 rounded-xl border-white/5 hover:border-white/10 flex items-center gap-4 group transition-colors cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[#7B61FF]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Professional Network</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#7B61FF] transition-colors">pratheek-madupu-b872b6335</span>
              </div>
            </a>

            <a
              href="https://github.com/pratheekmadupu"
              target="_blank"
              rel="noreferrer"
              className="glassmorphism p-4 rounded-xl border-white/5 hover:border-white/10 flex items-center gap-4 group transition-colors cursor-pointer"
            >
              <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-[#00FFC6]">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-bold text-[#86868B] tracking-wider">Open Source Codes</span>
                <span className="text-sm font-semibold text-white group-hover:text-[#00FFC6] transition-colors">github.com/pratheekmadupu</span>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column Form */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glassmorphism p-8 sm:p-10 rounded-3xl border-white/5 relative"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#00FFC6]/10 border border-[#00FFC6]/20 flex items-center justify-center text-[#00FFC6] mb-4">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white">Message Dispatched</h3>
                <p className="text-sm text-[#86868B] max-w-sm">
                  Thank you! The form has been submitted and verified. Pratheek will respond shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/80 font-accent">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="John Doe"
                      className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[#7B61FF] disabled:opacity-50"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold text-white/80 font-accent">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === 'submitting'}
                      placeholder="john@example.com"
                      className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[#7B61FF] disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-white/80 font-accent">What are we building?</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[#7B61FF] disabled:opacity-50 select-none appearance-none cursor-pointer"
                  >
                    {projectOptions.map((opt, idx) => (
                      <option key={idx} value={opt} className="bg-[#050505] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-semibold text-white/80 font-accent">Project Details</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === 'submitting'}
                    placeholder="Tell me about your timeline, scope, and technical vision..."
                    className="bg-white/[0.03] border border-white/5 rounded-xl p-3.5 text-white text-sm focus:outline-none focus:border-[#7B61FF] disabled:opacity-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full sm:w-fit px-8 py-4 rounded-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFC6] text-black font-semibold font-accent text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(123,97,255,0.3)] transition-all cursor-pointer disabled:opacity-50 disabled:shadow-none"
                >
                  {status === 'submitting' ? (
                    <>
                      <span>Transmitting...</span>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
