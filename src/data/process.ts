export type Step = {
  number: string;
  title: string;
  description: string;
};

export const processSteps: Step[] = [
  { number: "01", title: "Avaliação", description: "Analisamos o estado real do veículo, painel por painel." },
  { number: "02", title: "Diagnóstico", description: "Identificamos quais tratamentos são necessários e por quê." },
  { number: "03", title: "Tratamento", description: "Aplicamos as técnicas adequadas para cada superfície." },
  { number: "04", title: "Finalização", description: "Realizamos inspeção sob luz técnica e acabamento fino." },
  { number: "05", title: "Entrega", description: "Seu veículo retorna com uma nova presença visual." },
];

export const stats = [
  { value: 500, suffix: "+", label: "Veículos tratados" },
  { value: 98, suffix: "%", label: "Clientes satisfeitos" },
  { value: 5, suffix: "+", label: "Anos de experiência" },
  { value: 100, suffix: "%", label: "Dedicação" },
];
