import { useLanguage } from './LanguageContext'

export interface UiStrings {
  header: {
    badge: string
    location: string
    nav3d: string
    navList: string
    navSkills: string
    navTimeline: string
    navTerminal: string
    muteOn: string
    muteOff: string
    toggleView: string
    droneTitle: string
    droneOn: string
    drone: string
    resume: string
    contact: string
    languageToggle: string
  }
  app: {
    stationsLabel: string
    cli: string
    navTitle: string
    navHint1: string
    navHint2: string
    navHint3: string
  }
  core: {
    subtitle: string
    hint: string
  }
  loader: {
    label: string
  }
  projectModal: {
    idLabel: string
    engineeringTitle: string
    architectureTitle: string
    frontend: string
    backend: string
    ai: string
    domain: string
    database: string
    infra: string
    featuresTitle: string
    techTitle: string
    github: string
    demo: string
    talk: string
    whatsappText: (title: string) => string
  }
  terminal: {
    windowTitle: string
    placeholder: string
    welcomeVersion: string
    welcomeTagline: string
    welcomeLine1: (name: string) => string
    welcomeLine2: string
    helpHint: string
    projectsHint: string
    helpTitle: string
    helpAbout: string
    helpProjects: string
    helpSkills: string
    helpTimeline: string
    helpWhatsapp: string
    helpCv: string
    helpClear: string
    projectsTitle: string
    openIn3d: string
    skillsTitle: string
    timelineTitle: string
    whatsappOpening: string
    cvOpening: string
    notFound: (cmd: string) => string
  }
  timelineModal: {
    title: string
    subtitle: string
    highlights: string
  }
  contactModal: {
    title: string
    subtitle: string
    whatsappLabel: string
    emailLabel: string
    copyPhone: string
    copyEmail: string
    formLabel: string
    placeholder: string
    location: string
    sendButton: string
    defaultMessage: string
  }
  aboutModal: {
    philosophyTitle: string
    education: string
    experience: string
    specialtiesTitle: string
    timelineButton: string
    contactButton: string
  }
  executiveView: {
    badge: string
    heroTitlePart1: string
    heroTitlePart2: string
    heroTitlePart3: string
    projectsTitle: string
    projectsSubtitle: string
    categoryAll: string
    inspect: string
    skillsTitle: string
    skillsSubtitle: string
    ctaTitle: string
    ctaSubtitle: string
    ctaButton: string
  }
  projectStations: {
    orbitLabel: string
  }
}

