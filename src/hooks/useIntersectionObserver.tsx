'use client'

import { useEffect, useState, useRef } from 'react'

interface IntersectionObserverOptions {
  root?: Element | null
  rootMargin?: string
  threshold?: number | number[]
  once?: boolean
}

/**
 * Hook personalizado para detectar quando um elemento entra na viewport
 * @param options Opções do IntersectionObserver
 * @returns [ref, isVisible, entry]
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLElement>({
  root = null,
  rootMargin = '0px',
  threshold = 0,
  once = false,
}: IntersectionObserverOptions = {}): [React.MutableRefObject<T | null>, boolean, IntersectionObserverEntry | null] {
  const [isVisible, setIsVisible] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)
  const observedRef = useRef<T>(null)
  const wasPreviouslyVisible = useRef(false)

  useEffect(() => {
    const element = observedRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isCurrentlyVisible = entry.isIntersecting
        
        if (once && wasPreviouslyVisible.current && isCurrentlyVisible) {
          return
        }
        
        setIsVisible(isCurrentlyVisible)
        setEntry(entry)
        
        if (isCurrentlyVisible) {
          wasPreviouslyVisible.current = true
          
          if (once) {
            observer.disconnect()
          }
        }
      },
      { root, rootMargin, threshold }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [root, rootMargin, threshold, once])

  return [observedRef, isVisible, entry]
}