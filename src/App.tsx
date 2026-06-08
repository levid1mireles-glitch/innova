import { useState } from 'react'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { WhyUs } from './components/sections/WhyUs'
import { Services } from './components/sections/Services'
import { Workflow } from './components/sections/Workflow'
import { Sales } from './components/sections/Sales'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/Footer'
import { Toaster } from './components/ui/sonner'
import { Navbar } from './components/Navbar'
import { Ourjobs } from './components/sections/Ourjobs'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Workflow />
        <Sales />
        <Ourjobs/>
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
    </>
  )
}

export default App
