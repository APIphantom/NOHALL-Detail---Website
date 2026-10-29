import t1 from "@/assets/team/caue.png";
import t2 from "@/assets/team/adriano.JPG";


export type Member = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export const team: Member[] = [
  { id: "1", name: "Caue Soares", role: "CEO - Fundador", image: t1 },
  { id: "2", name: "Adriano Oliveira", role: "CMO - Responsável pelo marketing", image: t2 },
];
