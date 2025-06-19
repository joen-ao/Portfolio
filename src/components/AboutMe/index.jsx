import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./AboutMe.module.css";
import intellijImg from "../../assets/intellij.png";
import pythonImg from "../../assets/python.png";
import gitImg from "../../assets/git.png";
import githubImg from "../../assets/github.png";
import vscodeImg from "../../assets/VScode.png";
import powerAppsImg from "../../assets/powerApps.png";
import powerAutomateImg from "../../assets/powerAutomate.png";
import sharepointImg from "../../assets/sharepoint.png";
import powerBiImg from "../../assets/powerBi.png";
import javaImg from "../../assets/java.png";
import mysqlImg from "../../assets/mysql.png";
import mongodbImg from "../../assets/mongodb.png";
import htmlImg from "../../assets/html.png";
import css3Img from "../../assets/css3.png";
import javascriptImg from "../../assets/javascript.png";
import reactImg from "../../assets/react.png";

function AboutMe() {
  const [activeTab, setActiveTab] = useState("experience");
  const { ref, inView } = useInView({ threshold: 0.4 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.4 });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.4 });
  const { ref: aboutMeRef, inView: aboutMeInView } = useInView({ threshold: 0.4 });



  const experiences = [
    {
      title: "Software Developer",
      company: "Banco de la República - Colombia",
      period: "ene 2025 - jun 2025",
      description: "Diseñé y desarrollé una solución empresarial integral para el Banco de la República utilizando Power Apps, Power Automate, SharePoint y Power BI, logrando reducir una tarea crítica de 30 horas a solo 15 minutos"
    },
    {
      title: "Web Developer",
      company: "Freelance",
      period: "jun 2024 - dic 2024",
      description: "Como freelance, he desarrollado proyectos web y de software aplicando tecnologías como React para interfaces dinámicas, Python para automatizaciones, y Java para prácticas orientadas a objetos."
    }
  ];

  const certifications = [
    {
      title: "Ciberseguridad",
      date: "Marzo 2024",
      issuer: "Mintic",
    },
    {
      title: "Analítica De Datos",
      date: "Marzo 2024",
      issuer: "Mintic",
    },
    {
      title: "Git Y Github",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
    },
    {
      title: "HTML y CSS: Ambientes de desarrollo",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
    },
    {
      title: "HTML y CSS: Clases, posicionamiento y Flexbox",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
    },
    {
      title: "Variables y estructuras de control en POO con Java",
      date: "Septiembre 2024",
      issuer: "SENA",
    },
    {
      title: "HTML y CSS: Header, footer y variables CSS",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
    },
    {
      title: "HTML y CSS: Responsividad y publicación de proyecto",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
    },
    {
      title: "Lógica de programación con JavaScript",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
    },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div ref={ref}>
            <h2 className={styles.rightHeading}>Mi Experiencia</h2>
            <div className={styles.grid}>
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`${styles.card} ${
                    activeTab === "experience" && inView ? styles.show : ""
                  }`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <p className={styles.period}>{exp.period}</p>
                  <h3 className={styles.title}>{exp.title}</h3>
                  <p className={styles.company}>• {exp.company}</p>
                  <p className={styles.description}>{exp.description}</p>
                </div>
              ))}

            </div>
          </div>
        );
      case "skills":
      return (
        <div ref={skillsRef}>
          <h2 className={styles.rightHeading}>Mis Skills</h2>
          <div className={styles.skillsContainer}>
            {[
              {
                title: "Frontend",
                icons: [htmlImg, css3Img, javascriptImg, reactImg],
              },
              {
                title: "Backend",
                icons: [javaImg, mysqlImg, mongodbImg],
              },
              {
                title: "Power Platform",
                icons: [powerAppsImg, powerAutomateImg, sharepointImg, powerBiImg],
              },
              {
                title: "Herramientas",
                icons: [pythonImg, gitImg, githubImg, vscodeImg, intellijImg],
              },
            ].map((group, index) => (
              <div
                className={`${styles.skillBox} ${activeTab === "skills" && skillsInView ? styles.show : ""}`}
                key={index}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <h3 className={styles.skillTitle}>{group.title}</h3>
                <div className={styles.iconGrid}>
                  {group.icons.map((src, idx) => (
                    <img key={idx} src={src} alt="skill icon" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      );

      case "education":
        return (
          <div ref={educationRef}>
            <h2 className={styles.rightHeading}>Mi Educación</h2>
            <div className={styles.educationScroll}>
              <div className={styles.grid}>
                <div className={`${styles.card} ${activeTab === "education" && educationInView ? styles.show : ""}`}>
                  <p className={styles.period}>2019 - Próximo a graduar</p>
                  <h3 className={styles.title}>Ingeniería de Sistemas</h3>
                  <p className={styles.company}>• Universidad de Cartagena, Colombia</p>
                </div>

                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className={`${styles.card} ${activeTab === "education" && educationInView ? styles.show : ""}`}
                    style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <p className={styles.period}>{cert.date}</p>
                    <h3 className={styles.title}>{cert.title}</h3>
                    <p className={styles.company}>• {cert.issuer}</p>
                    <button className={styles.certButton}>Ver certificado</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );


      case "about":
        return (
          <div ref={aboutMeRef}>
            <h2 className={styles.rightHeading}>Sobre Mí</h2>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.aboutSection} id="about" >
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>¿Por qué contratarme?</h2>
        <p className={styles.text}>
          Porque tengo la capacidad de convertir ideas en soluciones funcionales,
          eficientes y orientadas al usuario.
        </p>
        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab("experience")}
            className={`${styles.tab} ${activeTab === "experience" ? styles.active : ""}`}
          >
            Experiencia
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`${styles.tab} ${activeTab === "skills" ? styles.active : ""}`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`${styles.tab} ${activeTab === "education" ? styles.active : ""}`}
          >
            Educación
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
          >
            Sobre mí
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>{renderContent()}</div>
    </section>
  );
}

export default AboutMe;
