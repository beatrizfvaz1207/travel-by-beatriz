import Image from "next/image";

const destinations = [
  {
    title: "Barcelona",
    image: "/images/barcelona-arco.jpg",
    description: "Escapadinhas culturais e gastronómicas.",
  },
  {
    title: "Gran Canaria",
    image: "/images/gran-canaria-1.jpg",
    description: "Praias paradisíacas durante todo o ano.",
  },
  {
    title: "Madrid",
    image: "/images/madrid.jpg",
    description: "Cidade vibrante cheia de vida.",
  },
  {
    title: "Mais destinos",
    image: "/images/barcelona-vista.jpg",
    description: "Descobre centenas de ofertas.",
  },
];

export default function Destinations() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <p className="text-[#F59E0B] font-semibold uppercase tracking-widest">
            Descobre
          </p>

          <h2 className="text-5xl font-bold text-[#0F8B8D] mt-3">
            Destinos em Destaque
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Inspira-te com alguns dos destinos preferidos dos nossos viajantes.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {destinations.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-2xl transition duration-300 bg-white"
            >

              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={600}
                className="h-72 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold text-[#0F8B8D]">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.description}
                </p>

                <button className="mt-6 rounded-full bg-[#F59E0B] px-5 py-3 text-white font-semibold hover:scale-105 transition">
                  Ver ofertas
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
