# Portfolio - Joen Anaya

Este es el código fuente de mi portafolio personal, desarrollado en **React**. Aquí muestro mi experiencia, habilidades, proyectos y formas de contacto, con un diseño moderno, responsive y soporte para múltiples idiomas.

---

## 🚀 Funcionalidad

- **Sección Hero:** Presentación animada con typing effect, estadísticas animadas y enlaces a contacto y CV.
- **Sobre mí:** Tabs con experiencia, habilidades, educación y datos personales, todo traducible.
- **Proyectos:** Galería de proyectos destacados con enlaces y badges de tecnologías.
- **Contacto:** Formulario funcional con validación y envío de emails usando EmailJS.
- **Navbar:** Navegación sticky, menú responsive y switch de idioma (ES/EN).
- **Footer:** Redes sociales y derechos de autor, también traducible.
- **Responsive:** Adaptado para escritorio, tablet y móvil.

---

## 🛠️ Librerías utilizadas

- **React**  
  Framework principal para la UI.

- **react-scroll**  
  Navegación suave entre secciones.

- **react-i18next**  
  Internacionalización y cambio de idioma en tiempo real.

- **emailjs-com**  
  Envío de emails desde el formulario de contacto sin backend.

- **lucide-react**  
  Iconos modernos y personalizables.

- **react-toastify**  
  Notificaciones para feedback de usuario.

---

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/joen-ao/portfolio.git
   cd portfolio

2. Instala las dependencias:
   ```bash
    npm install

4. Configura tus variables de entorno para EmailJS en un archivo .env:
   ```bash
    VITE_EMAILJS_SERVICE_ID=...
    VITE_EMAILJS_TEMPLATE_ID=...
    VITE_EMAILJS_PUBLIC_KEY=...

6. Inicia el proyecto:
   ```bash
    npm run dev
