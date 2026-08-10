import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/data/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-sm border border-primary/40 bg-primary text-primary-foreground shadow-[0_18px_40px_-16px_var(--primary)] transition-transform duration-300 hover:-translate-y-1 sm:bottom-8 sm:right-8"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
