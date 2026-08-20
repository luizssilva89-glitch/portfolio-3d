import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export function StarField({ count = 2500 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const cols = new Float32Array(count * 3)

    const colorPalette = [
      new THREE.Color('#06b6d4'), // cyan
      new THREE.Color('#3b82f6'), // blue
      new THREE.Color('#a855f7'), // purple
      new THREE.Color('#ffffff'), // white
      new THREE.Color('#ec4899')  // pink
    ]

    for (let i = 0; i < count; i++) {
      // Spherical distribution
      const r = 25 + Math.random() * 55
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      pos[i * 3 + 2] = r * Math.cos(phi)

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }

    return [pos, cols]
  }, [count])

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02
      pointsRef.current.rotation.x += delta * 0.005
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}
