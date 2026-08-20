# 🌌 Portfólio 3D Imersivo — Luiz Sérgio da Silva

> **Senior Full-Stack & AI Systems Architect | Product Builder**  
> Um universo tridimensional interativo e imersivo construído com **React 19**, **Three.js**, **React Three Fiber (@react-three/fiber)**, **@react-three/drei**, **Tailwind CSS** e **Web Audio API**.

---

## ✨ Funcionalidades Principais

1. **Universo 3D Navegável (The Cybernetic Nexus)**:
   - **Núcleo Quântico Central**: Cristal holográfico com anéis giroscópicos pulsantes e emissão de partículas.
   - **Estações Orbitais Interativas**: Planetas e nós 3D representando os 9 projetos reais do portfólio (**PeritoCalc**, **Atlas Educação**, **Canal Dark**, **Tonico Veículos**, **ERP**, **Meu Assistente**, **Atendimento IA**, **Ponto Eletrônico**, **Sondei**).
   - **Câmera Cinemática Inteligente (Lerp Navigation)**: Ao clicar em qualquer planeta ou na barra de estações, a câmera viaja suavemente no espaço 3D até o projeto focado.
   - **Post-Processing Cinematográfico**: Bloom + Vignette (`@react-three/postprocessing`) intensificando o brilho holográfico dos materiais emissivos.

2. **Holographic Project Drawer**:
   - Painel lateral holográfico com visão de engenharia, métricas em tempo real, diagramas de blueprint arquitetural, trechos reais de código e botões de ação (GitHub, Live Demo, WhatsApp).

3. **Matriz 3D de Competências (Floating Skill Cloud)**:
   - Nuvem tridimensional de orbes de tecnologia categorizadas (*AI & Protocols*, *Backend & DDD*, *Frontend & 3D*, *DevOps & Cloud*).

4. **Terminal Hacker Interativo (NEXUS CLI)**:
   - Terminal retro-cyber com suporte a comandos reais: `help`, `about`, `projects`, `skills`, `timeline`, `omniroute`, `peritocalc`, `sondei`, `whatsapp`, `cv`, `clear`.

5. **Sintetizador Procedural de Áudio (Web Audio API)**:
   - Zero dependência de arquivos externos: sintetizador de ondas senoidais/sawtooth para cliques, hovers, efeito warp de viagem espacial e sintetizador de drone cósmico ambiente com alternador on/off.

6. **Modo Duplo (3D Space ↔ Lista Executiva de Alta Velocidade)**:
   - Alterne instantaneamente entre o universo 3D e um dashboard corporativo para recrutadores ou executivos.

---

## 🚀 Como Executar Localmente

```bash
# 1. Entrar na pasta do projeto
cd C:\Users\serja\.gemini\antigravity\scratch\portfolio-3d

# 2. Iniciar o servidor de desenvolvimento
npm run dev

# 3. Abrir no navegador:
# http://localhost:3000
```

---

## 📦 Build para Produção & Deploy

```bash
# Gerar bundle otimizado
npm run build

# Pré-visualizar build localmente
npm run preview
```

### Deploy em 1 Clique:
- **Vercel**: `npx vercel`
- **Cloudflare Pages**: Conectar ao repositório ou subir a pasta `dist/`
- **Coolify / VPS**: `docker build -t portfolio-3d .` ou estático Nginx.

---

## 🔧 Auditoria de Performance & Polish (2026-08-19)

Análise completa do código e assets seguida de correções aplicadas:

- **Assets de 97 MB → 2,3 MB**: removidas ~50 MB de imagens duplicadas mortas (`.jfif`/`.jpg` não referenciadas no código) e as 10 imagens realmente usadas foram recomprimidas de PNG para WebP (redução média de ~94%, sem perda visual perceptível na resolução em que são exibidas).
- **Build final: 98 MB → 3,6 MB** (`npm run build`), com `tsc --noEmit` e `vite build` limpos.
- **Link do GitHub corrigido** em `src/data/profile.ts` (apontava para uma conta de terceiro).
- **Terminal CLI corrigido**: o comando `erp` estava quebrado (nenhum `case` do switch cobria o id real `erp`) e o menu `help` anunciava projetos fictícios (`gnatus`, `hotel`, `codinho`, `nexo`) que não existem em `projects.ts`. A busca por projeto agora é dinâmica a partir dos dados reais, então nunca mais fica desatualizada.
- **Favicon próprio** (`public/favicon.svg`, badge "LS" no gradiente cyan→roxo da marca) no lugar do ícone padrão do Vite.
- **Open Graph / Twitter Card**: `public/og-image.jpg` gerado no tema da marca + meta tags em `index.html`, para o link mostrar uma prévia real ao ser compartilhado no LinkedIn/WhatsApp.
- **Post-processing Bloom + Vignette** adicionado à cena 3D (`@react-three/postprocessing`) para intensificar o brilho holográfico.
- **Preloader cinematográfico** ("INICIALIZANDO NEXUS · X%") no lugar da tela preta durante o carregamento inicial.
- **`.gitignore` adicionado** (não existia — `node_modules` e `dist` seriam versionados).
