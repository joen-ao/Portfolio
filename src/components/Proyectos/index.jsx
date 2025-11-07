import styles from './Projects.module.css';
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import forohubImage from '../../assets/forohub.jpg';
import misTicketsImage from '../../assets/mistickets.png';
import literaluraImage from '../../assets/library.jpg';
import transcriptorImage from '../../assets/transncriptor image.jpg';
import { useTranslation } from "react-i18next";
import { useScrollTracking } from "../../Hooks/useScrollTracking";

function ProjectCard({ project, index, inView, t }) {
  const [showAllBadges, setShowAllBadges] = useState(false);
  const BADGE_LIMIT = 4;
  const hasMoreBadges = project.badges.length > BADGE_LIMIT;
  const displayedBadges = showAllBadges ? project.badges : project.badges.slice(0, BADGE_LIMIT);

  const handleToggleBadges = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowAllBadges(!showAllBadges);
  };

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.projectLink}
    >
      <div
        className={`${styles.projectCard} ${inView ? styles.show : ""}`}
        style={{ transitionDelay: `${index * 0.15}s` }}
      >
        <div className={styles.imageContainer}>
          <img src={project.image} alt={`${project.title} Project`} className={styles.projectImage} />
        </div>
        <div className={styles.cardContent}>
          <h3 className={styles.projectTitle}>{project.title}</h3>
          <p className={styles.projectCategory}>{t(`projects.category.${project.category}`)}</p>
          <div className={styles.skillsBadges}>
            {displayedBadges.map((badge, idx) => (
              <span key={idx} className={styles.badge}>{badge}</span>
            ))}
            {hasMoreBadges && (
              <button
                onClick={handleToggleBadges}
                className={styles.badgeToggle}
                aria-label={showAllBadges ? "Show less badges" : "Show more badges"}
              >
                {showAllBadges ? "−" : "+"}
              </button>
            )}
          </div>
        </div>
      </div>
    </a>
  );
}

function Projects() {
  const sectionRef = useScrollTracking('projects');
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Transcriptor Pro",
      image: transcriptorImage,
      category: "fullstack",
      url: "https://github.com/joen-ao/Transcriptor-app",
      badges: ["Electron", "React", "Node.js", "Express", "SQLite", "Whisper AI"]
    },
    {
      id: 2,
      title: "Mis Tickets",
      image: misTicketsImage,
      category: "frontend",
      url: "https://mis-tickets.netlify.app/",
      badges: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      id: 3,
      title: "Forohub",
      image: forohubImage,
      category: "backend",
      url: "https://github.com/joen-ao/challenge-foro-hub/tree/master/Foro-hub-master",
      badges: ["Java", "Spring Boot", "MySQL", "Maven"]
    }
  ];

  return (
    <section className={styles.projectSection} id="projects" ref={sectionRef}>
      <h2 className={styles.sectionTitle}>{t("projects.title")}</h2>
      <p className={styles.sectionDescription}>
        {t("projects.description")}
      </p>
      
      <div className={styles.projectGrid} ref={ref}>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            inView={inView}
            t={t}
          />
        ))}
      </div>

      <a className={styles.btnSecondary} 
        href="https://github.com/joen-ao?tab=repositories"
        target="_blank"
        rel="noopener noreferrer">{t("projects.button")}</a>

    </section>  
  );
}

export default Projects;