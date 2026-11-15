export const SITE = {
  name: 'ISA Concilia',
  tagline: 'Conciliação contábil com IA',
}

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? 'https://app.isaconcilia.com.br'

export const NAV = [
  { label: 'Solução', id: 'solucao' },
  { label: 'Como funciona', id: 'como-funciona' },
  { label: 'Benefícios', id: 'funcionalidades' },
  { label: 'Diferencial', id: 'diferencial' },
]

export function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function openDemoModal() {
  if (typeof window !== 'undefined') {
    document.dispatchEvent(new CustomEvent('open-demo-modal'))
  }
}
