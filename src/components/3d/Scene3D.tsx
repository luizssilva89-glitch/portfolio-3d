import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { StarField } from './StarField'
import { CentralCore } from './CentralCore'
import { BrainLinks } from './BrainLinks'
import { ProjectStations } from './ProjectStations'
import { SkillCloud3D } from './SkillCloud3D'
import { CameraController } from './CameraController'
import { Project, SkillNode } from '../../types'

interface Scene3DProps {
  projects: Project[]
  skills: SkillNode[]
  selectedProject: Project | null
  showSkills3D: boolean
  onSelectProject: (project: Project) => void
  onSelectSkill: (skill: SkillNode) => void
  onCoreClick: () => void
}

export function Scene3D({
  projects,
  skills,
  selectedProject,
  showSkills3D,
  onSelectProject,
  onSelectSkill,
  onCoreClick
}: Scene3DProps) {
  return (
    <div className="w-full h-full absolute inset-0 z-0 bg-[#030712]">
      <Canvas
        camera={{ position: [0, 10, 27], fov: 45 }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <color attach="background" args={['#030712']} />
        <fog attach="fog" args={['#030712', 20, 55]} />

        {/* Ambient & Directional Lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 20, 15]} intensity={1.2} color="#38bdf8" />
        <directionalLight position={[-10, -10, -10]} intensity={0.6} color="#a855f7" />

        {/* Dynamic Grid Floor */}
        <gridHelper
          args={[60, 60, '#1e293b', '#0f172a']}
          position={[0, -5, 0]}
        />

        <Suspense fallback={null}>
          {/* StarField Galaxy */}
          <StarField count={2500} />

          {/* Central Quantum Core */}
          <CentralCore onCoreClick={onCoreClick} />

          {/* Synaptic Links: the brain's ideas interlinked with every project */}
          <BrainLinks projects={projects} />

          {/* Planetary Project Stations */}
          <ProjectStations
            projects={projects}
            selectedProjectId={selectedProject?.id || null}
            onSelectProject={onSelectProject}
          />

          {/* 3D Skill Cloud */}
          <SkillCloud3D
            skills={skills}
            visible={showSkills3D}
            onSelectSkill={onSelectSkill}
          />

          {/* Camera Controller & Orbit Navigation */}
          <CameraController
            selectedProject={selectedProject}
            isAutoRotate={!selectedProject}
          />

          {/* Cinematic Holographic Glow Post-Processing */}
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={1.1}
              luminanceThreshold={0.15}
              luminanceSmoothing={0.4}
              mipmapBlur
              radius={0.6}
            />
            <Vignette eskil={false} offset={0.15} darkness={0.9} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  )
}
