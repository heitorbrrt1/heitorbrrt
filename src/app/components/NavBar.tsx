import React from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useApp } from '../context/AppContext';

interface NavLinkPresenterProps {
  name: string;
  href: string;
  isActive?: boolean;
  onClick: (e: React.MouseEvent, id: string) => void;
}

const NavLinkPresenter: React.FC<NavLinkPresenterProps> = ({ 
  name, 
  href, 
  isActive = false,
  onClick 
}) => {
  return (
    <a
      href={`#${href}`}
      className={`
        text-white font-medium relative 
        transition-colors duration-300 
        after:content-[''] after:absolute after:h-0.5 after:bg-white 
        after:left-1/2 after:-translate-x-1/2 after:bottom-0 
        after:w-0 hover:after:w-full after:transition-all after:duration-300
        ${isActive ? 'text-[#00EE6E]' : 'hover:text-white/80'}
      `}
      onClick={(e) => onClick(e, href)}
      aria-current={isActive ? 'page' : undefined}
    >
      {name}
    </a>
  )
}

const NavLinks: React.FC = () => {
  const { scrollToElement } = useScrollAnimation()
  const { activeSection, setActiveSection } = useApp()
  
  const links = [
    { name: 'Home', href: 'home' },
    { name: 'Projetos', href: 'projetos' },
    { name: 'Experiências', href: 'experiencias' },
    { name: 'Contato', href: 'contato' },
  ]

  const handleClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    scrollToElement(id)
    setActiveSection(id)
  }

  return (
    <>
      {links.map((link) => (
        <NavLinkPresenter
          key={link.name}
          name={link.name}
          href={link.href}
          isActive={activeSection === link.href}
          onClick={handleClick}
        />
      ))}
    </>
  )
}

const Navbar: React.FC = () => {
  return (
    <nav className='hidden md:flex fixed top-6 left-0 right-0 mx-auto md:w-fit px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg z-50 justify-between items-center'>
      <div className='flex items-center justify-center space-x-8'>
        <NavLinks />
      </div>
    </nav>
  )
}

export default Navbar