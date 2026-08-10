export type Plan = {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
};

// Preços centralizados — altere apenas aqui.
export const plans: Plan[] = [
  {
    id: "essential",
    name: "Essential",
    description: "Ideal para manutenção periódica do veículo.",
    price: "R$ 390",
    duration: "a partir de · 4h",
    featured: false,
    features: [
      "Lavagem técnica",
      "Limpeza externa",
      "Limpeza interna básica",
      "Revitalização de plásticos",
      "Acabamento final",
    ],
    cta: "Escolher plano",
  },
  {
    id: "premium",
    name: "Premium",
    description: "O equilíbrio entre correção, proteção e acabamento.",
    price: "R$ 890",
    duration: "a partir de · 1 dia",
    featured: true,
    badge: "Mais escolhido",
    features: [
      "Lavagem técnica",
      "Descontaminação",
      "Polimento",
      "Revitalização interna",
      "Tratamento de plásticos",
      "Tratamento de pneus",
      "Proteção da pintura",
    ],
    cta: "Escolher plano",
  },
  {
    id: "ultimate",
    name: "Ultimate",
    description: "Tratamento completo, sem nenhum detalhe fora do lugar.",
    price: "R$ 1.690",
    duration: "a partir de · 2 dias",
    featured: false,
    features: [
      "Lavagem técnica",
      "Descontaminação",
      "Polimento técnico",
      "Revitalização interna completa",
      "Higienização",
      "Tratamento de couro",
      "Tratamento de plásticos",
      "Proteção de pintura",
      "Acabamento premium",
    ],
    cta: "Agendar tratamento",
  },
];
