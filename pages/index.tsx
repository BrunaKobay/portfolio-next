import Head from "next/head";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center ">
      <Head>
        <title>Bruna Kobay</title>
      </Head>
      <Header />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* About */}
      <section id="about">
        <About />
      </section>

      {/* Projects */}
      <section id="projects">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact">
        <Contact />
      </section>
      <div className="flex flex-col justify-center items-center text-xs text-gray-400 text-center pb-4">
        <p>Built by Bruna Kobay</p>
        <p>@2023</p>
      </div>
    </div>
  );
}
