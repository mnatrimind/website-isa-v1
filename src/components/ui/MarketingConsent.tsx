'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import Link from 'next/link'

const PIXEL_ID = '1817244932654946'
const CONSENT_KEY = 'isa-marketing-consent'
const CONSENT_EVENT = 'isa-marketing-consent-change'
const SETTINGS_EVENT = 'isa-cookie-settings'

type Consent = 'accepted' | 'declined' | 'unanswered'
type PixelFunction = {
  (...args: unknown[]): void
  callMethod?: (...args: unknown[]) => void
  queue: unknown[][]
  push: PixelFunction
  loaded: boolean
  version: string
}

declare global {
  interface Window {
    fbq?: PixelFunction
    _fbq?: PixelFunction
  }
}

let pixelInitialized = false

function readConsent(): Consent {
  try {
    const value = window.localStorage.getItem(CONSENT_KEY)
    return value === 'accepted' || value === 'declined' ? value : 'unanswered'
  } catch {
    return 'unanswered'
  }
}

function subscribeConsent(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

function initializePixel() {
  if (pixelInitialized) return

  if (!window.fbq) {
    const pixel = ((...args: unknown[]) => {
      if (pixel.callMethod) pixel.callMethod(...args)
      else pixel.queue.push(args)
    }) as PixelFunction
    pixel.queue = []
    pixel.push = pixel
    pixel.loaded = true
    pixel.version = '2.0'
    window.fbq = pixel
    window._fbq = pixel

    const script = document.createElement('script')
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }

  window.fbq('init', PIXEL_ID)
  pixelInitialized = true
}

export default function MarketingConsent() {
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => 'unanswered' as Consent)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [storageError, setStorageError] = useState(false)
  const lastPage = useRef<string | null>(null)
  const search = searchParams.toString()

  useEffect(() => {
    const openSettings = () => setSettingsOpen(true)
    window.addEventListener(SETTINGS_EVENT, openSettings)
    return () => window.removeEventListener(SETTINGS_EVENT, openSettings)
  }, [])

  useEffect(() => {
    if (consent !== 'accepted') {
      if (pixelInitialized) window.location.reload()
      return
    }

    initializePixel()
    const page = `${pathname}?${search}`
    if (lastPage.current !== page) {
      window.fbq?.('trackSingle', PIXEL_ID, 'PageView')
      lastPage.current = page
    }
  }, [consent, pathname, search])

  function chooseConsent(value: Exclude<Consent, 'unanswered'>) {
    try {
      window.localStorage.setItem(CONSENT_KEY, value)
      setStorageError(false)
      setSettingsOpen(false)
      window.dispatchEvent(new Event(CONSENT_EVENT))
    } catch {
      setStorageError(true)
    }
  }

  if (consent !== 'unanswered' && !settingsOpen) return null

  return (
    <section aria-label="Preferências de cookies" className="fixed inset-x-4 bottom-4 z-[100] mx-auto max-w-3xl rounded-lg border border-border bg-white p-5 shadow-xl sm:p-6">
      <h2 className="text-base font-bold text-primary">Preferências de cookies</h2>
      <p className="mt-2 text-sm leading-relaxed text-secondary">
        Usamos cookies de marketing da Meta para medir e melhorar nossas campanhas. Você pode aceitar ou recusar e alterar sua escolha a qualquer momento.{' '}
        <Link href="/privacidade" className="font-medium text-accent underline">Política de privacidade</Link>
      </p>
      {storageError && <p role="alert" className="mt-2 text-sm text-red">Não foi possível salvar sua preferência neste navegador.</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={() => chooseConsent('accepted')} className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover">Aceitar cookies de marketing</button>
        <button type="button" onClick={() => chooseConsent('declined')} className="rounded-lg border border-border px-4 py-2 text-sm font-semibold text-primary hover:bg-surface">Recusar cookies de marketing</button>
        {consent !== 'unanswered' && <button type="button" onClick={() => setSettingsOpen(false)} className="rounded-lg px-4 py-2 text-sm font-medium text-secondary hover:bg-surface">Fechar</button>}
      </div>
    </section>
  )
}