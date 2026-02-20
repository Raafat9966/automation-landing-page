import { render, screen } from '@testing-library/react'
import About from '../About'
import { LanguageProvider } from '@/context/LanguageContext'

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('About', () => {
  it('should render the section heading with FlowToWork branding', () => {
    renderWithProvider(<About />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('FlowToWork')
  })

  it('should render the about section with correct id for navigation', () => {
    renderWithProvider(<About />)

    const section = document.getElementById('about')
    expect(section).toBeInTheDocument()
  })

  it('should render stats badges (10x and 24/7)', () => {
    renderWithProvider(<About />)

    expect(screen.getByText('10x')).toBeInTheDocument()
    expect(screen.getByText('24/7')).toBeInTheDocument()
  })

  it('should render all about cards from translations', () => {
    renderWithProvider(<About />)

    // EN translations have 3 cards
    const cardHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(cardHeadings.length).toBe(3)
  })

  it('should render description paragraphs', () => {
    renderWithProvider(<About />)

    // The first description mentions FlowToWork which is split and rendered
    expect(screen.getByText(/businesses should focus/i)).toBeInTheDocument()
  })
})
