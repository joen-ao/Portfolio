import styles from "./Footer.module.css";

// src/components/Footer.jsx
function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.footerText}>© {new Date().getFullYear()} Joen. Todos los derechos reservados.</p>
      <div className={styles.socialLinks}>
        <a href="https://github.com/joen-ao" className={styles.socialLink}>GitHub</a>
        <a href="https://www.linkedin.com/in/joen-anaya/" className={styles.socialLink}>LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
