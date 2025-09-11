# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production using Vite
- `npm run lint` - Run ESLint checks
- `npm run preview` - Preview production build locally

## Project Architecture

This is a React portfolio website built with Vite, featuring internationalization (i18n) and responsive design.

### Core Structure
- **Single-page application**: All content rendered through `src/pages/Home.jsx`
- **Component-based architecture**: Modular components in `src/components/`
- **CSS Modules**: Each component uses `.module.css` for scoped styling
- **Internationalization**: Powered by `react-i18next` with JSON translation files in `src/locales/`

### Key Components Flow
1. **App.jsx** → **Home.jsx** renders all sections in sequence:
   - Navbar (sticky navigation with language switcher)
   - Hero (animated introduction)
   - AboutMe (tabbed experience/skills/education)
   - Projects (portfolio gallery)
   - ContactMe (functional email form using EmailJS)
   - Footer (social links)

### State Management
- React hooks for local state
- i18next for language state (ES/EN)
- Intersection Observer API for scroll animations via custom `useInViewAnimation` hook

### External Integrations
- **EmailJS**: Contact form functionality (requires environment variables)
- **react-scroll**: Smooth navigation between sections
- **react-toastify**: User feedback notifications
- **lucide-react**: Icon components

### Environment Configuration
Contact form requires EmailJS configuration:
```
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
VITE_EMAILJS_PUBLIC_KEY=...
```

### Development Notes
- Uses Vite's ES modules and fast refresh
- ESLint configured with React hooks and refresh plugins
- All assets stored in `src/assets/` (images, resume PDF)
- Translation keys follow hierarchical structure in JSON files