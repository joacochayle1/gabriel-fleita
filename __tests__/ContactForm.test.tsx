import { render, screen } from '@testing-library/react'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders contact section with title', () => {
    render(<ContactForm />)

    expect(screen.getByText('Contacto')).toBeInTheDocument()
    expect(screen.getByText('Agenda una reunión')).toBeInTheDocument()
  })

  it('renders Calendly widget iframe', () => {
    render(<ContactForm />)

    const iframe = screen.getByTitle('Calendario de reservas')
    expect(iframe).toBeInTheDocument()
    expect(iframe).toHaveAttribute('src', expect.stringContaining('calendly.com'))
  })

  it('has proper section structure', () => {
    render(<ContactForm />)

    const section = screen.getByRole('region', { name: 'Contacto' })
    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'contacto')
  })

  it('displays scheduling description', () => {
    render(<ContactForm />)

    expect(
      screen.getByText(
        /Seleccioná una fecha y hora que te funcione para una consulta personalizada sobre tu proyecto de importación/i
      )
    ).toBeInTheDocument()
  })
})
