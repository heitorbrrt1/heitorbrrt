import type { FC } from 'react'
import { IconType } from 'react-icons'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
import { BiLogoPostgresql } from 'react-icons/bi'
import { SiTailwindcss, SiDjango, SiDocker, SiGit, SiGithub, SiJira, SiNotion } from 'react-icons/si'
import { FigmaIcon } from '../icons/Figma'

export interface TechItem {
  icon: IconType | FC<{ size: number; className?: string }>
  color: string
  name: string
  description: string
}

export const icons: TechItem[] = [
  {
    icon: RiReactjsLine,
    color: 'text-cyan-400',
    name: 'React',
    description: 'Biblioteca JavaScript para construir interfaces de usuário com componentes reutilizáveis e reatividade eficiente.'
  },
  {
    icon: TbBrandNextjs,
    color: '',
    name: 'Next.js',
    description: 'Framework React que oferece renderização híbrida, roteamento simplificado e otimização de performance.'
  },
  {
    icon: FaNodeJs,
    color: 'text-green-500',
    name: 'Node.js',
    description: 'Ambiente de execução JavaScript server-side que permite construir aplicações de rede escaláveis.'
  },
  {
    icon: BiLogoPostgresql,
    color: 'text-sky-700',
    name: 'PostgreSQL',
    description: 'Sistema de banco de dados relacional de código aberto com forte conformidade SQL e recursos avançados.'
  },
  {
    icon: SiTailwindcss,
    color: 'text-cyan-500',
    name: 'Tailwind CSS',
    description: 'Framework CSS utilitário para design ágil e personalizado.'
  },
  {
    icon: FigmaIcon,
    color: 'text-purple-500',
    name: 'Figma',
    description: 'Ferramenta de design de interface baseada na web com recursos colaborativos em tempo real.'
  },
  {
    icon: SiDjango,
    color: 'text-green-700',
    name: 'Django',
    description: 'Framework de desenvolvimento backend para criação de APIs e sistemas web robustos e escaláveis.'
  },
  {
    icon: SiDocker,
    color: 'text-blue-500',
    name: 'Docker',
    description: 'Plataforma para containerização de aplicações, garantindo portabilidade e consistência.'
  },
  {
    icon: SiGit,
    color: 'text-orange-600',
    name: 'Git',
    description: 'Sistema de controle de versão distribuído para rastrear alterações no código-fonte durante o desenvolvimento.'
  },
  {
    icon: SiGithub,
    color: '',
    name: 'GitHub',
    description: 'Plataforma de hospedagem de código que oferece controle de versão Git e recursos colaborativos.'
  },
  {
    icon: SiJira,
    color: 'text-blue-600',
    name: 'Jira',
    description: 'Ferramenta de gerenciamento de projetos e rastreamento de problemas para equipes de desenvolvimento.'
  },
  {
    icon: SiNotion,
    color: '',
    name: 'Notion',
    description: 'Aplicativo de produtividade all-in-one que combina notas, gerenciamento de projetos e wikis.'
  }
]
