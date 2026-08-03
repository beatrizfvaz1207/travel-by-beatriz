"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/351910041275?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20uma%20viagem."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition duration-300 hover:scale-110 hover:bg-[#1ebe5d]"
    >
      <MessageCircle size={30} strokeWidth={2.3} />
    </a>
  );
}

