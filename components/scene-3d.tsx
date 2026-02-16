"use client"

import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import * as THREE from "three"
import { useReducedMotion } from "@/hooks/use-reduced-motion"

function NeuralNode({
  position,
  color,
  scale = 1,
}: {
  position: [number, number, number]
  color: string
  scale?: number
}) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.x = Math.sin(t * 0.5 + position[0]) * 0.3
    meshRef.current.rotation.z = Math.cos(t * 0.3 + position[1]) * 0.2
    meshRef.current.position.y =
      position[1] + Math.sin(t * 0.4 + position[0] * 2) * 0.3

    if (glowRef.current) {
      const pulse = (Math.sin(t * 1.5 + position[0]) + 1) * 0.5
      glowRef.current.scale.setScalar(scale * (1.6 + pulse * 0.4))
    }
  })

  return (
    <group>
      <mesh ref={glowRef} position={position}>
        <sphereGeometry args={[0.4, 16, 16]} />
        <meshBasicMaterial color={color} transparent opacity={0.06} />
      </mesh>
      <mesh ref={meshRef} position={position} scale={scale}>
        <octahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
          wireframe
        />
      </mesh>
    </group>
  )
}

function FloatingParticles({ count = 150 }: { count?: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const dummy = useMemo(() => new THREE.Object3D(), [])

  const particles = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      temp.push({
        x: (Math.random() - 0.5) * 30,
        y: (Math.random() - 0.5) * 30,
        z: (Math.random() - 0.5) * 20,
        speed: Math.random() * 0.4 + 0.1,
        offset: Math.random() * Math.PI * 2,
        scale: Math.random() * 0.03 + 0.01,
      })
    }
    return temp
  }, [count])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      const pt = t * p.speed + p.offset
      dummy.position.set(
        p.x + Math.sin(pt) * 0.5,
        p.y + Math.cos(pt * 0.8) * 0.5,
        p.z + Math.sin(pt * 0.6) * 0.3
      )
      dummy.scale.setScalar(p.scale)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#22d3c5" transparent opacity={0.5} />
    </instancedMesh>
  )
}

function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null)

  const { nodePositions, lineGeometry, dotPositions } = useMemo(() => {
    const positions: [number, number, number][] = []
    for (let i = 0; i < 15; i++) {
      positions.push([
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 10,
      ])
    }

    const linePoints: number[] = []
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i][0] - positions[j][0]
        const dy = positions[i][1] - positions[j][1]
        const dz = positions[i][2] - positions[j][2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)
        if (dist < 8) {
          linePoints.push(
            positions[i][0], positions[i][1], positions[i][2],
            positions[j][0], positions[j][1], positions[j][2]
          )
        }
      }
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePoints, 3)
    )

    return {
      nodePositions: positions,
      lineGeometry: geo,
      dotPositions: positions,
    }
  }, [])

  useEffect(() => {
    return () => {
      lineGeometry.dispose()
    }
  }, [lineGeometry])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.015
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.008) * 0.08
    }
  })

  return (
    <group ref={groupRef}>
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#22d3c5" transparent opacity={0.1} />
      </lineSegments>
      {dotPositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshBasicMaterial color="#22d3c5" transparent opacity={0.4} />
        </mesh>
      ))}
    </group>
  )
}

function OrbitalRing({
  radius,
  speed,
  tilt,
  color,
}: {
  radius: number
  speed: number
  tilt: number
  color: string
}) {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * speed
    }
  })

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.008, 16, 120]} />
      <meshBasicMaterial color={color} transparent opacity={0.2} />
    </mesh>
  )
}

function PulsingOrbs() {
  const refs = useRef<(THREE.Mesh | null)[]>([])

  const orbs = useMemo(
    () => [
      { radius: 4, speed: 0.6, color: "#22d3c5", size: 0.06 },
      { radius: 5.5, speed: -0.4, color: "#0ea5e9", size: 0.05 },
      { radius: 3, speed: 0.8, color: "#38bdf8", size: 0.04 },
      { radius: 6, speed: -0.3, color: "#22d3c5", size: 0.05 },
      { radius: 4.5, speed: 0.5, color: "#06b6d4", size: 0.04 },
    ],
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    orbs.forEach((orb, i) => {
      const mesh = refs.current[i]
      if (!mesh) return
      const angle = t * orb.speed + i * 1.3
      mesh.position.set(
        Math.cos(angle) * orb.radius,
        Math.sin(angle * 0.7) * 2,
        Math.sin(angle) * orb.radius * 0.6
      )
      const pulse = (Math.sin(t * 2 + i) + 1) * 0.5
      mesh.scale.setScalar(1 + pulse * 0.5)
    })
  })

  return (
    <group>
      {orbs.map((orb, i) => (
        <mesh
          key={i}
          ref={(el) => {
            refs.current[i] = el
          }}
        >
          <sphereGeometry args={[orb.size, 12, 12]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  )
}

function SceneContent({ scrollProgress }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (groupRef.current) {
      const targetY = -scrollProgress * 3
      const targetRotY = scrollProgress * Math.PI * 0.4
      groupRef.current.position.y +=
        (targetY - groupRef.current.position.y) * 0.05
      groupRef.current.rotation.y +=
        (targetRotY - groupRef.current.rotation.y) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      <NeuralNode position={[-3.5, 2.5, -2]} color="#22d3c5" scale={1.1} />
      <NeuralNode position={[4, -1, -3]} color="#0ea5e9" scale={0.8} />
      <NeuralNode position={[-1, -3, -1]} color="#22d3c5" scale={1} />
      <NeuralNode position={[2.5, 3.5, -4]} color="#38bdf8" scale={0.6} />
      <NeuralNode position={[-4, 0.5, -5]} color="#06b6d4" scale={0.9} />

      <OrbitalRing radius={5} speed={0.15} tilt={Math.PI / 4} color="#22d3c5" />
      <OrbitalRing radius={7} speed={-0.1} tilt={Math.PI / 3} color="#0ea5e9" />
      <OrbitalRing radius={3.5} speed={0.25} tilt={Math.PI / 6} color="#38bdf8" />

      <NeuralNetwork />
      <FloatingParticles count={120} />
      <PulsingOrbs />
    </group>
  )
}

export default function Scene3D({
  scrollProgress = 0,
}: {
  scrollProgress?: number
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div className="fixed inset-0 -z-10 bg-background" aria-hidden="true" />
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={["#0d1117"]} />
        <fog attach="fog" args={["#0d1117", 18, 40]} />

        <ambientLight intensity={0.25} />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="#22d3c5" />
        <pointLight position={[-10, -10, -5]} intensity={0.25} color="#0ea5e9" />

        <Stars
          radius={60}
          depth={50}
          count={1200}
          factor={3}
          saturation={0.3}
          fade
          speed={0.4}
        />

        <SceneContent scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
