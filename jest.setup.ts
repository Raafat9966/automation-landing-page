import '@testing-library/jest-dom'

// Constructor-compatible IntersectionObserver mock
class IntersectionObserverMock {
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
}

// Attach to globals so libraries see it
// @ts-ignore
globalThis.IntersectionObserver = IntersectionObserverMock
// @ts-ignore
;(window as any).IntersectionObserver = IntersectionObserverMock
