'use client'

import React, { useState, useEffect } from 'react'
import { icons } from './data/technologiesData'
import type { TechItem } from './data/technologiesData'

export default function Technologies({
  reverse = false,
  width = 100,
  height = 100,
  duration = 10,
}: {
  reverse?: boolean
  width?: number
  height?: number
  duration?: number
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedTech, setSelectedTech] = useState<TechItem | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  const adjustedWidth = isMobile ? width * 0.7 : width
  const adjustedHeight = isMobile ? height * 0.7 : height
  const iconSize = isMobile ? width * 0.4 : width * 0.6

  const quantity = icons.length

  const handleIconHover = (tech: TechItem) => {
    setSelectedTech(tech)
    setModalOpen(true)
  }

  const handleMouseLeave = () => {
    setModalOpen(false)
    setSelectedTech(null)
  }

  return (
    <div className='pb-8 md:pb-24 relative'>
      <div
        className={`slider overflow-hidden ${modalOpen ? 'paused' : ''}`}
        style={{
          '--width': `${adjustedWidth}px`,
          '--height': `${adjustedHeight}px`,
          '--quantity': quantity,
          position: 'relative',
          zIndex: 1
        } as React.CSSProperties}
      >
        <div className='list relative flex' style={{ minWidth: `${adjustedWidth * quantity}px` }}>
          {icons.map((item, index) => {
            const IconComponent = item.icon
            const delay = (duration / quantity) * index - duration
            return (
              <div
                key={index}
                className='item absolute transition duration-500 flex items-center justify-center'
                style={{
                  left: '100%',
                  width: `${adjustedWidth}px`,
                  height: `${adjustedHeight}px`,
                  animation: `${reverse ? 'reversePlay' : 'autoRun'} ${duration}s linear infinite`,
                  animationDelay: `${delay}s`,
                  animationPlayState: modalOpen ? 'paused' : 'running'
                }}
                onMouseEnter={() => {
                  setHoveredIndex(index)
                  handleIconHover(item)
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null)
                  handleMouseLeave()
                }}
              >
                <div
                  className='rounded-2xl border-4 border-neutral-800 p-4 w-full h-full flex items-center justify-center relative cursor-pointer'
                >
                  <IconComponent size={iconSize} className={`${isMobile ? 'text-3xl' : 'text-5xl'} ${item.color}`} />
                  {hoveredIndex === index && !modalOpen && (
                    <div className='absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white text-sm px-2 py-1 rounded whitespace-nowrap'>
                      {item.name}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <style>{`
          .slider {
            height: calc(var(--height) + 2rem)
            padding-top: 2rem
            mask-image: linear-gradient(to right, transparent, #000 10% 90%, transparent)
          }
          .slider:hover .item {
            animation-play-state: paused !important
          }
          .slider.paused .item {
            animation-play-state: paused !important
          }
          @keyframes autoRun {
            from {
              left: 100%
            }
            to {
              left: calc(var(--width) * -1)
            }
          }
          @keyframes reversePlay {
            from {
              left: calc(var(--width) * -1)
            }
            to {
              left: 100%
            }
          }
        `}</style>
      </div>

      {modalOpen && selectedTech && (
        <div
          className='fixed inset-0 flex items-center justify-center'
          style={{
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        >
          <div
            className='bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 max-w-md w-full mx-4'
            style={{
              pointerEvents: 'none',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            <div className='flex justify-between items-center mb-4'>
              <h3 className='text-xl font-bold flex items-center gap-2'>
                {selectedTech && React.createElement(
                  selectedTech.icon,
                  {
                    className: selectedTech.color,
                    size: 24
                  }
                )}
                {selectedTech.name}
              </h3>
            </div>
            <p className='text-neutral-300'>{selectedTech.description}</p>
          </div>
        </div>
      )}
    </div>
  )
}