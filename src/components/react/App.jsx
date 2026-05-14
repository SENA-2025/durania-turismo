/**
 * =============================================================================
 * App.jsx — Componente raíz de la aplicación
 * =============================================================================
 *
 * Es el componente principal que React renderiza dentro de <div id="root">.
 * Su única responsabilidad es COMPONER el layout completo de la página,
 * importando y ordenando cada sección del sitio.
 *
 * ESTRUCTURA DE LA PÁGINA (de arriba hacia abajo):
 * ─────────────────────────────────────────────────
 *  <Navbar />          → Barra de navegación fija con cambio de idioma
 *  <main>
 *    <Hero />          → Banner principal con slideshow y estadísticas
 *    <Stats />         → Banda de números clave + marquee de categorías
 *    <NatureSection /> → Senderismo, aves, ríos, laguna y cascadas
 *    <GastronomySection /> → Platos típicos de Durania
 *    <ApicultureSection /> → Apiturismo y tour de abejas
 *    <AgricultureSection /> → Café, ganadería, piscicultura, agroturismo
 *    <CultureSection />    → Historia, sitios patrimoniales, tradiciones
 *    <EventsSection />     → Ferias y festividades del municipio
 *    <LodgingSection />    → Tipos de hospedaje disponibles
 *    <RealEstateSection /> → Inmobiliario rural: fincas, lotes, casas
 *    <ContactSection />    → Formulario, mapa, redes sociales
 *  </main>
 *  <Footer />          → Pie de página con links y CTA final
 *
 * NOTAS:
 * ──────
 * - No maneja estado propio. Cada sección es independiente.
 * - El sistema de idiomas (i18n) ya fue inicializado en main.jsx antes
 *   de que este componente se monte, por lo que useTranslation() está
 *   disponible en cualquier componente hijo.
 * - BrowserRouter se configura en main.jsx (no aquí) para mantener
 *   la separación de responsabilidades.
 * =============================================================================
 */

// src/components/react/App.jsx
import i18n from './i18n.js';
import { I18nextProvider } from 'react-i18next';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import NatureSection from './components/NatureSection';
import GastronomySection from './components/GastronomySection';
import ApicultureSection from './components/ApicultureSection';
import AgricultureSection from './components/AgricultureSection';
import CultureSection from './components/CultureSection';
import EventsSection from './components/EventsSection';
import LodgingSection from './components/LodgingSection';
import RealEstateSection from './components/RealEstateSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Stats />
          <NatureSection />
          <GastronomySection />
          <ApicultureSection />
          <AgricultureSection />
          <CultureSection />
          <EventsSection />
          <LodgingSection />
          <RealEstateSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </I18nextProvider>
  );
}
