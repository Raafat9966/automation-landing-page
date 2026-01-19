import { render, screen } from '@testing-library/react'
import Hero from '../Hero'
import { LanguageProvider } from '@/context/LanguageContext'

describe('Hero', () => {
  it('renders titles and CTA buttons', () => {
    render(
      <LanguageProvider>
        <Hero />
      </LanguageProvider>
    )

    // Titles from translations
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()

    // CTA buttons exist
    const ctas = screen.getAllByRole('button')
    expect(ctas.length).toBeGreaterThanOrEqual(2)
  })
})
