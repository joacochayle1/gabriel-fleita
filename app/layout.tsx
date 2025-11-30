import type { Metadata, Viewport } from 'next'
import './globals.css'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Importación desde China | Te conectamos con proveedores y fábricas',
  description:
    'Te ayudamos a importar desde China sin sorpresas. Más de 10 años de experiencia, decenas de contenedores importados. Primera importación, crear negocio en Argentina, documentación legal y aduanera.',
  keywords: [
    'importación china',
    'proveedores china',
    'fábricas china',
    'importar argentina',
    'logística internacional',
    'documentación aduanera',
  ],
  authors: [{ name: 'Malano' }],
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://malano.vercel.app',
    title: 'Importación desde China | Te conectamos con proveedores y fábricas',
    description:
      'Te ayudamos a importar desde China sin sorpresas. Más de 10 años de experiencia, decenas de contenedores importados.',
    siteName: 'Malano',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Importación desde China | Te conectamos con proveedores y fábricas',
    description: 'Te ayudamos a importar desde China sin sorpresas. Más de 10 años de experiencia.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
