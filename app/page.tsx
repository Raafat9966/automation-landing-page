import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AutomationFlowSection from './components/AutomationFlowSection'
import WorkflowCards from './components/WorkflowCards'
import EducationalSection from './components/EducationalSection'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { getDictionary, getLanguage } from './lib/i18n'

export default async function Home() {
  const language = await getLanguage()
  const t = getDictionary(language)

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <AutomationFlowSection t={t.automationFlow} />
        <EducationalSection t={t.education} />
        <WorkflowCards />
        <About t={t.about} />
        <ContactForm />
        <Footer t={t.footer} nav={t.nav} waitlistLabel={t.waitlist.form.submit} />
      </main>
    </>
  )
}
