import { useTranslation } from 'react-i18next'
import { CheckCircle, ArrowRight } from 'lucide-react'

/* Imágenes verificadas visualmente — apicultura real (Pexels / Unsplash) */
const BEEKEEPER_IMG  = '/img/panoramas/apicultura-1.jpg'
const HONEYCOMB_IMG  = 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?w=600'
const BEE_FLOWER_IMG = 'https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?w=600'

export default function ApicultureSection() {
  const { t } = useTranslation()
  const includesList = t('sections.apiculture.includesList', { returnObjects: true })

  return (
    <section id="apiturismo" className="section-dark relative overflow-hidden">
      {/* BG glow ámbar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Bloque visual izquierdo ── */}
          <div className="relative">

            {/* Imagen principal — apicultor inspeccionando colmena */}
            <div className="relative rounded-3xl overflow-hidden" style={{ height: '520px' }}>
              <img
                src={BEEKEEPER_IMG}
                alt="Apicultor inspeccionando colmena en Durania"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-transparent" />

              {/* Badge precio */}
              <div className="absolute bottom-6 left-6 glass rounded-2xl p-4 max-w-[220px]">
                <div className="text-amber-400 text-3xl font-black mb-0.5">$145k</div>
                <div className="text-white/60 text-xs">Tour adulto incluye todo</div>
              </div>
            </div>

            {/* Tarjeta flotante — certificado */}
            <div className="absolute -top-6 -right-6 glass rounded-2xl p-4 w-44 animate-float z-20">
              <div className="text-3xl mb-1">🐝</div>
              <div className="text-white font-bold text-sm">Guardián de</div>
              <div className="text-amber-400 font-bold text-sm">las Abejas</div>
              <div className="text-white/40 text-xs mt-1">Certificado oficial</div>
            </div>

            {/* Fila de miniaturas — abeja y panal */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="rounded-2xl overflow-hidden h-28">
                <img
                  src={BEE_FLOWER_IMG}
                  alt="Abeja polinizando flor"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden h-28">
                <img
                  src={HONEYCOMB_IMG}
                  alt="Panal de miel natural"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Borde glow ámbar */}
            <div className="absolute inset-0 rounded-3xl border border-amber-500/20 pointer-events-none" />
          </div>

          {/* ── Contenido derecho ── */}
          <div>
            <span className="pill bg-amber-500/10 border border-amber-500/30 text-amber-400 mb-6 inline-flex">
              🍯 Apiturismo · Durania
            </span>

            <h2 className="font-serif font-black text-white text-4xl md:text-5xl mb-6" style={{ lineHeight: 1.05 }}>
              {t('sections.apiculture.title')}
            </h2>

            <p className="text-white/50 leading-relaxed mb-8">
              {t('sections.apiculture.what.desc')}
            </p>

            {/* Detalles del tour */}
            <div className="glass rounded-2xl p-5 mb-8">
              <h3 className="text-white font-bold mb-3">{t('sections.apiculture.tour.title')}</h3>
              <p className="text-white/50 text-sm mb-4">{t('sections.apiculture.tour.desc')}</p>
              <div className="flex gap-3 flex-wrap">
                <span className="pill bg-amber-500/20 border border-amber-500/40 text-amber-300">
                  {t('sections.apiculture.tour.price')}
                </span>
                <span className="pill bg-green-500/20 border border-green-500/40 text-green-300">
                  {t('sections.apiculture.tour.priceKid')}
                </span>
              </div>
            </div>

            {/* Lista de incluidos */}
            <h4 className="text-white/60 text-xs uppercase tracking-widest mb-4">
              {t('sections.apiculture.includes')}
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {includesList.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a href="#contacto" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 glow-amber">
              Reservar tour
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
