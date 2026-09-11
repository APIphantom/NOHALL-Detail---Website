import t1 from "@/assets/team-1-graded.jpg";
import t2 from "@/assets/team-2-graded.jpg";
import t3 from "@/assets/team-3-graded.jpg";

export type Member = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const team: Member[] = [
  { id: "1", name: "Rafael Menezes", role: "Especialista em Polimento", image: t1 },
  { id: "2", name: "Diego Salles", role: "Especialista em Detailing", image: t2 },
  { id: "3", name: "Marina Duarte", role: "Especialista em Higienização", image: t3 },
];
