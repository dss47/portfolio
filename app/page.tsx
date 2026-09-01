import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Me from "@/components/Me";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col py-8">
      <Hero />
      <Projects />
      <Me />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
