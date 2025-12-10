export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'dev' | 'leadership' | 'devops';
  highlights: string[];
  technologies?: string[];
}

export const experiences: Experience[] = [
  {
    id: 'codetower-dev',
    role: 'Desenvolvedor FullStack',
    company: 'CodeTower',
    location: 'Anápolis, Brasil',
    period: '04/2023 – 01/2025',
    type: 'dev',
    highlights: [
      'Iniciei com back-end em Python, Django e Docker para APIs escaláveis',
      'Evoluí para fullstack integrando React, Tailwind e TypeScript',
      'Responsável por desenvolver e manter APIs RESTful com alta performance',
    ],
    technologies: ['Python', 'Django', 'Docker', 'React', 'TypeScript'],
  },
  {
    id: 'codetower-vp',
    role: 'Vice Presidente',
    company: 'CodeTower',
    location: 'Anápolis, Brasil',
    period: '01/2024 – 01/2025',
    type: 'leadership',
    highlights: [
      'Liderança estratégica definindo metas e impulsionando o crescimento da empresa',
      'Supervisão de equipes garantindo entrega de soluções inovadoras',
      'Representação institucional e negociação com clientes e investidores',
    ],
  },
  {
    id: 'aid4care',
    role: 'Engenheiro de Software',
    company: 'AID4CARE',
    location: 'Goiânia, Brasil',
    period: '09/2024 – 04/2025',
    type: 'dev',
    highlights: [
      'Foco na criação de interfaces interativas e responsivas com React e TypeScript',
      'Colaboração ativa com equipes de design e back-end para otimizar a experiência do usuário',
      'Liderei o desenvolvimento do site institucional da empresa',
    ],
    technologies: ['Next.js', 'React', 'Tailwind', 'TypeScript'],
  },
  {
    id: 'agrooleo',
    role: 'Engenheiro de Software Full Stack & DevOps',
    company: 'Agro Óleo',
    location: 'Unaí-MG (Remoto)',
    period: '09/2025 – 12/2025',
    type: 'devops',
    highlights: [
      'Desenvolvi aplicação completa com Next.js e Django REST, implementando arquitetura BFF com segurança avançada',
      'Criei módulos de automação que eliminaram digitação manual através de ingestão inteligente de dados',
      'Configurei infraestrutura em VPS Linux do zero com Docker, Nginx/SSL e rotinas de backup automático',
    ],
    technologies: ['Next.js', 'Django REST', 'Docker', 'Nginx', 'PostgreSQL'],
  },
];
