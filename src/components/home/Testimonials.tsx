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
    <section className="bg-[#FAF8F4] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <span className="text-sm uppercase tracking-[0.3em] text-[#C9795F]">
            Testemunhos
          </span>

          <h2 className="mt-4 text-5xl font-heading text-[#204C68]">
            O que dizem os meus clientes
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl bg-white p-8 shadow-lg"
            >
              <p className="text-2xl">⭐⭐⭐⭐⭐</p>

              <p className="mt-6 leading-8 text-gray-600">
                "{item.text}"
              </p>

              <p className="mt-8 font-semibold text-[#204C68]">
                {item.name}
              </p>

              <p className="text-sm text-gray-500">
                {item.city}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
