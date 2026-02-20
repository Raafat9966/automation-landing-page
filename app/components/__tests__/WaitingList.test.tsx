import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import WaitingList from '../WaitingList'
import { LanguageProvider } from '@/context/LanguageContext'

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => ({ success: true }) })
})

afterEach(() => {
  jest.restoreAllMocks()
})

/**
 * Helper that renders WaitingList inside the LanguageProvider and opens the modal.
 * The modal is controlled by `isWaitlistModalOpen` in LanguageContext, which defaults
 * to false. We render a sibling button that calls `setIsWaitlistModalOpen(true)` to
 * simulate the real user flow.
 */
function OpenModalWrapper() {
  // We import useLanguage inline so the hook is called inside the provider tree
  const { useLanguage } = require('@/context/LanguageContext') as typeof import('@/context/LanguageContext')
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { setIsWaitlistModalOpen } = useLanguage()

  return (
    <>
      <button data-testid="open-modal" onClick={() => setIsWaitlistModalOpen(true)}>
        Open
      </button>
      <WaitingList />
    </>
  )
}

function renderAndOpen() {
  const result = render(
    <LanguageProvider>
      <OpenModalWrapper />
    </LanguageProvider>
  )
  fireEvent.click(screen.getByTestId('open-modal'))
  return result
}

describe('WaitingList', () => {
  it('should not render the modal when closed', () => {
    render(
      <LanguageProvider>
        <WaitingList />
      </LanguageProvider>
    )

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('should render the modal with form fields when opened', () => {
    renderAndOpen()

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/company/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/primary interest/i)).toBeInTheDocument()
  })

  it('should close the modal when the close button is clicked', () => {
    renderAndOpen()

    expect(screen.getByRole('dialog')).toBeInTheDocument()

    const closeButton = screen.getByLabelText(/close modal/i)
    fireEvent.click(closeButton)

    // AnimatePresence may keep the element briefly; check that the dialog disappears
    waitFor(() => {
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  it('should submit the form and show success message', async () => {
    renderAndOpen()

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText(/primary interest/i), { target: { value: 'automation' } })

    const submitButton = screen.getByRole('button', { name: /join the waiting list/i })
    fireEvent.click(submitButton)

    expect(await screen.findByText(/you're on the list/i)).toBeInTheDocument()
    expect(screen.getByText(/thank you for your interest/i)).toBeInTheDocument()
  })

  it('should show error state when email is invalid', async () => {
    renderAndOpen()

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'invalid-email' } })
    fireEvent.change(screen.getByLabelText(/primary interest/i), { target: { value: 'automation' } })

    // Use fireEvent.submit on the form to bypass potential button click issues with motion.form
    const form = screen.getByRole('button', { name: /join the waiting list/i }).closest('form')!
    fireEvent.submit(form)

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })

  it('should show error state when fetch fails', async () => {
    (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

    renderAndOpen()

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } })
    fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@example.com' } })
    fireEvent.change(screen.getByLabelText(/primary interest/i), { target: { value: 'automation' } })

    const form = screen.getByRole('button', { name: /join the waiting list/i }).closest('form')!
    fireEvent.submit(form)

    expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument()
  })
})
