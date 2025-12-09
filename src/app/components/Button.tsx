'use client'

import React, { useState, useRef, useEffect } from 'react';
import { IoMdSend } from 'react-icons/io';

interface GradientButtonProps {
  isSubmitting: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<GradientButtonProps> = ({ 
  isSubmitting, 
  onClick,
  className = '' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
 
  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
   
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
   
    setMousePosition({ x, y });
  };
 
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
 
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
 
  useEffect(() => {
    if (!borderRef.current) return;
   
    if (isHovered) {
      borderRef.current.style.clipPath = `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`;
      borderRef.current.offsetHeight;
      borderRef.current.style.clipPath = `circle(150% at ${mousePosition.x}% ${mousePosition.y}%)`;
    } else {
      borderRef.current.style.clipPath = `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`;
    }
  }, [isHovered, mousePosition]);

  return (
    <div className='relative inline-flex'>
      <button
        ref={buttonRef}
        type='submit'
        disabled={isSubmitting}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative w-auto px-3 lg:px-16 py-3 rounded-full bg-neutral-900/50 text-white font-medium
                   border border-white/20 transition-all duration-300 hover:border-[#00EE6E] 
                   disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-[0_0_10px_rgba(0,238,110,0.3)]
                   ${className}`}
      >
        <span className='flex items-center justify-center gap-2'>
          {isSubmitting ? (
            <>
              <svg className='animate-spin -ml-1 mr-2 h-4 w-4 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
              </svg>
              Enviando
            </>
          ) : (
            <>
              <span className='hidden lg:inline'>Enviar mensagem</span>
              <IoMdSend className='text-xl' />
            </>
          )}
        </span>
      </button>
      
      <div 
        className='absolute inset-0 pointer-events-none rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300'
        style={{ zIndex: 1 }}
      >
        <div 
          ref={borderRef}
          className='absolute inset-0 rounded-full'
          style={{
            clipPath: `circle(0% at ${mousePosition.x}% ${mousePosition.y}%)`,
            transition: 'clip-path 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        >
          <div className='absolute inset-0 rounded-full border-2 border-[#00EE6E] animate-pulse' />
        </div>
      </div>
    </div>
  );
};

export default Button;