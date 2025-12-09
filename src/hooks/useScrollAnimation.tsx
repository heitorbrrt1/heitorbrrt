import { useCallback } from 'react';

interface ScrollAnimationOptions {
  targetId: string;
  pathname?: string;
  duration?: number;
  offset?: number;
  easingFunction?: (t: number) => number;
}
/**
 * Hook personalizado para animação de rolagem suave
 * @param options Opções de animação de rolagem
 * @returns Função para rolar até o elemento especificado
 */
export function useScrollAnimation({
  duration = 1000,
  offset = 0,
  easingFunction = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
}: Omit<ScrollAnimationOptions, 'targetId'> = {}) {
  
  const scrollToElement = useCallback((targetId: string, pathname: string = window.location.pathname) => {
    if (pathname !== '/' && window.location.pathname !== pathname) {
      window.location.href = `${pathname}#${targetId}`;
      return;
    }

    const section = document.getElementById(targetId);
    if (!section) return;

    const targetPosition = section.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, startPosition + distance * easingFunction(progress));

      if (progress < 1) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }, [duration, offset, easingFunction]);

  return { scrollToElement };
}
