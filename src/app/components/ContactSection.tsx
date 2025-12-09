'use client'

import { useState } from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import ContactForm from './ContactForm'
import { motion } from 'framer-motion'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleFormSuccess = () => {
    setSubmitted(true)
  }
  return (
    <section className='py-16'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='text-4xl mb-12 text-center cursor-default'
      >
        Entre em Contato
      </motion.h2>
      
      <div
        className='max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl border-2 border-white/20 hover:border-[#0C75E6]/70 hover:drop-shadow-sm hover:shadow-[#0C75E6] transition duration-300 shadow-lg p-8 group'
      >
        {submitted ? (
          <div className='text-center py-8'>
            <div className='text-[#00EE6E] text-6xl mb-4 cursor-default'>✓</div>
            <h3 className='text-2xl mb-2 cursor-default'>Mensagem Enviada!</h3>
            <p className='text-neutral-300 cursor-default'>Obrigado por entrar em contato.</p>
          </div>
        ) : (
          <ContactForm onSubmitSuccess={handleFormSuccess} />
        )}

        <div className='mt-10 pt-8 border-t-2 border-white/10 group-hover:border-[#0C75E6]/70 transition duration-300'>
          <p className='text-center mb-6 text-neutral-300 cursor-default'>
            <span className='lg:hidden'>Ou conecte-se pelas minhas redes</span>
            <span className='hidden lg:inline'>Ou conecte-se através das minhas redes sociais</span>
          </p>
          <div className='flex justify-center space-x-6'>
            <a 
              href='https://www.linkedin.com/in/heitor-barreto-26766134a/' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-4xl text-[#0A66C2] hover:scale-110 transition-transform'
              aria-label='LinkedIn'
            >
              <FaLinkedin />
            </a>
            <a 
              href='https://github.com/heitorbrrt1' 
              target='_blank' 
              rel='noopener noreferrer'
              className='text-4xl text-white hover:scale-110 transition-transform'
              aria-label='GitHub'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}