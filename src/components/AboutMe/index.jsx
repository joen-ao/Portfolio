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
import nodejsImg from "../../assets/nodejs.png";
import expressImg from "../../assets/express.png";
import typescriptImg from "../../assets/typescript.svg";
import supabaseImg from "../../assets/supabase.svg";
import { useTranslation, Trans } from "react-i18next";
import { useScrollTracking } from "../../hooks/useScrollTracking";

function AboutMe() {
  const sectionRef = useScrollTracking('about');
  const [activeTab, setActiveTab] = useState("experience");
  const { ref, inView } = useInView({ threshold: 0.4 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.4 });
  const { ref: educationRef, inView: educationInView } = useInView({ threshold: 0.4 });
  const { ref: aboutMeRef } = useInView({ threshold: 0.4 });
  const { t } = useTranslation();
  const experiences = t("about.experiences", { returnObjects: true });
  const degree = t("about.education.degree", { returnObjects: true });
  const certifications = t("about.certifications", { returnObjects: true });


  const renderContent = () => {
    switch (activeTab) {
      case "experience":
      return (
        <div ref={ref}>
          <h2 className={styles.rightHeading}>{t("about.experience.heading")}</h2>
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
        <h2 className={styles.rightHeading}>{t("about.skills.heading")}</h2>
        <div className={styles.skillsContainer}>
          {[
            {
              title: "Frontend",
              icons: [
                { src: htmlImg, name: "HTML" },
                { src: css3Img, name: "CSS3" },
                { src: javascriptImg, name: "JavaScript" },
                { src: typescriptImg, name: "TypeScript" },
                { src: reactImg, name: "React" },
              ],
            },
            {
              title: "Backend",
              icons: [
                { src: javaImg, name: "Java" },
                { src: nodejsImg, name: "Node.js" },
                { src: expressImg, name: "Express" },
                { src: mysqlImg, name: "MySQL" },
                { src: mongodbImg, name: "MongoDB" },
                { src: supabaseImg, name: "Supabase" },
              ],
            },
            {
              title: "Power Platform",
              icons: [
                { src: powerAppsImg, name: "Power Apps" },
                { src: powerAutomateImg, name: "Power Automate" },
                { src: sharepointImg, name: "SharePoint" },
                { src: powerBiImg, name: "Power BI" },
              ],
            },
            {
              title: t("about.skills.tools"),
              icons: [
                { src: pythonImg, name: "Python" },
                { src: gitImg, name: "Git" },
                { src: githubImg, name: "GitHub" },
                { src: vscodeImg, name: "VS Code" },
                { src: intellijImg, name: "IntelliJ" },
              ],
            },
          ].map((group, index) => (
            <div
              className={`${styles.skillBox} ${activeTab === "skills" && skillsInView ? styles.show : ""}`}
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <h3 className={styles.skillTitle}>{group.title}</h3>
              <div className={styles.iconGrid}>
                {group.icons.map((icon, idx) => (
                  <img
                    key={idx}
                    src={icon.src}
                    alt={icon.name}
                    title={icon.name}
                    className={styles.skillIcon}
                  />
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
          <h2 className={styles.rightHeading}>{t("about.education.heading")}</h2>
          <div className={styles.educationScroll}>
            <div className={styles.gridEducation}>
              <div className={`${styles.card} ${activeTab === "education" && educationInView ? styles.show : ""}`}>
                <p className={styles.period}>{degree.period}</p>
                <h3 className={styles.title}>{degree.title}</h3>
                <p className={styles.company}>• {degree.company}</p>
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
                    {t("about.cert.button", "Ver certificado")}
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
            <h2 className={styles.rightHeading}>{t("about.about.heading")}</h2>
            <div className={styles.aboutContainer}>
              <p className={styles.description}>
                <Trans i18nKey="about.about.description" components={{ strong: <strong /> }} />
              </p>
              <div className={styles.infoGrid}>
                <p><span>{t("about.info.name")}:</span> <strong>{t("about.info.value.name")}</strong></p>
                <p><span>{t("about.info.experience")}:</span> <strong>{t("about.info.value.experience")}</strong></p>
                <p><span>{t("about.info.phone")}:</span> <strong>{t("about.info.value.phone")}</strong></p>
                <p><span>{t("about.info.nationality")}:</span> <strong>{t("about.info.value.nationality")}</strong></p>
                <p><span>{t("about.info.email")}:</span> <strong>{t("about.info.value.email")}</strong></p>
                <p><span>{t("about.info.languages")}:</span> <strong>{t("about.info.value.languages")}</strong></p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.aboutSection} id="about" ref={sectionRef}>
      <div className={styles.leftPanel}>
        <h2 className={styles.heading}>{t("about.heading")}</h2>
        <p className={styles.text}>{t("about.text")}</p>
        <div className={styles.tabs}>
          <button
            onClick={() => setActiveTab("experience")}
            className={`${styles.tab} ${activeTab === "experience" ? styles.active : ""}`}
          >
            {t("about.tabs.experience")}
          </button>
          <button
            onClick={() => setActiveTab("skills")}
            className={`${styles.tab} ${activeTab === "skills" ? styles.active : ""}`}
          >
            {t("about.tabs.skills")}
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`${styles.tab} ${activeTab === "education" ? styles.active : ""}`}
          >
            {t("about.tabs.education")}
          </button>
          <button
            onClick={() => setActiveTab("about")}
            className={`${styles.tab} ${activeTab === "about" ? styles.active : ""}`}
          >
            {t("about.tabs.about")}
          </button>
        </div>
      </div>
      <div className={styles.rightPanel}>{renderContent()}</div>
    </section>
  );
}

export default AboutMe;
