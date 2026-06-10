import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Pratheek displays a rare combination of security planning and product design. He built our companion app from scratch in a couple of weeks, ensuring full compliance and solid encryption.",
      author: "Aditya Sharma",
      role: "Product Lead",
      company: "Prabhupada.io",
    },
    {
      quote: "His technical capacity in microcontrollers and telemetry is excellent. The smart agriculture sensor arrays he engineered won Technovate awards for low-latency wireless speeds.",
      author: "Dr. K. Raghavan",
      role: "Robotics Research Professor",
      company: "Technical Institute",
    },
    {
      quote: "ResQR represents a major improvement in accident management. Pratheek’s ability to combine cybersecurity logic with clear business strategy is impressive.",
      author: "Siddharth Sen",
      role: "Incubator Director",
      company: "Startup Hub",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#7B61FF]/2 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="px-4 py-1.5 rounded-full border border-white/5 bg-white/5 text-xs text-[#00FFC6] font-semibold tracking-wider uppercase inline-block mb-3"
          >
            Endorsements
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold font-heading text-white mb-6"
          >
            What Leaders Say
          </motion.h2>
        </div>

        {/* Carousel Window */}
        <div className="relative min-h-[250px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="glassmorphism p-8 sm:p-12 rounded-3xl border-white/5 relative w-full text-center"
            >
              {/* Quote marks icon decoration */}
              <Quote className="w-12 h-12 text-[#7B61FF]/20 absolute top-6 left-6" />
              <Quote className="w-12 h-12 text-[#00D4FF]/20 absolute bottom-6 right-6 transform rotate-180" />

              <p className="text-white/80 text-base sm:text-lg italic leading-relaxed mb-8 relative z-10 max-w-2xl mx-auto">
                "{testimonials[activeIdx].quote}"
              </p>

              <div className="flex flex-col items-center">
                <span className="font-heading font-semibold text-white text-base">
                  {testimonials[activeIdx].author}
                </span>
                <span className="text-xs text-[#86868B] font-accent uppercase tracking-wider mt-1">
                  {testimonials[activeIdx].role} • {testimonials[activeIdx].company}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls indicator */}
        <div className="flex justify-center items-center gap-2.5 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIdx(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIdx === idx ? 'w-6 bg-[#00FFC6]' : 'w-2 bg-white/10 hover:bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
