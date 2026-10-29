export const site = {
  name: "NOHALL",
  fullName: "Nohall Custom",
  tagline: "Estética Automotiva Premium",
  claim: "DETAILS MAKE THE DIFFERENCE.",
  est: "EST. 2026",
  phone: "+55 44 97695773",
  whatsappNumber: "554497695773",
  whatsappMessage:
    "Olá! Gostaria de solicitar um orçamento para estética automotiva.",
  email: "contato@nohall.custom.com.br",
  instagram: "https://www.instagram.com/nohall.custom/",
  instagramHandle: "@nohall.custom",
  address: "Rua Jurandir Diniz de Souza, n11, Jardim Montreal, Maringá - PR",
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
  { label: "Início", hash: "inicio" },
  { label: "Serviços", hash: "servicos" },
  { label: "Planos", hash: "planos" },
  { label: "Resultados", hash: "resultados" },
  { label: "Sobre", hash: "sobre" },
  { label: "Contato", hash: "contato" },
];
