export type Testimonial = {
  id: string;
  name: string;
  car: string;
  rating: number;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lucas Andrade",
    car: "BMW M4 Competition",
    rating: 5,
    quote:
      "O carro saiu completamente diferente. O acabamento ficou impecável e o nível de atenção aos detalhes é outro patamar.",
    initials: "LA",
  },
  {
    id: "2",
    name: "Camila Ferraz",
    car: "Porsche Macan",
    rating: 5,
    quote:
      "Entregaram exatamente o que prometeram. A pintura voltou a refletir como no primeiro dia.",
    initials: "CF",
  },
  {
    id: "3",
    name: "Ricardo Nunes",
    car: "Audi RS5",
    rating: 5,
    quote:
      "Atendimento técnico, transparente e sem enrolação. O interior ficou impressionante.",
    initials: "RN",
  },
  {
    id: "4",
    name: "Fernanda Lima",
    car: "Range Rover Velar",
    rating: 5,
    quote:
      "Cada etapa foi explicada. Nunca vi um cuidado assim com um veículo. Virei cliente fixa.",
    initials: "FL",
  },
];
