import { offers } from "@/data/offers";
import OfferCard from "@/components/ui/OfferCard";

export default function Offers() {
  return (
    <section
      id="ofertas"
      className="bg-[#F8F5EC] py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-20 max-w-3xl">

          <div className="flex items-center gap-3">

            <div className="h-px w-12 bg-[#C8B27A]" />

            <span className="text-sm uppercase tracking-[0.28em] text-[#C8B27A]">
              Destinos Selecionados
            </span>

          </div>

          <h2 className="mt-8 font-heading text-6xl leading-tight text-[#44532F]">
            Inspira-te para
            <br />
            a tua próxima viagem
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#6D6A63]">
            Cada proposta foi escolhida para proporcionar experiências
            memoráveis, com acompanhamento personalizado do início ao fim.
          </p>

        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

          {offers.map((offer) => (
            <OfferCard
              key={offer.id}
              destination={offer.destination}
              airport={offer.airport}
              hotel={offer.hotel}
              board={offer.board}
              duration={offer.duration}
              dates={offer.dates}
              image={offer.image}
              price={offer.price}
            />
          ))}

        </div>

      </div>
    </section>
  );
}




