import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "@/components/ui/WhatsAppButton";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Travel by Beatriz",
  description: "Viagens personalizadas com acompanhamento do início ao fim.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${cormorant.variable} ${manrope.variable}`}
    >
      <body className="min-h-screen bg-[#FAF8F4] text-[#2D2D2D]">
        {children}

        <WhatsAppButton />
      </body>
    </html>
  );
}


