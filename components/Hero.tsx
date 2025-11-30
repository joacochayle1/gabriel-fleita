'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="section-padding pt-40 pb-16 min-h-screen flex items-center"
      aria-labelledby="hero-title"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h1
              id="hero-title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight"
            >
              Te conectamos con proveedores y fábricas de China
            </h1>
            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
              Te ayudamos a importar desde China sin sorpresas. Gestión completa desde la búsqueda
              de proveedores hasta la documentación aduanera.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#contacto"
                className="btn-primary text-center"
                aria-label="Quiero importar"
              >
                Quiero importar
              </Link>
              <Link
                href="#testimonios"
                className="btn-secondary text-center"
                aria-label="Ver testimonios"
              >
                Ver testimonios
              </Link>
            </div>

            <p className="text-sm text-black/60 pt-8">
              +10 años de experiencia · Decenas de contenedores importados
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="relative w-full h-[405.85px] bg-gradient-to-br from-black/5 to-white rounded-2xl overflow-hidden border border-black/10 shadow-subtle">
              {!imageError ? (
                <div className="absolute inset-0 pl-32">
                  <Image
                    src="/china-flag.png"
                    alt="Bandera de China"
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 0px, 800px"
                    quality={100}
                    priority
                    unoptimized={false}
                    onError={() => setImageError(true)}
                  />
                </div>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 500 500"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-20"
                    aria-hidden="true"
                  >
                    <rect width="600" height="600" rx="20" fill="currentColor" />
                    <path
                      d="M200 100L300 200L200 300L100 200L200 100Z"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="200"
                      cy="200"
                      r="60"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
