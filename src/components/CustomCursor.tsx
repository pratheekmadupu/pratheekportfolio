import React from 'react';
import { useCustomCursor } from '../hooks/useCustomCursor';

export const CustomCursor: React.FC = () => {
  const { position, clicked, hovered } = useCustomCursor();

  return (
    <>
      {/* Outer Ring */}
      <div
        className="custom-cursor hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 0.8 : hovered ? 1.5 : 1})`,
          borderColor: hovered ? 'var(--accent-purple)' : 'var(--accent-blue)',
          backgroundColor: hovered ? 'rgba(123, 97, 255, 0.05)' : 'transparent',
          boxShadow: hovered ? '0 0 15px rgba(123, 97, 255, 0.3)' : 'none',
        }}
      />
      {/* Inner Dot */}
      <div
        className="custom-cursor-dot hidden md:block"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${clicked ? 1.2 : hovered ? 0.5 : 1})`,
        }}
      />
    </>
  );
};
