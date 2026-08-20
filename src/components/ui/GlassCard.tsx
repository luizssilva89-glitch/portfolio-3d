import React from 'react'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
  onClick?: () => void
}

export function GlassCard({
  children,
  className = '',
  glowColor = 'rgba(6, 182, 212, 0.15)',
  onClick
}: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        boxShadow: `0 8px 32px 0 ${glowColor}`
      }}
      className={`relative rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl transition-all duration-300 ${className}`}
    >
      {children}
    </div>
  )
}
