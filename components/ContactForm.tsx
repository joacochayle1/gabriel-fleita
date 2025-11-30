'use client'

import CalendlyWidget from './CalendlyWidget'

// URL del calendario de Calendly (sin parámetros de mes para permitir navegación libre)
const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/gabriel-fleita/sesion-1a1'

export default function ContactForm() {
  return (
    <section id="contacto" className="bg-white" aria-labelledby="contact-title">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container-custom">
          <h2
            id="contact-title"
            className="text-4xl md:text-5xl font-bold text-black text-center mb-8"
          >
            Contacto
          </h2>

          <div className="mb-2">
            <div className="text-center mb-2 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-semibold text-black mb-2">
                Agenda una reunión
              </h3>
              <p className="text-lg text-black/70">
                Seleccioná una fecha y hora que te funcione para una consulta personalizada sobre tu
                proyecto de importación.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <CalendlyWidget url={CALENDLY_URL} height="1100px" />
        </div>
      </div>
    </section>
  )
}
