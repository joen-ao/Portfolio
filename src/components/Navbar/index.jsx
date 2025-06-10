
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css"; // Importamos el CSS Module

const Navbar = () => {
const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <nav className={styles.container}>
        
        <h1 className={styles.title}>Mi Portafolio</h1>
        <div className={styles.menuWrapper}>
          <ul className={styles.menu}>
            <li><a href="#hero" className={styles.link}>Inicio</a></li>
            <li><a href="#about" className={styles.link}>Sobre mí</a></li>
            <li><a href="#services" className={styles.link}>Servicios</a></li>
            <li><a href="#projects" className={styles.link}>Proyectos</a></li>
            <li><a href="#contact" className={styles.link}>Contáctame</a></li>
          </ul>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;