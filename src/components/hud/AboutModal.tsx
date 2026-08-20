import { useEffect } from 'react'
import {
  X,
  Sparkles,
  Zap,
  GraduationCap,
  Briefcase
} from 'lucide-react'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'
import { soundFX } from '../../audio/soundFX'
import { GlowButton } from '../ui/GlowButton'

interface AboutModalProps {
  isOpen: boolean
  onClose: () => void
  onOpenTimeline: () => void
  onOpenContact: () => void
}

export function AboutModal({ isOpen, onClose, onOpenTimeline, onOpenContact }: AboutModalProps) {
  const { profile } = useLocalizedData()
  const t = useT()

  useEffect(() => {
    if (isOpen) {
      soundFX.playModalOpen()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-3xl max-h-[90vh] flex flex-col bg-slate-950 border border-cyan-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden">
                <img
                  src="/avatar.webp"
                  alt={profile.name}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-mono font-bold text-white">
                {profile.name}
              </h2>
              <p className="text-xs text-cyan-300 font-mono">
                {profile.title}
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

        {/* Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 custom-scrollbar">
          
          {/* Bio Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-bold">
              <Sparkles className="w-4 h-4" /> {t.aboutModal.philosophyTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {profile.bio}
            </p>
            <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                <GraduationCap className="w-3.5 h-3.5 text-cyan-400" /> {t.aboutModal.education}
              </span>
              <span className="flex items-center gap-1 bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
                <Briefcase className="w-3.5 h-3.5 text-purple-400" /> {t.aboutModal.experience}
              </span>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {profile.stats.map((s, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400">{s.label}</div>
                <div className="text-base sm:text-lg font-mono font-bold text-cyan-300 mt-0.5">{s.value}</div>
              </div>
            ))}
          </div>

          {/* Superpowers */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" /> {t.aboutModal.specialtiesTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {profile.superpowers.map((sp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-1.5">
                  <h4 className="text-xs font-mono font-bold text-cyan-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                    {sp.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {sp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/90 flex items-center justify-between gap-3">
          <GlowButton
            variant="ghost"
            size="sm"
            onClick={() => {
              onClose()
              onOpenTimeline()
            }}
          >
            {t.aboutModal.timelineButton}
          </GlowButton>

          <GlowButton
            variant="cyan"
            size="sm"
            onClick={() => {
              onClose()
              onOpenContact()
            }}
          >
            {t.aboutModal.contactButton}
          </GlowButton>
        </div>

      </div>
    </div>
  )
}
