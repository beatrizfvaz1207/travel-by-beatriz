import { COMPANY } from "./constants";

const BASE_URL = `https://wa.me/${COMPANY.whatsapp}`;

function createWhatsAppLink(message: string) {
  return `${BASE_URL}?text=${encodeURIComponent(message)}`;
}

export function heroMessage() {
  return createWhatsAppLink(
    "Olá Beatriz! 😊 Vi o teu site e gostaria de falar contigo sobre uma viagem."
  );
}

export function planTripMessage() {
  return createWhatsAppLink(
    "Olá Beatriz! 😊 Gostaria de planear uma viagem personalizada."
  );
}

export function offerMessage(destination: string) {
  return createWhatsAppLink(
    `Olá Beatriz! 😊 Vi a oferta de ${destination} no teu site e gostaria de receber mais informações.`
  );
}
export function quoteMessage(data: {
  name: string;
  email: string;
  phone: string;
  destination: string;
  travelType: string;
  dates: string;
  flexibility: string;
  adults: string;
  children: string;
  childrenAges: string;
  airport: string;
  otherAirport: string;
  accommodation: string;
  board: string;
  budget: string;
  purpose: string;
  notes: string;
}) {
  const airport =
    data.airport === "Outro aeroporto europeu" ||
    data.airport === "Outro aeroporto internacional"
      ? data.otherAirport
      : data.airport;

  const message = `NOVO PEDIDO DE ORÇAMENTO

--------------------------------

Nome:
${data.name}

Email:
${data.email}

Telefone:
${data.phone}

Destino / Ideia:
${data.destination}

Tipo de viagem:
${data.travelType}

Datas:
${data.dates}

Flexibilidade:
${data.flexibility}

Aeroporto:
${airport}

Adultos:
${data.adults}

Crianças:
${data.children}

Idade das crianças:
${data.childrenAges}

Alojamento:
${data.accommodation}

Regime:
${data.board}

Orçamento:
${data.budget}

Motivo da viagem:
${data.purpose}

Observações:
${data.notes}`;

  return `https://wa.me/351910041275?text=${encodeURIComponent(message)}`;
}

