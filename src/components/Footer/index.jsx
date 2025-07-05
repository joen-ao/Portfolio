// src/components/Footer.jsx
import styles from "./Footer.module.css";
import { Github, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.footerText}>
          © {new Date().getFullYear()} Joen Anaya. Todos los derechos reservados.
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/joen-ao"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/joen-anaya/"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
