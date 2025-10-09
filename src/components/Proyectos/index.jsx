import styles from './Projects.module.css';
import { useInView } from "react-intersection-observer";
import forohubImage from '../../assets/forohub.jpg';
import misTicketsImage from '../../assets/mistickets.png';
import literaluraImage from '../../assets/library.jpg';
import { useTranslation } from "react-i18next";
import { useScrollTracking } from "../../Hooks/useScrollTracking";

function Projects() {
  const sectionRef = useScrollTracking('projects');
  const { ref, inView } = useInView({ threshold: 0.3 });
  const { t } = useTranslation();

  const projects = [
    {
      id: 1,
      title: "Mis Tickets",
      image: misTicketsImage,
      category: "Frontend",
      url: "https://mis-tickets.netlify.app/", 
      badges: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      id: 2,
      title: "Literalura",
      image: literaluraImage,
      category: "Backend",
      url: "https://github.com/joen-ao/Challenge-Literalura", 
      badges: ["Java", "Spring Boot", "MySQL", "Maven"]
    },
    {
      id: 3,
      title: "Forohub",
      image: forohubImage,
      category: "Backend",
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
          <a 
            key={project.id}
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
                <p className={styles.projectCategory}>{project.category}</p>
                <div className={styles.skillsBadges}>
                  {project.badges.map((badge, idx) => (
                    <span key={idx} className={styles.badge}>{badge}</span>
                  ))}
                </div>
              </div>
            </div>
          </a>
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