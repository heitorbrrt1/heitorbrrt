import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimationOptions {
  initial?: Record<string, any>;
  animate?: Record<string, any>;
  exit?: Record<string, any>;
  transition?: Record<string, any>;
  whileHover?: Record<string, any>;
  whileTap?: Record<string, any>;
  variants?: Variants;
}

const defaultAnimations: Record<string, AnimationOptions> = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
    transition: { duration: 0.5 }
  },
  slideDown: {
    initial: { opacity: 0, y: -100 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 100 },
    transition: { duration: 0.5 }
  },
  slideLeft: {
    initial: { opacity: 0, x: 200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -200 },
    transition: { duration: 1 }
  },
  slideRight: {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 200 },
    transition: { duration: 1 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
    transition: { duration: 0.5 }
  },
  scaleUp: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { duration: 0.2 }
  }
};

type MotionElementType = 'div' | 'span' | 'button' | 'a' | 'p' | 'h1' | 'h2' | 'h3';

/**
 * HOC para adicionar animações do Framer Motion a qualquer componente
 * @param Component Componente a ser envolvido
 * @param animationType Tipo da animação (fadeIn, slideUp, etc.) ou objeto de configuração personalizado
 * @param motionComponentType Tipo de componente HTML a ser renderizado (default: 'div')
 */
export function withAnimation<P extends object>(
  Component: React.ComponentType<P>,
  animationType: string | AnimationOptions = 'fadeIn',
  motionComponentType: MotionElementType = 'div'
) {
  return (props: P) => {
    const animationProps = typeof animationType === 'string' 
      ? defaultAnimations[animationType] || defaultAnimations.fadeIn
      : animationType;

    const MotionComponent = motion[motionComponentType];

    return (
      <MotionComponent
        {...animationProps}
      >
        <Component {...props} />
      </MotionComponent>
    );
  };
}