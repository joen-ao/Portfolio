import React, { useState } from 'react';
import styles from './Projects.module.css';

function Projects () {

    const [showDescription, setShowDescription] = useState({
        banco: false,
        freelance: false
      });
    
      const toggleDescription = (job) => {
        setShowDescription(prev => ({
          ...prev,
          [job]: !prev[job]
        }));
      };

  return (
    <section className={styles.projectSection} id="projects">
      <div className={styles.projectGrid}>
              <div className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.jobTitle}>Desarrollador de software</h3>
                  <div className={styles.company}>Banco de la República - Colombia</div>
                  <div className={styles.duration}>
                    ene. 2025 - junio. 2025 · 6 meses
                  </div>
                </div>
                
                <button 
                  className={styles.toggleButton}
                  onClick={() => toggleDescription('banco')}
                >
                  {showDescription.banco ? 'Ocultar descripción' : 'Ver descripción'}
                </button>
                
                {showDescription.banco && (
                  <div className={styles.cardContent}>
                    <p className={styles.jobDescription}>
                      Diseñé y desarrollé una solución empresarial integral para el Banco de la República utilizando Power Apps, Power Automate, SharePoint y Power BI, logrando reducir una tarea crítica de 30 horas a solo 15 minutos gracias a la automatización.
                    </p>
                  </div>
                )}
                
                <div className={styles.skillsBadges}>
                  <span className={styles.badge}>Power Apps</span>
                  <span className={styles.badge}>Sharepoint</span>
                  <span className={styles.badge}>Power Automate</span>
                  <span className={styles.badge}>PowerBI</span>
                  <span className={styles.badge}>Scrum</span>
                </div>
              </div>
              
              <div className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.jobTitle}>Desarrollador web</h3>
                  <div className={styles.company}>freelance · Profesional independiente</div>
                  <div className={styles.duration}>
                    jun. 2024 - dic. 2024 · 7 meses
                  </div>
                </div>
                
                <button 
                  className={styles.toggleButton}
                  onClick={() => toggleDescription('freelance')}
                >
                  {showDescription.freelance ? 'Ocultar descripción' : 'Ver descripción'}
                </button>
                
                {showDescription.freelance && (
                  <div className={styles.cardContent}>
                    <p className={styles.jobDescription}>
                      Como freelance, he desarrollado proyectos web y de software aplicando tecnologías como React para interfaces dinámicas, Python para automatizaciones, y Java para prácticas orientadas a objetos.
                    </p>
                  </div>
                )}
                
                <div className={styles.skillsBadges}>
                  <span className={styles.badge}>React</span>
                  <span className={styles.badge}>Java</span>
                  <span className={styles.badge}>MySQL</span>
                  <span className={styles.badge}>MongoDB</span>
                  <span className={styles.badge}>HTML</span>
                  <span className={styles.badge}>CSS</span>
                </div>
              </div>
            </div>
    </section>  
  );
}
export default Projects;