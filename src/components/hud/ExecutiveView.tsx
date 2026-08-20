import { useState } from 'react'
import {
  Layers,
  Cpu,
  ArrowRight,
  Briefcase,
  Globe,
  MapPin,
  FileDown
} from 'lucide-react'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'
import { Project } from '../../types'
import { Badge } from '../ui/Badge'
import { GlowButton, GlowLink } from '../ui/GlowButton'
import { getResumeUrl } from '../../utils/resume'
import { useLanguage } from '../../i18n/LanguageContext'
import { ProjectIcon } from '../ui/ProjectIcon'
import { soundFX } from '../../audio/soundFX'

interface ExecutiveViewProps {
  onSelectProject: (project: Project) => void
  onOpenContact: () => void
}

export function ExecutiveView({ onSelectProject, onOpenContact }: ExecutiveViewProps) {
  const { projects, skillNodes, profile } = useLocalizedData()
  const t = useT()
  const { language } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: t.executiveView.categoryAll },
    ...Array.from(new Set(projects.map((p) => p.category))).map((c) => ({ id: c, label: c }))
  ]

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-24 pb-20 space-y-12 animate-fadeIn font-sans">
      
      {/* Executive Hero Banner */}
      <div className="relative rounded-3xl bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/80 border border-cyan-500/30 p-6 sm:p-10 shadow-[0_0_50px_rgba(6,182,212,0.15)] overflow-hidden">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            {t.executiveView.badge}
          </div>

          <h2 className="text-2xl sm:text-4xl font-mono font-bold text-white tracking-tight">
            {t.executiveView.heroTitlePart1} <span className="text-cyan-400">{t.executiveView.heroTitlePart2}</span> {t.executiveView.heroTitlePart3}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {profile.headline}
          </p>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4">
            {profile.stats.map((s, idx) => (
              <div key={idx} className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] text-slate-400 font-mono">{s.label}</div>
                <div className="text-sm sm:text-base font-mono font-bold text-cyan-300 mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white flex items-center gap-2">
              <Cpu className="w-5 h-5 text-cyan-400" /> {t.executiveView.projectsTitle}
            </h3>
            <p className="text-xs text-slate-400 font-mono mt-0.5">
              {t.executiveView.projectsSubtitle}
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => {
                  soundFX.playSelect()
                  setSelectedCategory(c.id)
                }}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  selectedCategory === c.id
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                soundFX.playSelect()
                onSelectProject(project)
              }}
              className="group relative rounded-2xl bg-slate-950/80 border border-slate-800/90 hover:border-cyan-500/50 p-5 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_35px_rgba(6,182,212,0.18)] flex flex-col justify-between cursor-pointer overflow-hidden"
            >
              <div className="space-y-4">
                {/* Project Image Banner */}
                {project.image ? (
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-slate-950 border border-slate-800/80 flex items-center justify-center p-2">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge variant="cyan">{project.category}</Badge>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between gap-3">
                    <ProjectIcon name={project.iconName} color={project.color} size="md" />
                    <Badge variant="cyan">{project.category}</Badge>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <ProjectIcon name={project.iconName} color={project.color} size="sm" className="mt-1" />
                  <div>
                    <h4 className="text-lg font-mono font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  {project.metrics.slice(0, 2).map((m, mIdx) => (
                    <div key={mIdx}>
                      <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                      <div className="text-xs font-mono font-bold text-cyan-300">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                <span>{t.executiveView.inspect}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skill Matrix Grid */}
      <div className="space-y-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-purple-400" /> {t.executiveView.skillsTitle}
          </h3>
          <p className="text-xs text-slate-400 font-mono mt-0.5">
            {t.executiveView.skillsSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from(new Set(skillNodes.map((s) => s.category))).map((cat) => {
            const skillsInCat = skillNodes.filter((s) => s.category === cat)
            const catColor = skillsInCat[0]?.color ?? '#06b6d4'

            return (
              <div
                key={cat}
                className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-4"
              >
                <h4
                  className="text-sm font-mono font-bold border-b pb-2"
                  style={{ color: catColor, borderColor: `${catColor}4D` }}
                >
                  {cat}
                </h4>
                <div className="space-y-3">
                  {skillsInCat.map((s) => (
                    <div key={s.name} className="space-y-1">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-200">{s.name}</span>
                        <span className="text-cyan-400 font-bold">{s.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{
                            width: `${s.level}%`,
                            backgroundColor: s.color
                          }}
                        />
                      </div>
                      <div className="text-[10px] text-slate-400 leading-tight">
                        {s.details}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Call to action footer */}
      <div className="p-8 rounded-3xl bg-gradient-to-tr from-cyan-950/60 via-slate-950 to-purple-950/60 border border-cyan-500/40 text-center space-y-5">
        {/* Selo de disponibilidade */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-950/70 text-emerald-300 border border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.25)]">
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400"></span>
          </span>
          {t.executiveView.availabilityStatus}
        </div>

        <h3 className="text-xl sm:text-2xl font-mono font-bold text-white">
          {t.executiveView.ctaTitle}
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
          {t.executiveView.ctaSubtitle}
        </p>

        {/* Condicoes de contratacao */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { icon: <Briefcase className="w-3.5 h-3.5 text-emerald-400" />, label: t.executiveView.availabilityContract },
            { icon: <Globe className="w-3.5 h-3.5 text-cyan-400" />, label: t.executiveView.availabilityModel },
            { icon: <MapPin className="w-3.5 h-3.5 text-purple-400" />, label: t.executiveView.availabilityLocation }
          ].map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[11px] font-mono text-slate-200 bg-slate-950/70 border border-slate-800"
            >
              {item.icon}
              {item.label}
            </span>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <GlowButton variant="emerald" size="lg" onClick={onOpenContact}>
            {t.executiveView.ctaButton}
          </GlowButton>

          <GlowLink
            variant="ghost"
            size="lg"
            icon={<FileDown className="w-4 h-4 text-cyan-400" />}
            href={getResumeUrl(language)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.executiveView.ctaResumeButton}
          </GlowLink>
        </div>
      </div>

    </div>
  )
}
