import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Houses from "@/components/Houses";
import Characters from "@/components/Characters";
import Timeline from "@/components/Timeline";
import MapSection from "@/components/MapSection";
import Quotes from "@/components/Quotes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Houses />
      <Characters />
      <Timeline />
      <MapSection />
      <Quotes />
      <Footer />
    </main>
  );
}
