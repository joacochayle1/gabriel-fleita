export default function Metrics() {
  const metrics = [
    {
      value: '+10',
      label: 'Años de experiencia',
      badge: 'Más de 10 años',
    },
    {
      value: 'Decenas',
      label: 'Contenedores importados',
      badge: 'Decenas de contenedores',
    },
    {
      value: '100%',
      label: 'Clientes satisfechos',
    },
  ]

  return (
    <section
      id="experiencia"
      className="section-padding bg-black text-white"
      aria-labelledby="metrics-title"
    >
      <div className="container-custom">
        <h2 id="metrics-title" className="text-4xl md:text-5xl font-bold text-center mb-16">
          Nuestra experiencia
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="text-6xl md:text-7xl font-bold text-white">{metric.value}</div>
              <div className="text-xl text-white/80">{metric.label}</div>
              {metric.badge && (
                <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                  {metric.badge}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}



