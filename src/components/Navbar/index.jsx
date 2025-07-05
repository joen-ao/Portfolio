import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "projects", label: "Proyectos" },
  { id: "contact", label: "Contáctame" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => setMenuOpen(false);

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
        <div className={styles.menuWrapper}>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Abrir menú"
          >
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
            <span className={styles.hamburgerBar}></span>
          </button>
          <ul className={`${styles.menu} ${menuOpen ? styles.menuOpen : ""}`}>
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  activeClass={styles.active}
                  className={styles.link}
                  onClick={handleLinkClick}
                >
                  {section.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
