# Code Review Guardian - Project Memory

## Recurring i18n Violations
- `ContactForm.tsx` had 4 hardcoded strings: error message, "Sending..." loading text, "Email" and "Phone" headings in info tab
- `Footer.tsx` had 3 hardcoded English aria-labels for social media links
- `ErrorBoundary.tsx` has hardcoded strings but is acceptable (class component, cannot use hooks, must work even if context fails)
- `app/layout.tsx` "Skip to main content" is acceptable (Server Component, standard a11y pattern)

## Translation Keys Added (Feb 2026)
- `contact.form.sending` / `contact.form.errorMessage`
- `contact.info.emailLabel` / `contact.info.phoneLabel`
- `footer.socialAriaLabels.twitter/linkedin/github`

## Test Patterns That Work
- WaitingList modal tests: Use a wrapper component that calls `setIsWaitlistModalOpen(true)` via `useLanguage()` inside the provider tree
- WaitingList form submission: Use `fireEvent.submit(form)` not `fireEvent.click(submitButton)` -- the `motion.form` wrapper causes click-based submission to not trigger `onSubmit`
- ErrorBoundary recovery tests: Use external `shouldThrow` flag, set to false before clicking "Try again"
- ErrorBoundary tests: Must suppress `console.error` as React logs caught errors

## Unused Code Found
- `Navbar.tsx` had unused `MouseEvent` import and unused `SectionId` type

## Test Coverage Status (as of Feb 2026)
- 10 test suites, 35 tests total, all passing
- Components tested: Hero, Navbar, ContactForm, WorkflowCards, AutomationFlowSection, About, EducationalSection, Footer, WaitingList, ErrorBoundary
- Not tested (by design): WaitingListClient (trivial dynamic import wrapper), WorkflowDemoSection (complex modal with heavy SVG, tested indirectly via WorkflowCards), API routes (would need different test setup with Next.js route handlers)
- Page-level components (digital-marketing/page.tsx, web-development/page.tsx) not tested: presentational pages with only translation rendering

## Architecture Notes
- `WorkflowCards.tsx` uses `next/dynamic` with `ssr: false` for WorkflowDemoSection -- this is correct since it's already a 'use client' component
- `LanguageContext` localStorage lazy initializer pattern avoids hydration flash
