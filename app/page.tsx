import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Concept from "@/components/Concept";
import Works from "@/components/Works";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Concept />
      <Works />
      <Footer />
    </main>
  );
}
