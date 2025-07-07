import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactMe.module.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTranslation } from "react-i18next";


function ContactMe() {

  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    if (!name || !email || !message) {
      toast.error(t("contact.error"));
      return;
    }

    // Obtener hora actual
    const now = new Date();
    const timeString = now.toLocaleString();

    // Asignar valor al input oculto
    form.current.querySelector('#timeSent').value = timeString;

    emailjs
      .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
        )
      .then(
        () => {
          toast.success(t("contact.success"))
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
    };


  return (
    <section className={styles.contactSection} >
      <div className={styles.container} id="contact">
        <h2 className={styles.title}>{t("contact.title")}</h2>
        <p className={styles.description}>
          {t("contact.description")}
        </p>

        <form className={styles.form} onSubmit={sendEmail} ref={form}>
          <div className={styles.row}>
            <input
              type="text"
              name="user_name"
              placeholder={t("contact.placeholder.name")}
              className={styles.input}
            />
            <input
              type="email"
              name="user_email"
              placeholder={t("contact.placeholder.email")}
              className={styles.input}
            />
          </div>
          <textarea
            name="message"
            placeholder={t("contact.placeholder.message")}
            className={styles.textarea}
          />
          <input type="hidden" name="time" id="timeSent" />
          <button type="submit" value="Send" className={styles.button}>
            {t("contact.button")}
          </button>
        </form>
        <ToastContainer position="top-right" autoClose={3000} />

        <footer className={styles.footer}>
          <p className={styles.email}>anayajoen@gmail.com</p>
          <h3 className={styles.signature}>Joen<span className={styles.dot}>.</span></h3>
        </footer>
      </div>
    </section>
  );
}

export default ContactMe;
