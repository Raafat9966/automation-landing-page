// Polyfills required before modules import in tests
// Provide IntersectionObserver early for libraries that access it on import
class IntersectionObserverMock {
  constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {}
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] { return [] }
}

// @ts-ignore
globalThis.IntersectionObserver = IntersectionObserverMock
// @ts-ignore
;(window as any).IntersectionObserver = IntersectionObserverMock
