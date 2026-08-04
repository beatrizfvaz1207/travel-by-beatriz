import Image from "next/image";
import { offerMessage } from "@/lib/whatsapp";

type OfferCardProps = {
  destination: string;
  airport: string;
  hotel: string;
  board: string;
  duration: string;
  dates: string;
  price: string;
  image: string;
};

export default function OfferCard({
  destination,
  airport,
  hotel,
  board,
  duration,
  dates,
  price,
  image,
}: OfferCardProps) {
  return (
    <article className="overflow-hidden rounded-[20px] border border-[#E5DEC9] bg-white transition duration-500 hover:-translate-y-2 hover:shadow-xl">

      <div className="overflow-hidden">
        <Image
          src={image}
          alt={destination}
          width={600}
          height={420}
          className="h-72 w-full object-cover transition duration-700 hover:scale-105"
        />
      </div>

      <div className="p-8">

        <p className="text-xs uppercase tracking-[0.35em] text-[#B79C63]">
          {duration}
        </p>

        <h3 className="mt-4 font-heading text-4xl text-[#44532F]">
          {destination}
        </h3>

        <div className="mt-6 space-y-3 text-[#6D6A63]">

          <p>
            <strong>Saída:</strong> {airport}
          </p>

          <p>
            <strong>Hotel:</strong> {hotel}
          </p>

          <p>
            <strong>Regime:</strong> {board}
          </p>

          <p>
            <strong>Datas:</strong> {dates}
          </p>

        </div>

        <div className="mt-8">

          <p className="text-sm uppercase tracking-[0.30em] text-[#B79C63]">
            Desde
          </p>

          <p className="mt-1 font-heading text-5xl text-[#44532F]">
            {price}
          </p>

        </div>

        <a
          href={offerMessage(destination)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 block rounded-full border border-[#44532F] py-4 text-center font-medium text-[#44532F] transition duration-300 hover:bg-[#44532F] hover:text-white"
        >
          Pedir informações
        </a>

      </div>

    </article>
  );
}


