'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-subtle' : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav className="container-custom section-padding py-6" aria-label="Navegación principal">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-black hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            aria-label="Ir al inicio"
          >
            Gabi Fleita
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            <li>
              <a
                href="#home"
                onClick={e => scrollToSection(e, 'home')}
                className="text-black hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#servicios"
                onClick={e => scrollToSection(e, 'servicios')}
                className="text-black hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Qué hacemos
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                onClick={e => scrollToSection(e, 'experiencia')}
                className="text-black hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#testimonios"
                onClick={e => scrollToSection(e, 'testimonios')}
                className="text-black hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Testimonios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={e => scrollToSection(e, 'contacto')}
                className="text-black hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                Contacto
              </a>
            </li>
          </ul>

          <a
            href="#contacto"
            onClick={e => scrollToSection(e, 'contacto')}
            className="btn-primary"
            aria-label="Contactar o agendar"
          >
            Contactar / Agendar
          </a>
        </div>
      </nav>
    </header>
  )
}
