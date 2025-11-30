'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Founder() {
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="founder"
      className="section-padding bg-white pt-16 pb-24"
      aria-labelledby="founder-title"
    >
      <div className="container-custom">
        <h2
          id="founder-title"
          className="text-4xl md:text-5xl font-bold text-black text-center mb-12"
        >
          Quién soy
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-72 h-72 bg-gradient-to-br from-black/5 to-white rounded-2xl overflow-hidden border border-black/10 shadow-subtle">
                {!imageError ? (
                  <Image
                    src="/founder.jpg"
                    alt="Gabriel Fleita"
                    fill
                    className="object-cover"
                    sizes="288px"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <svg
                      className="w-32 h-32 text-black/30"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">Gabriel Fleita</h3>
                <p className="text-lg text-black/70 leading-relaxed">
                  Emprendedor con más de 10 años de experiencia en compra y venta. En los últimos 3
                  años me he formado en comercio exterior, viajando a China y estableciendo
                  conexiones clave en este mercado. Hoy dirijo mi propia empresa con oficinas en
                  China, Paraguay, Brasil y Argentina, donde colaboro con diferentes socios para
                  ofrecer un servicio integral de importación.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="https://www.instagram.com/gabifleita2032/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Instagram de Gabi Fleita"
                >
                  Instagram Gabi
                </a>
                <span className="text-black/20 text-lg">·</span>
                <a
                  href="https://www.instagram.com/santi.malano/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium hover:text-primary-dark transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
                  aria-label="Instagram de Santi"
                >
                  Instagram Santi
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
