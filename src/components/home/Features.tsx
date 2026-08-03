import { Globe, HeartHandshake, Plane, MessageCircle } from "lucide-react";

const features = [
  {
    icon: HeartHandshake,
    title: "Acompanhamento personalizado",
    description:
      "Cada viagem é planeada à tua medida, com aconselhamento próximo em todas as etapas.",
  },
  {
    icon: Plane,
    title: "Viagens sem preocupações",
    description:
      "Trato de voos, hotéis, seguros e detalhes para que só te preocupes em aproveitar.",
  },
  {
    icon: Globe,
    title: "Destinos para todos os gostos",
    description:
      "Praia, cidade, aventura ou lua de mel — encontro a opção ideal para ti.",
  },
  {
    icon: MessageCircle,
    title: "Apoio antes, durante e depois",
    description:
      "Estou disponível sempre que precisares, mesmo enquanto estás em viagem.",
  },
];

export default function Features() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#C9795F]">
            Porque escolher a Travel by Beatriz
          </p>

          <h2 className="mt-4 text-5xl font-heading text-[#204C68]">
            Viajar deve ser uma experiência tranquila.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Mais do que vender viagens, acompanho cada cliente para garantir
            que tudo corre da melhor forma.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-[#E8E2D8] bg-[#FAF8F4] p-8 transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#204C68]/10">
                  <Icon className="h-7 w-7 text-[#204C68]" />
                </div>

                <h3 className="mt-6 text-2xl font-heading text-[#204C68]">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
