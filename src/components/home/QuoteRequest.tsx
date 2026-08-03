"use client";

import { useState } from "react";
import { quoteMessage } from "@/lib/whatsapp";

export default function QuoteRequest() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [destination, setDestination] = useState("");
  const [travelType, setTravelType] = useState("");

  const [dates, setDates] = useState("");
  const [flexibility, setFlexibility] = useState("");

  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [childrenAges, setChildrenAges] = useState("");

  const [airport, setAirport] = useState("");
  const [otherAirport, setOtherAirport] = useState("");

  const [accommodation, setAccommodation] = useState("");
  const [board, setBoard] = useState("");

  const [budget, setBudget] = useState("");
  const [purpose, setPurpose] = useState("");

  const [notes, setNotes] = useState("");
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const url = quoteMessage({
    name,
    email,
    phone,
    destination,
    travelType,
    dates,
    flexibility,
    adults,
    children,
    childrenAges,
    airport,
    otherAirport,
    accommodation,
    board,
    budget,
    purpose,
    notes,
  });

  window.open(url, "_blank");
};
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-14 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-[#C9795F]">
            Pedido de Orçamento
          </p>

          <h2 className="mt-4 font-heading text-5xl text-[#204C68]">
            Planeia a tua próxima viagem
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Conta-me um pouco sobre a viagem que procuras e prepararei uma proposta totalmente personalizada.
          </p>

        </div>

        <div className="rounded-[32px] border border-[#E8E2D8] bg-[#FAF8F4] p-8 shadow-xl">

                    <form onSubmit={handleSubmit} className="space-y-8">
                        {/* Dados pessoais */}

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Nome completo
    </label>

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Ex.: João Silva"
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Email
    </label>

    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="nome@email.com"
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

</div>

<div>
  <label className="mb-2 block font-medium text-[#204C68]">
    Telefone (opcional)
  </label>

  <input
    type="tel"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    placeholder="+351 912 345 678"
    className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
  />
</div>
{/* Viagem */}

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Destino pretendido ou ideia de viagem
    </label>

    <input
      type="text"
      value={destination}
      onChange={(e) => setDestination(e.target.value)}
      placeholder="Ex.: Maldivas, Japão, Praia ou Aceito sugestões"
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Tipo de viagem
    </label>

    <select
      value={travelType}
      onChange={(e) => setTravelType(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>
      <option>Praia</option>
      <option>Cidade</option>
      <option>Circuito</option>
      <option>Cruzeiro</option>
      <option>Lua de Mel</option>
      <option>Disney</option>
      <option>Família</option>
      <option>Aventura</option>
      <option>Outro</option>
    </select>
  </div>

</div>

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Quando pretendes viajar?
    </label>

    <input
      type="text"
      value={dates}
      onChange={(e) => setDates(e.target.value)}
      placeholder="Ex.: Agosto 2027"
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Flexibilidade das datas
    </label>

    <select
      value={flexibility}
      onChange={(e) => setFlexibility(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>
      <option>Datas fixas</option>
      <option>Tenho alguma flexibilidade</option>
      <option>Totalmente flexível</option>
    </select>
  </div>

</div>
{/* Passageiros */}

<div className="grid gap-6 md:grid-cols-3">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Adultos
    </label>

    <input
      type="number"
      min="1"
      value={adults}
      onChange={(e) => setAdults(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Crianças
    </label>

    <input
      type="number"
      min="0"
      value={children}
      onChange={(e) => setChildren(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Idade das crianças
    </label>

    <input
      type="text"
      value={childrenAges}
      onChange={(e) => setChildrenAges(e.target.value)}
      placeholder="Ex.: 4 e 8 anos"
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    />
  </div>

</div>

{/* Aeroporto */}

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Aeroporto de partida
    </label>

    <select
      value={airport}
      onChange={(e) => setAirport(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>

      <option>Porto (OPO)</option>
      <option>Lisboa (LIS)</option>
      <option>Faro (FAO)</option>
      <option>Funchal (FNC)</option>
      <option>Ponta Delgada (PDL)</option>

      <option>Outro aeroporto europeu</option>
      <option>Outro aeroporto internacional</option>

    </select>
  </div>

  {(airport === "Outro aeroporto europeu" ||
    airport === "Outro aeroporto internacional") && (

    <div>

      <label className="mb-2 block font-medium text-[#204C68]">
        Qual é o aeroporto?
      </label>

      <input
        type="text"
        value={otherAirport}
        onChange={(e) => setOtherAirport(e.target.value)}
        placeholder="Ex.: Londres Heathrow"
        className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
      />

    </div>

  )}

</div>
{/* Alojamento */}

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Tipo de alojamento
    </label>

    <select
      value={accommodation}
      onChange={(e) => setAccommodation(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>

      <option>Hotel</option>
      <option>Resort</option>
      <option>Apartamento</option>
      <option>Villa</option>
      <option>Boutique Hotel</option>
      <option>Sem preferência</option>

    </select>
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Regime
    </label>

    <select
      value={board}
      onChange={(e) => setBoard(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>

      <option>Só alojamento</option>
      <option>Pequeno-almoço</option>
      <option>Meia Pensão</option>
      <option>Pensão Completa</option>
      <option>Tudo Incluído</option>
      <option>Sem preferência</option>

    </select>
  </div>

</div>

{/* Orçamento */}

<div className="grid gap-6 md:grid-cols-2">

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Orçamento aproximado
    </label>

    <select
      value={budget}
      onChange={(e) => setBudget(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>

      <option>Até 750€</option>
      <option>750€ - 1500€</option>
      <option>1500€ - 2500€</option>
      <option>2500€ - 4000€</option>
      <option>Mais de 4000€</option>
      <option>Ainda não defini</option>

    </select>
  </div>

  <div>
    <label className="mb-2 block font-medium text-[#204C68]">
      Motivo da viagem
    </label>

    <select
      value={purpose}
      onChange={(e) => setPurpose(e.target.value)}
      className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
    >
      <option value="">Seleciona...</option>

      <option>Férias</option>
      <option>Lua de Mel</option>
      <option>Aniversário</option>
      <option>Família</option>
      <option>Amigos</option>
      <option>Trabalho</option>
      <option>Outro</option>

    </select>
  </div>

</div>

{/* Observações */}

<div>

  <label className="mb-2 block font-medium text-[#204C68]">
    Observações
  </label>

  <textarea
    rows={5}
    value={notes}
    onChange={(e) => setNotes(e.target.value)}
    placeholder="Conta-me um pouco mais sobre a viagem que procuras..."
    className="w-full rounded-xl border border-[#E8E2D8] bg-white px-4 py-3 outline-none transition focus:border-[#204C68]"
  />

</div>

<button
  type="submit"
  className="w-full rounded-full bg-[#204C68] py-4 text-lg font-semibold text-white transition hover:bg-[#18394F]"
>
  Pedir o meu orçamento personalizado
</button>

          </form>

        </div>

      </div>

    </section>
  );
}
