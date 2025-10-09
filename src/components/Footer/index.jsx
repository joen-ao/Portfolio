import styles from "./Footer.module.css";
import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";
import { trackSocialClick } from "../../utils/analytics";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.footerText}>
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
        <div className={styles.socialLinks}>
          <a
            href="https://github.com/joen-ao"
            className={styles.socialLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            onClick={() => trackSocialClick('github', 'https://github.com/joen-ao')}
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
            onClick={() => trackSocialClick('linkedin', 'https://www.linkedin.com/in/joen-anaya/')}
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
