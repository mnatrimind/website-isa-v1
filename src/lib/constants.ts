export const SITE = {
  name: 'ISA Concilia',
  tagline: 'Conciliação contábil com IA',
}

export const NAV = [
  { label: 'Produto', id: 'produto' },
  { label: 'Funcionalidades', id: 'funcionalidades' },
  { label: 'Como funciona', id: 'como-funciona' },
]

export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
