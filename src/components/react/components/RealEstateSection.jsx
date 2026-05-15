import { useTranslation } from 'react-i18next'
import { LandPlot, TreePine, Home, MapPin, ArrowRight } from 'lucide-react'

const icons   = [LandPlot, TreePine, MapPin, Home]
const accents = ['#4ade80', '#34d399', '#22d3ee', '#a3e635']

export default function RealEstateSection() {
  const { t } = useTranslation()
  const types = t('sections.realEstate.types', { returnObjects: true })

  return (
    <section id="inmobiliario" className="section-light relative overflow-hidden">
      {/* Full-width bg image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80"
          alt="Paisaje Durania"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111111] via-[#111111]/80 to-[#111111]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="pill bg-lime-500/10 border border-lime-500/30 text-lime-400 mb-4 inline-flex mx-auto">
            🏘️ Bienes Raíces Rurales
          </span>
          <h2 className="font-serif font-black text-white text-5xl md:text-6xl mb-4" style={{ lineHeight: 1 }}>
            {t('sections.realEstate.title')}
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">{t('sections.realEstate.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {types.map((type, i) => {
            const Icon = icons[i]
            const accent = accents[i]
            return (
              <div
                key={i}
                className="group glass rounded-2xl p-6 card-hover cursor-pointer border border-white/5 hover:border-white/10"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{ background: accent + '15', border: `1px solid ${accent}30` }}
                >
                  <Icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" style={{ color: accent }} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{type.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{type.desc}</p>
                <div
                  className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ color: accent }}
                >
                  Ver más <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center">
          <p className="text-white/30 text-sm mb-6">{t('sections.realEstate.cta')}</p>
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-black font-bold px-10 py-4 rounded-full hover:bg-green-400 transition-all duration-300"
          >
            Consultar propiedades
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
