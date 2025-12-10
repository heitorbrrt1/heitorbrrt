'use client'

import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import Technologies from './components/Technologies'
import ExperiencesSection from './components/ExperiencesSection'
import ContactSection from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased '>
      <div className='fixed top-0 left-0 z-[-2] h-full w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>

      <div className='container mx-auto px-8'>
        {/* <Navbar /> */}
        <section id='home' className='lg:pb-0'>
          <HeroSection />
        </section>
        
        <section id='technologies' className='py-20'>
          <Technologies />
        </section>

        <section id='projetos' className='py-20'>
          <ProjectsSection />
        </section>
        <section id='experiencias' className='py-20'>
          <ExperiencesSection />
        </section>
        <section id='contato' className='py-20'>
          <ContactSection />
        </section>
        <Footer />
      </div>
    </div>
  )
}