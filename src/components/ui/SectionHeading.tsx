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
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-text tracking-tight mb-4">
        {title}
      </h2>
      {description && (
        <p className={`text-lg text-secondary-text max-w-2xl leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  )
}
