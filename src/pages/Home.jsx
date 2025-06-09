// src/pages/Home.jsx
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Aquí irán: About, Services, Projects, Contact */}
      <Footer />
    </>
  );
}

export default Home;
