import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Metrics from '@/components/Metrics'
import Founder from '@/components/Founder'
import Testimonials from '@/components/Testimonials'
import Process from '@/components/Process'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import FadeInOnScroll from '@/components/FadeInOnScroll'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FadeInOnScroll>
        <Services />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <Metrics />
      </FadeInOnScroll>
      <FadeInOnScroll delay={200}>
        <Founder />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <Testimonials />
      </FadeInOnScroll>
      <FadeInOnScroll delay={200}>
        <Process />
      </FadeInOnScroll>
      <FadeInOnScroll delay={100}>
        <ContactForm />
      </FadeInOnScroll>
      <Footer />
    </main>
  )
}
