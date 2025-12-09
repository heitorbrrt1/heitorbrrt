'use client'

import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Projects from './components/Projects'
import Technologies from './components/Technologies'
import Experiences from './components/Experiences'
import ContactSection from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased '>
      <div className='fixed top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>

      <div className='container mx-auto px-8'>
        <Navbar />
        <section id='home' className='pb-6 lg:pb-0'>
          <HeroSection />
        </section>
        <Technologies />

        <section id='projetos' className='pt-6'>
          <Projects />
        </section>
        <section id='experiencias' className='pt-6'>
          <Experiences />
        </section>
        <section id='contato' className='pt-6'>
          <ContactSection />
        </section>
        <Footer />
      </div>
    </div>
  )
}