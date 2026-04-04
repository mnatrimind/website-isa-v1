import { SITE, NAV_LINKS } from '@/lib/constants'
import Container from './Container'
import Button from '@/components/ui/Button'

const companyLinks = [
  { label: 'Contato', href: `mailto:${SITE.email}` },
  { label: 'Privacidade', href: '#' },
  { label: 'Termos', href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A2540] pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-white font-bold text-lg block mb-2">{SITE.name}</span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Automação inteligente para contabilidade.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Produto</h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-white font-semibold text-sm">Comece agora</h4>
            <Button variant="primary" size="md" href={`mailto:${SITE.email}`}>
              {SITE.cta.primary}
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 text-center">
          <p className="text-gray-500 text-xs">
            &copy; 2026 ISA — Intelligent Systems for Accounting
          </p>
        </div>
      </Container>
    </footer>
  )
}
