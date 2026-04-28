/**
 * =============================================================================
 * i18n.js — Configuración del sistema de internacionalización (i18next)
 * =============================================================================
 *
 * Este archivo inicializa la librería i18next con el plugin react-i18next,
 * que permite mostrar el contenido del sitio en Español o Inglés según
 * la preferencia del usuario.
 *
 * CÓMO FUNCIONA:
 * ──────────────
 * 1. Se importan los archivos de traducción JSON desde /src/locales/
 *    → es.json contiene todos los textos en Español
 *    → en.json contiene todos los textos en Inglés
 *
 * 2. i18n.use(initReactI18next) conecta la librería con React para que
 *    el hook useTranslation() esté disponible en todos los componentes.
 *
 * 3. El usuario cambia de idioma desde el botón EN/ES del Navbar,
 *    que llama a i18n.changeLanguage('en') o i18n.changeLanguage('es').
 *    El cambio es instantáneo sin recargar la página.
 *
 * CONFIGURACIÓN:
 * ──────────────
 * - lng: 'es'          → El idioma inicial al cargar el sitio es Español.
 * - fallbackLng: 'es'  → Si falta una clave en el idioma activo, usa Español.
 * - escapeValue: false → No escapar caracteres HTML en las traducciones
 *                        (permite usar acentos y ñ sin problemas).
 *
 * USO EN COMPONENTES:
 * ───────────────────
 * import { useTranslation } from 'react-i18next'
 *
 * function MiComponente() {
 *   const { t } = useTranslation()
 *   return <h1>{t('hero.title')}</h1>  // → "Durania" o "Durania"
 * }
 *
 * Para obtener arrays (listas): t('clave', { returnObjects: true })
 * =============================================================================
 */

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from './locales/es.json'
import en from './locales/en.json'

i18n
  .use(initReactI18next)   // Conecta i18next con el contexto de React
  .init({
    resources: {
      es: { translation: es }, // Namespace "translation" con textos en Español
      en: { translation: en }, // Namespace "translation" con textos en Inglés
    },
    lng: 'es',               // Idioma por defecto al cargar el sitio
    fallbackLng: 'es',       // Idioma de respaldo si falta una clave
    interpolation: {
      escapeValue: false,    // React ya protege contra XSS; no es necesario escapar
    },
  })

export default i18n
