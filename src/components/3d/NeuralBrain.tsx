import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface Node {
  position: THREE.Vector3
  phase: number
  baseScale: number
  isCyan: boolean
}

interface Edge {
  a: number
  b: number
}

const NODE_COUNT_PER_LOBE = 42
const PULSE_COUNT = 12
const CYAN = new THREE.Color('#22d3ee')
const MAGENTA = new THREE.Color('#e879f9')

function sampleEllipsoidPoint(cx: number, semi: THREE.Vector3): THREE.Vector3 {
  // Uniform-in-volume random point inside an ellipsoid via a random direction + cube-rooted radius
  const u = Math.random() * 2 - 1
  const theta = Math.random() * Math.PI * 2
  const s = Math.sqrt(1 - u * u)
  const dir = new THREE.Vector3(s * Math.cos(theta), u, s * Math.sin(theta))
  const r = Math.cbrt(Math.random())
  return new THREE.Vector3(
    cx + dir.x * semi.x * r,
    dir.y * semi.y * r,
    dir.z * semi.z * r
  )
}

function buildBrain(): { nodes: Node[]; edges: Edge[] } {
  const semi = new THREE.Vector3(1.05, 1.18, 1.15)
  const nodes: Node[] = []

  for (let lobe = 0; lobe < 2; lobe++) {
    const cx = lobe === 0 ? -0.5 : 0.5
    for (let i = 0; i < NODE_COUNT_PER_LOBE; i++) {
      nodes.push({
        position: sampleEllipsoidPoint(cx, semi),
        phase: Math.random() * Math.PI * 2,
        baseScale: 0.55 + Math.random() * 0.65,
        isCyan: Math.random() > 0.4
      })
    }
  }

  // Connect each node to its 2 nearest neighbours (deduplicated)
  const edgeSet = new Set<string>()
  const edges: Edge[] = []
  for (let i = 0; i < nodes.length; i++) {
    const distances: { j: number; d: number }[] = []
    for (let j = 0; j < nodes.length; j++) {
      if (i === j) continue
      distances.push({ j, d: nodes[i].position.distanceTo(nodes[j].position) })
    }
    distances.sort((a, b) => a.d - b.d)
    const neighbours = distances.slice(0, 2)
    for (const { j, d } of neighbours) {
      if (d > 0.75) continue
      const key = i < j ? `${i}-${j}` : `${j}-${i}`
      if (!edgeSet.has(key)) {
        edgeSet.add(key)
        edges.push({ a: i, b: j })
      }
    }
  }

  return { nodes, edges }
}

export function NeuralBrain() {
  const { nodes, edges } = useMemo(() => buildBrain(), [])
  const groupRef = useRef<THREE.Group>(null)
  const nodesMeshRef = useRef<THREE.InstancedMesh>(null)
  const pulseRefs = useRef<(THREE.Mesh | null)[]>([])
  const pulseState = useRef(
    Array.from({ length: PULSE_COUNT }, () => ({
      edgeIndex: Math.floor(Math.random() * edges.length),
      t: Math.random(),
      speed: 0.35 + Math.random() * 0.5
    }))
  )

  const edgeGeometry = useMemo(() => {
    const positions = new Float32Array(edges.length * 6)
    const colors = new Float32Array(edges.length * 6)
    edges.forEach((edge, i) => {
      const a = nodes[edge.a].position
      const b = nodes[edge.b].position
      positions.set([a.x, a.y, a.z, b.x, b.y, b.z], i * 6)
      const c = nodes[edge.a].isCyan ? CYAN : MAGENTA
      colors.set([c.r, c.g, c.b, c.r, c.g, c.b], i * 6)
    })
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    return geo
  }, [edges, nodes])

  const dummy = useMemo(() => new THREE.Object3D(), [])

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.09
    }

    // Twinkling neurons (LED-like flicker)
    if (nodesMeshRef.current) {
      nodes.forEach((node, i) => {
        const flicker = 0.75 + Math.sin(t * 2.2 + node.phase) * 0.35
        const scale = node.baseScale * flicker * 0.09
        dummy.position.copy(node.position)
        dummy.scale.setScalar(scale)
        dummy.updateMatrix()
        nodesMeshRef.current!.setMatrixAt(i, dummy.matrix)
      })
      nodesMeshRef.current.instanceMatrix.needsUpdate = true
    }

    // Traveling memory/idea pulses along random synapses
    pulseState.current.forEach((pulse, i) => {
      pulse.t += delta * pulse.speed
      if (pulse.t >= 1 || edges.length === 0) {
        pulse.t = 0
        pulse.edgeIndex = Math.floor(Math.random() * edges.length)
        pulse.speed = 0.35 + Math.random() * 0.5
      }
      const edge = edges[pulse.edgeIndex]
      const mesh = pulseRefs.current[i]
      if (edge && mesh) {
        const a = nodes[edge.a].position
        const b = nodes[edge.b].position
        mesh.position.lerpVectors(a, b, pulse.t)
      }
    })
  })

  return (
    <group ref={groupRef} position={[0, 1.05, 0]} scale={1.35}>
      {/* Synaptic connections */}
      <lineSegments geometry={edgeGeometry}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.55}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {/* Neurons */}
      <instancedMesh ref={nodesMeshRef} args={[undefined, undefined, nodes.length]}>
        <sphereGeometry args={[1, 8, 8]} />
        <meshStandardMaterial
          color="#67e8f9"
          emissive="#22d3ee"
          emissiveIntensity={2.2}
          toneMapped={false}
        />
      </instancedMesh>

      {/* Traveling idea/memory pulses */}
      {pulseState.current.map((_, i) => (
        <mesh
          key={i}
          ref={(el) => {
            pulseRefs.current[i] = el
          }}
        >
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#f0abfc" toneMapped={false} />
        </mesh>
      ))}
    </group>
  )
}
