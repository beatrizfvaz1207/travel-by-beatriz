"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { planTripMessage } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#E8E2D8] bg-[#FAF8F4]/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}
        <Link href="/" className="leading-tight">
          <h1 className="text-4xl font-heading font-semibold text-[#204C68]">
            Travel by Beatriz
          </h1>

          <p className="mt-1 text-xs uppercase tracking-[0.25em] text-[#C9795F]">
            Consultora de Viagens
          </p>
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-10 text-sm font-medium text-[#2D2D2D] md:flex">
          <Link href="/">Início</Link>
          <Link href="#">Destinos</Link>
          <Link href="#">Ofertas</Link>
          <Link href="#">Sobre</Link>
          <Link href="#">Contacto</Link>
        </nav>

        {/* Botão */}
        <div className="flex items-center gap-4">

  <a
  href={planTripMessage()}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-full bg-[#204C68] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#18394F] md:block"
>
  Planear a minha viagem
</a>

  <button
    onClick={() => setOpen(!open)}
    className="md:hidden"
  >
    {open ? (
      <X className="h-8 w-8 text-[#204C68]" />
    ) : (
      <Menu className="h-8 w-8 text-[#204C68]" />
    )}
  </button>

</div>

      </div>
    </header>
  );
}
