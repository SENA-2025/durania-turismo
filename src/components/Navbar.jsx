/**
 * =============================================================================
 * Navbar.jsx — Barra de navegación principal
 * =============================================================================
 *
 * RESPONSABILIDADES:
 * ──────────────────
 * - Mostrar el logo y nombre del sitio con enlace al inicio (#inicio).
 * - Listar los links de navegación hacia cada sección de la página.
 * - Cambiar visualmente al hacer scroll (transparente → fondo oscuro blur).
 * - Mostrar el botón de cambio de idioma (ES ↔ EN) con i18n.
 * - Ofrecer un botón "Contactar" como CTA rápido.
 * - En móvil/tablet: reemplazar el menú por un drawer lateral animado.
 *
 * ESTADOS:
 * ────────
 * - isOpen   (boolean) → Controla si el menú móvil (drawer) está abierto.
 * - scrolled (boolean) → true cuando el usuario ha hecho scroll > 60px.
 *                        Activa el fondo oscuro del navbar.
 *
 * COMPORTAMIENTO DE SCROLL:
 * ─────────────────────────
 * Se usa un useEffect con addEventListener('scroll') para detectar la posición.
 * El listener se limpia en el return del useEffect (cleanup) para evitar
 * memory leaks cuando el componente se desmonta.
 *
 * CAMBIO DE IDIOMA:
 * ─────────────────
 * La función toggleLang() llama a i18n.changeLanguage() alternando entre
 * 'es' y 'en'. Todos los componentes que usen useTranslation() se
 * re-renderizan automáticamente con el nuevo idioma.
 *
 * RESPONSIVE:
 * ───────────
 * - xl (≥1280px): Menú horizontal completo visible.
 * - < xl:         Menú oculto, se muestra botón hamburguesa (☰).
 *                 El drawer se desliza desde la derecha con translate-x.
 *
 * ACCESIBILIDAD:
 * ──────────────
 * - El overlay oscuro detrás del drawer cierra el menú al hacer click.
 * - Los botones tienen iconos con texto visible o atributos implícitos.
 * =============================================================================
 */

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X, Globe } from 'lucide-react'

/**
 * navLinks — Array de objetos que definen cada enlace de navegación.
 * - key:  Clave de traducción en los archivos JSON (ej: 'nature' → t('nav.nature'))
 * - href: ID del anchor de la sección destino (scroll suave via CSS)
 */
const navLinks = [
  { key: 'nature',      href: '#naturaleza' },
  { key: 'gastronomy',  href: '#gastronomia' },
  { key: 'apiculture',  href: '#apiturismo' },
  { key: 'agriculture', href: '#agricultura' },
  { key: 'culture',     href: '#cultura' },
  { key: 'events',      href: '#ferias' },
  { key: 'lodging',     href: '#hospedaje' },
  { key: 'realEstate',  href: '#inmobiliario' },
  { key: 'contact',     href: '#contacto' },
]

export default function Navbar() {
  const { t, i18n } = useTranslation()

  /** isOpen: controla visibilidad del drawer móvil */
  const [isOpen,   setIsOpen]   = useState(false)

  /** scrolled: true si el usuario ha scrolleado más de 60px desde el top */
  const [scrolled, setScrolled] = useState(false)

  /**
   * Efecto de scroll: agrega listener al montar, lo limpia al desmontar.
   * El umbral de 60px da tiempo para que el hero sea visible sin el navbar
   * cambiando demasiado rápido.
   */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll) // cleanup
  }, [])

  /**
   * toggleLang — Alterna el idioma activo entre Español e Inglés.
   * i18n.changeLanguage() actualiza el contexto global de React i18next.
   */
  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')

  return (
    <>
      {/*
       * nav — Barra principal fija (position: fixed, z-index: 50).
       * Cuando scrolled=true: aplica bg-black/80 con blur para legibilidad.
       * Cuando scrolled=false: transparente para no tapar el hero.
       */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* ── Logo ──
           * El cuadro verde rotado 45° crea un rombo/diamante.
           * En hover rota a 12° para dar dinamismo visual.
           */}
          <a href="#inicio" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-green-500 rounded-xl rotate-45 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10 flex items-center justify-center w-full h-full text-black font-black text-base">D</span>
            </div>
            <div className="leading-none">
              <div className="font-serif font-bold text-white text-lg">Durania</div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">Norte de Santander</div>
            </div>
          </a>

          {/* ── Links de escritorio ──
           * Solo visible en pantallas xl (≥1280px).
           * Cada link tiene una línea verde animada debajo (scale-x 0→1 en hover).
           */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                className="relative px-3 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 group"
              >
                {t(`nav.${link.key}`)}
                {/* Línea subrayada animada: scaleX 0 → 1 en hover */}
                <span className="absolute bottom-0 left-3 right-3 h-px bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </div>

          {/* ── Controles derechos: idioma + CTA + botón hamburguesa ── */}
          <div className="flex items-center gap-3">

            {/* Botón de idioma — muestra el idioma al que se puede CAMBIAR */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/20 text-white/70 hover:border-green-400 hover:text-green-400 text-sm font-medium transition-all duration-200"
            >
              <Globe className="w-3.5 h-3.5" />
              {i18n.language === 'es' ? 'EN' : 'ES'}
            </button>

            {/* CTA "Contacto" — visible solo en md+ */}
            <a href="#contacto" className="hidden md:inline-flex items-center bg-green-500 hover:bg-green-400 text-black font-bold text-sm px-5 py-2 rounded-full transition-all duration-200">
              {t('nav.contact')}
            </a>

            {/* Botón hamburguesa — solo en < xl */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="xl:hidden w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      {/*
       * Drawer móvil — Panel lateral que se desliza desde la derecha.
       * Estructura de dos capas:
       *   1. Overlay oscuro (inset-0) → cierra el drawer al hacer click fuera.
       *   2. Panel blanco (w-72) → contiene los links y el botón de idioma.
       *
       * La visibilidad se controla con `visibility` (no display:none) para
       * que la transición de opacidad/translate funcione correctamente.
       */}
      <div className={`fixed inset-0 z-40 xl:hidden transition-all duration-400 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Overlay — cierra el drawer al hacer click */}
        <div
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        {/* Panel del drawer — se desliza con translateX */}
        <div className={`absolute top-0 right-0 bottom-0 w-72 bg-[#0d0d0d] border-l border-white/10 p-8 transition-transform duration-400 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsOpen(false)} className="text-white/50 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <nav className="space-y-1">
            {navLinks.map(link => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)} // Cierra el drawer al navegar
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                {t(`nav.${link.key}`)}
              </a>
            ))}
          </nav>
          {/* Botón de idioma en el drawer */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <button onClick={toggleLang} className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/20 text-white/60 hover:text-green-400 hover:border-green-400 transition-all">
              <Globe className="w-4 h-4" />
              {i18n.language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