const pt: UiStrings = {
  header: {
    badge: "Arquiteto de Software & IA",
    location: "Barretos - SP · Brasil · Sistemas de Informação",
    nav3d: "3D Universo",
    navList: "Lista Executiva",
    navSkills: "Matriz de Skills",
    navTimeline: "Trajetória",
    navTerminal: "Terminal CLI",
    muteOn: "Ativar Áudio",
    muteOff: "Mutar Áudio",
    toggleView: "Alternar Modo de Visão",
    droneTitle: "Sintetizador de Áudio Ambiente Sci-Fi",
    droneOn: "DRONE ON",
    drone: "DRONE",
    resume: "Currículo",
    contact: "Contato",
    languageToggle: "Mudar para inglês"
  },
  app: {
    stationsLabel: "ESTAÇÕES 3D:",
    cli: "CLI",
    navTitle: "Navegação Interativa",
    navHint1: "Arraste o mouse para orbitar pelo universo 3D",
    navHint2: "Clique em qualquer planeta ou estação para viajar",
    navHint3: "Use a roda do mouse para zoom in / out",
  },
  core: {
    subtitle: "Senior Full-Stack & Arquiteto de Sistemas · Desde 2020",
    hint: "Clique para perfil executivo & biografia"
  },
  loader: {
    label: "INICIALIZANDO NEXUS"
  },
  projectModal: {
    idLabel: "ID:",
    engineeringTitle: "Visão de Engenharia & Desafio",
    architectureTitle: "Blueprint de Arquitetura",
    frontend: "Frontend & UI",
    backend: "Backend & APIs",
    ai: "IA & Visão Computacional",
    domain: "Núcleo de Domínio (DDD)",
    database: "Banco de Dados & Cache",
    infra: "Infraestrutura & Deploy",
    featuresTitle: "Diferenciais & Funcionalidades",
    techTitle: "Tecnologias Utilizadas",
    github: "GitHub Repo",
    demo: "Live Demo",
    talk: "Falar sobre este projeto",
    whatsappText: (title) => `Olá Sérgio, estou vendo o projeto ${title} no seu portfólio 3D e gostaria de conversar!`
  },
  terminal: {
    windowTitle: "NEXUS-CLI ~ sergio@barretos-sp:~$",
    placeholder: "digite um comando (ex: help, projects, peritocalc)...",
    welcomeVersion: "NEXUS CLI v3.8",
    welcomeTagline: "Interface Direta de Comandos",
    welcomeLine1: (name) => `Terminal conectado ao perfil de engenharia de ${name}.`,
    welcomeLine2: "Digite",
    helpHint: "para visualizar os comandos disponíveis ou",
    projectsHint: "para explorar o portfólio.",
    helpTitle: "Comandos do Sistema:",
    helpAbout: "Biografia, formação e pilares arquiteturais",
    helpProjects: "Lista detalhada de todos os projetos",
    helpSkills: "Matriz completa de competências técnicas",
    helpTimeline: "Histórico de carreira e experiências",
    helpWhatsapp: "Inicia conversa direta no WhatsApp",
    helpCv: "Link direto para download do currículo",
    helpClear: "Limpa o histórico do terminal",
    projectsTitle: "Projetos Flagship Desenvolvidos:",
    openIn3d: "Clique para abrir no 3D",
    skillsTitle: "Matriz de Habilidades por Especialidade:",
    timelineTitle: "Trajetória Profissional:",
    whatsappOpening: "Abrindo WhatsApp de Sérgio...",
    cvOpening: "Abrindo currículo em PDF...",
    notFound: (cmd) => `Comando não reconhecido: "${cmd}". Digite help para ver a lista de comandos.`
  },
  timelineModal: {
    title: "Trajetória Profissional & Evolução",
    subtitle: "Da Infraestrutura e Gestão de Varejo à Arquitetura de Sistemas",
    highlights: "Destaques & Impacto:"
  },
  contactModal: {
    title: "Iniciar Conexão Direta",
    subtitle: "Disponível para Projetos de Alto Impacto, Consultoria & Liderança Técnica",
    whatsappLabel: "WhatsApp Direto",
    emailLabel: "E-mail Profissional",
    copyPhone: "Copiar Telefone",
    copyEmail: "Copiar E-mail",
    formLabel: "Escreva uma mensagem rápida para enviar no WhatsApp:",
    placeholder: "Ex: Olá Sérgio! Gostei muito da arquitetura do PeritoCalc. Gostaria de discutir uma oportunidade...",
    location: "Barretos - SP (Disponível Remoto / Presencial)",
    sendButton: "Conversar no WhatsApp",
    defaultMessage: "Olá Sérgio! Vi seu portfólio 3D e gostaria de conversar sobre oportunidades/projetos."
  },
  aboutModal: {
    philosophyTitle: "Filosofia & Perfil de Engenharia",
    education: "Bacharel em Sistemas de Informação (UniBarretos)",
    experience: "5+ anos de experiência sênior em produtos digitais",
    specialtiesTitle: "Especialidades Centrais de Engenharia",
    timelineButton: "Ver Linha do Tempo Completa",
    contactButton: "Entrar em Contato"
  },
  executiveView: {
    badge: "PORTFÓLIO DE ENGENHARIA & ARQUITETURA DE SISTEMAS · DESDE 2020",
    heroTitlePart1: "Engenharia de Software em",
    heroTitlePart2: "Arquitetura de Sistemas",
    heroTitlePart3: "e SaaS Corporativo.",
    projectsTitle: "Projetos & Inovações Desenvolvidas",
    projectsSubtitle: "Clique em qualquer card para inspecionar arquitetura, métricas e diferenciais",
    categoryAll: "Todos os Projetos",
    inspect: "Inspecionar Arquitetura",
    skillsTitle: "Matriz de Competências & Domínio Tecnológico",
    skillsSubtitle: "Especialidades práticas aplicadas em produtos reais de alta disponibilidade",
    ctaTitle: "Pronto para construir o próximo grande produto?",
    ctaSubtitle: "Entre em contato direto para discutir oportunidades de projetos de alto impacto, arquitetura de sistemas ou novos produtos.",
    ctaButton: "Iniciar Conversa no WhatsApp"
  },
  projectStations: {
    orbitLabel: "Estação"
  }
}

