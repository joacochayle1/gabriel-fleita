import { render, screen } from '@testing-library/react'
import Header from '@/components/Header'

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<Header />)

    expect(screen.getByText('Malano')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Qué hacemos')).toBeInTheDocument()
    expect(screen.getByText('Experiencia')).toBeInTheDocument()
    expect(screen.getByText('Testimonios')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
    expect(screen.getByText('Contactar / Agendar')).toBeInTheDocument()
  })

  it('has proper ARIA labels', () => {
    render(<Header />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('Navegación principal')).toBeInTheDocument()
    expect(screen.getByLabelText('Ir al inicio')).toBeInTheDocument()
  })
})
