'use client'

import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 rounded-lg'
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/40 hover:-translate-y-0.5',
    outline: 'border hover:bg-white/5 transition-colors',
  }

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  }

  const combinedClassName = baseStyles + ' ' + variantStyles[variant] + ' ' + sizeStyles[size] + ' ' + className

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  )
}