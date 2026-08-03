import { offers } from "@/data/offers";
import OfferCard from "@/components/ui/OfferCard";

export default function Offers() {
  return (
    <section id="ofertas" className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[#C9795F]">
              Ofertas em Destaque
            </p>

            <h2 className="mt-3 text-5xl font-heading text-[#204C68]">
              Inspira-te para a próxima viagem
            </h2>
          </div>

          <button className="rounded-full border border-[#204C68] px-6 py-3 text-[#204C68] transition hover:bg-[#204C68] hover:text-white">
            Ver todas
          </button>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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


