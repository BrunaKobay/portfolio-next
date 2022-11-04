import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div className="h-screen">
      <Head>
        <title>Bruna's Portfolio</title>
      </Head>

      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Skills */}
      <section id="skills">
        <Skills />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}
