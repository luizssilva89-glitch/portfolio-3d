import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Html } from '@react-three/drei'
import * as THREE from 'three'
import { soundFX } from '../../audio/soundFX'
import { Sparkles, UserCheck } from 'lucide-react'
import { NeuralBrain } from './NeuralBrain'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'

interface CentralCoreProps {
  onCoreClick?: () => void
}

export function CentralCore({ onCoreClick }: CentralCoreProps) {
  const { profile } = useLocalizedData()
  const t = useT()
  const coreGroupRef = useRef<THREE.Group>(null)
  const outerRingRef = useRef<THREE.Mesh>(null)
  const middleRingRef = useRef<THREE.Mesh>(null)
  const innerRingRef = useRef<THREE.Mesh>(null)
  const pedestalRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Cyber aura and particles around Luiz Sérgio
  const auraParticles = useRef<THREE.Points>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()

    // Gentle pulsing & floating
    if (coreGroupRef.current) {
      const targetScale = isHovered ? 1.08 : 1.0
      coreGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.08)
    }

    // Rotating orbital cyber rings
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z = t * 0.4
      outerRingRef.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.3) * 0.15
    }

    if (middleRingRef.current) {
      middleRingRef.current.rotation.z = -t * 0.6
      middleRingRef.current.rotation.y = Math.cos(t * 0.4) * 0.2
    }

    if (innerRingRef.current) {
      innerRingRef.current.rotation.x = Math.PI / 2
      innerRingRef.current.rotation.z = t * 0.9
    }

    if (pedestalRef.current) {
      pedestalRef.current.rotation.z = -t * 0.2
    }

    if (auraParticles.current) {
      auraParticles.current.rotation.y = t * 0.15
    }
  })

  // Particle positions for the floating quantum energy aura around Luiz Sérgio
  const particleGeo = new THREE.BufferGeometry()
  const pCount = 140
  const pPositions = new Float32Array(pCount * 3)
  for (let i = 0; i < pCount; i++) {
    const angle = (i / pCount) * Math.PI * 2
    const radius = 2.4 + Math.sin(i * 3) * 0.8
    pPositions[i * 3] = Math.cos(angle) * radius
    pPositions[i * 3 + 1] = ((i % 20) / 20) * 5.0 - 2.0
    pPositions[i * 3 + 2] = Math.sin(angle) * radius
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3))

  return (
    <group
      ref={coreGroupRef}
      position={[0, 0, 0]}
      onClick={() => {
        soundFX.playSelect()
        soundFX.playWarp()
        onCoreClick?.()
      }}
      onPointerOver={(e) => {
        e.stopPropagation()
        setIsHovered(true)
        soundFX.playHover()
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        setIsHovered(false)
        document.body.style.cursor = 'auto'
      }}
    >
      <Float speed={1.6} rotationIntensity={0.05} floatIntensity={0.25}>
        
        {/* ================= COGNITIVE NEURAL CORE ================= */}
        {/* A living neural network: ideas & memories firing and interlinking with every project */}
        <NeuralBrain />

        {/* Dual-Tone Core Volumetric Lights (Cyan & Quantum Magenta) */}
        <pointLight
          color="#00f0ff"
          intensity={isHovered ? 8.0 : 4.5}
          distance={16}
          position={[0, 1.2, 2.5]}
        />
        <pointLight
          color="#ec4899"
          intensity={isHovered ? 6.0 : 3.5}
          distance={14}
          position={[0, -0.5, -2.0]}
        />

        {/* Floating Quantum Energy Halo Orbiting Particles */}
        <points ref={auraParticles} geometry={particleGeo}>
          <pointsMaterial
            size={0.12}
            color="#00f0ff"
            transparent
            opacity={0.85}
            blending={THREE.AdditiveBlending}
          />
        </points>

        {/* ================= CYBERNETIC ORBITAL RINGS & PEDESTAL ================= */}
        {/* Outer Orbit Ring */}
        <mesh ref={outerRingRef} position={[0, -0.5, 0]}>
          <torusGeometry args={[3.2, 0.035, 16, 64]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={isHovered ? 3.5 : 1.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Middle Quantum Ring */}
        <mesh ref={middleRingRef} position={[0, 0.8, 0]}>
          <torusGeometry args={[2.8, 0.025, 16, 64]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#ec4899"
            emissiveIntensity={isHovered ? 3.0 : 1.5}
            transparent
            opacity={0.75}
          />
        </mesh>

        {/* Inner Pedestal Halo Disc */}
        <mesh ref={pedestalRef} position={[0, -2.8, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.8, 3.4, 48]} />
          <meshStandardMaterial
            color="#00f0ff"
            emissive="#00f0ff"
            emissiveIntensity={isHovered ? 2.5 : 1.2}
            transparent
            opacity={0.6}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Ground Platform Grid Matrix */}
        <mesh ref={innerRingRef} position={[0, -2.82, 0]}>
          <circleGeometry args={[3.3, 32]} />
          <meshBasicMaterial
            color="#06b6d4"
            transparent
            opacity={isHovered ? 0.3 : 0.12}
            side={THREE.DoubleSide}
          />
        </mesh>

        {/* Center Tag / Identification HUD */}
        <Html
          position={[0, 4.2, 0]}
          center
          distanceFactor={22}
          style={{
            transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
            transform: `scale(${isHovered ? 1.12 : 1.0})`,
            pointerEvents: 'none'
          }}
        >
          <div className="select-none flex flex-col items-center">
            <div
              className={`px-4 py-2 rounded-2xl border backdrop-blur-2xl transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(6,182,212,0.6)] ${
                isHovered
                  ? 'bg-slate-950/95 border-cyan-400 text-cyan-300'
                  : 'bg-slate-950/90 border-cyan-500/50 text-slate-100'
              }`}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-300">
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-mono text-sm sm:text-base font-bold whitespace-nowrap tracking-wide text-white">
                    {profile.name}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div className="text-[10px] font-mono text-cyan-300/90 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>{t.core.subtitle}</span>
                </div>
              </div>
            </div>
            <div className="mt-1 text-[9px] font-mono text-slate-400 bg-slate-950/80 px-2.5 py-0.5 rounded-full border border-slate-800 shadow-md">
              ✦ {t.core.hint} ✦
            </div>
          </div>
        </Html>

      </Float>
    </group>
  )
}
