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
  },
  {
    id: "2",
    src: g2,
    category: "detailing",
    title: "Óptica e faróis",
    description: "Polimento de faróis e recuperação de transparência.",
  },
  {
    id: "3",
    src: g3,
    category: "interior",
    title: "Cabine detalhada",
    description: "Detalhamento de painel, console e revestimentos.",
  },
  {
    id: "4",
    src: g4,
    category: "exterior",
    title: "Perfil espelhado",
    description: "Correção de pintura com refino em dois estágios.",
  },
  {
    id: "5",
    src: polimento,
    category: "polimento",
    title: "Polimento técnico",
    description: "Remoção de hologramas e micro riscos.",
  },
  {
    id: "6",
    src: interna,
    category: "interior",
    title: "Tratamento de couro",
    description: "Higienização e hidratação de bancos em couro.",
  },
  {
    id: "7",
    src: after,
    category: "polimento",
    title: "Brilho profundo",
    description: "Capô após correção completa da pintura.",
  },
  {
    id: "8",
    src: detailing,
    category: "detailing",
    title: "Studio session",
    description: "Inspeção final sob iluminação técnica.",
  },
];
