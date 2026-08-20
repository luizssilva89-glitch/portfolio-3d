import { CareerMilestone } from '../types'

export const careerTimelineEn: CareerMilestone[] = [
  {
    period: "2020 - Present",
    role: "Senior Full-Stack & Systems Architect | Product Builder",
    company: "Proprietary Products & High-Performance SaaS",
    location: "Barretos, Brazil / Remote",
    description: "Designed and built ten complete systems, from wireframe to deploy, spanning legal automation, education management, automotive marketplaces, personal finance, computer vision and automated media production.",
    highlights: [
      "PeritoCalc: SaaS for labor court experts with an eight-layer, cost-ordered document extraction pipeline, a per-expert pattern-learning system, and a reverse-engineered .PJC binary format for Brazil's PJe-Calc.",
      "Sondei: multi-store automotive ecosystem in a Turborepo monorepo, with 443 integration tests against a real Postgres and a recommendation assistant structurally unable to suggest a vehicle that isn't in stock.",
      "Atlas Educação: multi-school pedagogical management portal with per-school churn-risk thresholds, fully private storage, and a seven-provider AI fallback chain to absorb organization-wide rate limits.",
      "Meu Assessor: WhatsApp and web financial assistant with a pure DDD core, money always as Decimal, schedulers idempotent by their own key, and AI that never writes to the database without application-side validation.",
      "Liquida Sorte: inventory liquidation platform built around an auditable draw, with balances derived from an append-only ledger and checkout locked behind a feature flag until legal, tax and payment-provider sign-off.",
      "ERP: API-first retail management system with packages split by bounded context, nine-role RBAC, per-action auditing, and a tax layer designed as a pluggable provider abstraction.",
      "Ponto Eletrônico: multi-location time tracking with facial recognition in an isolated Python microservice, a configurable similarity threshold, and support for standard and 12x36 work schedules.",
      "Canal Dark: Electron desktop app orchestrating the full short-video pipeline, with automatic fallback to free providers at every step and credentials encrypted in the operating system's vault.",
      "Tonico Veículos: dealership platform with prices stored as integer cents, accent-insensitive search resolved at the application layer, and a conversion funnel measured by real events.",
      "Atendimento IA: omnichannel customer-support ecosystem for WhatsApp and web, with semantic search over the company catalog and handoff to humans preserving full conversation context.",
      "Gnatus Verificação: document verification platform with guided real-time camera validation via OpenCV.js and computer-vision-assisted reading."
    ],
    skills: ["TypeScript", "Next.js 15/16", "React 19", "NestJS", "Fastify", "Domain-Driven Design", "Turborepo", "Prisma", "Drizzle ORM", "PostgreSQL", "BullMQ + Redis", "Supabase", "Electron", "Python / FastAPI", "Computer Vision", "Docker", "Stripe"]
  },
  {
    period: "Feb 2026 - Present",
    role: "Pedagogical Coordinator",
    company: "Ctrl+Play Barretos",
    location: "Barretos, Brazil",
    description: "Pedagogical coordination at a technology school focused on programming, robotics and digital creation, overseeing learning paths, class performance, teaching-staff development and family communication.",
    highlights: [
      "Tracking learning paths and each student's individual progression across modules.",
      "Supporting and training the teaching staff, aligning methodology and standardizing how classes are run.",
      "First-hand exposure to the real pedagogical management pain points (attendance tracking, churn risk and parent communication) that originated and still guide Atlas Educação."
    ],
    skills: ["Pedagogical Coordination", "Teaching Staff Management", "Class Performance Tracking", "Technology Education", "Family Communication"]
  },
  {
    period: "2020 - Present",
    role: "Owner & Commercial / Strategic Manager",
    company: "Emporium do Bebê",
    location: "Barretos, Brazil",
    description: "Full management of a specialty retail store: sales team leadership, consultative service, supplier management, cash flow and digital channel/marketplace strategy.",
    highlights: [
      "Developed refined sales techniques and identified real customer pain points to drive conversion.",
      "Ran operational inventory management, delivery logistics and financial reconciliation across physical and digital sales.",
      "Leadership, high-level negotiation and business-wide vision that now directly shape how value-driven SaaS products get built."
    ],
    skills: ["Business Management", "Team Leadership", "Negotiation", "Cash Management", "E-commerce & Marketplaces", "Product Strategy"]
  },
  {
    period: "2019 - 2020",
    role: "Owner & Retail Operator",
    company: "Men Up (Men's Apparel)",
    location: "Barretos, Brazil",
    description: "Venture in men's apparel and accessories, running digital marketing strategy, promotions and direct customer relationships.",
    highlights: [
      "Built sales campaigns and digital marketing materials from scratch.",
      "Ran online sales channels and personalized service with a high customer-retention rate."
    ],
    skills: ["Retail & Sales", "Digital Marketing", "Customer Service", "Inventory Management"]
  },
  {
    period: "2013 - 2019",
    role: "IT Support & Infrastructure Analyst",
    company: "Escola SESI",
    location: "Barretos, Brazil",
    description: "Managed IT infrastructure, local networks and servers, and supported operating systems for hundreds of corporate and academic users.",
    highlights: [
      "Administered structured networks, routers, switches and authentication servers.",
      "Diagnosed and resolved hardware, software and connectivity issues quickly, keeping uptime high.",
      "Trained staff on digital tools and rolled out preventive-maintenance routines."
    ],
    skills: ["Computer Networks", "Server Administration", "Systems Support", "IT Infrastructure", "Incident Resolution"]
  },
  {
    period: "2008 - 2011",
    role: "B.Sc. in Information Systems",
    company: "Faculdade Barretos (UniBarretos)",
    location: "Barretos, Brazil",
    description: "Full undergraduate degree with a solid foundation in software engineering, data structures, algorithms, relational databases, networking and IT management.",
    highlights: [
      "In-depth coursework in data modeling, computer architecture and object-oriented programming paradigms.",
      "Academic projects applied to real business-automation and distributed-systems problems."
    ],
    skills: ["Information Systems", "Software Engineering", "Database Modeling", "Algorithms & Data Structures"]
  }
]
