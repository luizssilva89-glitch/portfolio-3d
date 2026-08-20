import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Project } from '../../types'
import { getOrbitPosition } from '../../utils/orbit'

interface BrainLinksProps {
  projects: Project[]
}

const ORIGIN = new THREE.Vector3(0, 0.9, 0)

export function BrainLinks({ projects }: BrainLinksProps) {
  const lineRef = useRef<THREE.LineSegments>(null)

  const geometry = useMemo(() => {
    const positions = new Float32Array(projects.length * 6)
    const colors = new Float32Array(projects.length * 6)
    projects.forEach((p, i) => {
      const c = new THREE.Color(p.color)
      colors.set([c.r, c.g, c.b, c.r, c.g, c.b], i * 6)
    })
    const geo = new THREE.BufferGeometry()
    const posAttr = new THREE.BufferAttribute(positions, 3)
    posAttr.setUsage(THREE.DynamicDrawUsage)
    geo.setAttribute('position', posAttr)
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [projects])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const posAttr = geometry.getAttribute('position') as THREE.BufferAttribute
    projects.forEach((p, i) => {
      const [x, y, z] = getOrbitPosition(p, t, i)
      posAttr.setXYZ(i * 2, ORIGIN.x, ORIGIN.y, ORIGIN.z)
      posAttr.setXYZ(i * 2 + 1, x, y, z)
    })
    posAttr.needsUpdate = true
  })

  return (
    <lineSegments ref={lineRef} geometry={geometry}>
      <lineBasicMaterial
        vertexColors
        transparent
        opacity={0.2}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </lineSegments>
  )
}
