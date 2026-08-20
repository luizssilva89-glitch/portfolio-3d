import React, { useState, useRef, useEffect } from 'react'
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react'
import { soundFX } from '../../audio/soundFX'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'
import { useLanguage } from '../../i18n/LanguageContext'

interface TerminalProps {
  isOpen: boolean
  onClose: () => void
  onSelectProjectById?: (id: string) => void
}

interface CommandLog {
  command: string
  output: React.ReactNode
}

export function Terminal({ isOpen, onClose, onSelectProjectById }: TerminalProps) {
  const { profile, projects, skillNodes, careerTimeline } = useLocalizedData()
  const t = useT()
  const { language } = useLanguage()
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<CommandLog[]>([])
  const [isExpanded, setIsExpanded] = useState(false)
  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      soundFX.playModalOpen()
      setTimeout(() => inputRef.current?.focus(), 150)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  if (!isOpen) return null

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    soundFX.playSelect()

    let result: React.ReactNode = null

    switch (trimmed) {
      case 'help':
        result = (
          <div className="space-y-1 text-slate-300">
            <div className="text-cyan-400 font-bold">{t.terminal.helpTitle}</div>
            <div>• <span className="text-amber-400 font-mono">about</span> · {t.terminal.helpAbout}</div>
            <div>• <span className="text-amber-400 font-mono">projects</span> · {t.terminal.helpProjects}</div>
            <div>• <span className="text-amber-400 font-mono">skills</span> · {t.terminal.helpSkills}</div>
            <div>• <span className="text-amber-400 font-mono">timeline</span> · {t.terminal.helpTimeline}</div>
            {projects.map((p) => (
              <div key={p.id}>
                • <span className="text-amber-400 font-mono">{p.id.split('-')[0]}</span> · {p.shortDescription}
              </div>
            ))}
            <div>• <span className="text-amber-400 font-mono">whatsapp</span> · {t.terminal.helpWhatsapp}</div>
            <div>• <span className="text-amber-400 font-mono">cv</span> · {t.terminal.helpCv}</div>
            <div>• <span className="text-amber-400 font-mono">clear</span> · {t.terminal.helpClear}</div>
          </div>
        )
        break

      case 'about':
        result = (
          <div className="space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold font-mono">{profile.name} · {profile.title}</div>
            <div className="text-xs text-slate-400">{profile.bio}</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-2">
              {profile.stats.map((s, i) => (
                <div key={i} className="p-2 rounded bg-slate-900/60 border border-slate-800">
                  <div className="text-[10px] text-slate-400 font-mono">{s.label}</div>
                  <div className="text-xs font-bold text-cyan-300 font-mono">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case 'projects':
        result = (
          <div className="space-y-2 text-slate-300">
            <div className="text-cyan-400 font-bold font-mono">{t.terminal.projectsTitle}</div>
            <div className="space-y-2">
              {projects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => {
                    onSelectProjectById?.(p.id)
                    onClose()
                  }}
                  className="p-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500 cursor-pointer transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300 font-mono text-xs">{p.title}</span>
                    <span className="text-[10px] font-mono text-purple-400 bg-purple-950/40 px-1.5 py-0.5 rounded border border-purple-800/40">
                      {p.category}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">{p.shortDescription}</div>
                  <div className="text-[10px] text-slate-500 font-mono mt-1">{t.terminal.openIn3d}</div>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case 'skills':
        result = (
          <div className="space-y-3 text-slate-300">
            <div className="text-cyan-400 font-bold font-mono">{t.terminal.skillsTitle}</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {skillNodes.map((s, i) => (
                <div key={i} className="p-2 rounded bg-slate-900/50 border border-slate-800 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-200 font-semibold">
                    <span>{s.name}</span>
                    <span className="text-cyan-400">{s.level}%</span>
                  </div>
                  <div className="w-full h-1 bg-slate-800 rounded-full mt-1.5 overflow-hidden">
                    <div className="h-full bg-cyan-400" style={{ width: `${s.level}%` }}></div>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">{s.details}</div>
                </div>
              ))}
            </div>
          </div>
        )
        break

      case 'timeline':
        result = (
          <div className="space-y-3 text-slate-300 font-mono">
            <div className="text-cyan-400 font-bold">{t.terminal.timelineTitle}</div>
            {careerTimeline.map((c, i) => (
              <div key={i} className="border-l-2 border-cyan-500/50 pl-3 py-1 text-xs">
                <div className="text-cyan-300 font-bold">{c.period} · {c.role}</div>
                <div className="text-slate-400 text-[11px]">{c.company} · {c.location}</div>
                <div className="text-slate-300 text-[11px] mt-1">{c.description}</div>
              </div>
            ))}
          </div>
        )
        break

      case 'whatsapp':
        window.open(profile.whatsappUrl, '_blank')
        result = <div className="text-emerald-400">{t.terminal.whatsappOpening} (+55 17 98117-1285)</div>
        break

      case 'cv':
        window.open(language === 'pt' ? '/curriculo-luiz-sergio.pdf' : '/resume-luiz-sergio-en.pdf', '_blank')
        result = <div className="text-cyan-400">{t.terminal.cvOpening}</div>
        break

      case 'clear':
        setHistory([])
        return

      default: {
        const query = trimmed.replace(/-/g, '')
        const found = projects.find((p) => p.id.replace(/-/g, '').startsWith(query))

        result = found ? (
          <div className="space-y-2 text-slate-300 bg-slate-900/80 p-3 rounded-xl border border-cyan-500/40 font-mono">
            <div className="text-sm font-bold text-cyan-300">{found.title}</div>
            <div className="text-xs text-slate-300">{found.fullDescription}</div>
            <div className="text-[11px] text-purple-300">Stack: {found.tags.join(', ')}</div>
            <button
              onClick={() => {
                onSelectProjectById?.(found.id)
                onClose()
              }}
              className="mt-2 text-xs px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400 rounded-lg hover:bg-cyan-500/40"
            >
              {t.terminal.openIn3d}
            </button>
          </div>
        ) : (
          <div className="text-red-400">{t.terminal.notFound(cmd)}</div>
        )
        break
      }
    }

    setHistory((prev) => [...prev, { command: cmd, output: result }])
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return
    handleCommand(input)
    setInput('')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md">
      <div
        className={`w-full flex flex-col bg-slate-950 border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden transition-all duration-300 font-mono ${
          isExpanded ? 'max-w-5xl h-[92vh]' : 'max-w-3xl h-[600px]'
        }`}
      >
        {/* Terminal Titlebar */}
        <div className="px-4 py-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-bold">
            <TerminalIcon className="w-4 h-4" />
            <span>{t.terminal.windowTitle}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={() => {
                soundFX.playModalClose()
                onClose()
              }}
              className="p-1 rounded text-slate-400 hover:text-red-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Logs Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar text-xs">
          {/* Welcome banner, always reflects current language */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400">➜</span>
              <span className="text-purple-400">~</span>
              <span className="text-slate-100 font-bold">welcome</span>
            </div>
            <div className="pl-4 space-y-1.5 text-cyan-300">
              <div>🚀 <span className="font-bold text-white">{t.terminal.welcomeVersion}</span> · {t.terminal.welcomeTagline}</div>
              <div className="text-slate-400">{t.terminal.welcomeLine1(profile.name)}</div>
              <div className="text-slate-400">
                {t.terminal.welcomeLine2} <span className="text-amber-400 font-bold">help</span> {t.terminal.helpHint} <span className="text-emerald-400 font-bold">projects</span> {t.terminal.projectsHint}
              </div>
            </div>
          </div>

          {history.map((item, idx) => (
            <div key={idx} className="space-y-1.5">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-emerald-400">➜</span>
                <span className="text-purple-400">~</span>
                <span className="text-slate-100 font-bold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <form onSubmit={handleSubmit} className="p-3 bg-slate-900/90 border-t border-slate-800 flex items-center gap-2">
          <span className="text-emerald-400 text-sm">➜</span>
          <span className="text-purple-400 text-sm font-bold">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
              soundFX.playTyping()
            }}
            placeholder={t.terminal.placeholder}
            className="flex-1 bg-transparent border-none outline-none text-xs text-cyan-300 font-mono placeholder:text-slate-500"
          />
          <button
            type="submit"
            className="p-1.5 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800 hover:bg-cyan-900 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  )
}