const en: UiStrings = {
  header: {
    badge: "Software & AI Architect",
    location: "Barretos, Brazil · Remote-friendly · Information Systems",
    nav3d: "3D Universe",
    navList: "Executive List",
    navSkills: "Skill Matrix",
    navTimeline: "Career Path",
    navTerminal: "CLI Terminal",
    muteOn: "Enable Audio",
    muteOff: "Mute Audio",
    toggleView: "Toggle View Mode",
    droneTitle: "Sci-Fi Ambient Audio Synthesizer",
    droneOn: "DRONE ON",
    drone: "DRONE",
    resume: "Resume",
    contact: "Contact",
    languageToggle: "Switch to Portuguese"
  },
  app: {
    stationsLabel: "3D STATIONS:",
    cli: "CLI",
    navTitle: "Interactive Navigation",
    navHint1: "Drag the mouse to orbit through the 3D universe",
    navHint2: "Click any planet or station to travel there",
    navHint3: "Use the mouse wheel to zoom in / out",
  },
  core: {
    subtitle: "Senior Full-Stack & Systems Architect · Since 2020",
    hint: "Click for executive profile & bio"
  },
  loader: {
    label: "BOOTING NEXUS"
  },
  projectModal: {
    idLabel: "ID:",
    engineeringTitle: "Engineering Vision & Challenge",
    architectureTitle: "Architecture Blueprint",
    frontend: "Frontend & UI",
    backend: "Backend & APIs",
    ai: "AI & Computer Vision",
    domain: "Domain Core (DDD)",
    database: "Database & Cache",
    infra: "Infrastructure & Deploy",
    featuresTitle: "Highlights & Capabilities",
    techTitle: "Technologies Used",
    github: "GitHub Repo",
    demo: "Live Demo",
    talk: "Talk about this project",
    whatsappText: (title) => `Hi Sergio, I'm looking at the ${title} project on your 3D portfolio and would love to talk!`
  },
  terminal: {
    windowTitle: "NEXUS-CLI ~ sergio@barretos-sp:~$",
    placeholder: "type a command (e.g. help, projects, peritocalc)...",
    welcomeVersion: "NEXUS CLI v3.8",
    welcomeTagline: "Direct Command Interface",
    welcomeLine1: (name) => `Terminal connected to ${name}'s engineering profile.`,
    welcomeLine2: "Type",
    helpHint: "to see the available commands or",
    projectsHint: "to explore the portfolio.",
    helpTitle: "System Commands:",
    helpAbout: "Bio, background and architectural pillars",
    helpProjects: "Detailed list of every project",
    helpSkills: "Full technical skill matrix",
    helpTimeline: "Career history and experience",
    helpWhatsapp: "Start a direct WhatsApp conversation",
    helpCv: "Direct link to download the resume",
    helpClear: "Clear the terminal history",
    projectsTitle: "Flagship Projects Built:",
    openIn3d: "Click to open in 3D",
    skillsTitle: "Skill Matrix by Specialty:",
    timelineTitle: "Career Path:",
    whatsappOpening: "Opening Sergio's WhatsApp...",
    cvOpening: "Opening PDF resume...",
    notFound: (cmd) => `Command not recognized: "${cmd}". Type help to see the command list.`
  },
  timelineModal: {
    title: "Career Path & Evolution",
    subtitle: "From IT Infrastructure and Retail Management to Systems Architecture",
    highlights: "Highlights & Impact:"
  },
  contactModal: {
    title: "Start a Direct Connection",
    subtitle: "Available for High-Impact Projects, Consulting & Technical Leadership",
    whatsappLabel: "Direct WhatsApp",
    emailLabel: "Professional Email",
    copyPhone: "Copy Phone",
    copyEmail: "Copy Email",
    formLabel: "Write a quick message to send on WhatsApp:",
    placeholder: "E.g.: Hi Sergio! I really liked the PeritoCalc architecture. I'd love to discuss an opportunity...",
    location: "Barretos, Brazil (Available Remote / On-site)",
    sendButton: "Chat on WhatsApp",
    defaultMessage: "Hi Sergio! I saw your 3D portfolio and would love to talk about opportunities/projects."
  },
  aboutModal: {
    philosophyTitle: "Engineering Philosophy & Profile",
    education: "B.Sc. in Information Systems (UniBarretos)",
    experience: "5+ years of senior experience shipping digital products",
    specialtiesTitle: "Core Engineering Specialties",
    timelineButton: "See Full Career Timeline",
    contactButton: "Get in Touch"
  },
  executiveView: {
    badge: "SYSTEMS ENGINEERING & ARCHITECTURE PORTFOLIO · SINCE 2020",
    heroTitlePart1: "Software Engineering in",
    heroTitlePart2: "Systems Architecture",
    heroTitlePart3: "and Enterprise SaaS.",
    projectsTitle: "Projects & Products Built",
    projectsSubtitle: "Click any card to inspect architecture, metrics and highlights",
    categoryAll: "All Projects",
    inspect: "Inspect Architecture",
    skillsTitle: "Skill Matrix & Technical Domain",
    skillsSubtitle: "Practical expertise applied to real, high-availability products",
    ctaTitle: "Ready to build the next big product?",
    ctaSubtitle: "Reach out directly to discuss high-impact project opportunities, systems architecture or new products.",
    ctaButton: "Start a Conversation on WhatsApp"
  },
  projectStations: {
    orbitLabel: "Station"
  }
}

export const translations: Record<'pt' | 'en', UiStrings> = { pt, en }

export function useT(): UiStrings {
  const { language } = useLanguage()
  return translations[language]
}
