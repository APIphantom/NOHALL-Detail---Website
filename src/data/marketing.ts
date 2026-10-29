/**
 * Dados ILUSTRATIVOS da divisão de marketing.
 * Substitua os valores abaixo por dados reais de campanha quando disponíveis.
 * A estrutura foi pensada para troca direta, sem alterar componentes.
 */

export const DATA_DISCLAIMER = "Dados ilustrativos — sample performance";

export const methodology = [
  { number: "01", title: "Strategy", description: "Diagnóstico de mercado, oferta e canais antes de qualquer investimento." },
  { number: "02", title: "Positioning", description: "Definição de território de marca, narrativa e diferencial competitivo." },
  { number: "03", title: "Acquisition", description: "Mídia paga, conteúdo e distribuição para gerar demanda qualificada." },
  { number: "04", title: "Conversion", description: "Funis, páginas e jornada desenhados para transformar atenção em venda." },
  { number: "05", title: "Optimization", description: "Leitura contínua de dados, testes e realocação de verba." },
  { number: "06", title: "Scale", description: "Ampliação do que comprova retorno, com previsibilidade de resultado." },
];

export const kpis = [
  { label: "Revenue growth", value: 312, suffix: "%", prefix: "+" },
  { label: "Sales generated", value: 1840, suffix: "", prefix: "" },
  { label: "Leads generated", value: 12400, suffix: "", prefix: "" },
  { label: "New followers", value: 86, suffix: "k", prefix: "+" },
  { label: "Engagement rate", value: 7, suffix: "%", prefix: "" },
  { label: "Conversion rate", value: 4, suffix: "%", prefix: "" },
  { label: "Cost per lead", value: 9, suffix: "", prefix: "R$ " },
  { label: "Return on ad spend", value: 6, suffix: "x", prefix: "" },
  { label: "Acquisition cost", value: 128, suffix: "", prefix: "R$ " },
  { label: "Reach", value: 4, suffix: "M", prefix: "" },
  { label: "Website traffic", value: 320, suffix: "k", prefix: "" },
];

export type SeriesPoint = { label: string; value: number; phase: string };

export const salesSeries: SeriesPoint[] = [
  { label: "Jan", value: 120, phase: "Previous performance" },
  { label: "Fev", value: 128, phase: "Previous performance" },
  { label: "Mar", value: 134, phase: "Campaign implementation" },
  { label: "Abr", value: 168, phase: "Campaign implementation" },
  { label: "Mai", value: 214, phase: "Growth acceleration" },
  { label: "Jun", value: 268, phase: "Growth acceleration" },
  { label: "Jul", value: 305, phase: "Optimization phase" },
  { label: "Ago", value: 358, phase: "Optimization phase" },
  { label: "Set", value: 442, phase: "Scaling phase" },
  { label: "Out", value: 528, phase: "Scaling phase" },
];

export const audienceSeries: Record<string, SeriesPoint[]> = {
  Followers: [
    { label: "M1", value: 8, phase: "Before strategy" },
    { label: "M2", value: 9, phase: "Before strategy" },
    { label: "M3", value: 14, phase: "After strategy" },
    { label: "M4", value: 26, phase: "After strategy" },
    { label: "M5", value: 41, phase: "After strategy" },
    { label: "M6", value: 62, phase: "After strategy" },
  ],
  Reach: [
    { label: "M1", value: 120, phase: "Before strategy" },
    { label: "M2", value: 138, phase: "Before strategy" },
    { label: "M3", value: 260, phase: "After strategy" },
    { label: "M4", value: 480, phase: "After strategy" },
    { label: "M5", value: 720, phase: "After strategy" },
    { label: "M6", value: 1080, phase: "After strategy" },
  ],
  Engagement: [
    { label: "M1", value: 2, phase: "Before strategy" },
    { label: "M2", value: 2, phase: "Before strategy" },
    { label: "M3", value: 4, phase: "After strategy" },
    { label: "M4", value: 5, phase: "After strategy" },
    { label: "M5", value: 6, phase: "After strategy" },
    { label: "M6", value: 8, phase: "After strategy" },
  ],
  "Profile visits": [
    { label: "M1", value: 4, phase: "Before strategy" },
    { label: "M2", value: 5, phase: "Before strategy" },
    { label: "M3", value: 11, phase: "After strategy" },
    { label: "M4", value: 19, phase: "After strategy" },
    { label: "M5", value: 28, phase: "After strategy" },
    { label: "M6", value: 39, phase: "After strategy" },
  ],
};

export const audienceCounters = [
  { label: "Followers", value: 62, suffix: "k" },
  { label: "Reach / mês", value: 1080, suffix: "k" },
  { label: "Engagement", value: 8, suffix: "%" },
];

export const benchmarks = [
  { metric: "Conversion rate", current: 4.2, benchmark: 2.6, target: 5, unit: "%", higherIsBetter: true },
  { metric: "Cost per lead", current: 9.4, benchmark: 16, target: 8, unit: "R$", higherIsBetter: false },
  { metric: "Customer acquisition cost", current: 128, benchmark: 190, target: 110, unit: "R$", higherIsBetter: false },
  { metric: "Engagement rate", current: 7.4, benchmark: 3.1, target: 8, unit: "%", higherIsBetter: true },
  { metric: "Return on ad spend", current: 6.2, benchmark: 3.4, target: 7, unit: "x", higherIsBetter: true },
  { metric: "Revenue per campaign", current: 184, benchmark: 120, target: 220, unit: "k", higherIsBetter: true },
];

