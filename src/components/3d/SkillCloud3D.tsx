import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float } from '@react-three/drei'
import * as THREE from 'three'
import { SkillNode } from '../../types'
import { soundFX } from '../../audio/soundFX'

interface SkillCloud3DProps {
  skills: SkillNode[]
  visible?: boolean
  onSelectSkill?: (skill: SkillNode) => void
}

export function SkillCloud3D({ skills, visible = true, onSelectSkill }: SkillCloud3DProps) {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.04
    }
  })

  if (!visible) return null

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {skills.map((skill, idx) => (
        <SingleSkillOrb
          key={skill.name}
          skill={skill}
          index={idx}
          onSelect={() => onSelectSkill?.(skill)}
        />
      ))}
    </group>
  )
}

function SingleSkillOrb({
  skill,
  index,
  onSelect
}: {
  skill: SkillNode
  index: number
  onSelect: () => void
}) {
  const [isHovered, setIsHovered] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.5 + index
      meshRef.current.rotation.y = t * 0.8
      const scale = isHovered ? 1.4 : 1.0 + Math.sin(t * 2 + index) * 0.05
      meshRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={skill.position}>
        <mesh
          ref={meshRef}
          onClick={(e) => {
            e.stopPropagation()
            soundFX.playSelect()
            onSelect()
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
          <sphereGeometry args={[0.35, 16, 16]} />
          <meshStandardMaterial
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={isHovered ? 2.0 : 0.8}
            roughness={0.2}
            metalness={0.8}
            wireframe={!isHovered}
          />
        </mesh>

        <Html position={[0, 0.55, 0]} center distanceFactor={18}>
          <div
            className={`transition-all duration-200 pointer-events-none select-none px-2 py-0.5 rounded border backdrop-blur-md whitespace-nowrap text-[10px] font-mono font-medium flex items-center gap-1 ${
              isHovered
                ? 'bg-slate-900/90 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.6)] scale-110'
                : 'bg-slate-950/60 border-slate-800/80 text-slate-300'
            }`}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            {skill.name}
            {isHovered && <span className="text-cyan-400 font-bold">({skill.level}%)</span>}
          </div>
        </Html>
      </group>
    </Float>
  )
}
