import { useEffect } from 'react'
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  Database,
  Server,
  Cloud,
  Code2,
  MessageSquareShare
} from 'lucide-react'
import { Project } from '../../types'
import { Badge } from '../ui/Badge'
import { GlowButton } from '../ui/GlowButton'
import { ProjectIcon } from '../ui/ProjectIcon'
import { soundFX } from '../../audio/soundFX'
import { useT } from '../../i18n/translations'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const t = useT()

  useEffect(() => {
    if (project) {
      soundFX.playModalOpen()
    }
  }, [project])

  if (!project) return null

  const handleClose = () => {
    soundFX.playModalClose()
    onClose()
  }

  const projectWhatsAppUrl = `https://wa.me/5517981171285?text=${encodeURIComponent(t.projectModal.whatsappText(project.title))}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end p-2 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-2xl h-full max-h-[94vh] flex flex-col bg-slate-950/95 border border-cyan-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_60px_rgba(6,182,212,0.3)] overflow-hidden animate-slideLeft"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-start justify-between gap-4 bg-gradient-to-r from-slate-900/90 to-slate-950">
          <div className="flex items-start gap-4">
            <ProjectIcon name={project.iconName} color={project.color} size="lg" />
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="cyan">{project.category}</Badge>
                <span className="text-xs font-mono text-slate-400">{t.projectModal.idLabel} {project.id}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-mono font-bold text-white">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm font-mono text-cyan-400 font-semibold">
                {project.tagline}
              </p>
              <p className="text-xs sm:text-sm text-cyan-200/80 font-mono">
                {project.shortDescription}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500 transition-colors shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body / Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar font-sans">
          
          {/* Holographic Project Image Showcase */}
          {project.image && (
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-950 p-2 group shadow-[0_0_30px_rgba(6,182,212,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-64 object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          )}

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {project.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-center"
              >
                <div className="text-xs text-slate-400 font-mono">{metric.label}</div>
                <div className="text-base sm:text-lg font-mono font-bold text-cyan-300">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>

          {/* Full Engineering Narrative */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
              <Cpu className="w-4 h-4 text-cyan-400" /> {t.projectModal.engineeringTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal bg-slate-900/40 p-4 rounded-xl border border-slate-850">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Blueprint Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
              <Layers className="w-4 h-4 text-purple-400" /> {t.projectModal.architectureTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-mono">
              {project.architecture.frontend && (
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-purple-400 font-semibold mb-1 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> {t.projectModal.frontend}
                  </div>
                  <div className="text-slate-300">{project.architecture.frontend}</div>
                </div>
              )}
              {project.architecture.backend && (
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-cyan-400 font-semibold mb-1 flex items-center gap-1">
                    <Server className="w-3.5 h-3.5" /> {t.projectModal.backend}
                  </div>
                  <div className="text-slate-300">{project.architecture.backend}</div>
                </div>
              )}
              {project.architecture.ai && (
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-pink-400 font-semibold mb-1 flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5" /> {t.projectModal.ai}
                  </div>
                  <div className="text-slate-300">{project.architecture.ai}</div>
                </div>
              )}
              {project.architecture.domain && (
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                    <Layers className="w-3.5 h-3.5" /> {t.projectModal.domain}
                  </div>
                  <div className="text-slate-300">{project.architecture.domain}</div>
                </div>
              )}
              {project.architecture.database && (
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80">
                  <div className="text-emerald-400 font-semibold mb-1 flex items-center gap-1">
                    <Database className="w-3.5 h-3.5" /> {t.projectModal.database}
                  </div>
                  <div className="text-slate-300">{project.architecture.database}</div>
                </div>
              )}
              {project.architecture.infra && (
                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 sm:col-span-2">
                  <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1">
                    <Cloud className="w-3.5 h-3.5" /> {t.projectModal.infra}
                  </div>
                  <div className="text-slate-300">{project.architecture.infra}</div>
                </div>
              )}
            </div>
          </div>

          {/* Key Features List */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5 font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> {t.projectModal.featuresTitle}
            </h3>
            <ul className="space-y-2">
              {project.keyFeatures.map((feat, idx) => (
                <li
                  key={idx}
                  className="text-xs sm:text-sm text-slate-300 flex items-start gap-2.5 bg-slate-900/30 p-2.5 rounded-lg border border-slate-850"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Tags */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              {t.projectModal.techTitle}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-950 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-slate-900 border border-slate-700 text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.projectModal.github}</span>
              </a>
            )}
            {project.links?.demo && (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900/60 transition-colors shadow-[0_0_15px_rgba(6,182,212,0.25)]"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{t.projectModal.demo}</span>
              </a>
            )}
          </div>

          <GlowButton
            variant="emerald"
            size="sm"
            icon={<MessageSquareShare className="w-4 h-4" />}
            onClick={() => window.open(projectWhatsAppUrl, '_blank')}
          >
            {t.projectModal.talk}
          </GlowButton>
        </div>

      </div>
    </div>
  )
}
