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

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import NatureSection from './components/NatureSection'
import GastronomySection from './components/GastronomySection'
import ApicultureSection from './components/ApicultureSection'
import AgricultureSection from './components/AgricultureSection'
import CultureSection from './components/CultureSection'
import TourVirtual360 from './components/TourVirtual360'
import EventsSection from './components/EventsSection'
import LodgingSection from './components/LodgingSection'
import RealEstateSection from './components/RealEstateSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    /*
     * min-h-screen garantiza que la página ocupe al menos el 100% del alto
     * de la pantalla, aunque el contenido sea corto.
     */
    <div className="min-h-screen">
      {/* Navbar fixed — siempre visible sobre todo el contenido */}
      <Navbar />

      {/* main — contenedor semántico HTML5 para el contenido principal */}
      <main>
        <Hero />
        <Stats />
        <NatureSection />
        <GastronomySection />
        <ApicultureSection />
        <AgricultureSection />
        <CultureSection />
        <TourVirtual360 />
        <EventsSection />
        <LodgingSection />
        <RealEstateSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
