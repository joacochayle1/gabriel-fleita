'use client'

import { useMemo } from 'react'

interface CalendlyWidgetProps {
  url: string
  height?: string
}

export default function CalendlyWidget({ url, height = '700px' }: CalendlyWidgetProps) {
  // Convertir la URL de Calendly a formato embed
  // Calendly requiere el formato: https://calendly.com/USER/EVENT?embed_domain=DOMAIN&embed_type=Inline
  const embedUrl = useMemo(() => {
    // Remover parámetros existentes (como ?month=2025-11)
    const baseUrl = url.split('?')[0]

    // Obtener el dominio actual
    const domain = typeof window !== 'undefined' ? window.location.hostname : 'localhost'

    // Construir la URL de embed
    return `${baseUrl}?embed_domain=${encodeURIComponent(domain)}&embed_type=Inline`
  }, [url])

  return (
    <iframe
      src={embedUrl}
      width="100%"
      height={height}
      frameBorder="0"
      title="Calendario de reservas"
      className="calendly-inline-widget w-full"
      style={{ minHeight: height }}
      allow="camera; microphone; geolocation"
    />
  )
}
