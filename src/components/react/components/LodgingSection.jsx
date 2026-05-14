import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=700&q=85',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=85',
  'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?w=700&q=85',
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=700&q=85',
]

export default function LodgingSection() {
  const { t } = useTranslation()
  const types = t('sections.lodging.types', { returnObjects: true })

  return (
    <section id="hospedaje" className="section-dark relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="pill bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mb-4 inline-flex">
              🏡 Alojamiento
            </span>
            <h2 className="font-serif font-black text-white text-5xl md:text-6xl" style={{ lineHeight: 1 }}>
              {t('sections.lodging.title')}
            </h2>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 glass border border-white/20 hover:border-cyan-400/50 text-white px-6 py-3 rounded-full transition-all text-sm font-medium">
            Consultar disponibilidad
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {types.map((type, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
              style={{ height: i % 2 === 0 ? '320px' : '260px' }}
            >
              <img
                src={images[i]}
                alt={type.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-white font-bold text-base mb-1">{type.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{type.desc}</p>
              </div>
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-500/30 transition-all duration-300" />
            </div>
          ))}
        </div>

        <p className="text-white/30 text-center text-sm mt-8">{t('sections.lodging.contact')}</p>
      </div>
    </section>
  )
}
