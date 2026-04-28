/**
 * =============================================================================
 * Stats.jsx — Banda de estadísticas y marquee de categorías
 * =============================================================================
 *
 * Sección compacta ubicada justo debajo del Hero. Sirve como separador
 * visual y comunicador de datos clave sobre Durania.
 *
 * ESTRUCTURA:
 * ───────────
 * 1. MARQUEE (banda desplazante)
 *    - Lista de categorías turísticas con emojis que se desplaza
 *      horizontalmente en loop continuo (30s por ciclo).
 *    - El contenido se repite 4 veces para que el loop sea seamless:
 *      cuando termina el primer bloque, el segundo ya empieza,
 *      sin salto visual perceptible.
 *    - overflow-hidden en el contenedor oculta lo que está fuera del viewport.
 *
 * 2. GRID DE ESTADÍSTICAS
 *    - 4 métricas en grid 2×2 (móvil) o 1×4 (desktop).
 *    - Los valores son hardcoded (no traducibles) porque son números iguales
 *      en ambos idiomas.
 *    - Las etiquetas sí usan t() para traducirse (ej: "km from Cúcuta" en EN).
 *    - gap-px + bg-white/5 crea un efecto de "rejilla" entre celdas sin
 *      necesidad de borders explícitos.
 *
 * COLORES POR MÉTRICA:
 * ────────────────────
 * - 47 km   → text-green-400  (distancia — concepto de cercanía/acceso)
 * - 80+     → text-cyan-400   (aves — concepto de naturaleza/cielo)
 * - 1.200   → text-amber-400  (altitud — concepto de montaña/calor)
 * - 10+     → text-purple-400 (senderos — concepto de exploración)
 * =============================================================================
 */

import { useTranslation } from 'react-i18next'

/**
 * items — Datos de las 4 estadísticas del municipio.
 * - val:   Valor numérico a mostrar (string formateado).
 * - label: Clave de traducción para la etiqueta descriptiva.
 * - color: Clase de Tailwind para el color del valor.
 */
const items = [
  { val: '47 km', label: 'stats.kmCucuta',  color: 'text-green-400'  },
  { val: '80+',   label: 'stats.birds',     color: 'text-cyan-400'   },
  { val: '1.200', label: 'stats.altitude',  color: 'text-amber-400'  },
  { val: '10+',   label: 'stats.trails',    color: 'text-purple-400' },
]

export default function Stats() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#0a0a0a] py-6 border-y border-white/5">

      {/* ── Marquee de categorías ─────────────────────────────────────────────
       * Contenedor con overflow-hidden para clipear el contenido animado.
       * El div interior tiene flex + whitespace-nowrap para que los items
       * no rompan línea y la animación sea horizontal.
       *
       * Truco del loop seamless:
       * - El contenido se duplica 4 veces con flatMap().
       * - La animación marquee mueve el elemento -50% de su ancho total.
       * - Cuando llega al 50%, visualmente está en el mismo punto de inicio.
       * - Resultado: loop infinito sin saltos.
       */}
      <div className="overflow-hidden mb-6">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...Array(4)].flatMap(() => [
            '🌿 Senderismo',
            '🐝 Apiturismo',
            '☕ Café de Montaña',
            '🦜 Avistamiento de Aves',
            '🌊 Ríos y Pozos',
            '🌾 Agroturismo',
            '🏡 Hospedaje Rural',
            '🎉 Ferias & Tradiciones',
          ]).map((item, i) => (
            <span key={i} className="text-white/30 text-sm font-medium">{item}</span>
          ))}
        </div>
      </div>

      {/* ── Grid de estadísticas ──────────────────────────────────────────────
       * gap-px + bg-white/5 en el contenedor crea líneas divisorias sutiles
       * entre celdas sin necesidad de borders individuales.
       * Cada celda tiene su propio bg-[#0d0d0d] para "tapar" el bg del grid.
       */}
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {items.map(({ val, label, color }) => (
            <div key={label} className="bg-[#0d0d0d] py-8 text-center">
              {/* Valor numérico con color diferenciado por métrica */}
              <div className={`text-4xl font-black font-serif ${color} mb-1`}>{val}</div>
              {/* Etiqueta traducida en mayúsculas con tracking amplio */}
              <div className="text-white/40 text-xs uppercase tracking-wider">{t(label)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
