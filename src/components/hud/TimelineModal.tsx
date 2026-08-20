import { useEffect } from 'react'
import { X, Briefcase, MapPin, Calendar, Award, CheckCircle2 } from 'lucide-react'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'
import { soundFX } from '../../audio/soundFX'

interface TimelineModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TimelineModal({ isOpen, onClose }: TimelineModalProps) {
  const { careerTimeline } = useLocalizedData()
  const t = useT()

  useEffect(() => {
    if (isOpen) {
      soundFX.playModalOpen()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-950 border border-purple-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(168,85,247,0.25)] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-mono font-bold text-white">
                {t.timelineModal.title}
              </h2>
              <p className="text-xs text-purple-300 font-mono">
                {t.timelineModal.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              soundFX.playModalClose()
              onClose()
            }}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Timeline Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          <div className="relative border-l-2 border-purple-500/30 ml-4 sm:ml-6 space-y-8">
            {careerTimeline.map((item, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                
                {/* Timeline Node Orb */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-purple-400 group-hover:scale-125 group-hover:bg-purple-500 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)] transition-all duration-300"></div>

                {/* Content Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-purple-500/40 transition-colors space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-800/60">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {item.location}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base sm:text-lg font-mono font-bold text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="text-xs font-mono text-cyan-400 font-semibold mt-0.5">
                      {item.company}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" /> {t.timelineModal.highlights}
                    </div>
                    <ul className="space-y-1">
                      {item.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="text-xs text-slate-300 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                    {item.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-950 border border-slate-800 text-slate-400"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
