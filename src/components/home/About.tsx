import Image from "next/image";
import { planTripMessage } from "@/lib/whatsapp";

export default function About() {
  return (
    <section
      id="sobre"
      className="bg-white py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-24 px-8 lg:grid-cols-2">

        {/* Fotografia */}

        <div className="flex justify-center">

          <Image
            src="/images/beatriz.jpg"
            alt="Beatriz Vaz"
            width={560}
            height={720}
            className="rounded-[24px] shadow-xl object-cover"
          />

        </div>

        {/* Texto */}

        <div>

          <div className="flex items-center gap-3">

            <div className="h-px w-12 bg-[#C8B27A]" />

            <span className="text-sm uppercase tracking-[0.28em] text-[#C8B27A]">
              Sobre Mim
            </span>

          </div>

          <h2 className="mt-8 font-heading text-6xl leading-tight text-[#44532F]">
            Olá, sou a Beatriz.
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#6D6A63]">
            Viajar sempre foi muito mais do que conhecer novos destinos.
            É criar memórias, viver experiências únicas e descobrir o mundo
            com tranquilidade.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6D6A63]">
            Foi precisamente essa paixão que me levou a dedicar-me à consultoria
            de viagens. O meu objetivo é acompanhar cada cliente de forma próxima,
            criando propostas totalmente personalizadas, adaptadas ao orçamento,
            aos gostos e ao estilo de cada viagem.
          </p>

          <p className="mt-6 text-lg leading-9 text-[#6D6A63]">
            Mais do que vender viagens, gosto de construir experiências que
            ficam para sempre na memória.
          </p>

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-4">
              <span className="text-xl">✈️</span>
              <p className="text-[#44532F]">
                Atendimento totalmente personalizado
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl">🌍</span>
              <p className="text-[#44532F]">
                Destinos cuidadosamente selecionados
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl">🤍</span>
              <p className="text-[#44532F]">
                Acompanhamento antes, durante e depois da viagem
              </p>
            </div>

          </div>

          <blockquote className="mt-14 border-l-2 border-[#C8B27A] pl-6 font-heading text-3xl italic text-[#44532F]">
            "Cada viagem merece ser inesquecível."
          </blockquote>

          <a
            href={planTripMessage()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block rounded-full bg-[#44532F] px-9 py-4 font-medium text-white transition duration-300 hover:bg-[#394528]"
          >
            Vamos planear a tua próxima viagem
          </a>

        </div>

      </div>
    </section>
  );
}

