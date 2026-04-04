interface UseCaseCardProps {
  emoji: string
  title: string
  description: string
}

export default function UseCaseCard({ emoji, title, description }: UseCaseCardProps) {
  return (
    <div className="bg-white rounded-xl p-7 border border-border text-center hover:shadow-lg hover:border-accent/30 transition-all duration-300">
      <span className="text-3xl mb-4 block">{emoji}</span>
      <h3 className="text-lg font-semibold text-primary-text mb-2">{title}</h3>
      <p className="text-sm text-secondary-text leading-relaxed">{description}</p>
    </div>
  )
}
