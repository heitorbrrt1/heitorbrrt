'use client'

import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaGlobe, FaTimes } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  gitUrl?: string
  webUrl?: string
}

export function ProjectCard({
  title,
  description,
  technologies,
  gitUrl,
  webUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [gifSrc, setGifSrc] = useState<string | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setGifSrc(null)
  }

  return (
    <>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className='relative isolate'
      >
        <div className='absolute top-4 right-4 flex-col z-20'>
          {webUrl && (
            <a
              href={webUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all mb-1'
              onClick={(e) => e.stopPropagation()}
            >
              <FaGlobe className='text-white text-lg' />
            </a>
          )}
          {gitUrl && (
            <a
              href={gitUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='w-8 h-8 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all'
              onClick={(e) => e.stopPropagation()}
            >
              <FaGithub className='text-white text-lg' />
            </a>
          )}
        </div>

        {isHovered && (
          <div
            className='pointer-events-none absolute inset-0 rounded-2xl border border-white/20 transition-all duration-300 overflow-hidden'
          >
            <div
              className='absolute w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 opacity-60'
              style={{
                top: mousePosition.y,
                left: mousePosition.x,
                background: 'radial-gradient(circle closest-side, rgba(40,100,226,0.8), transparent)',
              }}
            />
          </div>
        )}

        <motion.div
          onClick={openModal}
          whileTap={{ scale: 0.98 }}
          className='bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-6 cursor-pointer relative z-10 flex flex-col h-full group transition-all duration-300 hover:border-blue-400/30'
        >
          <div className='flex flex-col h-full'>
            <h2 className='text-xl font-bold text-white mb-2'>{title}</h2>
            <p className='text-gray-200 mb-4 flex-1'>{description}</p>

            <div className='flex flex-wrap gap-2 mt-auto'>
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className='px-2 py-1 text-sm font-medium text-blue-500 hover:text-blue-500/50 rounded-full bg-neutral-900/50 cursor-default'
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {isOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center z-50 bg-black/20 bg-opacity-90 backdrop-blur-sm'
          onClick={closeModal}
        >
          <div
            className='relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg p-4 max-w-3xl w-full mx-4'
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors z-50'
            >
              <FaTimes className='text-white text-xl w-6 h-6' />
            </button>

            <div className='rounded'>
              {gifSrc && (
                <img
                  src={gifSrc}
                  alt='Demonstração do projeto'
                  className='w-full h-full object-contain rounded-md'
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}