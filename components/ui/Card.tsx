'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`rounded-2xl border border-white/8 bg-navy-light/50 p-6 hover:border-white/20 transition-all duration-300 ${className}`}>
      {children}
    </div>
  )
}