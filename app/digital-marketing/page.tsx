import ServicePage from '../components/ServicePage'
import { getDictionary, getLanguage } from '../lib/i18n'

const icons = [
  // SEO & Content — magnifier / chart
  <path key="seo" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-4.35-4.35M11 6a5 5 0 015 5m2 0a7 7 0 10-14 0 7 7 0 0014 0z" />,
  // Social Media — share nodes
  <path key="social" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />,
  // Paid Advertising — target
  <path key="ads" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10zm0-4a1 1 0 100-2 1 1 0 000 2z" />,
  // Email Marketing — envelope
  <path key="email" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
  // Conversion Rate — funnel / trending up
  <path key="cro" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h18M6 8h12M9 12h6m-5 4h4m-3 4h2" />,
]

export default async function DigitalMarketingPage() {
  const language = await getLanguage()
  const t = getDictionary(language)

  return (
    <ServicePage
      eyebrow="Digital marketing"
      hero={t.digitalMarketing.hero}
      sections={t.digitalMarketing.sections}
      icons={icons}
      footer={t.footer}
      nav={t.nav}
      waitlistLabel={t.waitlist.form.submit}
    />
  )
}
