import { SkillNode } from '../types'

export const skillNodes: SkillNode[] = [
  // AI & Protocols
  {
    name: "AI Gateways & Routing",
    category: "AI & Protocols",
    level: 98,
    color: "#06b6d4",
    position: [-4.5, 3.5, 2],
    details: "Roteamento inteligente de 290+ provedores, load balancing, chaveamento dinâmico e fallbacks semânticos."
  },
  {
    name: "RTK & Context Compression",
    category: "AI & Protocols",
    level: 95,
    color: "#06b6d4",
    position: [-2.5, 4.8, 1],
    details: "Algoritmos de compressão semântica de tokens preservando sintaxe de código com 89% de redução de custo."
  },
  {
    name: "Model Context Protocol (MCP)",
    category: "AI & Protocols",
    level: 96,
    color: "#06b6d4",
    position: [-5.2, 1.8, 3],
    details: "Implementação de 104+ ferramentas de observabilidade e controle para agentes Claude, Cursor e VS Code."
  },
  {
    name: "Agent-to-Agent (A2A Protocol)",
    category: "AI & Protocols",
    level: 94,
    color: "#06b6d4",
    position: [-3.8, 2.2, 4],
    details: "Servidor JSON-RPC 2.0 para comunicação, delegação de tarefas e colaboração entre agentes autônomos."
  },
  {
    name: "Multimodal LLMs & Vision",
    category: "AI & Protocols",
    level: 96,
    color: "#06b6d4",
    position: [-1.8, 3.2, 3],
    details: "Extração visual de documentos e formulários com Claude 3.5 Sonnet Vision e Gemini Pro."
  },

  // Backend & DDD
  {
    name: "Domain-Driven Design (DDD)",
    category: "Backend & DDD",
    level: 98,
    color: "#10b981",
    position: [4.5, 3.5, 2],
    details: "Modelagem estrita de regras de negócio em TypeScript puro sem acoplamento a frameworks, Value Objects e Entities."
  },
  {
    name: "NestJS & Fastify",
    category: "Backend & DDD",
    level: 96,
    color: "#10b981",
    position: [2.5, 4.8, 1],
    details: "Microserviços de alto throughput com Fastify, injeção de dependência, decorators e OpenAPI/Swagger."
  },
  {
    name: "BullMQ & Distributed Queues",
    category: "Backend & DDD",
    level: 95,
    color: "#10b981",
    position: [5.2, 1.8, 3],
    details: "Processamento assíncrono em lote, concorrência controlada, retentativas com backoff e Redis Streams."
  },
  {
    name: "PostgreSQL, Prisma & Drizzle",
    category: "Backend & DDD",
    level: 97,
    color: "#10b981",
    position: [3.8, 2.2, 4],
    details: "Modelagem relacional complexa, migrações seguras, RLS, queries geo-espaciais PostGIS e transações ACID."
  },
  {
    name: "Binary Protocols & Reverse Eng.",
    category: "Backend & DDD",
    level: 92,
    color: "#10b981",
    position: [1.8, 3.2, 3],
    details: "Manipulação de arquivos binários zipados, geração de esquemas XML nativos (.PJC) e pipelines de dados."
  },

  // Frontend & 3D
  {
    name: "React 19 & Next.js 15/16",
    category: "Frontend & 3D",
    level: 98,
    color: "#3b82f6",
    position: [-4.5, -2.5, 2],
    details: "App Router, Server Actions, Turbopack, Streaming SSR, React Server Components e otimização Core Web Vitals."
  },
  {
    name: "Three.js & React Three Fiber",
    category: "Frontend & 3D",
    level: 92,
    color: "#3b82f6",
    position: [-2.5, -4.0, 1],
    details: "Ambientes 3D imersivos, shaders customizados, materiais PBR, iluminação volumétrica e animações interativas."
  },
  {
    name: "TypeScript Strict & Zod",
    category: "Frontend & 3D",
    level: 99,
    color: "#3b82f6",
    position: [-5.2, -1.2, 3],
    details: "Tipagem estrita de ponta a ponta, validação em runtime com schemas Zod e inferência avançada de tipos."
  },
  {
    name: "Tailwind CSS & Glassmorphism",
    category: "Frontend & 3D",
    level: 96,
    color: "#3b82f6",
    position: [-3.8, -2.8, 4],
    details: "Design systems modernos, microinterações fluidas, layouts ultra-responsivos e temas escuros holográficos."
  },

  // DevOps & Cloud
  {
    name: "Turborepo & Monorepos",
    category: "DevOps & Cloud",
    level: 96,
    color: "#a855f7",
    position: [4.5, -2.5, 2],
    details: "Arquitetura monorepo escalável com caching inteligente de build, pnpm workspaces e orquestração de pacotes."
  },
  {
    name: "Docker, Podman & Coolify",
    category: "DevOps & Cloud",
    level: 94,
    color: "#a855f7",
    position: [2.5, -4.0, 1],
    details: "Conteinerização de microserviços, orquestração com Docker Compose, Quadlet e deploys automatizados em VPS."
  },
  {
    name: "Supabase & Cloudflare CDN",
    category: "DevOps & Cloud",
    level: 95,
    color: "#a855f7",
    position: [5.2, -1.2, 3],
    details: "Row Level Security, Storage, Edge Functions, proteção DDoS, CDN caching e roteamento global."
  },
  {
    name: "Playwright Stealth & Automation",
    category: "DevOps & Cloud",
    level: 93,
    color: "#a855f7",
    position: [3.8, -2.8, 4],
    details: "Automação avançada de navegadores em modo headless com emulação de cursor humano e integração com solvers."
  }
]
