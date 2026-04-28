import { useTranslation } from 'react-i18next'
import { Calendar } from 'lucide-react'

const images = [
  'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=700&q=85',
  'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=700&q=85',
  'https://images.unsplash.com/photo-1471943038391-0c3a2a8f7f5d?w=700&q=85',
  'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=700&q=85',
]
const accents = ['#f87171','#4ade80','#fbbf24','#34d399']

export default function EventsSection() {
  const { t } = useTranslation()
  const items = t('sections.events.items', { returnObjects: true })

  return (
    <section id="ferias" className="section-light relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16">
          <span className="pill bg-red-500/10 border border-red-500/30 text-red-400 mb-4 inline-flex">
            🎉 Ferias & Festividades
          </span>
          <h2 className="font-serif font-black text-white text-5xl md:text-6xl" style={{ lineHeight: 1 }}>
            {t('sections.events.title')}
          </h2>
        </div>

        {/* Horizontal scroll cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden card-hover cursor-pointer" style={{ height: '420px' }}>
              <img
                src={images[i]}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              {/* Accent bar on top */}
              <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accents[i] }} />

              {/* Month badge */}
              <div
                className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{ background: accents[i] + '20', border: `1px solid ${accents[i]}50`, color: accents[i] }}
              >
                <Calendar className="w-3 h-3" />
                {item.month}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif font-bold text-white text-xl mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-400">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
