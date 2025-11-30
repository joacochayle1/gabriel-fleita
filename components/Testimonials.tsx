export default function Testimonials() {
  const testimonials = [
    {
      video: '/Testimonio_1.mp4',
      name: 'Alan Charra',
      role: 'Importador',
      result: 'Primera importación exitosa de 2 contenedores',
    },
    {
      video: '/Testimonio_2.mp4',
      name: 'Ada Mariel',
      role: 'Importador',
      result: 'Estableció su negocio importando regularmente desde China',
    },
  ]

  return (
    <section
      id="testimonios"
      className="section-padding bg-white"
      aria-labelledby="testimonials-title"
    >
      <div className="container-custom">
        <h2
          id="testimonials-title"
          className="text-4xl md:text-5xl font-bold text-black text-center mb-16"
        >
          Testimonios
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="space-y-4 p-6 rounded-lg bg-black/5 hover:bg-black/10 transition-colors"
            >
              <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden">
                <video
                  src={testimonial.video}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                  playsInline
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Tu navegador no soporta la reproducción de videos.
                </video>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-black">{testimonial.name}</div>
                <div className="text-sm text-black/60">{testimonial.role}</div>
                <div className="text-sm text-black/80">{testimonial.result}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
