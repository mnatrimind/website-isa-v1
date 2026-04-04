interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 border border-border shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200 ease-in-out">
      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center text-accent mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary-text mb-2">{title}</h3>
      <p className="text-sm text-secondary-text leading-relaxed mb-4">{description}</p>
      <span className="text-sm text-accent font-medium">Saiba mais →</span>
    </div>
  )
}
