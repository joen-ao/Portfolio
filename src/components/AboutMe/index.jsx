import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./AboutMe.module.css";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("experience");
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: false });

  const experiences = [
    {
      title: "Software Developer",
      company: "Banco de la República - Colombia",
      period: "ene 2025 - jun 2025",
    },
    {
      title: "Web Developer",
      company: "Freelance",
      period: "jun 2024 - dic 2024",
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div>
            <h2 className={styles.rightHeading}>Mi Experiencia</h2>
            <div className={styles.grid}>
              {experiences.map((exp, index) => (
                <div
                  className={`${styles.card} ${inView ? styles.show : ""}`}
                  key={index}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <p className={styles.period}>{exp.period}</p>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <p className={styles.company}>• {exp.company}</p>
                </div>
              ))}
            </div>
          </div>
        );
      case "education":
        return (<p className={styles.placeholder}>Education content goes here.</p>);
      case "skills":
        return <p className={styles.placeholder}>Skills content goes here.</p>;
      case "about":
        return <p className={styles.placeholder}>About me content goes here.</p>;
      default:
        return null;
    }
  };

  return (
    <section className={styles.aboutSection} id="about" ref={ref}>
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>¿Por qué contratarme?</h2>
        <p className={styles.text}>Porque tengo la capacidad de convertir ideas en soluciones funcionales, eficientes y orientadas al usuario.</p>
        <div className={styles.tabs}>
          <button onClick={() => setActiveTab("experience")} className={`${styles.tab} ${activeTab === "experience" ? styles.active : ""}`}>Experiencia</button>
          <button onClick={() => setActiveTab("education")} className={`${styles.tab} ${activeTab === "education" ? styles.active : ""}`}>Educación</button>
          <button onClick={() => setActiveTab("skills")} className={`${styles.tab} ${activeTab === "skills" ? styles.active : ""}`}>Skills</button>
          <button onClick={() => setActiveTab("about")} className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}>Sobre mí</button>
        </div>
      </div>
      <div className={styles.rightPanel}>
        {renderContent()}
      </div>
    </section>
  );
}

export default AboutMe;
