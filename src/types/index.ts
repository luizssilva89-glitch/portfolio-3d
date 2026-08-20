export interface Project {
  id: string
  title: string
  tagline: string
  shortDescription: string
  fullDescription: string
  category: string
  orbitRadius: number
  orbitSpeed: number
  orbitAngle: number
  color: string
  iconName: string
  image?: string
  geometryType: number
  tags: string[]
  metrics: { label: string; value: string }[]
  architecture: {
    frontend?: string
    backend?: string
    ai?: string
    domain?: string
    automation?: string
    database?: string
    infra?: string
  }
  keyFeatures: string[]
  links?: {
    demo?: string
    github?: string
    docs?: string
  }
}

export interface SkillNode {
  name: string
  category: string
  level: number // 1 to 100
  color: string
  position: [number, number, number]
  details: string
}

export interface CareerMilestone {
  period: string
  role: string
  company: string
  location: string
  description: string
  highlights: string[]
  skills: string[]
}

export type ViewMode = '3d-space' | 'executive-list'
export type ActiveTab = 'overview' | 'projects' | 'skills' | 'timeline' | 'terminal' | 'contact'
