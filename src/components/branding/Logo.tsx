import React from 'react'
import { Tree, Globe } from 'lucide-react'

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  showSubbrand?: boolean
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', size = 'md', showSubbrand = false }) => {
  const iconSizes = {
    sm: 24,
    md: 32,
    lg: 48,
  }

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
  }

  const subbrandSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  }

  if (variant === 'icon') {
    return (
      <div className="flex items-center justify-center">
        <div className="relative">
          <Tree
            size={iconSizes[size]}
            className="text-brand-red"
            strokeWidth={1.5}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
        <Tree
          size={iconSizes[size]}
          className="text-brand-red"
          strokeWidth={1.5}
        />
      </div>
      {variant === 'full' && (
        <div className="flex flex-col">
          <span className={`font-bold text-brand-navy ${textSizes[size]}`}>
            Trusted Trade
          </span>
          {showSubbrand && (
            <span className={`text-brand-muted ${subbrandSizes[size]}`}>
              by Apana
            </span>
          )}
        </div>
      )}
      {variant === 'compact' && (
        <span className={`font-bold text-brand-navy ${textSizes[size]}`}>
          TT
        </span>
      )}
    </div>
  )
}
