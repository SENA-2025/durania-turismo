/**
 * =============================================================================
 * Hero.jsx — Sección principal de bienvenida (pantalla completa)
 * =============================================================================
 *
 * Es la primera sección visible al entrar al sitio. Ocupa el 100% del
 * alto de la pantalla (min-h-screen) y sirve como carta de presentación
 * visual de Durania.
 *
 * CARACTERÍSTICAS:
 * ────────────────
 * 1. SLIDESHOW AUTOMÁTICO
 *    - 3 imágenes de alta resolución rotan cada 5 segundos.
 *    - La imagen activa hace un zoom-out suave (scale 1.1 → 1.05) para
 *      dar sensación de movimiento sin ser distractora.
 *    - Las imágenes inactivas permanecen con opacity: 0 (CSS transition).
 *    - El intervalo se limpia al desmontar el componente (cleanup).
 *
 * 2. INDICADORES DE SLIDE
 *    - Puntos en la esquina superior derecha: el activo se estira (w-8).
 *    - Clickeables para saltar a cualquier slide manualmente.
 *
 * 3. ETIQUETA DE UBICACIÓN
 *    - Badge con efecto glass en la parte superior central.
 *    - Muestra el nombre del slide actual + "Durania, Norte de Santander".
 *
 * 4. CONTENIDO CENTRAL
 *    - Badge superior verde: categoría del destino.
 *    - Título "Durania" con fuente serif en tamaño responsivo (clamp).
 *    - Subtítulo "La Tacita de Plata" con gradiente dorado animado.
 *    - Descripción traducida (i18n).
 *    - Dos CTAs: "Explorar destinos" y "Ver Apiturismo".
 *    - Todos con animaciones fadeUp escalonadas (delay-*).
 *
 * 5. ORBES DECORATIVOS
 *    - Círculos borrosos de color (verde y ámbar) flotando con animate-float.
 *    - Puramente decorativos, añaden profundidad visual.
 *
 * 6. INDICADOR DE SCROLL
 *    - Línea vertical que crece en hover, invitando a scrollear.
 *
 * 7. BARRA DE ESTADÍSTICAS
 *    - Anclada al fondo de la sección con glass-dark.
 *    - 4 métricas clave del municipio: distancia, aves, altitud, senderos.
 *
 * ESTADOS:
 * ────────
 * - current (number) → Índice del slide actualmente visible (0, 1 o 2).
 * - loaded  (boolean)→ Se pone true al montar; activa la transición de
 *                      opacidad del contenido central (fade-in al cargar).
 *
 * IMÁGENES USADAS:
 * ────────────────
 * - Unsplash (licencia libre): naturaleza y café
 * - Wikimedia Commons (dominio público): Arroyo La Barca, Durania
 * =============================================================================
 */

import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Play, MapPin } from 'lucide-react'

const panoramas = [
  { img: '/img/hero-1.jpg',  label: 'Durania, Norte de Santander' },
  { img: '/img/hero-2.jpg',  label: 'Parque Principal · Durania'  },
  { img: '/img/hero-3.jpg',  label: 'Entrada a Durania'           },
]

