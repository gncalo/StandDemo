<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# StandDemo

Site de demonstração de um **stand de automóveis**, para apresentar a um cliente. É uma demo — qualidade visual de nível profissional, mas âmbito deliberadamente pequeno.

## Âmbito da demo

- **2 marcas**, **2 modelos por marca**, com fotos de cada modelo.
- **Filtros** no catálogo: marca, modelo, e outros que façam sentido (combustível, preço, ano...).
- Páginas: homepage, catálogo/listagem com filtros, página de detalhe de cada carro.
- **Sem backend** — dados mock em ficheiros TypeScript. Nada de bases de dados nem autenticação.
- Conteúdo do site em **PT-PT**.
- Moderno, com **animações** e forte atenção a **UX/UI**. "Digno de um cliente ver e gostar."

## Design — inspirações e cores

> **POR PREENCHER** — o dono do projeto vai fornecer 2 sites de inspiração (URLs) e a paleta de cores. Até lá, não fixar identidade visual definitiva; quando forem fornecidos, registar aqui os URLs, a paleta (tokens) e as decisões de estilo derivadas.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS v4
- npm

## Skills

As skills estão versionadas no repo em `.agents/skills/` (com symlinks em `.claude/skills/`, geridas via `npx skills` / `skills-lock.json`). Usar por defeito no trabalho de UI:

- **impeccable** — skill orquestradora principal para criar/rever/polir interfaces (sub-comandos: craft, audit, polish, animate, critique...).
- **emil-design-eng** + **animation-vocabulary** / **improve-animations** / **review-animations** — design engineering e qualidade de animações.
- **design-taste-frontend** / **high-end-visual-design** — critérios de bom gosto visual, evitar aspeto genérico de IA.
- **find-skills** — para descobrir e instalar novas skills quando necessário.

Existe também o plugin **frontend-design** (Anthropic) instalado a nível de utilizador.
