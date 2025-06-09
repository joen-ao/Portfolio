import styles from "./Footer.module.css";

// src/components/Footer.jsx
function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Joen. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
