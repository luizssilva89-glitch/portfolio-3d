import React from 'react'
import { soundFX } from '../../audio/soundFX'

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'cyan' | 'purple' | 'emerald' | 'amber' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
}

export function GlowButton({
  children,
  variant = 'cyan',
  size = 'md',
  icon,
  className = '',
  onClick,
  ...props
}: GlowButtonProps) {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  }

  const variantStyles = {
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/40 hover:bg-purple-500/25 hover:border-purple-400 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/25 hover:border-emerald-400 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/40 hover:bg-amber-500/25 hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]',
    ghost: 'bg-slate-900/40 text-slate-300 border-slate-700/50 hover:bg-slate-800/60 hover:text-white'
  }

  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2 rounded-xl font-mono font-medium border backdrop-blur-md transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      onMouseEnter={() => soundFX.playHover()}
      onClick={(e) => {
        soundFX.playSelect()
        onClick?.(e)
      }}
      {...props}
    >
      {icon && <span className="text-current">{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
