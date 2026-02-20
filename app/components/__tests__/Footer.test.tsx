import { render, screen, fireEvent } from '@testing-library/react'
import Footer from '../Footer'
import { LanguageProvider } from '@/context/LanguageContext'

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('Footer', () => {
  it('should render the FlowToWork brand name', () => {
    renderWithProvider(<Footer />)

    expect(screen.getByText('FlowToWork')).toBeInTheDocument()
  })

  it('should render the footer description from translations', () => {
    renderWithProvider(<Footer />)

    expect(screen.getByText(/empowering businesses/i)).toBeInTheDocument()
  })

  it('should render quick links section with navigation anchors', () => {
    renderWithProvider(<Footer />)

    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    const homeLinks = screen.getAllByText('Home')
    expect(homeLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('should render social media links with proper attributes', () => {
    renderWithProvider(<Footer />)

    const twitterLink = screen.getByLabelText(/follow us on twitter/i)
    expect(twitterLink).toHaveAttribute('target', '_blank')
    expect(twitterLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByLabelText(/follow us on linkedin/i)
    expect(linkedinLink).toBeInTheDocument()

    const githubLink = screen.getByLabelText(/follow us on github/i)
    expect(githubLink).toBeInTheDocument()
  })

  it('should render the copyright with current year', () => {
    renderWithProvider(<Footer />)

    const currentYear = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument()
  })

  it('should render the waitlist button', () => {
    renderWithProvider(<Footer />)

    expect(screen.getByText(/join the waiting list/i)).toBeInTheDocument()
  })
})
