# NOHALL Detail - Website

Website institucional da **Nohall Custom**, empresa de estética automotiva premium em Maringá, Paraná. O site apresenta os serviços, opções de tratamento, resultados visuais e canais de contato da empresa em uma experiência responsiva com identidade escura e editorial.

## Visão geral

O projeto reúne duas páginas:

- **`/` — Site institucional:** apresentação da marca, serviços, comparativo antes/depois, planos, processo de atendimento, equipe, galeria, depoimentos e formulário de contato.
- **`/marketing` — Marketing & Performance:** página complementar com abordagem de marketing, dashboards demonstrativos, gráficos, benchmarks, funil, campanhas, estudos de caso e calculadora de ROI.

A navegação principal e as chamadas para ação direcionam para as seções do site e para o contato via WhatsApp. O conteúdo de serviços, planos, equipe, galeria e informações da empresa fica organizado em módulos TypeScript para facilitar manutenção.

## Tecnologias

| Tecnologia | Uso neste projeto |
| --- | --- |
| **React 19** | Construção das páginas e componentes reutilizáveis da interface. |
| **TypeScript** | Tipagem de componentes, dados de conteúdo e configuração; o `tsconfig.json` ativa verificações estritas. |
| **TanStack Start** | Estrutura full-stack baseada em React, com shell de aplicação, renderização e integração com o servidor. |
| **TanStack Router** | Rotas por arquivo (`/` e `/marketing`), navegação e metadados específicos por página. |
| **Vite 8** | Servidor de desenvolvimento e pipeline de build, configurado diretamente com os plugins do framework. |
| **Tailwind CSS 4** | Estilização utilitária e composição responsiva da identidade visual. |
| **Radix UI** | Primitivos acessíveis usados pelos componentes de interface em `src/components/ui`. |
| **Motion** | Recursos de animação e movimento da experiência. |
| **TanStack Query** | Provider de consultas configurado no shell da aplicação para recursos que precisem de estado assíncrono. |
| **Lucide React** | Ícones da interface. |
| **ESLint e Prettier** | Lint e formatação do código. |
| **Nitro** | Camada de servidor/build para executar a aplicação SSR em ambientes compatíveis. |

A escolha dessa stack permite compor uma interface de marketing em componentes React, manter os dados tipados e separar as rotas e o conteúdo sem introduzir um backend de negócio que o código atual não utiliza.

## Funcionalidades

- Layout responsivo com cabeçalho, navegação por seções e rodapé.
- Seções de apresentação, serviços, planos, estatísticas e processo de atendimento.
- Comparação visual de antes e depois, galeria e perfis da equipe.
- Depoimentos, chamadas para agendamento e formulário de contato.
- Botão e links de contato via WhatsApp, com mensagem inicial configurada.
- Página complementar de marketing com gráficos, funil, campanhas e calculadora de ROI.
- Metadados de página, tags Open Graph, cartão do Twitter e dados estruturados de negócio local na página inicial.
- Tratamento de página não encontrada e erro no shell raiz.

## Organização do código

```text
src/
├── assets/                 # Fotografias do site e da equipe
├── components/
│   ├── layout/             # Header, footer e contato rápido por WhatsApp
│   ├── marketing/          # Seções da página /marketing
│   ├── sections/           # Seções da página institucional
│   └── ui/                 # Componentes de interface reutilizáveis
├── data/                   # Conteúdo tipado: empresa, serviços, planos, equipe etc.
├── hooks/                  # Hooks compartilhados
├── lib/                    # Utilitários e tratamento de erros
├── routes/                 # Rotas TanStack: shell, página inicial e marketing
├── router.tsx              # Criação do router
├── server.ts               # Integração do servidor
├── start.ts                # Inicialização do TanStack Start
└── styles.css              # Estilos globais e tema
```

`src/routeTree.gen.ts` é gerado automaticamente pela integração do TanStack Router; não deve ser editado manualmente.

## Requisitos

- Node.js compatível com Vite 8 e TanStack Start.
- npm.

## Desenvolvimento

```bash
npm install
npm run dev
```

O comando inicia o servidor local de desenvolvimento. A URL é exibida no terminal.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor Vite em modo de desenvolvimento. |
| `npm run build` | Gera o build de produção. |
| `npm run build:dev` | Gera um build usando o modo de desenvolvimento. |
| `npm run preview` | Serve localmente o build para conferência. |
| `npm run lint` | Executa o ESLint nos arquivos do projeto. |
| `npm run format` | Formata os arquivos com Prettier. |

## Manutenção do conteúdo

- **Dados da empresa e WhatsApp:** `src/data/site.ts`.
- **Serviços:** `src/data/services.ts`.
- **Planos e preços:** `src/data/plans.ts`.
- **Equipe:** `src/data/team.ts` e as imagens em `src/assets/team/`.
- **Etapas do atendimento e indicadores:** `src/data/process.ts`.
- **Galeria e depoimentos:** `src/data/gallery.ts` e `src/data/testimonials.ts`.
- **Página institucional:** `src/routes/index.tsx` e `src/components/sections/`.
- **Página de marketing:** `src/routes/marketing.tsx` e `src/components/marketing/`.
- **Tema global:** `src/styles.css`.

## Observações técnicas

O repositório contém a aplicação de interface e seus dados de apresentação. Não há integração de backend, banco de dados ou autenticação configurada no código analisado. Os valores apresentados nos planos, métricas, dashboards e estudos de caso estão definidos localmente; confirme e atualize esses dados antes de usá-los como informação comercial publicada.

As informações de contato e localização são lidas da configuração da empresa em `src/data/site.ts`. Mantenha os metadados e dados estruturados das rotas alinhados com essa fonte ao alterar a marca ou o endereço.

## Versionamento e evolução

O projeto ainda não define uma versão de produto nem mantém um changelog. Para futuras entregas, registre cada versão publicada com uma tag Git no formato `vMAJOR.MINOR.PATCH` e descreva as mudanças em `CHANGELOG.md`:

- **PATCH** para correções e ajustes pequenos, sem mudança de funcionalidade.
- **MINOR** para novas seções, serviços ou melhorias compatíveis com o site existente.
- **MAJOR** para mudanças amplas de identidade, navegação ou arquitetura.

Possíveis evoluções, conforme as necessidades do negócio:

- Configurar domínio definitivo e então publicar sitemap e URLs canônicas absolutas.
- Definir imagem de compartilhamento social e metadados Open Graph completos.
- Conectar o formulário de contato a um serviço real de envio e armazenamento de solicitações.
- Criar uma área administrativa para atualizar serviços, planos, galeria e depoimentos sem editar o código.
- Otimizar imagens e acompanhar acessibilidade, desempenho e métricas de navegação.

## Créditos

O código da aplicação, os componentes e os arquivos de conteúdo estão neste repositório. Consulte o histórico Git para acompanhar a evolução do projeto e suas ferramentas.
