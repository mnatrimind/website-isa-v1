interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-7 border border-border hover:border-accent hover:shadow-lg transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary-text mb-2">{title}</h3>
      <p className="text-sm text-secondary-text leading-relaxed">{description}</p>
    </div>
  )
}
