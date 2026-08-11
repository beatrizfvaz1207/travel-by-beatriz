import Image from "next/image";
import { heroMessage } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="bg-[#F8F5EC] pt-44 pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* Texto */}
        <div>

          <div className="flex items-center gap-3">
            <div className="h-px w-12 bg-[#C8B27A]" />

            <span className="text-sm uppercase tracking-[0.28em] text-[#C8B27A]">
              Consultoria de Viagens
            </span>
          </div>

          <h1 className="mt-8 font-heading text-6xl leading-[1.08] text-[#44532F] lg:text-7xl">
            Cada viagem merece
            <br />
            ser inesquecível.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-9 text-[#6D6A63]">
            Descobre destinos cuidadosamente selecionados e conta com
            acompanhamento personalizado antes, durante e depois da tua
            viagem.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">

            <a
              href={heroMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#44532F] px-9 py-4 font-medium text-white shadow-lg transition hover:bg-[#394528]"
            >
              Começar a planear
            </a>

            <a
              href="#ofertas"
              className="rounded-full border border-[#44532F] px-9 py-4 font-medium text-[#44532F] transition hover:bg-[#44532F] hover:text-white"
            >
            </a>

          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-3">

            <div>
              <p className="text-3xl">✨</p>

              <h3 className="mt-4 text-xl font-semibold text-[#44532F]">
                Personalizado
              </h3>

              <p className="mt-2 text-[#7A766E] leading-7">
                Cada viagem é pensada exclusivamente para ti.
              </p>
            </div>

            <div>
              <p className="text-3xl">🤝</p>

              <h3 className="mt-4 text-xl font-semibold text-[#44532F]">
                Acompanhamento
              </h3>

              <p className="mt-2 text-[#7A766E] leading-7">
                Antes, durante e depois da tua viagem.
              </p>
            </div>

            <div>
              <p className="text-3xl">🌍</p>

              <h3 className="mt-4 text-xl font-semibold text-[#44532F]">
                Destinos
              </h3>

              <p className="mt-2 text-[#7A766E] leading-7">
                Soluções para qualquer tipo de experiência.
              </p>
            </div>

          </div>

        </div>

        {/* Imagem */}

        <div>

          <div className="overflow-hidden rounded-[24px] shadow-xl">

            <Image
              src="/images/hero.jpg"
              alt="Travel by Beatriz"
              width={700}
              height={850}
              priority
              className="h-[720px] w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}


