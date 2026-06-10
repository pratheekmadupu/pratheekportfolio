import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const GlobePoints: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate spherical coordinates for particles
  const count = 500;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const cols = new Float32Array(count * 3);
    const radius = 2.0;

    for (let i = 0; i < count; i++) {
      // Golden spiral distribution on sphere
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      // Color variation (Electric Blue and Purple shades)
      const r = Math.random();
      if (r > 0.5) {
        // Cyan/Blue
        cols[i * 3] = 0.0;
        cols[i * 3 + 1] = 0.83;
        cols[i * 3 + 2] = 1.0;
      } else {
        // Purple
        cols[i * 3] = 0.48;
        cols[i * 3 + 1] = 0.38;
        cols[i * 3 + 2] = 1.0;
      }
    }
    return [pos, cols];
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      // Rotate globe slowly
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.12;
      pointsRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

export const ThreeGlobe: React.FC = () => {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      {/* Background radial glow behind canvas */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_60%)] pointer-events-none" />
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <GlobePoints />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};
export default ThreeGlobe;
