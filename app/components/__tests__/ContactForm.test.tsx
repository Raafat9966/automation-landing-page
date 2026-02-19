import { render, screen, fireEvent } from '@testing-library/react'
import ContactForm from '../ContactForm'
import { LanguageProvider } from '@/context/LanguageContext'

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
})

afterEach(() => {
  jest.restoreAllMocks()
})

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('ContactForm', () => {
  it('renders tabs and switches between them', () => {
    renderWithProvider(<ContactForm />)

    const messageTab = screen.getByRole('button', { name: /message us/i })
    const infoTab = screen.getByRole('button', { name: /contact info/i })
    const socialTab = screen.getByRole('button', { name: /social media/i })

    expect(messageTab).toBeInTheDocument()
    expect(infoTab).toBeInTheDocument()
    expect(socialTab).toBeInTheDocument()

    fireEvent.click(infoTab)
    fireEvent.click(socialTab)
  })

  it('submits and shows success', async () => {
    renderWithProvider(<ContactForm />)

    fireEvent.change(screen.getByLabelText(/^name$/i), { target: { value: 'John Doe' } })
    fireEvent.change(screen.getByLabelText(/^email$/i), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText(/^message$/i), { target: { value: 'Hello!' } })

    const submit = screen.getByRole('button', { name: /send message/i })
    fireEvent.click(submit)

    // After submit, success message should appear and form fields should no longer be present
    expect(await screen.findByText(/thank you/i)).toBeInTheDocument()
    expect(screen.getByText(/we'll get back to you as soon as possible/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/^name$/i)).not.toBeInTheDocument()
  })
})
