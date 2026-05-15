import { useTranslation } from 'react-i18next'

// Local Assets
import imgMute from '../../../assets/gastronomy/mute-norte-santandereano.jpg'
import imgCarnes from '../../../assets/gastronomy/carnes-vara.jpg'
import imgCabrito from '../../../assets/gastronomy/cabrito-asado.jpg'
import imgCafe from '../../../assets/gastronomy/cafe-durania.jpg'
import imgHoney from '../../../assets/gastronomy/honey-products.jpg'
import imgFishRio from '../../../assets/gastronomy/river-fish.jpg'

const images = [
  imgMute.src,
  imgCarnes.src,
  imgCabrito.src,
  imgCafe.src,
  imgHoney.src,
  imgFishRio.src,
]

export default function GastronomySection() {
  const { t } = useTranslation()
  const items = t('sections.gastronomy.items', { returnObjects: true })

  return (
    <section id="gastronomia" className="section-light relative overflow-hidden">
      {/* BG decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="pill bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-4 inline-flex">
              🍽️ Sabores Locales
            </span>
            <h2 className="font-serif font-black text-white text-5xl md:text-6xl" style={{ lineHeight: 1 }}>
              {t('sections.gastronomy.title')}
            </h2>
          </div>
          <p className="text-white/40 max-w-xs text-sm leading-relaxed">
            {t('sections.gastronomy.subtitle')}
          </p>
        </div>

        {/* Grid — 3 big + 3 small */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer"
              style={{ height: i < 3 ? '340px' : '240px' }}
            >
              <img
                src={images[i]}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-500/80 flex items-center justify-center text-black font-black text-sm">
                {i + 1}
              </div>

              {/* Text */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-bold text-white text-lg mb-1">{item.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {item.desc}
                </p>
              </div>

              {/* Amber border on hover */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-500/40 transition-all duration-400" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
