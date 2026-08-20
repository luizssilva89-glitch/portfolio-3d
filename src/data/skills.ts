import { SkillNode } from '../types'

export const skillNodes: SkillNode[] = [
  // IA & Extração de Dados
  {
    name: "Extração Estruturada com LLMs",
    category: "IA & Extração de Dados",
    level: 97,
    color: "#06b6d4",
    position: [-4.5, 3.5, 2],
    details: "Schema Zod estrito, defesa contra prompt injection e validação da aplicação antes de qualquer escrita no banco."
  },
  {
    name: "Pipelines de Custo em Cascata",
    category: "IA & Extração de Dados",
    level: 95,
    color: "#06b6d4",
    position: [-2.5, 4.8, 1],
    details: "Cada campo roteado por camadas ordenadas por custo, do texto nativo do PDF à visão computacional como último recurso, com ledger auditável por camada."
  },
  {
    name: "Fallback Multi-Provedor de IA",
    category: "IA & Extração de Dados",
    level: 94,
    color: "#06b6d4",
    position: [-5.2, 1.8, 3],
    details: "Encadeamento de sete provedores para absorver limites de taxa por organização, com o produto funcionando por completo sem nenhuma chave configurada."
  },
  {
    name: "Guardrails & Zero Alucinação",
    category: "IA & Extração de Dados",
    level: 96,
    color: "#06b6d4",
    position: [-3.8, 2.2, 4],
    details: "Camada de linguagem sem acesso ao banco: só extrai filtros, e a resposta é montada sobre resultados de consulta controlada pela aplicação."
  },
  {
    name: "LLMs Multimodais & Visão",
    category: "IA & Extração de Dados",
    level: 96,
    color: "#06b6d4",
    position: [-1.8, 3.2, 3],
    details: "Extração visual de holerites, cartões de ponto manuscritos e documentos com Claude Sonnet Vision e Gemini."
  },
  {
    name: "Aprendizado de Padrões & Cache",
    category: "IA & Extração de Dados",
    level: 92,
    color: "#06b6d4",
    position: [-3.0, 4.2, 5],
    details: "Memorização de correções recorrentes por usuário e formato de documento, cortando chamadas repetidas, somada a prompt caching da API."
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
    name: "BullMQ & Filas Distribuídas",
    category: "Backend & DDD",
    level: 95,
    color: "#10b981",
    position: [5.2, 1.8, 3],
    details: "Processamento assíncrono em lote, concorrência controlada, retentativas com backoff e agendadores idempotentes por chave própria."
  },
  {
    name: "PostgreSQL, Prisma & Drizzle",
    category: "Backend & DDD",
    level: 97,
    color: "#10b981",
    position: [3.8, 2.2, 4],
    details: "Modelagem relacional complexa, migrações versionadas por domínio, RLS, queries geo-espaciais indexadas e transações ACID."
  },
  {
    name: "Protocolos Binários & Eng. Reversa",
    category: "Backend & DDD",
    level: 92,
    color: "#10b981",
    position: [1.8, 3.2, 3],
    details: "Manipulação de arquivos binários zipados, geração de esquemas XML nativos (.PJC) e pipelines de dados."
  },
  {
    name: "Python, FastAPI & Microserviços",
    category: "Backend & DDD",
    level: 90,
    color: "#10b981",
    position: [3.0, 4.2, 5],
    details: "Serviço isolado de biometria facial com dlib e face_recognition, e gerador .PJC em Python 3 puro sem nenhuma dependência externa."
  },
  {
    name: "Precisão Financeira & Ledger",
    category: "Backend & DDD",
    level: 96,
    color: "#10b981",
    position: [5.0, 3.0, 5],
    details: "Dinheiro como inteiro em centavos ou numeric(19,4) e nunca float, saldo derivado de ledger append-only e distribuição exata de centavos em parcelamentos."
  },

  // Frontend, Desktop & 3D
  {
    name: "React 19 & Next.js 15/16",
    category: "Frontend, Desktop & 3D",
    level: 98,
    color: "#3b82f6",
    position: [-4.5, -2.5, 2],
    details: "App Router, Server Actions, Turbopack, Streaming SSR, React Server Components e otimização de Core Web Vitals."
  },
  {
    name: "Three.js & React Three Fiber",
    category: "Frontend, Desktop & 3D",
    level: 92,
    color: "#3b82f6",
    position: [-2.5, -4.0, 1],
    details: "Ambientes 3D imersivos, materiais PBR, iluminação volumétrica, post-processing com bloom e animações interativas."
  },
  {
    name: "TypeScript Strict & Zod",
    category: "Frontend, Desktop & 3D",
    level: 99,
    color: "#3b82f6",
    position: [-5.2, -1.2, 3],
    details: "Tipagem estrita de ponta a ponta, validação em runtime com schemas Zod e inferência avançada de tipos."
  },
  {
    name: "Tailwind CSS & Glassmorphism",
    category: "Frontend, Desktop & 3D",
    level: 96,
    color: "#3b82f6",
    position: [-3.8, -2.8, 4],
    details: "Design systems modernos, microinterações fluidas, layouts ultra-responsivos e temas escuros holográficos."
  },
  {
    name: "Electron & Apps Desktop",
    category: "Frontend, Desktop & 3D",
    level: 93,
    color: "#3b82f6",
    position: [-1.8, -3.0, 3],
    details: "Ponte IPC segura via contextBridge sem Node no renderer, empacotamento com electron-builder e credenciais no cofre nativo do sistema operacional."
  },
  {
    name: "FFmpeg & Pipelines de Mídia",
    category: "Frontend, Desktop & 3D",
    level: 90,
    color: "#3b82f6",
    position: [-3.0, -4.5, 5],
    details: "Montagem cinematográfica de vídeo com efeito Ken Burns, mixagem de trilha, binário embutido no app e conversão em lote para WebP/AVIF."
  },

  // DevOps, Segurança & Cloud
  {
    name: "Turborepo & Monorepos",
    category: "DevOps, Segurança & Cloud",
    level: 96,
    color: "#a855f7",
    position: [4.5, -2.5, 2],
    details: "Arquitetura monorepo escalável com caching inteligente de build, pnpm workspaces e orquestração de pacotes por contexto delimitado."
  },
  {
    name: "Docker, Podman & Coolify",
    category: "DevOps, Segurança & Cloud",
    level: 94,
    color: "#a855f7",
    position: [2.5, -4.0, 1],
    details: "Conteinerização de microserviços, orquestração com Docker Compose, Quadlet e deploys automatizados em VPS."
  },
  {
    name: "Supabase & Cloudflare CDN",
    category: "DevOps, Segurança & Cloud",
    level: 95,
    color: "#a855f7",
    position: [5.2, -1.2, 3],
    details: "Row Level Security, Storage privado, Edge Functions, proteção DDoS, CDN caching e roteamento global."
  },
  {
    name: "Segurança & Autenticação",
    category: "DevOps, Segurança & Cloud",
    level: 96,
    color: "#a855f7",
    position: [1.8, -3.0, 3],
    details: "Argon2id, MFA por TOTP, refresh tokens rotativos revogáveis, sessões JWT com jose, RLS multi-tenant e bloqueio de conta anti-força-bruta."
  },
  {
    name: "Testes de Integração & CI",
    category: "DevOps, Segurança & Cloud",
    level: 95,
    color: "#a855f7",
    position: [3.0, -4.5, 5],
    details: "Suítes Vitest rodando contra Postgres real, testes explícitos de isolamento entre tenants e pipeline de lint, typecheck, teste e build em todo pull request."
  },
  {
    name: "Conformidade & LGPD",
    category: "DevOps, Segurança & Cloud",
    level: 90,
    color: "#a855f7",
    position: [5.0, -3.5, 5],
    details: "Exportação e exclusão de dados pessoais, logger que nunca expõe senha, token, secret ou CPF, trilha de auditoria e feature flags travando recursos sensíveis."
  },
  {
    name: "Playwright & Automação E2E",
    category: "DevOps, Segurança & Cloud",
    level: 93,
    color: "#a855f7",
    position: [3.8, -2.8, 4],
    details: "Automação de navegador headless para testes end-to-end de fluxos críticos e verificação de regressões antes do deploy."
  }
]
