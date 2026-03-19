import About from "@/components/About";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experiences />
      <Education />
      <Projects />
      <Footer />
    </main>
  );
}
