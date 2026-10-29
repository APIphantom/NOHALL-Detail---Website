import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-sm border border-primary bg-primary text-primary-foreground transition-colors duration-300 hover:bg-background hover:text-primary sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
