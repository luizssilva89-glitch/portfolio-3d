import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Html, Float, Image as DreiImage, Billboard } from '@react-three/drei'
import * as THREE from 'three'
import { Project } from '../../types'
import { soundFX } from '../../audio/soundFX'
import { ProjectIcon } from '../ui/ProjectIcon'
import { getOrbitPosition } from '../../utils/orbit'

interface ProjectStationsProps {
  projects: Project[]
  selectedProjectId: string | null
  onSelectProject: (project: Project) => void
}

export function ProjectStations({
  projects,
  selectedProjectId,
  onSelectProject
}: ProjectStationsProps) {
  const sharedRadius = projects[0]?.orbitRadius ?? 17

  return (
    <group>
      {/* Single Shared Orbital Path Ring: each project occupies its own slice of the circle */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[sharedRadius - 0.04, sharedRadius + 0.04, 96]} />
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 3D Holographic Project Icon Nodes */}
      {projects.map((project, idx) => (
        <ProjectHolographicStation
          key={project.id}
          project={project}
          index={idx}
          onSelect={() => onSelectProject(project)}
          isSelected={selectedProjectId === project.id}
        />
      ))}
    </group>
  )
}

function ProjectHolographicStation({
  project,
  index,
  isSelected,
  onSelect
}: {
  project: Project
  index: number
  isSelected: boolean
  onSelect: () => void
}) {
  const groupRef = useRef<THREE.Group>(null)
  const billboardGroupRef = useRef<THREE.Group>(null)
  const groundRingRef = useRef<THREE.Mesh>(null)
  const [isHovered, setIsHovered] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    // Orbital rotation around the center: each project keeps its own fixed slice of the circle
    const [x, y, z] = getOrbitPosition(project, t, index)

    if (groupRef.current) {
      groupRef.current.position.set(x, y, z)
    }

    if (billboardGroupRef.current) {
      const targetScale = isSelected ? 1.35 : isHovered ? 1.2 : 1.0
      billboardGroupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }

    if (groundRingRef.current) {
      groundRingRef.current.rotation.z = t * 0.8
    }
  })

  // Hologram scale: 7.2 wide x 3.6 high (crisp, large and fully readable)
  const imgScale: [number, number] = [7.2, 3.6]

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.05} floatIntensity={0.3}>
        <group
          onClick={(e) => {
            e.stopPropagation()
            soundFX.playSelect()
            soundFX.playWarp()
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
          {/* Intense Glow Light */}
          <pointLight
            color={project.color}
            intensity={isSelected ? 7.0 : isHovered ? 5.0 : 2.5}
            distance={14}
            decay={2}
          />

          {/* ================= CINEMATIC BILLBOARD HOLOGRAPHIC PLATFORM ================= */}
          {/* Billboard ensures it ALWAYS faces the camera directly in full HD */}
          <group ref={billboardGroupRef} position={[0, 0.4, 0]}>
            <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
              {project.image && (
                <DreiImage
                  url={project.image}
                  transparent
                  opacity={isHovered || isSelected ? 1.0 : 0.92}
                  scale={imgScale}
                  toneMapped={false}
                  side={THREE.DoubleSide}
                />
              )}
            </Billboard>
          </group>

          {/* Glowing Energy Ring on the Ground Plane */}
          <mesh ref={groundRingRef} position={[0, -1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[2.6, 0.035, 16, 64]} />
            <meshStandardMaterial
              color={project.color}
              emissive={project.color}
              emissiveIntensity={isHovered || isSelected ? 3.5 : 1.6}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Inner Light Core Pulse */}
          <mesh position={[0, -1.6, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <circleGeometry args={[2.55, 32]} />
            <meshBasicMaterial
              color={project.color}
              transparent
              opacity={isHovered || isSelected ? 0.25 : 0.1}
              side={THREE.DoubleSide}
            />
          </mesh>

          {/* Floating UI HUD Tag positioned above the large hologram */}
          <Html
            position={[0, 2.7, 0]}
            center
            distanceFactor={22}
            style={{
              transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
              transform: `scale(${isHovered || isSelected ? 1.15 : 0.95})`,
              pointerEvents: 'none'
            }}
          >
            <div className="select-none flex flex-col items-center">
              <div
                className={`px-4 py-2 rounded-2xl border backdrop-blur-xl transition-all duration-300 flex items-center gap-3 shadow-2xl ${
                  isSelected
                    ? 'bg-slate-950/95 border-cyan-400 shadow-[0_0_35px_rgba(6,182,212,0.8)] text-cyan-300'
                    : isHovered
                    ? 'bg-slate-950/90 border-cyan-500/80 shadow-[0_0_25px_rgba(6,182,212,0.5)] text-slate-100'
                    : 'bg-slate-950/85 border-slate-800 text-slate-200'
                }`}
              >
                <ProjectIcon name={project.iconName} color={project.color} size="md" />
                <div>
                  <div className="font-mono text-sm sm:text-base font-bold whitespace-nowrap tracking-wide">
                    {project.title}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-slate-400 flex items-center gap-1.5 mt-0.5">
                    <span
                      className="w-2 h-2 rounded-full animate-pulse"
                      style={{ backgroundColor: project.color }}
                    />
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </Html>
        </group>
      </Float>
    </group>
  )
}
