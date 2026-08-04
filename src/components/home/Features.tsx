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
    <section className="bg-[#F8F5EC] py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <div className="flex items-center justify-center gap-3">

            <div className="h-px w-12 bg-[#C8B27A]" />

            <span className="text-sm uppercase tracking-[0.30em] text-[#C8B27A]">
              Porque escolher a Travel by Beatriz
            </span>

            <div className="h-px w-12 bg-[#C8B27A]" />

          </div>

          <h2 className="mt-8 font-heading text-6xl leading-tight text-[#44532F]">
            Viajar deve ser uma
            <br />
            experiência tranquila.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-9 text-[#6D6A63]">
            Mais do que vender viagens, acompanho cada cliente para garantir
            que tudo corre da melhor forma, antes, durante e depois da viagem.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="rounded-[22px] border border-[#E5DEC9] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F8F5EC]">

                  <Icon className="h-8 w-8 text-[#B79C63]" />

                </div>

                <h3 className="mt-8 font-heading text-3xl leading-tight text-[#44532F]">
                  {feature.title}
                </h3>

                <p className="mt-5 leading-8 text-[#6D6A63]">
                  {feature.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}

