const testimonials = [
  {
    name: "Ana",
    city: "Porto",
    text: "A Beatriz tratou de tudo. Foi uma viagem fantástica e sem qualquer preocupação.",
  },
  {
    name: "Ricardo",
    city: "Braga",
    text: "Excelente acompanhamento desde o primeiro contacto até ao regresso.",
  },
  {
    name: "Marta",
    city: "Lisboa",
    text: "Voltarei a reservar sem dúvida. Recomendo a 100%.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <div className="flex items-center justify-center gap-3">

            <div className="h-px w-12 bg-[#C8B27A]" />

            <span className="text-sm uppercase tracking-[0.30em] text-[#C8B27A]">
              Confiança
            </span>

            <div className="h-px w-12 bg-[#C8B27A]" />

          </div>

          <h2 className="mt-8 font-heading text-6xl leading-tight text-[#44532F]">
            Experiências que
            <br />
            ficam na memória
          </h2>

          <p className="mt-8 text-lg leading-9 text-[#6D6A63]">
            Cada viagem é preparada com dedicação para proporcionar uma experiência tranquila do início ao fim.
          </p>

        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[20px] border border-[#E5DEC9] bg-[#FDFBF7] p-10 transition duration-300 hover:-translate-y-2 hover:shadow-lg"
            >

              <p className="text-[#C8B27A] text-xl tracking-wider">
                ★★★★★
              </p>

              <p className="mt-8 text-lg leading-9 italic text-[#6D6A63]">
                "{item.text}"
              </p>

              <div className="mt-10">

                <p className="font-semibold text-[#44532F]">
                  {item.name}
                </p>

                <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[#A59A83]">
                  {item.city}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}
