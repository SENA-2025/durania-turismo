import { useTranslation } from 'react-i18next'
import { Footprints, Bird, Waves, Droplets, CloudRain } from 'lucide-react'

const cards = [
  {
    key: 'hiking',
    icon: Footprints,
    image: '/img/panoramas/naturaleza-sendero-1.jpg',
    video: '/img/senderismo-video.mp4',
    accent: '#4ade80',
    big: true,
  },
  {
    key: 'birds',
    icon: Bird,
    image: '/img/ave-durania.jpeg',
    accent: '#22d3ee',
  },
  {
    key: 'rivers',
    icon: Waves,
    image: '/img/panoramas/laguna-2.jpg',
    accent: '#60a5fa',
  },
  {
    key: 'lagoon',
    icon: Droplets,
    image: '/img/panoramas/laguna-1.jpg',
    video: '/img/laguna-video.mp4',
    accent: '#34d399',
  },
  {
    key: 'waterfall',
    icon: CloudRain,
    image: 'https://images.pexels.com/photos/2743287/pexels-photo-2743287.jpeg?w=800',
    accent: '#a78bfa',
  },
]

export default function NatureSection() {
  const { t } = useTranslation()

  return (
    <section id="naturaleza" className="section-dark">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="pill bg-green-500/10 border border-green-500/30 text-green-400 mb-4 inline-flex">
            🌿 Ecoturismo
          </span>
          <h2 className="font-serif font-black text-white text-5xl md:text-6xl mb-4" style={{ lineHeight: 1 }}>
            {t('sections.nature.title')}
          </h2>
          <p className="text-white/50 text-lg max-w-xl">{t('sections.nature.subtitle')}</p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {cards.map(({ key, icon: Icon, image, video, accent, big }) => (
            <div
              key={key}
              className={`relative overflow-hidden rounded-3xl card-hover group cursor-pointer ${big ? 'md:col-span-6 md:row-span-2 min-h-[480px]' : 'md:col-span-6 lg:col-span-3 min-h-[220px]'}`}
            >
              {/* Video o imagen de fondo */}
              {video ? (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              ) : (
                <img
                  src={image}
                  alt={t(`sections.nature.${key}.title`)}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

              {/* Accent glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(circle at bottom left, ${accent}, transparent 70%)` }}
              />

              {/* Border glow */}
              <div
                className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-opacity-60 transition-all duration-500"
                style={{ borderColor: accent + '40' }}
              />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-3"
                  style={{ background: accent + '20', border: `1px solid ${accent}40` }}
                >
                  <Icon className="w-5 h-5" style={{ color: accent }} />
                </div>
                <h3 className="font-bold text-white text-xl mb-2">
                  {t(`sections.nature.${key}.title`)}
                </h3>
                <p className={`text-white/60 text-sm leading-relaxed transition-all duration-300 ${big ? 'max-h-40' : 'max-h-0 overflow-hidden group-hover:max-h-40'}`}>
                  {t(`sections.nature.${key}.desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
