import { ArrowRight, Download } from "lucide-react";
import profileImg from "../../assets/fb.jpg";
import resumePdf from "../../assets/resume.pdf"; // Importa el PDF
import styles from "./Hero.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Hero() {

  const [experience, setExperience] = useState(0);
  const [skills, setSkills] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [englishLevel, setEnglishLevel] = useState("B1");
  const [typedText, setTypedText] = useState("");
  const texts = ["Software Developer", "Power Platform Developer"];
  const [step, setStep] = useState(0);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(texts[step].slice(0, index + 1));
      index++;
      if (index === texts[step].length) {
        clearInterval(interval);
        // Espera 1.5s y pasa al siguiente texto (o vuelve al primero)
        setTimeout(() => setStep((prev) => (prev + 1) % texts.length), 1500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [step]);

  useEffect(() => {
    let current = 0;
    const target = 1.3;
    const step = 0.1;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setExperience(Number(current.toFixed(1)));
      if (current >= target) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let current = 0;
    const target = 10;
    const step = 1;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setSkills(current);
      if (current >= target) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let current = 0;
    const target = 20;
    const step = 1;
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      setCertifications(current);
      if (current >= target) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
  const levels = ["A0", "A1", "A2", "B0", "B1"];
  let index = 0;
  const interval = setInterval(() => {
    setEnglishLevel(levels[index]);
    index++;
    if (index >= levels.length) clearInterval(interval);
  }, 200); // Puedes ajustar la velocidad
  return () => clearInterval(interval);
}, []);


  return (
    <section id="hero" className={styles.heroSection}>
      <img
        src={profileImg}
        alt="Profile"
        className={styles.profileImg}
      />

      <h2 className={styles.subtitle}>
        {typedText}
        <span className={styles.cursor}>|</span>
      </h2>

      <h1 className={styles.title}>
        Hello, I'm <br className={styles.brHiddenOnSmall} />
        <span className={styles.highlight}>Joen Anaya.</span>
      </h1>
      <p className={styles.description}>
        Desarrollador junior colombiano con formación en Ingeniería de Sistemas y experiencia creando aplicaciones web con React, Java y Power Platform, aplicando buenas prácticas, arquitecturas modernas y enfoque en la experiencia de usuario.
      </p>

      <div className={styles.buttonContainer}>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-90} // Ajusta según la altura de tu navbar
          duration={500}
          className={styles.btnPrimary}
        >
          contactame <ArrowRight size={16} />
        </Link>
        <a
          href={resumePdf} 
          download
          className={styles.btnSecondary}
        >
          currículum <Download size={16} />
        </a>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statsItem}>
          <p className={styles.firstStat}>{experience}</p>
          <p className={styles.secondStat}>Años de experiencia</p>
        </div>

        <div className={styles.statsItem}>
          <p className={styles.firstStat}>+{skills}</p>
          <p className={styles.secondStat}>Skills</p>
        </div>

        <div className={styles.statsItem}>
          <p className={styles.firstStat}>+{certifications}</p>
          <p className={styles.secondStat}>Certificaciónes</p>
        </div>

        <div className={styles.statsItem}>
          <p className={styles.firstStat}>{englishLevel}</p>
          <p className={styles.secondStat}>Ingles</p>
        </div>
      </div>

    </section>
  );
}

export default Hero;