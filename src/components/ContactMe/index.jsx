import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./ContactMe.module.css";

function ContactMe() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Obtener hora actual
    const now = new Date();
    const timeString = now.toLocaleString();

    // Asignar valor al input oculto
    form.current.querySelector('#timeSent').value = timeString;

    emailjs
      .sendForm('service_g8w2ms7', 'template_1v53cf9', form.current, {
        publicKey: 'HuyTCAX1yVo1ctux1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
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
        <h2 className={styles.title}>Contactame</h2>
        <p className={styles.description}>
          Ya sea una oportunidad laboral, una propuesta creativa o una simple charla sobre tecnología, estaré encantado de recibir tu mensaje.
        </p>

        <form className={styles.form} onSubmit={sendEmail} ref={form}>
          <div className={styles.row}>
            <input
              type="text"
              name="user_name"
              placeholder="Escribe tu nombre"
              className={styles.input}
            />
            <input
              type="email"
              name="user_email"
              placeholder="Escribe tu email"
              className={styles.input}
            />
          </div>
          <textarea
            name="message"
            placeholder="Escribe tu mensaje"
            className={styles.textarea}
          />
          <input type="hidden" name="time" id="timeSent" />
          <button type="submit" value="Send" className={styles.button}>
            Enviar →
          </button>
        </form>

        <footer className={styles.footer}>
          <p className={styles.email}>anayajoen@gmail.com</p>
          <h3 className={styles.signature}>Joen<span className={styles.dot}>.</span></h3>
        </footer>
      </div>
    </section>
  );
}

export default ContactMe;
