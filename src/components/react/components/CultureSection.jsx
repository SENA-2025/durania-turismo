import { useTranslation } from 'react-i18next'
import { Landmark } from 'lucide-react'

export default function CultureSection() {
  const { t } = useTranslation()
  const sitesList = t('sections.culture.sites.list', { returnObjects: true })

  return (
    <section id="cultura" className="section-dark relative overflow-hidden">
      {/* BG */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="pill bg-purple-500/10 border border-purple-500/30 text-purple-400 mb-4 inline-flex mx-auto">
            🏛️ Patrimonio Cultural
          </span>
          <h2 className="font-serif font-black text-white text-5xl md:text-6xl" style={{ lineHeight: 1 }}>
            {t('sections.culture.title')}
          </h2>
        </div>

        {/* Timeline + images layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Historia — big card */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden group" style={{ minHeight: '400px' }}>
            <img
              src="https://images.unsplash.com/photo-1533130061792-64b345e4a833?w=1000&q=85"
              alt="Historia Durania"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="font-serif font-bold text-white text-2xl mb-3">{t('sections.culture.history.title')}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{t('sections.culture.history.desc')}</p>
            </div>
          </div>

          {/* Sites list */}
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 mb-4">
              <div className="flex items-center gap-2 mb-5">
                <Landmark className="w-5 h-5 text-purple-400" />
                <h3 className="text-white font-bold">{t('sections.culture.sites.title')}</h3>
              </div>
              <ul className="space-y-3">
                {sitesList.map((site, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <span className="w-6 h-6 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-400 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-white/50 text-sm group-hover/item:text-white/80 transition-colors">{site}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traditions image */}
            <div className="relative rounded-2xl overflow-hidden group" style={{ height: '180px' }}>
              <img
                src="https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&q=85"
                alt="Tradiciones"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-bold">{t('sections.culture.traditions.title')}</h3>
                <p className="text-white/50 text-xs mt-1 line-clamp-2">{t('sections.culture.traditions.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
