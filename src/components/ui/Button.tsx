'use client'

export default function Button({ variant = 'primary', size = 'md', children, className = '', onClick }: {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent) => void
}) {
  const base = 'inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 cursor-pointer whitespace-nowrap'
  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover shadow-sm hover:shadow-md',
    secondary: 'bg-white text-primary border border-border hover:bg-surface',
    ghost: 'text-secondary hover:text-primary',
  }
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3 text-base',
  }
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} onClick={onClick ?? ((e) => e.preventDefault())}>
      {children}
    </button>
  )
}
