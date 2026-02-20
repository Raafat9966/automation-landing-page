import { render, screen, fireEvent } from '@testing-library/react'
import ErrorBoundary from '../ErrorBoundary'

// A component that throws on render when shouldThrow is true
function ThrowingComponent({ shouldThrow }: { shouldThrow: boolean }) {
  if (shouldThrow) {
    throw new Error('Test error')
  }
  return <div>Healthy content</div>
}

describe('ErrorBoundary', () => {
  // Suppress console.error for expected errors in these tests
  const originalConsoleError = console.error
  beforeEach(() => {
    console.error = jest.fn()
  })
  afterEach(() => {
    console.error = originalConsoleError
  })

  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child content</div>
      </ErrorBoundary>
    )

    expect(screen.getByText('Child content')).toBeInTheDocument()
  })

  it('should render the default fallback UI when a child throws', () => {
    render(
      <ErrorBoundary>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText(/something went wrong loading this section/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /try again/i })).toBeInTheDocument()
  })

  it('should render a custom fallback when provided', () => {
    render(
      <ErrorBoundary fallback={<div>Custom fallback</div>}>
        <ThrowingComponent shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Custom fallback')).toBeInTheDocument()
    expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument()
  })

  it('should recover when the Try again button is clicked', () => {
    // Use a flag that we can control externally to stop throwing after reset
    let shouldThrow = true

    function ConditionalThrower() {
      if (shouldThrow) {
        throw new Error('First render error')
      }
      return <div>Recovered content</div>
    }

    render(
      <ErrorBoundary>
        <ConditionalThrower />
      </ErrorBoundary>
    )

    // Initially shows error
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument()

    // Stop throwing before clicking recovery
    shouldThrow = false

    // Click try again
    fireEvent.click(screen.getByRole('button', { name: /try again/i }))

    // After reset, the component re-renders and succeeds
    expect(screen.getByText('Recovered content')).toBeInTheDocument()
  })
})
