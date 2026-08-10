export const site = {
  name: "VÉRTICE",
  fullName: "Vértice Detailing Studio",
  tagline: "Estética Automotiva Premium",
  claim: "DETAILS MAKE THE DIFFERENCE.",
  est: "EST. 2026",
  phone: "+55 11 90000-0000",
  whatsappNumber: "5511900000000",
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento para estética automotiva.",
  email: "contato@verticedetailing.com.br",
  instagram: "https://instagram.com",
  instagramHandle: "@verticedetailing",
  address: "Av. Marginal, 1200 — Galpão 04, São Paulo — SP",
  hours: [
    { day: "Segunda a Sexta", time: "08h — 19h" },
    { day: "Sábado", time: "08h — 14h" },
    { day: "Domingo", time: "Somente agendamentos" },
  ],
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Planos", href: "#planos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];
