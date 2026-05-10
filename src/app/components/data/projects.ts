export const PROJECTS = [
    {
        title: 'Jul.ia - AID4CARE WebSite',
        description: 'Liderei o desenvolvimento do site institucional da empresa, utilizando Next.js, React e Tailwind CSS para criar uma interface moderna, responsiva e otimizada. O projeto foi planejado para alinhar design e performance às necessidades do negócio, garantindo uma experiência fluida e intuitiva para os usuários.',
        technologies: ['React', 'Tailwind', 'Next.js', 'TypeScript', 'Framer Motion'],
        // gitUrl: 'https://github.com/aid4care/jul.ia-web',
        webUrl: 'https://julia.aid4care.com'
    },
    {
        title: 'Gerador de escalas - COpEsp',
        image: '',
        description: 'Desenvolvi uma API para gestão de escalas operacionais, permitindo a definição automática de atividades diárias e a alocação eficiente de agentes. O sistema oferece funcionalidades para geração de escalas, confirmação de atribuições e consulta de históricos.',
        technologies: ['Node.js', 'Express', 'MongoDB', 'TypeScript'],
        gitUrl: 'https://github.com/heitorbrrt1/qasCOpEsp-API',
    },
    {
        title: 'Agro Óleo - UI',
        description: 'Desenvolvi a interface completa do sistema utilizando Next.js 16 e TypeScript, implementando o padrão BFF (Backend for Frontend) para gerenciar autenticação segura via cookies HttpOnly. O projeto conta com dashboards interativos, formulários complexos para gestão de vendas e um módulo inteligente no client-side para leitura e preenchimento automático de dados a partir de PDFs.',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI', 'Recharts', 'Framer Motion'],
        webUrl: 'https://www.agrooleo.cloud'
    },
    {
        title: 'Agro Óleo - API & Infra',
        description: 'Construí uma API RESTful escalável com Django REST Framework, focada em segurança (proteção contra brute-force, controle de acesso RBAC e Throttling). Fui responsável por toda a infraestrutura DevOps: configuração de VPS Linux do zero, orquestração de containers Docker (Nginx, Redis, Postgres), automação de SSL e rotinas de backup para garantir alta disponibilidade.',
        technologies: ['Django REST Framework', 'Python', 'Docker', 'Nginx', 'PostgreSQL', 'Redis', 'Linux'],
        webUrl: 'https://api.agrooleo.cloud'
    },
    {
        title: 'FeelGood Store',
        description: 'Desenvolvi uma interface de e-commerce moderna e performática para uma loja de suplementos, utilizando as tecnologias mais recentes do mercado: Next.js 15 e React 19. O projeto foca na experiência do usuário (UX), com um sistema de carrinho de compras dinâmico gerenciado via Context API, componentes interativos (Shadcn UI) e um design responsivo otimizado com Tailwind CSS. A aplicação inclui fluxos de listagem de produtos, detalhes nutricionais e checkout.',
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Zod'],
        webUrl: 'https://feelgoodstore.vercel.app'
    },
    {
        title: 'Frequência Escolar',
        description: 'Desenvolvi um aplicativo mobile completo para pais acompanharem a rotina escolar e segurança dos filhos. As funcionalidades incluem monitoramento de rotas de ônibus em tempo real via GPS, consulta de cardápio escolar, agenda mensal de atividades e um sistema crítico de justificativa de ausências, permitindo que os pais notifiquem faltas diretamente pela plataforma.',
        technologies: ['React Native', 'Expo', 'TanStack Query', 'Google Maps API', 'TypeScript'],
        webUrl: 'https://play.google.com/store/apps/details?id=com.controlm.frequenciaescolar' // URL de produção citada no serviço de API
    },
    {
        title: 'Transporte Escolar',
        description: 'Desenvolvi uma ferramenta operacional para motoristas de transporte escolar com foco em eficiência logística. O app permite a seleção e gestão de rotas dinâmicas, visualização de alunos por parada e uma integração nativa avançada para navegação GPS (Google Navigation) dentro do próprio aplicativo, garantindo que o motorista realize o trajeto sem a necessidade de alternar entre apps externos.',
        technologies: ['React Native', 'Expo', 'TanStack Query', 'Kotlin (Native Modules)', 'TypeScript'],
        
    },

]
