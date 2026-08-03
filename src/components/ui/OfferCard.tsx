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
    <article className="overflow-hidden rounded-[28px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <Image
        src={image}
        alt={destination}
        width={500}
        height={350}
        className="h-64 w-full object-cover"
      />

      <div className="p-6">

        <p className="text-sm uppercase tracking-[0.25em] text-[#C9795F]">
          {duration}
        </p>

        <h3 className="mt-2 text-3xl font-heading text-[#204C68]">
          {destination}
        </h3>

        <div className="mt-5 space-y-2 text-sm text-gray-600">
          <p>✈️ Saída: {airport}</p>
          <p>🏨 {hotel}</p>
          <p>🍽️ {board}</p>
          <p>📅 {dates}</p>
        </div>

        <p className="mt-6 text-2xl font-bold text-[#204C68]">
          {price}
        </p>

        <a
          href={offerMessage(destination)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 block w-full rounded-full bg-[#204C68] py-3 text-center font-semibold text-white transition hover:bg-[#18394F]"
        >
          Ver oferta
        </a>

      </div>

    </article>
  );
}

