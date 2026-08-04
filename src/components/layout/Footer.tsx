import { Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-[#44532F] text-white">
      <div className="mx-auto max-w-7xl px-8 py-24">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Marca */}

          <div>

            <p className="text-sm uppercase tracking-[0.35em] text-[#D8C694]">
              Travel by Beatriz
            </p>

            <h2 className="mt-6 font-heading text-5xl leading-tight">
              Cada viagem merece
              <br />
              ser inesquecível.
            </h2>

            <p className="mt-8 max-w-md leading-8 text-white/70">
              Consultoria de viagens personalizada,
              com acompanhamento próximo antes,
              durante e depois da viagem.
            </p>

          </div>

          {/* Contactos */}

          <div>

            <h3 className="mb-8 text-lg uppercase tracking-[0.20em] text-[#D8C694]">
              Contactos
            </h3>

            <div className="space-y-6">

              <a
                href="https://wa.me/351910041275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 transition hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href="mailto:beatrizfvaz1207@gmail.com"
                className="flex items-center gap-4 text-white/80 transition hover:text-white"
              >
                <Mail size={20} />
                beatrizfvaz1207@gmail.com
              </a>

            </div>

          </div>

          {/* Redes */}

          <div>

            <h3 className="mb-8 text-lg uppercase tracking-[0.20em] text-[#D8C694]">
              Redes Sociais
            </h3>

            <a
              href="https://www.instagram.com/travelbybeatriz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 transition hover:text-white"
            >
              @travelbybeatriz
            </a>

          </div>

        </div>

        <div className="my-16 h-px bg-white/15" />

        <div className="flex flex-col gap-4 text-sm text-white/60 md:flex-row md:justify-between">

          <p>
            © {new Date().getFullYear()} Travel by Beatriz
          </p>

          <p>
            Desenvolvido com ❤️ para inspirar viagens inesquecíveis.
          </p>

        </div>

      </div>
    </footer>
  );
}


