import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Offers from "@/components/home/Offers";
import About from "@/components/home/About";
import QuoteRequest from "@/components/home/QuoteRequest";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Offers />
      <About />
      <QuoteRequest />
      <Testimonials />
    </>
  );
}



