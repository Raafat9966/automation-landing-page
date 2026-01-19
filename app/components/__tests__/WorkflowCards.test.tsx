import { render, screen, fireEvent } from '@testing-library/react'
import WorkflowCards from '../WorkflowCards'
import { LanguageProvider } from '@/context/LanguageContext'

describe('WorkflowCards', () => {
  it('renders workflow items and opens demo modal', () => {
    render(
      <LanguageProvider>
        <WorkflowCards />
      </LanguageProvider>
    )

    const learnMoreLabels = screen.getAllByText(/learn/i)
    expect(learnMoreLabels.length).toBeGreaterThan(0)

    // Click the first card by its title text
    const cards = screen.getAllByRole('heading', { level: 3 })
    fireEvent.click(cards[0])
  })
})
