import React from 'react'
import clsx from 'clsx'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = 'font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'

  const variants = {
    primary: 'bg-brand-navy text-white hover:bg-brand-navy-light focus:ring-brand-navy',
    secondary: 'bg-brand-red text-white hover:bg-red-700 focus:ring-brand-red',
    outline: 'border border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white focus:ring-brand-navy',
    ghost: 'text-brand-navy hover:bg-gray-100 focus:ring-brand-navy',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={clsx(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
