import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactForm from '@/components/ContactForm'

describe('ContactForm', () => {
  it('renders form fields', () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument()
  })

  it('validates required fields', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
    await user.click(submitButton)

    const nameInput = screen.getByLabelText(/nombre/i)
    expect(nameInput).toBeRequired()
  })

  it('submits form with valid data', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText(/nombre/i), 'Juan Pérez')
    await user.type(screen.getByLabelText(/email/i), 'juan@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Quiero importar productos')

    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/mensaje enviado con éxito/i)).toBeInTheDocument()
    })
  })

  it('clears form after successful submission', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByLabelText(/nombre/i)
    const emailInput = screen.getByLabelText(/email/i)
    const messageInput = screen.getByLabelText(/mensaje/i)

    await user.type(nameInput, 'Juan Pérez')
    await user.type(emailInput, 'juan@example.com')
    await user.type(messageInput, 'Quiero importar productos')

    const submitButton = screen.getByRole('button', { name: /enviar mensaje/i })
    await user.click(submitButton)

    await waitFor(() => {
      expect(nameInput).toHaveValue('')
      expect(emailInput).toHaveValue('')
      expect(messageInput).toHaveValue('')
    })
  })
})
