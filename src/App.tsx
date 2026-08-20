import { useState } from 'react'
import { Loader } from '@react-three/drei'
import { Scene3D } from './components/3d/Scene3D'
import { Header } from './components/hud/Header'
import { ProjectModal } from './components/hud/ProjectModal'
import { Terminal } from './components/hud/Terminal'
import { TimelineModal } from './components/hud/TimelineModal'
import { ContactModal } from './components/hud/ContactModal'
import { AboutModal } from './components/hud/AboutModal'
import { ExecutiveView } from './components/hud/ExecutiveView'
import { useLocalizedData } from './data/useLocalizedData'
import { useT } from './i18n/translations'
import { Project, SkillNode, ViewMode } from './types'
import { soundFX } from './audio/soundFX'
import { Compass, Terminal as TerminalIcon } from 'lucide-react'

export function App() {
  const { projects, skillNodes } = useLocalizedData()
  const t = useT()
  const [viewMode, setViewMode] = useState<ViewMode>('3d-space')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const [showSkills3D, setShowSkills3D] = useState(false)
  const [isTerminalOpen, setIsTerminalOpen] = useState(false)
  const [isTimelineOpen, setIsTimelineOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  const selectedProject = projects.find((p) => p.id === selectedProjectId) || null

  const handleSelectProject = (project: Project) => {
    setSelectedProjectId(project.id)
  }

  const handleSelectProjectById = (id: string) => {
    const found = projects.find((p) => p.id === id)
    if (found) {
      setSelectedProjectId(found.id)
      setViewMode('3d-space')
    }
  }

  const handleSelectSkill = (_skill: SkillNode) => {
    setIsAboutOpen(true)
  }

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#030712] text-slate-100 select-none">
      {/* Cinematic System Boot Loader */}
      <Loader
        containerStyles={{
          background: '#030712',
          flexDirection: 'column',
          gap: '1rem'
        }}
        innerStyles={{
          width: '260px',
          height: '3px',
          background: 'rgba(6, 182, 212, 0.15)'
        }}
        barStyles={{
          background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
          height: '3px'
        }}
        dataStyles={{
          fontFamily: "'Fira Code', monospace",
          fontSize: '11px',
          letterSpacing: '0.15em',
          color: '#67e8f9',
          marginTop: '0.75rem'
        }}
        dataInterpolation={(p) => `${t.loader.label} · ${p.toFixed(0)}%`}
      />

      {/* 3D Scene Layer */}
      <Scene3D
        projects={projects}
        skills={skillNodes}
        selectedProject={selectedProject}
        showSkills3D={showSkills3D}
        onSelectProject={handleSelectProject}
        onSelectSkill={handleSelectSkill}
        onCoreClick={() => setIsAboutOpen(true)}
      />

      {/* Top HUD Command Bar */}
      <Header
        viewMode={viewMode}
        onToggleViewMode={() => {
          soundFX.playSelect()
          setViewMode(viewMode === '3d-space' ? 'executive-list' : '3d-space')
        }}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenTimeline={() => setIsTimelineOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenAbout={() => setIsAboutOpen(true)}
        showSkills3D={showSkills3D}
        onToggleSkills3D={() => {
          soundFX.playSelect()
          setShowSkills3D(!showSkills3D)
        }}
      />

      {/* Executive List Mode View */}
      {viewMode === 'executive-list' && (
        <div className="absolute inset-0 z-20 overflow-y-auto bg-slate-950/90 backdrop-blur-xl custom-scrollbar">
          <ExecutiveView
            onSelectProject={(p) => setSelectedProjectId(p.id)}
            onOpenContact={() => setIsContactOpen(true)}
          />
        </div>
      )}

      {/* 3D Mode Bottom Quick-Navigator Bar */}
      {viewMode === '3d-space' && (
        <div className="fixed bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 max-w-[95vw] sm:max-w-5xl w-full px-2 pointer-events-none">
          <div className="p-2 sm:p-2.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.8)] pointer-events-auto flex items-center justify-between gap-2 overflow-x-auto custom-scrollbar">
            
            <div className="flex items-center gap-1.5 shrink-0 px-2 text-cyan-400 font-mono text-xs font-bold hidden sm:flex">
              <Compass className="w-4 h-4 animate-spin-slow" />
              <span>{t.app.stationsLabel}</span>
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {projects.map((p) => {
                const isSelected = selectedProject?.id === p.id
                return (
                  <button
                    key={p.id}
                    onClick={() => {
                      soundFX.playWarp()
                      setSelectedProjectId(p.id)
                    }}
                    className={`px-3 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] scale-105'
                        : 'bg-slate-900/60 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white'
                    }`}
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: p.color }}
                    />
                    <span>{p.title}</span>
                  </button>
                )
              })}
            </div>

            <button
              onClick={() => setIsTerminalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-cyan-400 font-mono text-xs hover:border-cyan-400 shrink-0 hidden md:flex items-center gap-1"
            >
              <TerminalIcon className="w-3.5 h-3.5" />
              <span>{t.app.cli}</span>
            </button>

          </div>
        </div>
      )}

      {/* Floating Instructions Pill (Only in 3D Mode) */}
      {viewMode === '3d-space' && !selectedProject && (
        <div className="fixed bottom-20 left-4 z-20 hidden lg:block pointer-events-none">
          <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md text-[11px] font-mono text-slate-400 space-y-1">
            <div className="text-cyan-300 font-bold">
              {t.app.navTitle}
            </div>
            <div>• {t.app.navHint1}</div>
            <div>• {t.app.navHint2}</div>
            <div>• {t.app.navHint3}</div>
          </div>
        </div>
      )}

      {/* Holographic Modals and Drawers */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProjectId(null)}
      />

      <Terminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onSelectProjectById={handleSelectProjectById}
      />

      <TimelineModal
        isOpen={isTimelineOpen}
        onClose={() => setIsTimelineOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenTimeline={() => setIsTimelineOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  )
}

export default App
