"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import * as THREE from "three";

type Seed = {
  x: number;
  y: number;
  z: number;
  s: number;
  speed: number;
  phase: number;
};

function Motes({ color, count }: { color: string; count: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const seeds = useMemo<Seed[]>(
    () =>
      Array.from({ length: count }, () => ({
        x: (Math.random() - 0.5) * 16,
        y: (Math.random() - 0.5) * 11,
        z: (Math.random() - 0.5) * 8,
        s: 0.04 + Math.random() * 0.07,
        speed: 0.09 + Math.random() * 0.14,
        phase: Math.random() * Math.PI * 2,
      })),
    [count],
  );

  useFrame(({ clock }) => {
    if (document.hidden || !mesh.current) return;
    const t = clock.elapsedTime;
    seeds.forEach((p, i) => {
      dummy.position.set(
        p.x + Math.sin(t * p.speed + p.phase) * 0.55,
        p.y + Math.cos(t * p.speed * 0.65 + p.phase) * 0.48,
        p.z,
      );
      dummy.scale.setScalar(p.s * (1 + Math.sin(t * 0.8 + p.phase) * 0.16));
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} depthWrite={false} />
    </instancedMesh>
  );
}

function Drift({ children }: { children: ReactNode }) {
  const g = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (!g.current || document.hidden) return;
    const t = clock.elapsedTime;
    g.current.rotation.z = Math.sin(t * 0.07) * 0.08;
    g.current.position.y = Math.sin(t * 0.11) * 0.16;
  });
  return <group ref={g}>{children}</group>;
}

export function Atmosphere() {
  const [ok, setOk] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 700px)");
    const apply = () => {
      setOk(!motion.matches);
      setCompact(narrow.matches);
    };
    apply();
    motion.addEventListener("change", apply);
    narrow.addEventListener("change", apply);
    return () => {
      motion.removeEventListener("change", apply);
      narrow.removeEventListener("change", apply);
    };
  }, []);

  if (!ok) return null;

  return (
    <div className="webgl" aria-hidden="true">
      <Canvas
        dpr={compact ? [1, 1.35] : [1, 1.6]}
        camera={{ position: [0, 0, 8], fov: 48 }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
        }}
        style={{ width: "100%", height: "100%", display: "block" }}
      >
        <Drift>
          <Motes color="#ef9db4" count={38} />
          <Motes color="#e4c59a" count={24} />
          <Motes color="#c9a8e0" count={22} />
        </Drift>
      </Canvas>
    </div>
  );
}