export default function Hero() {
  const { t } = useTranslation()
  const viewerRef  = useRef(null)
  const pannellumRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const [loaded,  setLoaded]  = useState(false)

  useEffect(() => {
    setLoaded(true)
    const interval = setInterval(() => {
      setCurrent(p => (p + 1) % panoramas.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (!viewerRef.current || !window.pannellum) return

    if (pannellumRef.current) {
      pannellumRef.current.destroy()
      pannellumRef.current = null
    }

    viewerRef.current.innerHTML = ''

    pannellumRef.current = window.pannellum.viewer(viewerRef.current, {
      type: 'equirectangular',
      panorama: panoramas[current].img,
      autoLoad: true,
      autoRotate: -1.5,
      autoRotateInactivityDelay: 2000,
      showControls: false,
      mouseZoom: false,
      compass: false,
      strings: { loadingLabel: '' },
    })

    return () => {
      if (pannellumRef.current) {
        pannellumRef.current.destroy()
        pannellumRef.current = null
      }
    }
  }, [current])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* Visor 360° a pantalla completa */}
      <div ref={viewerRef} className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }} />

      {/* Overlays de gradiente para legibilidad del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90 pointer-events-none" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent pointer-events-none" style={{ zIndex: 1 }} />

      {/* Indicadores de panorama */}
      <div className="absolute top-8 right-8 flex gap-2" style={{ zIndex: 100, pointerEvents: 'auto' }}>
        {panoramas.map((_p, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-green-400' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Badge de ubicación */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 pointer-events-none" style={{ zIndex: 20 }}>
        <span className="glass pill text-white/70 text-xs">
          <MapPin className="w-3 h-3 text-green-400" />
          {panoramas[current].label}
        </span>
      </div>

      {/* ── Contenido central ────────────────────────────────────────────────
       * La opacidad del contenedor cambia de 0→1 al montar (var: loaded).
       * Cada elemento hijo tiene su propia animación fadeUp con delays
       * escalonados para crear una secuencia de aparición natural:
       *   badge (0s) → título (0s) → subtítulo (0.2s) → desc (0.3s) → botones (0.4s)
       */}
      <div className={`relative text-center px-4 max-w-5xl mx-auto transition-all duration-700 pointer-events-none ${loaded ? 'opacity-100' : 'opacity-0'}`} style={{ zIndex: 10 }}>

        {/* Badge categoría */}
        <div className="pill bg-green-500/20 border border-green-500/40 text-green-400 mx-auto mb-6 animate-fade-in">
          ✦ Turismo de Naturaleza · Colombia
        </div>

        {/* Título principal — tamaño responsivo con clamp() */}
        <h1 className="font-serif font-black text-white mb-2 animate-fade-up" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.03em' }}>
          Durania
        </h1>

        {/* Subtítulo con gradiente dorado */}
        <p className="font-serif italic text-3xl md:text-4xl gradient-text-gold mb-6 animate-fade-up delay-200">
          "La Tacita de Plata"
        </p>

        {/* Descripción traducida */}
        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-300">
          {t('hero.description')}
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400 pointer-events-auto">
          {/* CTA principal: va a la sección de Naturaleza */}
          <a
            href="#naturaleza"
            className="group relative overflow-hidden bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2 glow-green"
          >
            <span className="relative z-10">{t('hero.cta')}</span>
            <ChevronDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
          </a>
          {/* CTA secundario: va directamente a Apiturismo */}
          <a
            href="#apiturismo"
            className="group glass border border-white/20 hover:border-amber-400/50 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center gap-2"
          >
            <Play className="w-4 h-4 text-amber-400" />
            Ver Apiturismo
          </a>
        </div>
      </div>

      {/* ── Indicador de scroll ──────────────────────────────────────────────
       * Línea vertical que crece (h-12 → h-16) al hacer hover.
       * Invita visualmente al usuario a hacer scroll hacia abajo.
       */}
      <a href="#naturaleza" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group" style={{ zIndex: 20 }}>
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent group-hover:h-16 transition-all" />
      </a>

      {/* ── Barra de estadísticas ────────────────────────────────────────────
       * Anclada al fondo absoluto del Hero.
       * glass-dark + divide-x crea la separación entre columnas.
       * Los 4 datos clave dan contexto geográfico e informativo al visitante.
       */}
      <div className="absolute bottom-0 left-0 right-0" style={{ zIndex: 20 }}>
        <div className="glass-dark grid grid-cols-4 divide-x divide-white/10">
          {[
            { val: '47 km',  label: 'de Cúcuta'     },
            { val: '80+',    label: 'Especies aves'  },
            { val: '1.200',  label: 'msnm'           },
            { val: '10+',    label: 'Senderos'        },
          ].map(({ val, label }) => (
            <div key={label} className="py-4 text-center">
              <div className="text-green-400 font-bold text-xl">{val}</div>
              <div className="text-white/50 text-xs">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
