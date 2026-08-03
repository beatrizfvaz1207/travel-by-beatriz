import {
  MessageCircle,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#204C68] text-white">
      <div className="mx-auto max-w-7xl px-8 py-16">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Marca */}

          <div>
            <h3 className="font-heading text-4xl">
              Travel by Beatriz
            </h3>

            <p className="mt-4 text-white/80 leading-7">
              Consultora de Viagens Personalizadas.
              <br />
              <span className="italic">
                Cada viagem merece ser inesquecível.
              </span>
            </p>
          </div>

          {/* Contactos */}

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Contactos
            </h4>

            <div className="space-y-4">

              <a
                href="https://wa.me/351910041275"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>

              <a
                href="mailto:travelbybeatriz@email.com"
                className="flex items-center gap-3 text-white/80 transition hover:text-white"
              >
                <Mail size={20} />
                Email
              </a>

            </div>
          </div>

          {/* Redes Sociais */}

          <div>
            <h4 className="mb-4 text-lg font-semibold">
              Segue-me
            </h4>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/80 transition hover:text-white"
            >
              <span className="text-lg">📷</span>
Instagram
            </a>

          </div>

        </div>

        <div className="my-12 h-px bg-white/20"></div>

        <div className="text-center text-sm text-white/60">
          © {new Date().getFullYear()} Travel by Beatriz · Todos os direitos reservados.
        </div>

      </div>
    </footer>
  );
}

