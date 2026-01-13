import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkflowCards from './components/WorkflowCards'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <WorkflowCards />
      <About />
      <ContactForm />
      <Footer />
    </main>
  )
}

