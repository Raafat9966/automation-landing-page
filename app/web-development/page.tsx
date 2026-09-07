import ServicePage from '../components/ServicePage'
import { getDictionary, getLanguage } from '../lib/i18n'

const visuals = ['application', 'commerce', 'frontend', 'backend', 'support'] as const

export default async function WebDevelopmentPage() {
  const language = await getLanguage()
  const t = getDictionary(language)

  return (
    <ServicePage
      eyebrow="Web development"
      hero={t.webDevelopment.hero}
      sections={t.webDevelopment.sections}
      visuals={[...visuals]}
      footer={t.footer}
      nav={t.nav}
      waitlistLabel={t.waitlist.form.submit}
    />
  )
}
