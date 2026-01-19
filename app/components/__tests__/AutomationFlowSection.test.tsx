import { render, screen } from '@testing-library/react'
import AutomationFlowSection from '../AutomationFlowSection'
import { LanguageProvider } from '@/context/LanguageContext'

describe('AutomationFlowSection', () => {
  it('renders section title from translations', () => {
    render(
      <LanguageProvider>
        <AutomationFlowSection />
      </LanguageProvider>
    )

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
  })
})
