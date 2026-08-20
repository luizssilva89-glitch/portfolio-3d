import { SkillNode } from '../types'

export const skillNodesEn: SkillNode[] = [
  // AI & Data Extraction
  {
    name: "Structured Extraction with LLMs",
    category: "AI & Data Extraction",
    level: 97,
    color: "#06b6d4",
    position: [-4.5, 3.5, 2],
    details: "Strict Zod schemas, prompt-injection defenses and application-side validation before anything is written to the database."
  },
  {
    name: "Cost-Cascading Pipelines",
    category: "AI & Data Extraction",
    level: 95,
    color: "#06b6d4",
    position: [-2.5, 4.8, 1],
    details: "Every field routed through cost-ordered layers, from native PDF text to computer vision as a last resort, with a per-layer auditable ledger."
  },
  {
    name: "Multi-Provider AI Fallback",
    category: "AI & Data Extraction",
    level: 94,
    color: "#06b6d4",
    position: [-5.2, 1.8, 3],
    details: "Seven-provider chain to absorb organization-wide rate limits, with the product fully functional when no API key is configured at all."
  },
  {
    name: "Guardrails & Zero Hallucination",
    category: "AI & Data Extraction",
    level: 96,
    color: "#06b6d4",
    position: [-3.8, 2.2, 4],
    details: "The language layer never gets database access: it only extracts filters, and the reply is built on results from an application-controlled query."
  },
  {
    name: "Multimodal LLMs & Vision",
    category: "AI & Data Extraction",
    level: 96,
    color: "#06b6d4",
    position: [-1.8, 3.2, 3],
    details: "Visual extraction from payslips, handwritten timecards and documents with Claude Sonnet Vision and Gemini."
  },
  {
    name: "Pattern Learning & Caching",
    category: "AI & Data Extraction",
    level: 92,
    color: "#06b6d4",
    position: [-3.0, 4.2, 5],
    details: "Memorizing recurring corrections per user and document format to cut repeated calls, combined with API-level prompt caching."
  },

  // Backend & DDD
  {
    name: "Domain-Driven Design (DDD)",
    category: "Backend & DDD",
    level: 98,
    color: "#10b981",
    position: [4.5, 3.5, 2],
    details: "Strict business-rule modeling in framework-free TypeScript, with Value Objects and Entities."
  },
  {
    name: "NestJS & Fastify",
    category: "Backend & DDD",
    level: 96,
    color: "#10b981",
    position: [2.5, 4.8, 1],
    details: "High-throughput microservices with Fastify, dependency injection, decorators and OpenAPI/Swagger."
  },
  {
    name: "BullMQ & Distributed Queues",
    category: "Backend & DDD",
    level: 95,
    color: "#10b981",
    position: [5.2, 1.8, 3],
    details: "Batch async processing, controlled concurrency, backoff retries and schedulers idempotent by their own key."
  },
  {
    name: "PostgreSQL, Prisma & Drizzle",
    category: "Backend & DDD",
    level: 97,
    color: "#10b981",
    position: [3.8, 2.2, 4],
    details: "Complex relational modeling, domain-versioned migrations, RLS, indexed geo-spatial queries and ACID transactions."
  },
  {
    name: "Binary Protocols & Reverse Eng.",
    category: "Backend & DDD",
    level: 92,
    color: "#10b981",
    position: [1.8, 3.2, 3],
    details: "Handling zipped binary files, native XML schema generation (.PJC) and data pipelines."
  },
  {
    name: "Python, FastAPI & Microservices",
    category: "Backend & DDD",
    level: 90,
    color: "#10b981",
    position: [3.0, 4.2, 5],
    details: "Isolated facial-biometrics service with dlib and face_recognition, plus a .PJC generator in pure Python 3 with zero external dependencies."
  },
  {
    name: "Financial Precision & Ledgers",
    category: "Backend & DDD",
    level: 96,
    color: "#10b981",
    position: [5.0, 3.0, 5],
    details: "Money as integer cents or numeric(19,4) and never a float, balances derived from an append-only ledger, and exact cent distribution across installments."
  },

  // Frontend, Desktop & 3D
  {
    name: "React 19 & Next.js 15/16",
    category: "Frontend, Desktop & 3D",
    level: 98,
    color: "#3b82f6",
    position: [-4.5, -2.5, 2],
    details: "App Router, Server Actions, Turbopack, Streaming SSR, React Server Components and Core Web Vitals tuning."
  },
  {
    name: "Three.js & React Three Fiber",
    category: "Frontend, Desktop & 3D",
    level: 92,
    color: "#3b82f6",
    position: [-2.5, -4.0, 1],
    details: "Immersive 3D environments, PBR materials, volumetric lighting, bloom post-processing and interactive animation."
  },
  {
    name: "TypeScript Strict & Zod",
    category: "Frontend, Desktop & 3D",
    level: 99,
    color: "#3b82f6",
    position: [-5.2, -1.2, 3],
    details: "End-to-end strict typing, runtime validation with Zod schemas and advanced type inference."
  },
  {
    name: "Tailwind CSS & Glassmorphism",
    category: "Frontend, Desktop & 3D",
    level: 96,
    color: "#3b82f6",
    position: [-3.8, -2.8, 4],
    details: "Modern design systems, fluid micro-interactions, fully responsive layouts and dark holographic themes."
  },
  {
    name: "Electron & Desktop Apps",
    category: "Frontend, Desktop & 3D",
    level: 93,
    color: "#3b82f6",
    position: [-1.8, -3.0, 3],
    details: "Secure contextBridge IPC with no Node in the renderer, electron-builder packaging, and credentials in the OS-native vault."
  },
  {
    name: "FFmpeg & Media Pipelines",
    category: "Frontend, Desktop & 3D",
    level: 90,
    color: "#3b82f6",
    position: [-3.0, -4.5, 5],
    details: "Cinematic video assembly with Ken Burns effects, soundtrack mixing, a bundled binary inside the app, and batch WebP/AVIF conversion."
  },

  // DevOps, Security & Cloud
  {
    name: "Turborepo & Monorepos",
    category: "DevOps, Security & Cloud",
    level: 96,
    color: "#a855f7",
    position: [4.5, -2.5, 2],
    details: "Scalable monorepo architecture with smart build caching, pnpm workspaces and package orchestration by bounded context."
  },
  {
    name: "Docker, Podman & Coolify",
    category: "DevOps, Security & Cloud",
    level: 94,
    color: "#a855f7",
    position: [2.5, -4.0, 1],
    details: "Microservice containerization, orchestration with Docker Compose, Quadlet and automated VPS deploys."
  },
  {
    name: "Supabase & Cloudflare CDN",
    category: "DevOps, Security & Cloud",
    level: 95,
    color: "#a855f7",
    position: [5.2, -1.2, 3],
    details: "Row Level Security, private Storage, Edge Functions, DDoS protection, CDN caching and global routing."
  },
  {
    name: "Security & Authentication",
    category: "DevOps, Security & Cloud",
    level: 96,
    color: "#a855f7",
    position: [1.8, -3.0, 3],
    details: "Argon2id, TOTP-based MFA, revocable rotating refresh tokens, JWT sessions with jose, multi-tenant RLS and brute-force account lockout."
  },
  {
    name: "Integration Testing & CI",
    category: "DevOps, Security & Cloud",
    level: 95,
    color: "#a855f7",
    position: [3.0, -4.5, 5],
    details: "Vitest suites running against a real Postgres, explicit cross-tenant isolation tests, and lint/typecheck/test/build on every pull request."
  },
  {
    name: "Compliance & Data Privacy",
    category: "DevOps, Security & Cloud",
    level: 90,
    color: "#a855f7",
    position: [5.0, -3.5, 5],
    details: "Personal-data export and deletion, a logger that never exposes a password, token, secret or national ID, audit trails, and feature flags gating sensitive features."
  },
  {
    name: "Playwright & E2E Automation",
    category: "DevOps, Security & Cloud",
    level: 93,
    color: "#a855f7",
    position: [3.8, -2.8, 4],
    details: "Headless browser automation for end-to-end testing of critical flows and regression checks before deploy."
  }
]
