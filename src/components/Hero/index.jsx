import { ArrowRight, Download } from "lucide-react";
import profileImg from "../../assets/fb.jpg";
import resumeES from "../../assets/Joen Anaya - ES.pdf";
import resumeEN from "../../assets/JoenAnaya - EN.pdf";
import styles from "./Hero.module.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { calculateExperience } from "../../utils/experienceCalculator";
import { trackDownload, trackButtonClick } from "../../utils/analytics";
import { useScrollTracking } from "../../hooks/useScrollTracking";

function Hero() {
  const sectionRef = useScrollTracking('hero');

  const [experience, setExperience] = useState(0);
  const [skills, setSkills] = useState(0);
  const [certifications, setCertifications] = useState(0);
  const [englishLevel, setEnglishLevel] = useState("B1");
  const [typedText, setTypedText] = useState("");
  const [step, setStep] = useState(0);
  const { t, i18n } = useTranslation();
  const texts = [
    t("hero.subtitle1"),
    t("hero.subtitle2")
  ];

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
    const target = calculateExperience();
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
  const levels = ["A0", "A1", "A2", "B0", "B1", "B2"];
  let index = 0;
  const interval = setInterval(() => {
    setEnglishLevel(levels[index]);
    index++;
    if (index >= levels.length) clearInterval(interval);
  }, 200); // Puedes ajustar la velocidad
  return () => clearInterval(interval);
}, []);


  return (
    <section id="hero" className={styles.heroSection} ref={sectionRef}>
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
        {t("hero.title")} <br className={styles.brHiddenOnSmall} />
        <span className={styles.highlight}>Joen Anaya.</span>
      </h1>
      <p className={styles.description}>
        {t("hero.description")}
      </p>

      <div className={styles.buttonContainer}>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-90}
          duration={500}
          className={styles.btnPrimary}
          onClick={() => trackButtonClick('contact', 'hero')}
        >
          {t("hero.contact")} <ArrowRight size={16} />
        </Link>
        <a
          href={i18n.language === 'es' ? resumeES : resumeEN}
          download
          className={styles.btnSecondary}
          onClick={() => trackDownload(
            i18n.language === 'es' ? 'Joen Anaya - ES.pdf' : 'JoenAnaya - EN.pdf',
            i18n.language
          )}
        >
          {t("hero.cv")} <Download size={16} />
        </a>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statsItem}>
          <p className={styles.firstStat}>{experience}</p>
          <p className={styles.secondStat}>{t("hero.stats.experience")}</p>
        </div>

        <div className={styles.statsItem}>
          <p className={styles.firstStat}>+{skills}</p>
          <p className={styles.secondStat}>{t("hero.stats.skills")}</p>
        </div>

        <div className={styles.statsItem}>
          <p className={styles.firstStat}>+{certifications}</p>
          <p className={styles.secondStat}>{t("hero.stats.certifications")}</p>
        </div>

        <div className={styles.statsItem}>
          <p className={styles.firstStat}>{englishLevel}</p>
          <p className={styles.secondStat}>{t("hero.stats.english")}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
