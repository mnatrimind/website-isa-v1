export const SITE = {
  name: 'ISA Concilia',
  tagline: 'Conciliação contábil com IA',
  description: 'Automatize sua conciliação contábil com inteligência artificial. Reduza dias para minutos.',
  cta: { primary: 'Agendar demonstração', secondary: 'Ver como funciona' },
}

export const NAV_LINKS = [
  { label: 'Produto', id: 'produto' },
  { label: 'Funcionalidades', id: 'funcionalidades' },
  { label: 'Como funciona', id: 'como-funciona' },
  { label: 'Para quem', id: 'para-quem' },
]

export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
