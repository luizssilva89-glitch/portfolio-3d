import { useState, useEffect } from 'react'
import {
  X,
  MessageSquare,
  Mail,
  Phone,
  MapPin,
  Send,
  Copy,
  Check
} from 'lucide-react'
import { useLocalizedData } from '../../data/useLocalizedData'
import { useT } from '../../i18n/translations'
import { GlowButton } from '../ui/GlowButton'
import { soundFX } from '../../audio/soundFX'
import confetti from 'canvas-confetti'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { profile } = useLocalizedData()
  const t = useT()
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (isOpen) {
      soundFX.playModalOpen()
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text)
    soundFX.playSelect()
    if (type === 'email') {
      setCopiedEmail(true)
      setTimeout(() => setCopiedEmail(false), 2000)
    } else {
      setCopiedPhone(true)
      setTimeout(() => setCopiedPhone(false), 2000)
    }
  }

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault()
    soundFX.playSelect()
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    })
    const text = message.trim() || t.contactModal.defaultMessage
    const url = `https://wa.me/5517981171285?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-slate-950 border border-emerald-500/40 rounded-2xl sm:rounded-3xl shadow-[0_0_50px_rgba(16,185,129,0.25)] overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/80">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-mono font-bold text-white">
                {t.contactModal.title}
              </h2>
              <p className="text-xs text-emerald-300 font-mono">
                {t.contactModal.subtitle}
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
        <div className="p-4 sm:p-6 space-y-6">
          
          {/* Quick Direct Channel Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            
            {/* WhatsApp */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">{t.contactModal.whatsappLabel}</div>
                  <div className="text-xs font-mono font-bold text-emerald-300">{profile.phone}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title={t.contactModal.copyPhone}
              >
                {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Email */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-cyan-500/30 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">{t.contactModal.emailLabel}</div>
                  <div className="text-xs font-mono font-bold text-cyan-300">{profile.email}</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title={t.contactModal.copyEmail}
              >
                {copiedEmail ? <Check className="w-4 h-4 text-cyan-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

          </div>

          {/* WhatsApp Direct Form */}
          <form onSubmit={handleSendWhatsApp} className="space-y-3">
            <label className="block text-xs font-mono text-slate-300">
              {t.contactModal.formLabel}
            </label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.contactModal.placeholder}
              className="w-full p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-400"
            />
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" /> {t.contactModal.location}
              </div>
              <GlowButton variant="emerald" size="md" icon={<Send className="w-4 h-4" />}>
                {t.contactModal.sendButton}
              </GlowButton>
            </div>
          </form>

        </div>

      </div>
    </div>
  )
}
