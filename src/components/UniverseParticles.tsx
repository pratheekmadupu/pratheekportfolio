import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const ParticleField: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate random particle positions & colors
  const [positions, colors] = useMemo(() => {
    const count = 300;
    const positionsArray = new Float32Array(count * 3);
    const colorsArray = new Float32Array(count * 3);

    const colorPalette = [
      new THREE.Color('#00D4FF'), // neon blue
      new THREE.Color('#7B61FF'), // neon purple
      new THREE.Color('#00FFC6'), // neon cyan
      new THREE.Color('#050505'), // dark
    ];

    for (let i = 0; i < count; i++) {
      // Create a spherical distribution of particles
      const r = 10 + Math.random() * 40;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positionsArray[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positionsArray[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positionsArray[i * 3 + 2] = r * Math.cos(phi);

      // Color selection
      const color = colorPalette[Math.floor(Math.random() * 3)];
      colorsArray[i * 3] = color.r;
      colorsArray[i * 3 + 1] = color.g;
      colorsArray[i * 3 + 2] = color.b;
    }

    return [positionsArray, colorsArray];
  }, []);

  // Animating the particles (slow rotation & drift)
  useFrame((state) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.03;
    pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01;
    
    // Parallax mouse effect
    const mouseX = state.pointer.x * 2;
    const mouseY = state.pointer.y * 2;
    pointsRef.current.position.x = THREE.MathUtils.lerp(pointsRef.current.position.x, mouseX, 0.05);
    pointsRef.current.position.y = THREE.MathUtils.lerp(pointsRef.current.position.y, mouseY, 0.05);
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
        size={0.25}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

export const UniverseParticles: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#7B61FF" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#00D4FF" />
        <ParticleField />
      </Canvas>
    </div>
  );
};

export default UniverseParticles;
