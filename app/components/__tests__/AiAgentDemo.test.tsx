import { render, screen, fireEvent } from '@testing-library/react'
import AiAgentDemo from '../AiAgentDemo'
import { LanguageProvider } from '@/context/LanguageContext'

describe('AiAgentDemo', () => {
  it('enables submit when input has content', () => {
    render(
      <LanguageProvider>
        <AiAgentDemo />
      </LanguageProvider>
    )

    const input = screen.getByPlaceholderText(/ask the agent/i)
    const button = screen.getByRole('button', { name: /run agent/i })

    expect(button).toBeDisabled()
    fireEvent.change(input, { target: { value: 'Run task' } })
    expect(button).not.toBeDisabled()
  })
})
