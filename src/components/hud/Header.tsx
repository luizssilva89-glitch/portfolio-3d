import { useState } from 'react'
import {
  Terminal as TerminalIcon,
  Volume2,
  VolumeX,
  Radio,
  FileDown,
  MessageSquare,
  Clock,
  Layers,
  Globe,
  LayoutGrid,
  Languages
} from 'lucide-react'
import { GlowButton, GlowLink } from '../ui/GlowButton'
import { getResumeUrl } from '../../utils/resume'
import { soundFX } from '../../audio/soundFX'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'
import { useLanguage } from '../../i18n/LanguageContext'
import { ViewMode } from '../../types'

interface HeaderProps {
  viewMode: ViewMode
  onToggleViewMode: () => void
  onOpenTerminal: () => void
  onOpenTimeline: () => void
  onOpenContact: () => void
  onOpenAbout: () => void
  showSkills3D: boolean
  onToggleSkills3D: () => void
}

export function Header({
  viewMode,
  onToggleViewMode,
  onOpenTerminal,
  onOpenTimeline,
  onOpenContact,
  onOpenAbout,
  showSkills3D,
  onToggleSkills3D
}: HeaderProps) {
  const { profile } = useLocalizedData()
  const t = useT()
  const { language, toggleLanguage } = useLanguage()
  const [isMuted, setIsMuted] = useState(soundFX.getIsMuted())
  const [isDroneOn, setIsDroneOn] = useState(soundFX.getIsDronePlaying())

  const handleToggleMute = () => {
    const nextMuted = !isMuted
    setIsMuted(nextMuted)
    soundFX.setMuted(nextMuted)
  }

  const handleToggleDrone = () => {
    const active = soundFX.toggleAmbientDrone()
    setIsDroneOn(active)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-3 sm:p-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 bg-slate-950/80 border border-slate-800/80 rounded-2xl p-2.5 sm:p-3 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.8)] pointer-events-auto">
        
        {/* Left: Identity / Branding */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-start">
          <button
            onClick={onOpenAbout}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[2px] shadow-[0_0_15px_rgba(6,182,212,0.5)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-slate-950 rounded-[14px] overflow-hidden">
                  <img
                    src="/avatar.webp"
                    alt={profile.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-400 border-2 border-slate-950 rounded-full animate-pulse"></span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-mono font-bold text-sm sm:text-base text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {profile.name}
                </h1>
                <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                  {t.header.badge}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                {t.header.location}
              </p>
            </div>
          </button>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-1.5 md:hidden">
            <button
              onClick={handleToggleMute}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              title={isMuted ? t.header.muteOn : t.header.muteOff}
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={onToggleViewMode}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
              title={t.header.toggleView}
            >
              {viewMode === '3d-space' ? <LayoutGrid className="w-4 h-4 text-purple-400" /> : <Globe className="w-4 h-4 text-cyan-400" />}
            </button>
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px] font-bold flex items-center justify-center w-8 h-8"
              title={t.header.languageToggle}
            >
              {language === 'pt' ? 'EN' : 'PT'}
            </button>
          </div>
        </div>

        {/* Center / Navigation Pills */}
        <div className="hidden md:flex items-center gap-2">
          <GlowButton
            variant={viewMode === '3d-space' ? 'cyan' : 'ghost'}
            size="sm"
            icon={viewMode === '3d-space' ? <Globe className="w-3.5 h-3.5" /> : <LayoutGrid className="w-3.5 h-3.5" />}
            onClick={onToggleViewMode}
          >
            {viewMode === '3d-space' ? t.header.nav3d : t.header.navList}
          </GlowButton>

          <GlowButton
            variant={showSkills3D ? 'purple' : 'ghost'}
            size="sm"
            icon={<Layers className="w-3.5 h-3.5" />}
            onClick={onToggleSkills3D}
          >
            {t.header.navSkills}
          </GlowButton>

          <GlowButton
            variant="ghost"
            size="sm"
            icon={<Clock className="w-3.5 h-3.5" />}
            onClick={onOpenTimeline}
          >
            {t.header.navTimeline}
          </GlowButton>

          <GlowButton
            variant="ghost"
            size="sm"
            icon={<TerminalIcon className="w-3.5 h-3.5" />}
            onClick={onOpenTerminal}
          >
            {t.header.navTerminal}
          </GlowButton>
        </div>

        {/* Right: Audio & Action CTAs */}
        <div className="flex items-center gap-2 w-full md:w-auto justify-end">
          {/* Audio Controls */}
          <div className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <button
              onClick={handleToggleMute}
              className={`p-1.5 rounded-lg transition-colors ${
                isMuted ? 'text-red-400 hover:bg-red-950/40' : 'text-cyan-400 hover:bg-cyan-950/40'
              }`}
              title={isMuted ? t.header.muteOn : t.header.muteOff}
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={handleToggleDrone}
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-mono transition-all ${
                isDroneOn
                  ? 'bg-purple-950/80 text-purple-300 border border-purple-500/50 shadow-[0_0_10px_rgba(168,85,247,0.4)] animate-pulse'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title={t.header.droneTitle}
            >
              <Radio className="w-3 h-3" />
              <span>{isDroneOn ? t.header.droneOn : t.header.drone}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-mono text-slate-400 hover:text-slate-200 transition-colors"
              title={t.header.languageToggle}
            >
              <Languages className="w-3 h-3" />
              <span>{language === 'pt' ? 'EN' : 'PT'}</span>
            </button>
          </div>

          <GlowLink
            variant="ghost"
            size="sm"
            icon={<FileDown className="w-3.5 h-3.5 text-cyan-400" />}
            href={getResumeUrl(language)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.header.resume}
          </GlowLink>

          <GlowButton
            variant="emerald"
            size="sm"
            icon={<MessageSquare className="w-3.5 h-3.5" />}
            onClick={onOpenContact}
          >
            {t.header.contact}
          </GlowButton>
        </div>

      </div>
    </header>
  )
}
