'use client'

import { type ComponentPropsWithoutRef } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  size?: Size
  href?: string
  onClick?: (e: React.MouseEvent) => void
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-accent text-white hover:bg-accent-light shadow-sm hover:shadow-md',
  secondary: 'bg-white text-primary-text border border-border hover:bg-surface',
  ghost: 'bg-transparent text-secondary-text hover:text-primary-text',
}

const sizeStyles: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  ...rest
}: ButtonProps & Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonProps>) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-in-out cursor-pointer whitespace-nowrap ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
