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
  const { ref: aboutMeRef } = useInView({ threshold: 0.4 });



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
      title: "Curso profesional de React",
      date: "Mayo 2024", 
      issuer: "Codigo Facilito",
      url: "https://drive.google.com/file/d/1cjjRelQzOhIck4Y4q2GAEHCO4ytL2qPX/view?usp=sharing"
    },
    {
      title: "Certificado de finalización del programa: Backend con Java",
      date: "Enero 2025",
      issuer: "Oracle y Alura Latam",
      url: "https://drive.google.com/file/d/1kSYjjxJxdpaj5NfRmj7SqAqPCtrHMn7X/view?usp=sharing"
    },
    {
      title: "Construcción de base de datos con MySQL",
      date: "Marzo 2025",
      issuer: "SENA",
      url: "https://drive.google.com/file/d/1kMroTTogQzHz0sbH_Uy5peM6BNBSQbX_/view?usp=drive_link"
    },
    {
      title: "Desarrollo avanzado de aplicaciones de lienzo en Power Apps:",
      date: "Febrero 2025", 
      issuer: "Microsoft Learn",
      url: "https://drive.google.com/file/d/1uTjYOkYxYG5JP_sl4kkTrq4l-C5_JWIq/view?usp=sharing"
    },
    {
      title: "AWS Academy Cloud Foundations",
      date: "Septiembre 2024",
      issuer: "AWS Academy",
      url:"https://drive.google.com/file/d/1sd0AkU7CpL4cTTqcSih5Erduqrv5X0B7/view?usp=sharing"
    },
    {
      title: "AWS Academy Cloud Developing",
      date: "Noviembre 2024",
      issuer: "AWS Academy",
      url:"https://drive.google.com/file/d/1h-K34pEsWqV8ZcQZlyzf4aj7uiE-L-is/view?usp=sharing"
    },
    {
      title: "Analítica De Datos",
      date: "Marzo 2024",
      issuer: "Mintic",
      url: "https://drive.google.com/file/d/1UVcSBd7luxfhq7OpDlDx8hsd8OD0ynEf/view?usp=drive_link"
    },
    {
      title: "Ciberseguridad",
      date: "Marzo 2024",
      issuer: "Mintic",
      url: "https://drive.google.com/file/d/1ivC90str2yVI2p6vXUyAVC4IGxd99T0y/view?usp=drive_link"
    },
    {
      title: "Git Y Github",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1OajTgNlh4VsxjaPBsCc7ubJsYBPQs3cn/view?usp=drive_link"
    },
    {
      title: "HTML y CSS: Ambientes de desarrollo",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1hzmNJ536UoHt25e2Y164a7m-wf6ucm9a/view?usp=sharing"
    },
    {
      title: "HTML y CSS: Clases, posicionamiento y Flexbox",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1INfUxGIl_lqYVDXh0l0Ml0Th9egoheVf/view?usp=sharing"
    },
    {
      title: "Variables y estructuras de control en POO con Java",
      date: "Septiembre 2024",
      issuer: "SENA",
      url:"https://drive.google.com/file/d/1Yf42_muqpv6M2pz5qmZTT8DdQlf-VUr3/view?usp=drive_link"
    },
    {
      title: "HTML y CSS: Header, footer y variables CSS",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1t8lOgVHGIF1CMqcVRVLs7JkcPerR6M38/view?usp=sharing"
    },
    {
      title: "HTML y CSS: Responsividad y publicación de proyecto",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1dKp80jDi7TbKppu2-c-1Xwod1mxbglr3/view?usp=sharing"
    },
    {
      title: "Lógica de programación con JavaScript",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1zsmHwU8YOZpJBq2DAiF7ZLTE3ZivIRM4/view?usp=sharing"
    },
    {
      title: "Lógica de programación:Funciones y listas",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1eRdoaW--aZQ0U4V0w3jSYfIx5Q9GcaK8/view?usp=sharing"
    },
    {
      title: "Principiante en Programación G7 - ONE",
      date: "Agosto 2024",
      issuer: "Oracle y Alura Latam",
      url:"https://drive.google.com/file/d/1_gGgUc6ecURcXgx82cS9FPrDujOjj91P/view?usp=sharing"
    },
    {
      title: "Analisis Exploratorio de Datos con Python",
      date: "Junio 2024",
      issuer: "SENA",
      url:"https://drive.google.com/file/d/1drcdCJXWSS5NRp5Aw96c7BkfrLqIIYGE/view?usp=sharing"
    },
    
    {
      title: "Formación Java Orientado a Objetos",
      date: "Enero 2025",
      issuer: "Oracle y Alura Latam",
      url: "https://drive.google.com/file/d/1ysKZ1ReKlUkAdPJ5Ux4DVpMlw7_6sFtu/view?usp=sharing"
    },
    {
      title: "Desarrollo de aplicaciones con manejo de datos en la memoria - Java",
      date: "Noviembre 2024",
      issuer: "SENA",
      url: "https://drive.google.com/file/d/1VBYHN77NgoOsAsyPlyHH4vLo5sUlNQdx/view?usp=drive_link"
    },
    {
      title: "Chat GPT: Optimizando la calidad de los resultados",
      date: "Julio 2024",
      issuer: "Oracle y Alura Latam",
      url: "https://drive.google.com/file/d/13AaAFRtDv6ocSg20ObcQU-fQ8cQpqFPy/view?usp=sharing"
    }
    
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
              <div className={styles.gridEducation}>
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
                    <a
                      href={cert.url}
                      className={styles.certButton}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver certificado
                    </a>
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
            <div className={styles.aboutContainer}>
              
                <p className={styles.description}>
                  El <strong>99% de los trabajos</strong> pueden aprenderse, y yo lo hago con <strong>agilidad</strong> y <strong>compromiso</strong>. Si no encuentras en mi perfil exactamente lo que buscas,
                  no significa que no pueda hacerlo: significa que aún <strong>no lo he aprendido</strong>. Y cuando lo haga, <strong>lo dominaré</strong>.
                </p>
                <div className={styles.infoGrid}>
                  <p><span>Nombre:</span> <strong>Joen Anaya</strong></p>
                  <p><span>Experiencia:</span> <strong>1.2 años</strong></p>
                  <p><span>Teléfono:</span> <strong>+57 3014184466</strong></p>
                  <p><span>Nacionalidad:</span> <strong>Colombiano</strong></p>
                  <p><span>Email:</span> <strong>anayajoen@gmail.com</strong></p>
                  <p><span>Lenguajes:</span> <strong>Español, Inglés</strong></p>
                </div>
                
            </div>
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
