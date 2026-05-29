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

/**
 * slides — Configuración de las 3 imágenes del slideshow.
 * - img:   URL de la imagen de fondo en alta resolución.
 * - label: Texto descriptivo que aparece en el badge de ubicación.
 */
const slides = [
  {
    img: '/img/hero-1.jpg',
    label: 'Durania, Norte de Santander',
  },
  {
    img: '/img/hero-2.jpg',
    label: 'Parque Principal · Durania',
  },
  {
    img: '/img/hero-3.jpg',
    label: 'Entrada a Durania',
  },
]

export default function Hero() {
  const { t } = useTranslation()

  /** Índice del slide actualmente visible */
  const [current, setCurrent] = useState(0)

  /**
   * loaded: false al inicio para hacer fade-in del contenido al cargar.
   * Se pone true en el primer useEffect (después del primer render).
   */
  const [loaded, setLoaded] = useState(false)

  /**
   * intervalRef: guarda la referencia al setInterval para poder
   * limpiarlo en el cleanup del useEffect y evitar memory leaks.
   */
  const intervalRef = useRef(null)

  useEffect(() => {
    // Activa el fade-in del contenido central al montar el componente
    setLoaded(true)

    // Avanza al siguiente slide cada 5 segundos (loop circular con módulo)
    intervalRef.current = setInterval(() => {
      setCurrent(p => (p + 1) % slides.length)
    }, 5000)

    // Cleanup: limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalRef.current)
  }, []) // [] → solo se ejecuta una vez al montar

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">

      {/* ── Slideshow de imágenes ──────────────────────────────────────────
       * Cada slide es una capa absoluta que ocupa todo el section.
       * La opacidad controla cuál está visible: 1 = activo, 0 = oculto.
       * El efecto de zoom se controla con transform: scale() en el img.
       */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.img}
            alt={s.label}
            className="w-full h-full object-cover"
            style={{
              /* Slide activo: zoom más cercano. Inactivo: más alejado.
               * La transición de 6s da el efecto "Ken Burns" suave. */
              transform: i === current ? 'scale(1.05)' : 'scale(1.1)',
              transition: 'transform 6s ease',
            }}
          />
        </div>
      ))}

      {/* ── Overlays de gradiente ────────────────────────────────────────────
       * Dos capas de gradiente para asegurar legibilidad del texto:
       * 1. Vertical: oscuro arriba y muy oscuro abajo (para el contenido).
       * 2. Horizontal: oscuro a la izquierda (refuerza el texto centrado).
       */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

      {/* ── Orbes decorativos ────────────────────────────────────────────────
       * Círculos grandes con blur extremo (blur-3xl) que dan profundidad.
       * animate-float: suben y bajan suavemente en loop infinito.
       * delay-300 en el segundo orbe para que no estén sincronizados.
       */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl animate-float delay-300" />

      {/* ── Indicadores de slide (puntos) ───────────────────────────────────
       * El punto activo se expande horizontalmente (w-8 h-2 = pastilla).
       * Los inactivos son cuadrados pequeños (w-2 h-2 = punto).
       * Haciendo click se salta directamente al slide correspondiente.
       */}
      <div className="absolute top-8 right-8 flex gap-2 z-20">
        {slides.map((_s, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-8 h-2 bg-green-400' : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* ── Badge de ubicación del slide actual ─────────────────────────── */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-20">
        <span className="glass pill text-white/70 text-xs">
          <MapPin className="w-3 h-3 text-green-400" />
          {slides[current].label} · Durania, Norte de Santander
        </span>
      </div>

      {/* ── Contenido central ────────────────────────────────────────────────
       * La opacidad del contenedor cambia de 0→1 al montar (var: loaded).
       * Cada elemento hijo tiene su propia animación fadeUp con delays
       * escalonados para crear una secuencia de aparición natural:
       *   badge (0s) → título (0s) → subtítulo (0.2s) → desc (0.3s) → botones (0.4s)
       */}
      <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>

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
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-400">
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
      <a href="#naturaleza" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent group-hover:h-16 transition-all" />
      </a>

      {/* ── Barra de estadísticas ────────────────────────────────────────────
       * Anclada al fondo absoluto del Hero.
       * glass-dark + divide-x crea la separación entre columnas.
       * Los 4 datos clave dan contexto geográfico e informativo al visitante.
       */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
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
