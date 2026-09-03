import { render, screen } from '@testing-library/react'
import AutomationFlowSection from '../AutomationFlowSection'
import { en } from '@/translations/en'

describe('AutomationFlowSection', () => {
  it('renders section title and every step from the provided dictionary', () => {
    render(<AutomationFlowSection t={en.automationFlow} />)

    expect(screen.getByRole('heading', { level: 2, name: en.automationFlow.title })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(en.automationFlow.steps.length)
  })
})
