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

### Inspirações

- **https://www.pintoesousa.com/viaturas/usadas** — stand de luxo (Aston Martin, Bentley, BMW M). Referência principal para o **registo visual premium** e para a **listagem/pesquisa**.
- **https://www.niceportocar.pt** — referência para a **estrutura da homepage** (hero com pesquisa, destaques, grelha de marcas, secções de serviços/contactos).

Ambos correm na mesma plataforma white-label (multidealer/easysite.pt), pelo que partilham funcionalidades. O StandDemo replica essas funcionalidades com identidade visual própria — não copiar o layout Bootstrap deles; elevar o nível (moderno, animado, premium).

O que os define funcionalmente:

- **Pesquisa rápida no hero** ("Que Viatura Procura?"): Marca, Modelo, Combustível + botão com **contagem de resultados em tempo real** ("Ver N resultados").
- **Pesquisa detalhada**: Marca, Modelo; sliders de intervalo para Preço, Ano, Quilómetros, Potência; dropdowns Transmissão, Combustível, Segmento, Lotação; "Limpar Parâmetros".
- **Cards de viatura**: carrossel de fotos com setas, badges "Vendido"/"Reservado"/"IVA Dedutível", info: Mês/Ano · Combustível · Km · Marca Modelo Versão · Preço.
- **Homepage**: hero + pesquisa, "Viaturas em Destaque", "Últimas entradas", grelha de Marcas (logos que filtram a listagem), stock com "Ordenar por", secção sobre o stand, "Onde estamos?" (morada, telefones, horários), CTA flutuante "Fale agora".

### Paleta — preto e dourado

Tema **escuro por defeito**. Tokens de referência (afinar em OKLCH na implementação; usar a guidance da skill impeccable):

| Papel | Cor |
|---|---|
| Fundo base | `#0A0A0A` |
| Surface (cards, painéis) | `#141414` |
| Surface elevada (quente) | `#1C1A16` |
| Bordas/divisores | `#2A2620` |
| Dourado primário (CTAs, realces) | `#D4AF37` |
| Dourado hover/realce | `#E5C158` |
| Dourado profundo (bordas ativas, detalhes) | `#9C7C1E` |
| Champanhe (tints, texto dourado suave) | `#F0E6C8` |
| Texto principal (branco quente) | `#F5F2EA` |
| Texto secundário | `#A39E8F` |

Regras: o dourado é cor de **ação e realce** (CTAs, badges, hover, detalhes finos) — nunca em grandes áreas; as **fotos dos carros são o elemento dominante**; gradientes e brilhos dourados com moderação, para dar tom premium sem cair no kitsch.

## Páginas e funcionalidades (âmbito demo)

- **Homepage `/`**: hero escuro com pesquisa rápida (Marca/Modelo/Combustível + "Ver N resultados" com contagem live), Viaturas em Destaque, grelha de Marcas, secção sobre/contactos e rodapé.
- **Listagem `/viaturas`**: pesquisa detalhada (Marca, Modelo, intervalos de Preço/Ano/Km, Combustível, Transmissão, Segmento) com contagem live e "Limpar Parâmetros"; cards com carrossel de fotos e badges; "Ordenar por" (preço, ano, km).
- **Detalhe `/carros/[marca]/[modelo]/[id]`** — página dedicada, trabalhada a fundo:
  - Galeria de fotos imersiva com contador ("N Fotos") e lightbox.
  - Título (marca + modelo + versão) e preço em destaque dourado.
  - **Ficha técnica completa**: Registo (Mês/Ano), Quilómetros, Lugares, Segmento, Combustível, Potência (Cv), Cilindrada (Cc), Transmissão, Cor, Cor Interior, Portas, Origem, Estado, Garantia, Livro de Revisões, 2ª Chave, Classe de Portagem, Matrícula e VIN (fictícios).
  - Lista de extras/equipamento por categoria.
  - Cartão-resumo sticky (preço + CTA de contacto); botões "Partilhar" e "Imprimir"; "Também vai gostar destes" com outras viaturas.

### Modelo de dados mock (`src/data/`)

Tipo `Viatura` com os campos que suportam a ficha técnica acima, mais: `fotos[]`, `extras[]` (por categoria), `destaque` (bool), `estadoVenda` (`disponivel` | `reservado` | `vendido`) e `ivaDedutivel` (bool). Todas as viaturas devem ter ficha completa e consistente.

**Fora de âmbito** (omitir ou deixar como nav decorativa): motos, notícias, galeria, intermediação de crédito, multi-stand, comparador e geração real de PDF.

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
