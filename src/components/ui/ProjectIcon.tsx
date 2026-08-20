import {
  Scale,
  ShieldCheck,
  Clapperboard,
  WalletCards,
  MessagesSquare,
  ScanFace,
  Gauge,
  CarFront,
  TerminalSquare,
  Building2,
  GraduationCap,
  Hotel,
  Sparkles,
  Layers,
  Ticket,
  Box
} from 'lucide-react'

interface ProjectIconProps {
  name: string
  color?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export function ProjectIcon({ name, color = '#06b6d4', size = 'md', className = '' }: ProjectIconProps) {
  const sizeMap = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-7 h-7',
    xl: 'w-9 h-9'
  }

  const containerSizeMap = {
    sm: 'p-1.5 rounded-lg',
    md: 'p-2.5 rounded-xl',
    lg: 'p-3.5 rounded-2xl',
    xl: 'p-4 rounded-2xl'
  }

  const iconClass = sizeMap[size]

  const getIcon = () => {
    switch (name) {
      case 'Scale':
        return <Scale className={iconClass} />
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />
      case 'Clapperboard':
        return <Clapperboard className={iconClass} />
      case 'WalletCards':
        return <WalletCards className={iconClass} />
      case 'MessagesSquare':
        return <MessagesSquare className={iconClass} />
      case 'ScanFace':
        return <ScanFace className={iconClass} />
      case 'Gauge':
        return <Gauge className={iconClass} />
      case 'CarFront':
        return <CarFront className={iconClass} />
      case 'TerminalSquare':
        return <TerminalSquare className={iconClass} />
      case 'Building2':
        return <Building2 className={iconClass} />
      case 'GraduationCap':
        return <GraduationCap className={iconClass} />
      case 'Hotel':
        return <Hotel className={iconClass} />
      case 'Sparkles':
        return <Sparkles className={iconClass} />
      case 'Layers':
        return <Layers className={iconClass} />
      case 'Ticket':
        return <Ticket className={iconClass} />
      default:
        return <Box className={iconClass} />
    }
  }

  return (
    <div
      style={{
        backgroundColor: `${color}18`,
        borderColor: `${color}40`,
        color: color,
        boxShadow: `0 0 20px ${color}25`
      }}
      className={`border flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${containerSizeMap[size]} ${className}`}
    >
      {getIcon()}
    </div>
  )
}
