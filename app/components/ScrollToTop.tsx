'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Forces the viewport back to the top on every client-side route change.
 *
 * The App Router already resets scroll on navigation, but with layout still
 * settling (font swap, Reveal animations, the sticky Navbar resizing) that
 * reset can land at an unpredictable offset. An explicit instant jump keyed on
 * the pathname makes every navigation deterministic. In-page anchor scrolls
 * (which carry a hash) are left untouched.
 */
export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    if (window.location.hash) return
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
