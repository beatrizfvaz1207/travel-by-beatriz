"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { planTripMessage } from "@/lib/whatsapp";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#F8F5EC]/90 backdrop-blur-lg">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <Link href="/" className="leading-tight">

          <h1 className="font-heading text-4xl text-[#44532F]">
            Travel by Beatriz
          </h1>

          <p className="mt-1 text-[11px] uppercase tracking-[0.35em] text-[#B79C63]">
            Consultora de Viagens
          </p>

        </Link>

        {/* Menu */}

        <nav className="hidden items-center gap-10 text-sm uppercase tracking-[0.18em] text-[#4A4A4A] md:flex">

          <a href="#">Início</a>

          <a href="#ofertas">Destinos</a>

          <a href="#ofertas">Ofertas</a>

          <a href="#sobre">Sobre</a>

          <a href="#contacto">Contacto</a>

        </nav>

        {/* Botão */}

        <div className="flex items-center gap-4">

          <a
            href={planTripMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-[#44532F] px-7 py-3 text-sm font-medium text-[#44532F] transition duration-300 hover:bg-[#44532F] hover:text-white md:block"
          >
            Pedir orçamento
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            {open ? (
              <X className="h-8 w-8 text-[#44532F]" />
            ) : (
              <Menu className="h-8 w-8 text-[#44532F]" />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

