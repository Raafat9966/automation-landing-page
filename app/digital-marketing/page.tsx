import ServicePage from '../components/ServicePage'
import { getDictionary, getLanguage } from '../lib/i18n'

const visuals = ['seo', 'social', 'ads', 'email', 'conversion'] as const

export default async function DigitalMarketingPage() {
  const language = await getLanguage()
  const t = getDictionary(language)

  return (
    <ServicePage
      eyebrow="Digital marketing"
      hero={t.digitalMarketing.hero}
      sections={t.digitalMarketing.sections}
      visuals={[...visuals]}
      footer={t.footer}
      nav={t.nav}
      waitlistLabel={t.waitlist.form.submit}
    />
  )
}
