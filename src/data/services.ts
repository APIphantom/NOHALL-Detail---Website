import polimento from "@/assets/service-polimento-graded.jpg";
import externa from "@/assets/service-externa-graded.jpg";
import interna from "@/assets/service-interna-graded.jpg";
import detailing from "@/assets/service-detailing-graded.jpg";

export type Service = {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  category: string;
};

export const services: Service[] = [
  {
    id: "polimento",
    number: "01",
    title: "Polimento",
    description:
      "Correção de imperfeições, redução de riscos superficiais e recuperação do brilho da pintura.",
    image: polimento,
    features: ["Polimento técnico", "Correção de pintura", "Refino de brilho"],
    category: "Pintura",
  },
  {
    id: "revitalizacao-externa",
    number: "02",
    title: "Revitalização Externa",
    description:
      "Recuperação visual dos elementos externos, trazendo de volta aparência, brilho e acabamento.",
    image: externa,
    features: ["Descontaminação", "Tratamento de plásticos", "Proteção de pintura"],
    category: "Exterior",
  },
  {
    id: "revitalizacao-interna",
    number: "03",
    title: "Revitalização Interna",
    description:
      "Higienização e tratamento de bancos, painéis, carpetes, plásticos e demais superfícies.",
    image: interna,
    features: ["Higienização", "Tratamento de couro", "Detalhamento interno"],
    category: "Interior",
  },
  {
    id: "detailing-completo",
    number: "04",
    title: "Detailing Completo",
    description:
      "Um tratamento completo para quem deseja elevar o veículo a outro nível.",
    image: detailing,
    features: ["Interior + exterior", "Polimento premium", "Proteção final"],
    category: "Completo",
  },
];