export const funnel = [
  { number: "01", stage: "Impressions", value: 2400000, note: "Distribuição total paga e orgânica" },
  { number: "02", stage: "Reach", value: 980000, note: "Pessoas únicas alcançadas" },
  { number: "03", stage: "Engagement", value: 172000, note: "Interações qualificadas" },
  { number: "04", stage: "Leads", value: 12400, note: "Contatos capturados" },
  { number: "05", stage: "Qualified leads", value: 4300, note: "Leads com fit real" },
  { number: "06", stage: "Sales", value: 1840, note: "Negócios fechados" },
  { number: "07", stage: "Revenue", value: 940, note: "Receita atribuída (R$ mil)" },
];

export type Campaign = {
  id: string;
  name: string;
  objective: string;
  investment: string;
  reach: string;
  leads: string;
  sales: string;
  revenue: string;
  roas: string;
  conversion: string;
};

export const campaigns: Campaign[] = [
  {
    id: "black",
    name: "Black Performance",
    objective: "Vendas diretas",
    investment: "R$ 42.000",
    reach: "1,2M",
    leads: "3.900",
    sales: "620",
    revenue: "R$ 318.000",
    roas: "7,6x",
    conversion: "5,1%",
  },
  {
    id: "lancamento",
    name: "Lançamento Signature",
    objective: "Awareness + leads",
    investment: "R$ 28.000",
    reach: "860k",
    leads: "2.740",
    sales: "310",
    revenue: "R$ 164.000",
    roas: "5,9x",
    conversion: "3,8%",
  },
  {
    id: "always-on",
    name: "Always-On Social",
    objective: "Crescimento de audiência",
    investment: "R$ 18.000",
    reach: "2,1M",
    leads: "1.480",
    sales: "180",
    revenue: "R$ 92.000",
    roas: "5,1x",
    conversion: "2,9%",
  },
  {
    id: "retention",
    name: "Retention Loop",
    objective: "Recompra e LTV",
    investment: "R$ 12.000",
    reach: "420k",
    leads: "1.060",
    sales: "290",
    revenue: "R$ 148.000",
    roas: "12,3x",
    conversion: "8,4%",
  },
];

export const marketingServices = [
  { number: "01", title: "Performance Marketing", description: "Mídia paga estruturada por objetivo de negócio, não por vaidade." },
  { number: "02", title: "Social Media Management", description: "Operação de conteúdo com ritmo editorial e consistência de marca." },
  { number: "03", title: "Content Strategy", description: "Narrativa, formatos e calendário construídos a partir de dados." },
  { number: "04", title: "Brand Positioning", description: "Território, tom e percepção que sustentam preço premium." },
  { number: "05", title: "Lead Generation", description: "Captação qualificada com critérios claros de fit e intenção." },
  { number: "06", title: "Sales Funnels", description: "Jornadas completas do primeiro clique ao fechamento." },
  { number: "07", title: "Data & Analytics", description: "Medição ponta a ponta, atribuição e leitura de resultado." },
  { number: "08", title: "Conversion Optimization", description: "Testes contínuos em páginas, ofertas e criativos." },
];

export type CaseStudy = {
  id: string;
  name: string;
  segment: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: { label: string; value: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "case-1",
    name: "Studio Automotivo Premium",
    segment: "Serviço high-ticket",
    challenge:
      "Alto volume de seguidores sem geração de agendamentos. Dependência total de indicação.",
    strategy:
      "Reposicionamento de marca, oferta clara por pacote e funil de captação com qualificação prévia.",
    execution:
      "Produção de conteúdo cinematográfico semanal, mídia paga segmentada por raio geográfico e automação de resposta em até 5 minutos.",
    results: [
      { label: "Sales", value: "+214%" },
      { label: "Followers", value: "+186%" },
      { label: "Leads", value: "+340%" },
      { label: "Conversion", value: "+68%" },
      { label: "ROAS", value: "7,6x" },
    ],
  },
  {
    id: "case-2",
    name: "Rede de Varejo Especializado",
    segment: "Multi-unidade",
    challenge:
      "Custo por lead crescente e campanhas sem leitura de retorno por unidade.",
    strategy:
      "Estrutura de conta por praça, benchmark interno entre unidades e realocação semanal de verba.",
    execution:
      "Criativos regionais, landing pages dedicadas e dashboard unificado de performance.",
    results: [
      { label: "Sales", value: "+128%" },
      { label: "Followers", value: "+74%" },
      { label: "Leads", value: "+192%" },
      { label: "Conversion", value: "+41%" },
      { label: "ROAS", value: "5,4x" },
    ],
  },
  {
    id: "case-3",
    name: "Marca de Produto Autoral",
    segment: "E-commerce",
    challenge: "Tráfego alto, receita baixa e carrinho abandonado acima da média.",
    strategy: "Revisão completa de funil, prova social e política de oferta.",
    execution:
      "Testes A/B contínuos, remarketing segmentado por estágio e e-mail flows de recuperação.",
    results: [
      { label: "Sales", value: "+96%" },
      { label: "Followers", value: "+52%" },
      { label: "Leads", value: "+143%" },
      { label: "Conversion", value: "+87%" },
      { label: "ROAS", value: "4,8x" },
    ],
  },
];
