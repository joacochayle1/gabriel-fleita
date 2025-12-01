import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Reembolsos | Santi Malano LLC',
  description: 'Política de reembolsos y cancelaciones de Santi Malano LLC',
}

export default function RefundsPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">Política de Reembolsos</h1>

        <div className="prose prose-lg max-w-none space-y-6 text-black/80">
          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              1. Condiciones de reembolso
            </h2>
            <p>
              Entendemos que pueden surgir circunstancias que requieran la cancelación de un
              servicio. Nuestra política de reembolsos está diseñada para ser justa y transparente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">2. Plazos y porcentajes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Cancelación antes del inicio:</strong> Reembolso del 100% del pago realizado
              </li>
              <li>
                <strong>Cancelación durante el proceso:</strong> Reembolso proporcional según el
                avance del proyecto
              </li>
              <li>
                <strong>Cancelación después de la finalización:</strong> No aplica reembolso, salvo
                casos excepcionales
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Proceso de solicitud</h2>
            <p>Para solicitar un reembolso:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Contacta con nosotros vía WhatsApp o email</li>
              <li>Proporciona los detalles de tu solicitud</li>
              <li>Espera la evaluación (máximo 5 días hábiles)</li>
              <li>Recibe el reembolso en el método de pago original</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">4. Casos especiales</h2>
            <p>
              En casos de fuerza mayor o situaciones excepcionales, evaluaremos cada solicitud de
              manera individual para encontrar la mejor solución.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">5. Contacto</h2>
            <p>
              Para consultas sobre reembolsos, puedes contactarnos a través del formulario de
              contacto o WhatsApp.
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
