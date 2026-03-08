"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Sparkles, MeshTransmissionMaterial, ContactShadows } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingShapes() {
    const { viewport, mouse } = useThree();
    const group = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.2, 0.1);
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouse.x * 0.2, 0.1);
        }
    });

    return (
        <group ref={group}>
            {Array.from({ length: 4 }).map((_, i) => (
                <Float
                    key={i}
                    speed={1.5}
                    rotationIntensity={1}
                    floatIntensity={1.5}
                    position={[
                        (Math.random() - 0.5) * viewport.width * 1.2,
                        (Math.random() - 0.5) * viewport.height * 1.2,
                        (Math.random() - 0.5) * 4 - 1
                    ]}
                >
                    <mesh scale={Math.random() * 1.5 + 1}>
                        <octahedronGeometry args={[1, 0]} />
                        <meshStandardMaterial
                            color="#c7a76d"
                            wireframe={true}
                            roughness={0.2}
                            metalness={0.8}
                            emissive="#c7a76d"
                            emissiveIntensity={0.2}
                            transparent={true}
                            opacity={0.4}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

export default function Scene() {
    return (
        <div className="absolute inset-0 z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <color attach="background" args={['transparent']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
                <directionalLight position={[-10, -10, -5]} intensity={1} color="#c7a76d" />

                <FloatingShapes />
                <Sparkles count={150} scale={15} size={2} speed={0.4} color="#c7a76d" opacity={0.4} />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
