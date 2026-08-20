import { Project } from '../types'

export function getOrbitPosition(project: Project, t: number, index: number): [number, number, number] {
  const angle = project.orbitAngle + t * (project.orbitSpeed * 0.16)
  const x = Math.cos(angle) * project.orbitRadius
  const z = Math.sin(angle) * project.orbitRadius
  const y = Math.sin(t * 0.5 + index * 0.7) * 0.9
  return [x, y, z]
}
