import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import type { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { Project } from '../../types'

interface CameraControllerProps {
  selectedProject: Project | null
  isAutoRotate?: boolean
}

export function CameraController({ selectedProject, isAutoRotate = true }: CameraControllerProps) {
  const { camera } = useThree()
  const controlsRef = useRef<OrbitControlsImpl>(null)
  const targetPos = useRef<THREE.Vector3>(new THREE.Vector3(0, 10, 27))
  const targetLookAt = useRef<THREE.Vector3>(new THREE.Vector3(0, 0, 0))
  // Only true while a cinematic fly-to animation is in progress. Once the
  // camera arrives, control is fully released to OrbitControls so the user
  // can freely orbit/zoom without being pulled back every frame.
  const isFlying = useRef(false)

  useEffect(() => {
    if (selectedProject) {
      // Calculate target camera position offset around the selected project
      const angle = selectedProject.orbitAngle
      const px = Math.cos(angle) * selectedProject.orbitRadius
      const pz = Math.sin(angle) * selectedProject.orbitRadius

      targetLookAt.current.set(px, 0, pz)
      // Position camera slightly above and pulled back from target
      targetPos.current.set(px * 1.25, 2.5, pz * 1.25 + 4.5)
    } else {
      // Default view looking at quantum central core, wide enough to frame the whole universe
      targetLookAt.current.set(0, 0, 0)
      targetPos.current.set(0, 10, 27)
    }
    isFlying.current = true
  }, [selectedProject])

  useFrame((_, delta) => {
    if (isFlying.current) {
      // Smooth cinematic camera position interpolation toward the target
      camera.position.lerp(targetPos.current, delta * 2.5)

      if (controlsRef.current) {
        controlsRef.current.target.lerp(targetLookAt.current, delta * 2.5)
      }

      if (camera.position.distanceTo(targetPos.current) < 0.2) {
        isFlying.current = false
      }
    }

    controlsRef.current?.update()
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      maxDistance={55}
      minDistance={4}
      autoRotate={isAutoRotate && !selectedProject}
      autoRotateSpeed={0.4}
      maxPolarAngle={Math.PI / 2 + 0.15} // Don't go too far below horizon
    />
  )
}
