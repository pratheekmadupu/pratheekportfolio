import React, { useEffect, useState } from 'react';

export const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[101] pointer-events-none">
      <div
        className="h-full bg-gradient-to-r from-[#00D4FF] via-[#7B61FF] to-[#00FFC6] transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
