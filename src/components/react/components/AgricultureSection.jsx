import { useTranslation } from 'react-i18next'
import { Sprout, Beef, Fish, TreePine } from 'lucide-react'

// Local Assets
import imgCattle from '../../../assets/agriculture/cattle.jpg'
import imgFishFarming from '../../../assets/agriculture/fish-farming.jpg'

const icons   = [Sprout, Beef, Fish, TreePine]
const accents = ['#4ade80', '#f87171', '#60a5fa', '#a3e635']
const images  = [
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=85',
  imgCattle.src,
  imgFishFarming.src,
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=85',
]

export default function AgricultureSection() {
  const { t } = useTranslation()
  const items = t('sections.agriculture.items', { returnObjects: true })

  return (
    <section id="agricultura" className="section-light relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/30 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left sticky header */}
          <div className="lg:sticky lg:top-32">
            <span className="pill bg-green-500/10 border border-green-500/30 text-green-400 mb-6 inline-flex">
              🌾 Agroturismo
            </span>
            <h2 className="font-serif font-black text-white text-5xl md:text-6xl mb-6" style={{ lineHeight: 1 }}>
              {t('sections.agriculture.title')}
            </h2>
            <p className="text-white/40 leading-relaxed mb-8">{t('sections.agriculture.subtitle')}</p>

            {/* Big showcase image */}
            <div className="rounded-3xl overflow-hidden h-72">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=85"
                alt="Campo Durania"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: cards */}
          <div className="space-y-4">
            {items.map((item, i) => {
              const Icon = icons[i]
              const accent = accents[i]
              return (
                <div key={i} className="group relative rounded-2xl overflow-hidden card-hover" style={{ height: '200px' }}>
                  <img src={images[i]} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-center max-w-sm">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: accent + '20', border: `1px solid ${accent}50` }}>
                        <Icon className="w-4 h-4" style={{ color: accent }} />
                      </div>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-all duration-300" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
