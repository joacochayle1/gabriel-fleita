import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Santi Malano LLC',
  description: 'Términos de servicio, privacidad y reembolsos de Santi Malano LLC',
}

export default function TermsPage() {
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
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
          Términos de Servicio, Privacidad y Reembolsos de Santi Malano LLC
        </h1>
        <p className="text-lg text-black/60 mb-12">
          Última actualización:{' '}
          {new Date().toLocaleDateString('es-AR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-black/80">
          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">1. Alcance y aceptación</h2>
            <p>
              Al contratar el servicio de Santi Malano LLC (prestado por Gabriel Fleita y sus
              socios), aceptás estos Términos, nuestra Política de Privacidad y la Política de
              Reembolsos. El uso de nuestros servicios implica la aceptación plena de estos
              términos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              2. Servicio y suscripción
            </h2>
            <p className="mb-3">
              <strong>Servicio:</strong> Asesoramiento y gestión integral de importación desde
              China, incluyendo:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Búsqueda y validación de proveedores y fábricas en China</li>
              <li>Gestión de documentación legal y aduanera</li>
              <li>Asesoramiento para primera importación</li>
              <li>Asesoramiento para crear negocio en Argentina</li>
              <li>Coordinación con oficinas en China, Paraguay, Brasil y Argentina</li>
            </ul>
            <p>
              <strong>Cobro:</strong> Los servicios se facturan según el proyecto y alcance
              acordado. Los pagos se realizan según el cronograma establecido en cada contrato
              específico.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">3. Reembolsos</h2>
            <p className="mb-3">
              <strong>Plazo único:</strong> Solicitud de reembolso total dentro de los primeros 7
              días desde el pago inicial, siempre que no se haya iniciado la prestación del
              servicio.
            </p>
            <p className="mb-3">
              <strong>Proceso:</strong> Escribir a través del formulario de contacto o WhatsApp con
              tu nombre, correo y fecha de pago.
            </p>
            <p>
              <strong>Exclusión:</strong> No hay reembolsos parciales ni fuera del plazo
              establecido, salvo casos excepcionales que serán evaluados individualmente.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              4. Datos personales y privacidad
            </h2>
            <p className="mb-3">
              <strong>Responsable:</strong> Gabriel Fleita, emprendedor con más de 10 años de
              experiencia en comercio exterior, con presencia operativa en China, Paraguay, Brasil y
              Argentina.
            </p>
            <p className="mb-3">
              <strong>Datos recabados:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                <strong>Identificativos:</strong> nombre, email, teléfono, información de la empresa
              </li>
              <li>
                <strong>Comerciales:</strong> información sobre productos a importar, proveedores,
                volúmenes
              </li>
              <li>
                <strong>Técnicos:</strong> cookies, logs, datos de navegación del sitio web
              </li>
            </ul>
            <p className="mb-3">
              <strong>Finalidades:</strong> prestación del servicio de importación, facturación,
              comunicación con proveedores y socios internacionales, y cumplimiento de obligaciones
              legales.
            </p>
            <p className="mb-3">
              <strong>Transferencia:</strong> Los datos pueden ser compartidos con proveedores en
              China y socios en Paraguay, Brasil y Argentina, únicamente para la prestación del
              servicio contratado. Implementamos medidas de seguridad para proteger la información.
            </p>
            <p className="mb-3">
              <strong>Retención:</strong> Los datos se conservan mientras la relación comercial esté
              activa y durante los plazos legales aplicables.
            </p>
            <p>
              <strong>Derechos:</strong> Acceso, rectificación, supresión, limitación y portabilidad
              escribiendo a través de Calendly o Instagram.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              5. Responsabilidades y limitaciones
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                El cliente es responsable de proporcionar información veraz y completa sobre sus
                necesidades de importación.
              </li>
              <li>
                Santi Malano LLC se compromete a realizar las gestiones con la mayor diligencia,
                pero no se hace cargo de retrasos por causas ajenas a nuestro control (aduanas,
                transportistas, proveedores, etc.).
              </li>
              <li>
                No nos hacemos responsables de daños indirectos, lucro cesante o pérdidas derivadas
                de decisiones comerciales del cliente.
              </li>
              <li>
                El cliente es responsable de cumplir con todas las normativas locales e
                internacionales aplicables a sus importaciones.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              6. Propiedad intelectual
            </h2>
            <p>
              Toda la información, metodologías, contactos y know-how desarrollado por Santi Malano
              LLC pertenecen a Gabriel Fleita y sus socios. El cliente no podrá utilizar esta
              información para fines distintos a los acordados sin autorización previa.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">
              7. Ley aplicable y jurisdicción
            </h2>
            <p>
              Estos Términos se rigen por la ley de la República Argentina. Para cualquier
              controversia, las partes se someten a los tribunales ordinarios de la Ciudad Autónoma
              de Buenos Aires, Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-black mt-8 mb-4">8. Contacto</h2>
            <p className="mb-3">
              <strong>Gabriel Fleita - Santi Malano LLC</strong>
            </p>
            <p className="mb-2">Oficinas operativas en:</p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li>China</li>
              <li>Paraguay</li>
              <li>Brasil</li>
              <li>Argentina</li>
            </ul>
            <p className="mb-2">Para consultas, podés contactarnos a través de:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Calendly</li>
              <li>Instagram</li>
            </ul>
          </section>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/privacy" className="text-primary hover:text-primary-dark transition-colors">
            Ver Política de Privacidad →
          </Link>
          <Link href="/refunds" className="text-primary hover:text-primary-dark transition-colors">
            Ver Política de Reembolsos →
          </Link>
          <Link href="/" className="text-primary hover:text-primary-dark transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    </div>
  )
}
