'use client'

import { useEffect, useState } from 'react'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useRef, Suspense } from 'react'
import { ChevronDown } from 'lucide-react'

const cv = "/Curriculum Heitor Barreto Bonfim.pdf"

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIsMobile()

    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return isMobile
}

function PlanetModel() {
  const planetRef = useRef<THREE.Group | null>(null)

  const { scene, animations } = useGLTF('/world.glb')

  const { actions, names } = useAnimations(animations, scene)

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]]
      if (action) {
        action.reset().play()
      }
    }

    return () => {
      actions[names[0]]?.stop()
    }
  }, [actions, names])

  useFrame((_state, delta) => {
    if (planetRef.current) {
      planetRef.current.rotation.x += delta * 0.3
      planetRef.current.rotation.y += delta * -0.3
      planetRef.current.rotation.z += delta * 0.3
    }
  })

  return <primitive ref={planetRef} object={scene} scale={2.3} />
}
export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const isMobile = useIsMobile()

  const devSkills = [
    'Desenvolvimento Front-end',
    'Criação de APIs RESTful',
    'Arquitetura de Banco de Dados',
    'Integração de Sistemas',
    'DevOps e CI/CD'
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 200)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % devSkills.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className='pt-6 mt-10 md:mt-0 cursor-default relative'>
      <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-2/3'>
            <div className='flex flex-col items-center lg:items-start'>
              <h1 className='pb-4 lg:pb-8 text-4xl sm:text-6xl lg:text-8xl font-thin tracking-tight lg:mt-16 bg-size-200 animate-gradient mb-4 lg:mb-0'>
                Heitor Barreto
              </h1>
              <div className='flex flex-col space-y-4'>
                {devSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 ease-in-out ${index === activeIndex
                      ? 'bg-linear-to-r from-[#00EE6E] to-[#0C75E6] bg-clip-text text-transparent py-2 origin-left'
                      : 'text-neutral-100 opacity-10 bg-clip-text'
                      }`}
                  >
                    <span className='text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight'>
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {!isMobile && (
            <div className='hidden lg:block w-1/3 h-[400px] justify-center items-center align-middle overflow-visible'>
              <Canvas camera={{ position: [0, 0, 5] }} style={{ background: 'transparent', marginTop: '10rem' }}>
                <ambientLight intensity={2} />
                <directionalLight position={[2, 2, 2]} intensity={2} />
                <Suspense fallback={null}>
                  <PlanetModel />
                </Suspense>
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          )}
        </div>

        <div className='mt-12 lg:mt-16 flex flex-col sm:flex-row items-center lg:items-start gap-4'>
          <a
            href={cv}
            className='px-6 py-3 bg-linear-to-r from-[#00EE6E] to-[#0C75E6] rounded-full text-white font-medium hover:scale-105 transition-transform shadow-lg'
          >
            Acessar currículo
          </a>
          <a
            href='/#contato'
            className='px-6 py-3 bg-linear-to-r from-neutral-800 to-neutral-700 rounded-full text-neutral-200 font-medium hover:scale-105 hover:from-neutral-700 hover:to-neutral-600 transition-all shadow-lg border border-neutral-600/50'
          >
            Entre em contato
          </a>
        </div>

        <div className="mt-16 lg:mt-12 flex justify-center">
          <a
            href="#projects"
            className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-sm font-mono">Ver projetos</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </div>
  )
}