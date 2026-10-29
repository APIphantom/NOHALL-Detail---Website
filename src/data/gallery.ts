import g1 from "@/assets/gallery-1-graded.jpg";
import g2 from "@/assets/gallery-2-graded.jpg";
import g3 from "@/assets/gallery-3-graded.jpg";
import g4 from "@/assets/gallery-4-graded.jpg";
import polimento from "@/assets/service-polimento-graded.jpg";
import interna from "@/assets/service-interna-graded.jpg";
import detailing from "@/assets/service-detailing-graded.jpg";
import after from "@/assets/after-graded.jpg";

export type GalleryCategory = "exterior" | "interior" | "polimento" | "detailing";

export type GalleryItem = {
  id: string;
  src: string;
  category: GalleryCategory;
  title: string;
  description: string;
  width: number;
  height: number;
};

export const galleryFilters: { id: "todos" | GalleryCategory; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "exterior", label: "Exterior" },
  { id: "interior", label: "Interior" },
  { id: "polimento", label: "Polimento" },
  { id: "detailing", label: "Detailing" },
];

export const gallery: GalleryItem[] = [
  {
    id: "1",
    src: g1,
    category: "exterior",
    title: "Rodas e pinças",
    description: "Limpeza técnica de rodas com descontaminação ferrosa.",
    width: 896,
    height: 1200,
  },
  {
    id: "2",
    src: g2,
    category: "detailing",
    title: "Óptica e faróis",
    description: "Polimento de faróis e recuperação de transparência.",
    width: 1152,
    height: 928,
  },
  {
    id: "3",
    src: g3,
    category: "interior",
    title: "Cabine detalhada",
    description: "Detalhamento de painel, console e revestimentos.",
    width: 928,
    height: 1152,
  },
  {
    id: "4",
    src: g4,
    category: "exterior",
    title: "Perfil espelhado",
    description: "Correção de pintura com refino em dois estágios.",
    width: 1376,
    height: 768,
  },
  {
    id: "5",
    src: polimento,
    category: "polimento",
    title: "Polimento técnico",
    description: "Remoção de hologramas e micro riscos.",
    width: 928,
    height: 1152,
  },
  {
    id: "6",
    src: interna,
    category: "interior",
    title: "Tratamento de couro",
    description: "Higienização e hidratação de bancos em couro.",
    width: 928,
    height: 1152,
  },
  {
    id: "7",
    src: after,
    category: "polimento",
    title: "Brilho profundo",
    description: "Capô após correção completa da pintura.",
    width: 1264,
    height: 848,
  },
  {
    id: "8",
    src: detailing,
    category: "detailing",
    title: "Studio session",
    description: "Inspeção final sob iluminação técnica.",
    width: 928,
    height: 1152,
  },
];
