import Image from "next/image";
import { heroMessage } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="bg-[#FAF8F4] pt-40 pb-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-8 lg:grid-cols-2">

        {/* Texto */}
        <div>

          <span className="rounded-full bg-[#204C68]/10 px-4 py-2 text-sm font-semibold text-[#204C68]">
            ✈️ Viagens personalizadas
          </span>

          <h1 className="mt-8 text-6xl leading-tight text-[#204C68] font-heading">
            Cada viagem merece
            <br />
            ser inesquecível.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Descobre destinos cuidadosamente selecionados e conta com
            acompanhamento personalizado antes, durante e depois da tua viagem.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
  href={heroMessage()}
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-[#204C68] px-8 py-4 font-semibold text-white transition hover:bg-[#18394F]"
>
  Começar a planear a minha viagem
</a>

            <a
  href="#ofertas"
  className="rounded-full border border-[#204C68] px-8 py-4 font-semibold text-[#204C68] transition hover:bg-[#204C68] hover:text-white"
>
  Explorar destinos
</a>

          </div>

         <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">

  <div>
    <p className="text-3xl">✨</p>
    <p className="mt-3 text-xl font-semibold text-[#204C68]">
      Viagens Personalizadas
    </p>
    <span className="text-gray-500">
      Cada viagem é pensada à tua medida.
    </span>
  </div>

  <div>
    <p className="text-3xl">🤝</p>
    <p className="mt-3 text-xl font-semibold text-[#204C68]">
      Acompanhamento Dedicado
    </p>
    <span className="text-gray-500">
      Antes, durante e depois da viagem.
    </span>
  </div>

  <div>
    <p className="text-3xl">🌍</p>
    <p className="mt-3 text-xl font-semibold text-[#204C68]">
      Destinos em Todo o Mundo
    </p>
    <span className="text-gray-500">
      Soluções para qualquer tipo de viagem.
    </span>
  </div>

</div>

        </div>

        {/* Imagem */}
        <div className="relative">

          <div className="overflow-hidden rounded-[36px] shadow-2xl">

            <Image
              src="/images/hero.jpg"
              alt="Praia paradisíaca"
              width={700}
              height={850}
              className="h-[700px] w-full object-cover"
              priority
            />

          </div>

          <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-6 shadow-xl">

            <p className="text-sm uppercase tracking-widest text-[#C9795F]">
              Travel by Beatriz
            </p>

            <p className="mt-2 text-xl font-semibold text-[#204C68]">
              Acompanhamento personalizado
            </p>

            <p className="mt-2 text-gray-600">
              Antes, durante e depois da viagem.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}

