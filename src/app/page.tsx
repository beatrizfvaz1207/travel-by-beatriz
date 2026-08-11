import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import QuoteRequest from "@/components/home/QuoteRequest";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <QuoteRequest />
      <Testimonials />
      <Footer />
    </>
  );
}



