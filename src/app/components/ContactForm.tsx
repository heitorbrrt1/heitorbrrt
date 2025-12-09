'use client'

import { useState } from 'react'
import Button from './Button'

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const [nameIsFocused, setNameIsFocused] = useState(false)
  const [emailIsFocused, setEmailIsFocused] = useState(false)
  const [messageIsFocused, setMessageIsFocused] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)
    
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('message', message)
    formData.append('_subject', 'Novo contato do portfólio')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/barretoheitor12@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (!response.ok) {
        throw new Error('Erro ao enviar mensagem. Tente novamente mais tarde.')
      }
      
      setName('')
      setEmail('')
      setMessage('')
      onSubmitSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ocorreu um erro ao enviar a mensagem')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form 
      className='space-y-8'
      onSubmit={handleSubmit}
    >      
      <div className='relative'>
        <input
          type='text'
          id='name'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          onFocus={() => setNameIsFocused(true)}
          onBlur={() => setNameIsFocused(false)}
          required
          className='peer w-full bg-neutral-800/30 border-2 border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#0C75E6] hover:border-[#0C75E6]/70 transition-all duration-300'
        />
        <label 
          htmlFor='name'
          className={`absolute text-neutral-300 transition-all duration-300 
            ${nameIsFocused || name ? 'text-sm -top-2.5 left-2 bg-[#0C75E6] rounded-full px-2' : 'text-base left-4 top-3'} 
            ${nameIsFocused ? 'text-[#00EE6E]' : ''}`}
        >
          Nome
        </label>
      </div>
      
      <div className='relative'>
        <input
          type='email'
          id='email'
          name='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setEmailIsFocused(true)}
          onBlur={() => setEmailIsFocused(false)}
          required
          className='peer w-full bg-neutral-800/30 border-2 border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#0C75E6] hover:border-[#0C75E6]/70 transition-all duration-300'
        />
        <label 
          htmlFor='email'
          className={`absolute text-neutral-300 transition-all duration-300 
            ${emailIsFocused || email ? 'text-sm -top-2.5 left-2 bg-[#0C75E6] rounded-full px-2' : 'text-base left-4 top-3'} 
            ${emailIsFocused ? 'text-[#00EE6E]' : ''}`}
        >
          Email
        </label>
      </div>
      
      <div className='relative'>
        <textarea
          id='message'
          name='message'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={() => setMessageIsFocused(true)}
          onBlur={() => setMessageIsFocused(false)}
          required
          rows={5}
          className='peer w-full bg-neutral-800/30 border-2 border-white/10 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-[#0C75E6] hover:border-[#0C75E6]/70 transition-all duration-300 resize-none'
        />
        <label 
          htmlFor='message'
          className={`absolute text-neutral-300 transition-all duration-300 
            ${messageIsFocused || message ? 'text-sm -top-2.5 left-2 bg-[#0C75E6] rounded-full px-2' : 'text-base left-4 top-3'} 
            ${messageIsFocused ? 'text-[#00EE6E]' : ''}`}
        >
          Mensagem
        </label>
      </div>
      
      {error && (
        <div className='text-red-500 bg-red-500/10 p-3 rounded-lg border border-red-500/20'>
          {error}
        </div>
      )}
      
      <div className='flex justify-center w-full'>
        <Button isSubmitting={isSubmitting} />
      </div>
    </form>
  )
} 