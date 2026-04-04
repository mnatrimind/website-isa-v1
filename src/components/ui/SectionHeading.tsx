interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'center' | 'left'
}

export default function SectionHeading({
  label,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
        {label}
      </p>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-primary-text tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg text-secondary-text max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
