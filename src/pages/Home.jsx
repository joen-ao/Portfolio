// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Proyectos";
import ContactMe from "../components/ContactMe";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default Home;
