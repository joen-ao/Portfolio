import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import { Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.css";

const sections = [
  { id: "hero", labelKey: "Inicio" },
  { id: "about", labelKey: "Sobre mí" },
  { id: "projects", labelKey: "Proyectos" },
  { id: "contact", labelKey: "Contáctame" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

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
                  {t(section.labelKey)}
                </Link>
              </li>
            ))}
            
          </ul>
        </div>
        <div className={styles.controls}>
          <button 
            className={styles.themeToggle} 
            onClick={toggleTheme} 
            aria-label="Cambiar tema"
            title={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
          >
            {theme === "light" ? (
              <Moon size={18} strokeWidth={2} style={{ display: 'block' }} />
            ) : (
              <Sun size={18} strokeWidth={2} style={{ display: 'block' }} />
            )}
          </button>
          <div className={styles.languageToggle}>
            <button className={styles.languageSwitch} onClick={toggleLanguage} aria-label="Cambiar idioma">
            <span className={i18n.language === "es" ? styles.activeLang : ""}>ES</span>
            <span className={styles.separator}>|</span>
            <span className={i18n.language === "en" ? styles.activeLang : ""}>EN</span>
          </button>
          </div>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
