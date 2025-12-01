import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Santi Malano LLC',
  description: 'Política de privacidad y protección de datos personales de Santi Malano LLC',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-black/10">
        <div className="container-custom section-padding py-6">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:opacity-80 transition-opacity"
          >
            Santi Malano LLC
          </Link>
        </div>
      </header>

      <main className="container-custom section-padding max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Política de Privacidad</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-black/80">
          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              1. Información que recopilamos
            </h2>
            <p>
              Recopilamos información que nos proporcionas directamente cuando utilizas nuestros
              servicios, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nombre y datos de contacto (email, teléfono)</li>
              <li>Información sobre tu proyecto de importación</li>
              <li>Datos de navegación y uso del sitio web</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              2. Uso de la información
            </h2>
            <p>Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Comunicarnos contigo sobre tu proyecto</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Protección de datos</h2>
            <p>
              Implementamos medidas de seguridad técnicas y organizativas para proteger tus datos
              personales contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Tus derechos</h2>
            <p>De acuerdo con la normativa vigente, tienes derecho a:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Acceder a tus datos personales</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al tratamiento de tus datos</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Contacto</h2>
            <p>
              Para ejercer tus derechos o realizar consultas sobre esta política, puedes
              contactarnos a través de Instagram.
            </p>
          </section>

          <section>
            <p className="text-sm text-black/60 mt-8">
              Última actualización: {new Date().toLocaleDateString('es-AR')}
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-primary hover:text-primary-dark transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  )
}
