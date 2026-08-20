import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'cyan' | 'purple' | 'blue' | 'emerald' | 'amber' | 'pink' | 'default'
  className?: string
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variantStyles = {
    cyan: 'bg-cyan-950/60 text-cyan-300 border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)]',
    purple: 'bg-purple-950/60 text-purple-300 border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.15)]',
    blue: 'bg-blue-950/60 text-blue-300 border-blue-500/30 shadow-[0_0_10px_rgba(59,130,246,0.15)]',
    emerald: 'bg-emerald-950/60 text-emerald-300 border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]',
    amber: 'bg-amber-950/60 text-amber-300 border-amber-500/30 shadow-[0_0_10px_rgba(245,158,11,0.15)]',
    pink: 'bg-pink-950/60 text-pink-300 border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.15)]',
    default: 'bg-slate-900/80 text-slate-300 border-slate-700/50'
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border backdrop-blur-sm transition-all duration-200 hover:scale-105 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
