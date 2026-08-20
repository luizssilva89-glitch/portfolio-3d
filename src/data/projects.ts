import { Project } from '../types'

export const projects: Project[] = [
  {
    id: "peritocalc",
    title: "PeritoCalc",
    tagline: "Automação para Perícias Judiciais",
    shortDescription: "SaaS para peritos trabalhistas com pipeline de extração documental em cascata de custo, sistema de aprendizado de padrões e geração nativa de arquivos .PJC para o PJe-Calc.",
    fullDescription: "Plataforma SaaS voltada para peritos judiciais e assistentes técnicos na Justiça do Trabalho. O motor de extração roteia cada campo por oito camadas ordenadas por custo, do texto nativo do PDF até a visão computacional como último recurso, registrando cada decisão em um ledger auditável por camada. Um sistema de aprendizado de padrões identifica quando um formato de cartão de ponto já foi corrigido repetidas vezes pelo mesmo perito e passa a resolver aquele campo sem novas chamadas de IA. O gerador do arquivo .PJC roda em Python 3 puro, sem dependências externas, produzindo o XML compactado pronto para importação direta no PJe-Calc Cidadão.",
    category: "Automação Jurídica",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: 0,
    color: "#a855f7", // Neon Purple
    iconName: "Scale",
    image: "/projects/peritocalc.webp",
    geometryType: 0,
    tags: ["Next.js 15 App Router", "Claude 3.5 Sonnet Vision", "Engenharia Reversa .PJC", "Supabase RLS", "Stripe Webhooks", "Python 3 Standalone"],
    metrics: [
      { label: "Redução de Tempo", value: "92%" },
      { label: "Precisão OCR", value: "99.4%" },
      { label: "Extração", value: "8 Camadas em Cascata" },
      { label: "Exportação", value: "100% Nativo .PJC" }
    ],
    architecture: {
      frontend: "Next.js 15 (App Router) + Tailwind CSS + Radix UI + PDF.js Worker",
      backend: "Next.js Route Handlers + Supabase SSR + Gerador .PJC em Python",
      ai: "Claude 3.5 Sonnet (visão) para cartões de ponto manuscritos e Claude Haiku (texto) para holerites digitados, com cache de prompt e custo rastreado por chamada",
      database: "PostgreSQL no Supabase com Row Level Security por perito",
      infra: "Vercel + Supabase South America (São Paulo)"
    },
    keyFeatures: [
      "Pipeline de extração em oito camadas ordenadas por custo, do PDF nativo à visão computacional como último recurso, com cada decisão registrada em um ledger auditável",
      "Sistema de aprendizado de padrões que memoriza correções recorrentes por perito e formato de cartão de ponto, reduzindo chamadas repetidas à IA",
      "Roteamento por tipo de documento: cartões de ponto manuscritos processados com raciocínio visual, holerites digitados processados como texto puro",
      "Engenharia reversa do protocolo XML/ZIP de exportação do PJe-Calc, com geração binária do .PJC em Python standalone"
    ]
  },
  {
    id: "atlas-educacao",
    title: "Atlas Educação",
    tagline: "Inteligência Pedagógica Multi-Escolas",
    shortDescription: "Portal SaaS de gestão pedagógica com risco de evasão configurável por escola, storage 100% privado e um encadeamento de provedores de IA desenhado para nunca travar a operação.",
    fullDescription: "Plataforma de inteligência pedagógica multi-escolas utilizada por instituições de ensino de idiomas, robótica, programação e cursos profissionalizantes. O motor de risco de evasão calcula limiares de frequência, faltas consecutivas e queda de notas com pesos parametrizáveis por escola, direto no painel administrativo. Toda a geração de relatórios narrativos por IA é estritamente opcional: sem uma chave de API configurada, a interface esconde os botões de IA e o preenchimento manual de pareceres continua funcionando normalmente. Quando a IA está ativa, um encadeamento de sete provedores absorve limites de taxa que são por organização, não por chamada, evitando que a importação de uma turma inteira esgote a cota de um único provedor.",
    category: "Gestão Educacional",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 0.2,
    color: "#ec4899", // Neon Pink
    iconName: "GraduationCap",
    image: "/projects/atlas-educacao.webp",
    geometryType: 1,
    tags: ["Next.js 14", "Encadeamento Multi-Provedor de IA", "Supabase Auth & RLS", "@react-pdf/renderer", "Storage Privado", "Recharts"],
    metrics: [
      { label: "Risco de Evasão", value: "Limiares por Escola" },
      { label: "Storage", value: "100% Privado" },
      { label: "Geração de PDF", value: "7 Tipos de Relatório" },
      { label: "IA", value: "Sempre Opcional" }
    ],
    architecture: {
      frontend: "Next.js App Router + Tailwind CSS + shadcn/ui + Recharts",
      backend: "Next.js Route Handlers + Supabase Storage & Database",
      ai: "Encadeamento de fallback (OpenRouter, OpenAI, Groq, Mistral, SambaNova, Gemini, Cerebras) para pareceres pedagógicos, desativável sem quebrar o produto",
      infra: "Vercel + Supabase"
    },
    keyFeatures: [
      "Algoritmo de risco de evasão com limiares de frequência, faltas consecutivas e queda de notas configuráveis por escola, sem precisar de deploy",
      "Todos os buckets de armazenamento são privados por padrão, com acesso mediado por proxy autenticado ou URL assinada de curta duração",
      "Encadeamento de sete provedores de IA para contornar limites de taxa organizacionais durante importações em lote",
      "Ranking semanal de alunos com pesos por dimensão acadêmica configuráveis por escola"
    ],
    links: {
      demo: "https://atlas-educacao.vercel.app"
    }
  },
  {
    id: "canal-dark",
    title: "Canal Dark",
    tagline: "Suite Desktop de Automação de Vídeo",
    shortDescription: "Aplicativo desktop Electron que conduz a produção completa de vídeos curtos, com fallback automático para provedores gratuitos em cada etapa e publicação sempre manual por design.",
    fullDescription: "Aplicativo desktop construído com Electron, React e TypeScript que orquestra o pipeline completo de produção de vídeos curtos: roteiro, checagem de compliance, imagem por cena, narração e montagem final. Cada etapa tem um provedor gratuito funcionando sem nenhuma chave configurada (Pollinations.ai para imagens, Edge TTS para narração) e cai automaticamente de volta para ele se um provedor pago falhar. As credenciais de API ficam criptografadas com o cofre do próprio sistema operacional, e a publicação em cada rede social é sempre uma ação manual e explícita, o aplicativo nunca publica sozinho.",
    category: "Automação de Conteúdo",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 0.4,
    color: "#ef4444", // Crimson Red
    iconName: "Clapperboard",
    image: "/projects/canal-dark.webp",
    geometryType: 2,
    tags: ["Electron", "React", "TypeScript", "Fallback Gratuito por Etapa", "FFmpeg", "YouTube, TikTok & Instagram APIs"],
    metrics: [
      { label: "Pipeline de Vídeo", value: "Ponta a Ponta" },
      { label: "Provedores Gratuitos", value: "Imagem + Voz sem Chave" },
      { label: "Credenciais", value: "Criptografadas no Cofre do SO" },
      { label: "Publicação", value: "Sempre Manual, Nunca Automática" }
    ],
    architecture: {
      frontend: "React + Tailwind CSS + Electron IPC Bridge (contextBridge, sem Node no renderer)",
      backend: "Processo principal do Electron (Node.js) com serviços isolados por etapa do pipeline",
      infra: "FFmpeg nativo embutido no binário (ffmpeg-static), sem instalação separada"
    },
    keyFeatures: [
      "Cada etapa tem fallback automático para um provedor gratuito sem chave (Pollinations.ai para imagens, Edge TTS para narração), caindo de volta se a opção paga falhar",
      "Credenciais de API criptografadas com o cofre nativo do sistema operacional (DPAPI no Windows, Keychain no macOS, libsecret no Linux)",
      "Checagem de compliance heurística antes da montagem, documentada como apoio à revisão humana, não substituto dela",
      "Publicação em cada rede social é sempre uma ação manual e explícita por plataforma; o app nunca publica sozinho"
    ]
  },
  {
    id: "tonico-veiculos",
    title: "Tonico Veículos",
    tagline: "Plataforma para Concessionária",
    shortDescription: "Site de alta conversão para revenda de picapes e seminovos, com preços em centavos, busca tolerante a acento e funil de conversão medido de verdade.",
    fullDescription: "Plataforma digital personalizada para a concessionária Tonico Veículos (Barretos/SP), especializada em picapes e veículos seminovos. Todo valor monetário é armazenado como inteiro em centavos, nunca em ponto flutuante, eliminando uma classe inteira de bugs de arredondamento no catálogo. Como o Postgres gerenciado pela infraestrutura não disponibiliza a extensão de busca sem acento, a normalização de texto acontece na camada de aplicação a cada gravação. Cada foto guarda largura, altura e um placeholder de baixa resolução, porque o acervo migrado do site antigo mistura proporções 16:9, 4:3 e verticais de celular, e a plataforma precisa saber a proporção real antes de renderizar o card.",
    category: "Marketplace Automotivo",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 0.6,
    color: "#f97316", // Orange
    iconName: "CarFront",
    image: "/projects/tonico-veiculos.webp",
    geometryType: 3,
    tags: ["Next.js 16", "Prisma ORM", "Tailwind CSS 4", "PostgreSQL", "Autenticação JWT (jose)", "Migração de Conteúdo Legado"],
    metrics: [
      { label: "Preços", value: "Inteiros em Centavos" },
      { label: "Busca", value: "Tolerante a Acento" },
      { label: "Conversão", value: "Funil Medido por Evento" },
      { label: "Login", value: "Bloqueio Anti-Força-Bruta" }
    ],
    architecture: {
      frontend: "Next.js 16 (App Router) com layout responsivo otimizado para celulares",
      backend: "Next.js Route Handlers + Prisma ORM + sessões JWT com bcrypt",
      database: "PostgreSQL com estoque, fotos com metadados de proporção e eventos de analytics",
      infra: "Docker (binário Alpine/Debian) com deploy em VPS própria"
    },
    keyFeatures: [
      "Preço do veículo armazenado como inteiro em centavos, eliminando arredondamento incorreto no catálogo e nos filtros de faixa de valor",
      "Busca tolerante a acento resolvida na camada de aplicação, contornando a ausência da extensão nativa no banco gerenciado",
      "Registro de eventos de página e clique em WhatsApp por veículo, permitindo medir o funil de conversão real, não estimado",
      "Bloqueio de conta após tentativas de login malsucedidas e papéis distintos para proprietário e gestor"
    ]
  },
  {
    id: "erp",
    title: "ERP",
    tagline: "Gestão Completa para Lojistas",
    shortDescription: "ERP API-first moderno para lojistas de marketplaces, lojas físicas e vendas assistidas, com controle fiscal, logística e catálogo unificado multicanal.",
    fullDescription: "Sistema integrado de gestão empresarial moderno e modular, construído especificamente para o mercado varejista brasileiro. Integra em uma única arquitetura sincronizada: controle fiscal (NF-e, NFC-e), logística e despacho de pedidos, controle financeiro com conciliação bancária, catálogo unificado para múltiplos canais de venda (Mercado Livre, Shopee, loja própria) e RBAC de nove papéis com auditoria completa por ação. A camada fiscal é desenhada como uma abstração de provedor plugável, permitindo trocar o emissor de NF-e sem reescrever regras de domínio.",
    category: "Gestão Empresarial",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 0.8,
    color: "#f59e0b", // Neon Amber
    iconName: "Building2",
    image: "/projects/erp.webp",
    geometryType: 10,
    tags: ["NestJS + Fastify", "Next.js", "Zustand", "Prisma", "Turborepo", "RBAC de 9 Papéis", "Auditoria por Ação"],
    metrics: [
      { label: "Arquitetura", value: "API-First Modular" },
      { label: "Performance", value: "Fastify Core" },
      { label: "Papéis (RBAC)", value: "9 Perfis Distintos" },
      { label: "Segurança", value: "Frontend Não-Confiável" }
    ],
    architecture: {
      frontend: "Next.js (App Router) + Zustand + React Query + Tailwind",
      backend: "NestJS rodando sobre Fastify para máximo throughput de requisições por segundo",
      database: "PostgreSQL com schemas particionados e índices compostos via Prisma",
      infra: "Turborepo (apps api/web/worker) com Docker Compose e monitoramento Prometheus"
    },
    keyFeatures: [
      "Separação de pacotes por contexto delimitado (fiscal, logística, financeiro, IA), cada um isolado como módulo próprio no monorepo",
      "Postura de segurança explícita: frontend tratado como não-confiável, com toda regra sensível validada no servidor",
      "Camada fiscal como abstração de provedor plugável (emissão, cancelamento e consulta de NF-e), com implementação de referência substituível",
      "Log de auditoria com ID de correlação, IP e user agent registrados em cada ação sensível do sistema"
    ]
  },
  {
    id: "meu-assistente",
    title: "Meu Assessor",
    tagline: "Assistente Financeiro via WhatsApp",
    shortDescription: "Assistente de gestão financeira por WhatsApp e painel web, com núcleo DDD puro, agendadores idempotentes por design e IA que nunca escreve no banco sem validação.",
    fullDescription: "Plataforma de inteligência financeira operada por WhatsApp e painel web, construída em oito fases sucessivas, cada uma fechada com lint, typecheck, testes e documentação antes de avançar. O núcleo financeiro trata dinheiro sempre como Decimal (nunca float), distribui centavos com exatidão em parcelamentos e nunca duplica uma recorrência graças a agendadores idempotentes. A extração por IA segue um schema estrito com defesa contra prompt injection: entrada de alta confiança vira lançamento automático, o resto pede confirmação antes de gravar, e nenhuma chamada de IA escreve direto no banco.",
    category: "Automação Financeira",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 1.0,
    color: "#10b981", // Neon Emerald
    iconName: "WalletCards",
    image: "/projects/meu-assistente.webp",
    geometryType: 5,
    tags: ["NestJS", "Domain-Driven Design (DDD)", "TypeScript Puro", "BullMQ", "Prisma", "Argon2id + MFA (TOTP)"],
    metrics: [
      { label: "Progresso", value: "8 Fases Concluídas" },
      { label: "Precisão Financeira", value: "Decimal, Nunca Float" },
      { label: "Recorrências", value: "Idempotentes por Design" },
      { label: "Auditoria (LGPD)", value: "Exportação & Exclusão" }
    ],
    architecture: {
      frontend: "Next.js + Tailwind CSS, painel de contas, cartões, orçamentos e notificações",
      backend: "NestJS (API) + Worker dedicado para filas, IA, transcrição e agendadores (BullMQ)",
      domain: "Núcleo de domínio em TypeScript puro isolado, sem acoplamento a ORM, Evolution API ou provedor de IA",
      database: "PostgreSQL com Decimal financeiro (numeric 19,4) + Redis/BullMQ + MinIO",
      infra: "Monólito modular em três processos (web/api/worker), deploy planejado via Coolify em VPS própria"
    },
    keyFeatures: [
      "Agendadores de recorrência e resumo diário idempotentes por chave própria, com catch-up de atrasos e sem duplicar envios no mesmo dia",
      "Extração por IA com schema Zod estrito e defesa contra prompt injection: alta confiança vira lançamento automático, o resto pede confirmação",
      "Transcrição de áudio nunca toca disco e é descartada da memória logo após alimentar o mesmo pipeline de comando do texto",
      "Isolamento multi-tenant testado em todas as fases, com RLS do PostgreSQL escrita como defesa em profundidade, MFA administrativo via TOTP e exportação/exclusão de dados para conformidade com a LGPD"
    ]
  },
  {
    id: "atendimento-ia",
    title: "Atendimento IA",
    tagline: "Atendimento Omnichannel",
    shortDescription: "Plataforma de atendimento conversacional treinada no catálogo da empresa, com transbordo inteligente para humanos e histórico completo no CRM.",
    fullDescription: "Ecossistema de atendimento automatizado ao cliente para WhatsApp e Web. Permite a criação de atendentes virtuais que compreendem dúvidas sobre produtos, consultam disponibilidade e orçamentos em tempo real, transferem para atendentes humanos quando necessário e registram todas as interações no CRM, com guardrails para reduzir respostas fora da base de conhecimento da empresa.",
    category: "Atendimento ao Cliente",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 1.2,
    color: "#8b5cf6", // Violet
    iconName: "MessagesSquare",
    image: "/projects/atendimento-ia.webp",
    geometryType: 6,
    tags: ["WhatsApp Business API", "Busca Semântica", "Next.js", "Node.js", "Redis Cache", "CRM Integrado"],
    metrics: [
      { label: "Tempo de Resposta", value: "< 2 segundos" },
      { label: "Resolução Automatizada", value: "85% dos Casos" },
      { label: "Disponibilidade", value: "24/7 sem Pausas" },
      { label: "Canais", value: "WhatsApp + Webchat" }
    ],
    architecture: {
      frontend: "Painel administrativo em Next.js + Tailwind + visualização de conversas ao vivo",
      backend: "Node.js / Express com webhooks para WhatsApp Business API",
      ai: "Busca semântica na base de conhecimento da empresa com guardrails contra respostas fora de escopo",
      database: "PostgreSQL com histórico de leads, tickets e transcrições",
      infra: "Docker Container em VPS"
    },
    keyFeatures: [
      "Atendimento humanizado 24 horas por dia com suporte a mensagens de áudio e texto",
      "Transbordo para operadores humanos com contexto completo do diálogo preservado",
      "Qualificação automática de leads com captura de nome, telefone, interesse e orçamento",
      "Dashboard de métricas com tempo médio de atendimento, taxa de conversão e sentimento do cliente"
    ]
  },
  {
    id: "ponto-eletronico",
    title: "Ponto Eletrônico",
    tagline: "Controle de Ponto com Biometria Facial",
    shortDescription: "Sistema corporativo de ponto eletrônico multi-unidades, com reconhecimento facial em microserviço próprio, escalas configuráveis e fluxo de aprovação de abonos.",
    fullDescription: "Solução de registro e controle de jornada para empresas com múltiplas unidades. O reconhecimento facial roda em um microserviço Python isolado (FastAPI, dlib e face_recognition), comparando o rosto capturado contra o cadastro com um limiar de similaridade configurável por variável de ambiente. O painel web cobre gestão de colaboradores horistas e mensalistas, escalas (comercial, 12x36 e outras), controle de intervalos e tolerâncias, aprovação de abonos e justificativas, e relatórios de frequência.",
    category: "Visão Computacional",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 1.4,
    color: "#3b82f6", // Blue
    iconName: "ScanFace",
    image: "/projects/ponto-eletronico.webp",
    geometryType: 7,
    tags: ["Reconhecimento Facial (dlib)", "FastAPI", "Next.js 14", "Prisma", "Docker Compose", "PostgreSQL 15"],
    metrics: [
      { label: "Biometria", value: "Microserviço Isolado" },
      { label: "Limiar de Similaridade", value: "Configurável (padrão 0.6)" },
      { label: "Escalas", value: "Comercial, 12x36 e Outras" },
      { label: "Multi-unidade", value: "Gestão Centralizada" }
    ],
    architecture: {
      frontend: "Next.js 14 (App Router) + Tailwind CSS + captura de câmera responsiva",
      backend: "Microserviço de biometria facial em Python (FastAPI, dlib, face_recognition) + API Routes Next.js com Prisma",
      database: "PostgreSQL 15 com registros de colaboradores, escalas e batidas de ponto",
      infra: "Docker Compose orquestrando frontend, API de biometria e banco"
    },
    keyFeatures: [
      "Reconhecimento facial em microserviço próprio, com endpoints dedicados de detecção, comparação e cadastro",
      "Limiar de correspondência facial configurável por variável de ambiente, ajustável por unidade sem alterar código",
      "Suporte a múltiplos tipos de escala (comercial, 12x36) e controle de intervalos e tolerâncias por colaborador",
      "Fluxo de aprovação de abonos e justificativas integrado aos relatórios de frequência do RH"
    ]
  },
  {
    id: "sondei",
    title: "Sondei",
    tagline: "Ecossistema Automotivo Multi-Lojas",
    shortDescription: "Marketplace automotivo com consultor de recomendação que nunca alucina um veículo, catálogo FIPE completo importado e 443 testes de integração contra banco real.",
    fullDescription: "Ecossistema automotivo com arquitetura distribuída para expansão nacional, começando por Barretos/SP. O portal público busca veículos por raio de distância com o catálogo completo da tabela FIPE importado (238 marcas, 2.325 modelos, 11.354 versões) e a geografia do IBGE (27 estados, 5.571 municípios). O diferencial está no Consultor Sondei: a camada de linguagem nunca recebe conexão com o banco de dados, apenas extrai filtros estruturados da pergunta do usuário, e a resposta é construída em cima de resultados que já vieram de uma consulta SQL controlada pela aplicação, o que torna estruturalmente impossível o consultor recomendar um carro que não existe no estoque.",
    category: "Marketplace Automotivo",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 1.6,
    color: "#0284c7", // Sky Blue
    iconName: "Gauge",
    image: "/projects/sondei.webp",
    geometryType: 8,
    tags: ["Monorepo Turborepo", "Next.js", "Drizzle ORM", "Extração de Intenção em Duas Camadas", "BullMQ + Redis", "443 Testes contra Postgres Real"],
    metrics: [
      { label: "Testes Automatizados", value: "443 (Postgres Real)" },
      { label: "Catálogo FIPE", value: "11.354 Versões" },
      { label: "Geografia IBGE", value: "5.571 Municípios" },
      { label: "Consultor", value: "Zero Alucinação por Design" }
    ],
    architecture: {
      frontend: "Next.js + Tailwind CSS + branding e cores dinâmicos vindos do banco (Design as Data)",
      backend: "Next.js App Router + Drizzle ORM, 18 migrações organizadas por domínio",
      ai: "Extração de intenção em duas camadas: regras determinísticas resolvem primeiro (orçamento, câmbio, combustível), IA entra só no que sobra e nunca vence a regra em caso de conflito",
      database: "PostgreSQL com queries geo-espaciais indexadas e RLS validada por testes de isolamento por usuário",
      infra: "Docker Compose + Coolify + Cloudflare CDN + S3/MinIO"
    },
    keyFeatures: [
      "Consultor de recomendação onde a camada de linguagem nunca toca o banco: só extrai filtros e escreve a frase em torno de resultados que a aplicação já buscou",
      "Extração de intenção em duas camadas, com a regra determinística sempre vencendo o modelo em conflito de orçamento, porque devolver um carro fora do alcance do cliente é o erro mais caro",
      "Roda em produção sem nenhuma chave de API configurada; ligar um provedor de IA é uma variável de ambiente, sem tocar em código",
      "Anúncios processados para AVIF/WebP com EXIF removido, e visibilidade de publicidade regional restrita à praça contratada"
    ],
    links: {
      demo: "https://sondei.org"
    }
  },
  {
    id: "liquida-sorte",
    title: "Liquida Sorte",
    tagline: "Liquidação de Estoque por Sorteio Auditável",
    shortDescription: "Plataforma para liquidação de estoque de lojas em encerramento, com ledger de saldo append-only, sorteio que nunca ocorre abaixo do mínimo, e checkout travado por feature flag até aprovação jurídica.",
    fullDescription: "Plataforma que organiza a liquidação de estoque de uma loja em encerramento em lotes, com participação por cartelas e sorteio auditável realizado apenas quando um mínimo operacional interno é atingido. O saldo do cliente é sempre derivado de um ledger append-only, nunca editado diretamente, e todo webhook de pagamento é idempotente. Por ser um produto sensível do ponto de vista legal, checkout público e execução real de sorteio ficam atrás de feature flags desligadas por padrão em todos os ambientes, só habilitadas após aprovação jurídica, fiscal e do provedor de pagamento.",
    category: "Liquidação de Estoque",
    orbitRadius: 17,
    orbitSpeed: 0.15,
    orbitAngle: Math.PI * 1.8,
    color: "#818cf8", // Indigo
    iconName: "Ticket",
    image: "/projects/liquida-sorte.webp",
    geometryType: 9,
    tags: ["Turborepo Monorepo", "Next.js App Router", "Prisma", "BullMQ + Redis", "Ledger Append-Only", "Feature Flags Jurídicas"],
    metrics: [
      { label: "Saldo do Cliente", value: "Ledger Append-Only" },
      { label: "Sorteio", value: "Nunca Abaixo do Mínimo" },
      { label: "Checkout & Sorteio", value: "Atrás de Feature Flag" },
      { label: "Deploy", value: "Aprovação Manual + Checklist" }
    ],
    architecture: {
      frontend: "Next.js App Router: portal público (web) e backoffice isolado (admin), apps separados no monorepo",
      backend: "Node + BullMQ + Redis para processos assíncronos (pagamento, sorteio, notificação)",
      database: "PostgreSQL via Prisma, com pacote de domínio próprio para regras de lote, ledger, cartela e sorteio",
      infra: "Turborepo + pnpm workspaces, CI com lint/typecheck/teste/build em todo PR, sem deploy automático"
    },
    keyFeatures: [
      "Saldo do cliente sempre derivado de um ledger append-only, nunca editado diretamente, eliminando divergência silenciosa de valores",
      "Sorteio estruturalmente incapaz de rodar abaixo do mínimo operacional do lote, com toda ação administrativa crítica gerando trilha de auditoria",
      "Checkout público e execução real de sorteio desligados por feature flag em todos os ambientes até checklist jurídico, fiscal e de pagamento aprovado",
      "Logger estruturado compartilhado entre apps que nunca expõe senha, token, secret ou CPF em texto claro"
    ]
  }
]
