import { ArrowRight, Download } from "lucide-react";
import profileImg from "../../assets/fb.jpg";
import resumePdf from "../../assets/resume.pdf"; // Importa el PDF
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section id="hero" className={styles.heroSection}>
      <img
        src={profileImg}
        alt="Profile"
        className={styles.profileImg}
      />
      <h2 className={styles.subtitle}>Hola! Soy Joen Anaya 👋🏼</h2>
      <h1 className={styles.title}>
        Desarrollador junior <br className={styles.brHiddenOnSmall} /> ubicado en Colombia.
      </h1>
      <p className={styles.description}>
        Desarrollador junior colombiano con formación en Ingeniería de Sistemas y experiencia creando aplicaciones web con React, Java y Power Platform, aplicando buenas prácticas, arquitecturas modernas y enfoque en la experiencia de usuario.
      </p>

      <div className={styles.buttonContainer}>
        <a
          href="#contact"
          className={styles.btnPrimary}
        >
          contactame <ArrowRight size={16} />
        </a>
        <a
          href={resumePdf} 
          download
          className={styles.btnSecondary}
        >
          currículum <Download size={16} />
        </a>
      </div>
    </section>
  );
}

export default Hero;