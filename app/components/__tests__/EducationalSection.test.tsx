import { render, screen } from '@testing-library/react'
import EducationalSection from '../EducationalSection'
import { LanguageProvider } from '@/context/LanguageContext'

function renderWithProvider(ui: React.ReactElement) {
  return render(<LanguageProvider>{ui}</LanguageProvider>)
}

describe('EducationalSection', () => {
  it('should render the section title', () => {
    renderWithProvider(<EducationalSection />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/automation.*ai.*agents/i)
  })

  it('should render the education section with correct id', () => {
    renderWithProvider(<EducationalSection />)

    const section = document.getElementById('education')
    expect(section).toBeInTheDocument()
  })

  it('should render both automation and AI agents columns', () => {
    renderWithProvider(<EducationalSection />)

    expect(screen.getByText('Automation')).toBeInTheDocument()
    expect(screen.getByText('AI Agents')).toBeInTheDocument()
  })

  it('should render subtitles for both columns', () => {
    renderWithProvider(<EducationalSection />)

    expect(screen.getByText('Rule-based efficiency')).toBeInTheDocument()
    expect(screen.getByText('Context-aware intelligence')).toBeInTheDocument()
  })

  it('should render feature lists for automation and AI agents', () => {
    renderWithProvider(<EducationalSection />)

    expect(screen.getByText('Rule-based workflows')).toBeInTheDocument()
    expect(screen.getByText('Context-aware decision making')).toBeInTheDocument()
  })

  it('should render example items under each column', () => {
    renderWithProvider(<EducationalSection />)

    expect(screen.getByText('Email automation')).toBeInTheDocument()
    expect(screen.getByText('AI chat assistants')).toBeInTheDocument()
  })

  it('should render the summary text', () => {
    renderWithProvider(<EducationalSection />)

    expect(screen.getByText(/combine the reliability/i)).toBeInTheDocument()
  })
})
