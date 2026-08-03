import Image from "next/image";

export default function About() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Fotografia */}
        <div className="flex justify-center">
          <Image
            src="/images/beatriz.jpg"
            alt="Beatriz"
            width={550}
            height={700}
            className="rounded-[32px] object-cover shadow-2xl"
          />
        </div>

        {/* Texto */}
        <div>

          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#C9795F]">
            Quem sou
          </span>

          <h2 className="mt-4 text-5xl font-heading text-[#204C68]">
            Olá, sou a Beatriz.
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-600">
            Viajar sempre foi uma das minhas maiores paixões. Hoje tenho o
            privilégio de ajudar outras pessoas a encontrar viagens
            inesquecíveis, totalmente adaptadas ao seu orçamento, estilo e
            objetivos.
          </p>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            Trabalho com dedicação para que cada cliente tenha uma experiência
            tranquila desde o primeiro contacto até ao regresso a casa.
          </p>

          <div className="mt-10 space-y-4">

            <div>✈️ Atendimento personalizado</div>

            <div>🌍 Destinos selecionados</div>

            <div>💬 Apoio antes, durante e depois da viagem</div>

          </div>

          <a
            href="https://wa.me/351910041275"
            className="mt-10 inline-block rounded-full bg-[#204C68] px-8 py-4 font-semibold text-white transition hover:bg-[#18394F]"
          >
            Falar comigo
          </a>

        </div>

      </div>
    </section>
  );
}
