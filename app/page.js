import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AutomationFlowSection from './components/AutomationFlowSection'
import WorkflowCards from './components/WorkflowCards'
import EducationalSection from './components/EducationalSection'
import AiAgentDemo from './components/AiAgentDemo'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WorkflowCards />
        <AutomationFlowSection />
      <EducationalSection />
      <AiAgentDemo />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}

