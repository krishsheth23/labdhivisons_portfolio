
import FeaturedWork from "@/components/FeaturedWork";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Ticker from "@/components/Ticker";

export default function Home() {
  return (
    <main>
      <Hero />
      <Ticker />
      <FeaturedWork />
      <Services />
      <Gallery />
    </main>
  );
}
