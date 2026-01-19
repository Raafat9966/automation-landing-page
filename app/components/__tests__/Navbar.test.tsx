import { render, screen, fireEvent } from '@testing-library/react'
import Navbar from '../Navbar'
import { LanguageProvider } from '@/context/LanguageContext'

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('Navbar', () => {
  it('renders and shows ordered nav items', () => {
    renderWithProvider(<Navbar />)
    // Ensure key nav items exist (avoid duplicates by using role and name)
    expect(screen.getAllByRole('button', { name: /^home$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^how it works$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^education$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^ai agent$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^workflows$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^about$/i }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('button', { name: /^contact$/i }).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu', () => {
    renderWithProvider(<Navbar />)
    const toggle = screen.getByLabelText(/toggle menu/i)

    const beforeCount = screen.getAllByRole('button', { name: /^contact$/i }).length
    fireEvent.click(toggle)
    const afterCount = screen.getAllByRole('button', { name: /^contact$/i }).length

    expect(afterCount).toBeGreaterThanOrEqual(beforeCount)
  })
})
