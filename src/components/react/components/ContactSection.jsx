import { useTranslation } from 'react-i18next'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContactSection() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent('Consulta Turismo Durania')
    const body = encodeURIComponent(`Nombre: ${form.name}\n\n${form.message}`)
    window.location.href = `mailto:turismo@durania.gov.co?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacto" className="section-dark relative overflow-hidden">
      {/* Gradient bg */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/40 via-transparent to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/8 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="pill bg-green-500/10 border border-green-500/30 text-green-400 mb-4 inline-flex mx-auto">
            📍 Contáctanos
          </span>
          <h2 className="font-serif font-black text-white text-5xl md:text-6xl mb-4" style={{ lineHeight: 1 }}>
            {t('sections.contact.title')}
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">{t('sections.contact.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: MapPin,  label: t('sections.contact.address'), sub: '47 km al suroeste de Cúcuta', color: 'text-green-400' },
              { icon: Phone,   label: t('sections.contact.phone'),   sub: '+57 (07) 574-XXXX',          color: 'text-cyan-400'  },
              { icon: Mail,    label: t('sections.contact.email'),   sub: 'turismo@durania.gov.co',     color: 'text-amber-400' },
              { icon: Clock,   label: t('sections.contact.hours'),   sub: '',                           color: 'text-purple-400'},
            ].map(({ icon: Icon, label, sub, color }) => (
              <div key={label} className="glass rounded-2xl p-5 flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${color} bg-white/5`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{label}</div>
                  {sub && <div className="text-white/40 text-xs mt-0.5">{sub}</div>}
                </div>
              </div>
            ))}

            {/* Map */}
            <div className="rounded-2xl overflow-hidden" style={{ height: '180px' }}>
              <iframe
                title="Durania mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31623.!2d-72.6!3d7.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e664f1e16dcfe4f%3A0x5b56de3d406bfea7!2sDurania%2C%20Norte%20de%20Santander!5e0!3m2!1ses!2sco!4v1620000000000!5m2!1ses!2sco"
                width="100%" height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                allowFullScreen="" loading="lazy"
              />
            </div>

            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/Durania.NortedeSantander" target="_blank" rel="noopener noreferrer"
                className="flex-1 glass rounded-xl py-3 flex items-center justify-center gap-2 text-white/60 hover:text-blue-400 hover:border-blue-400/40 border border-white/10 transition-all text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                Facebook
              </a>
              <a href="#" className="flex-1 glass rounded-xl py-3 flex items-center justify-center gap-2 text-white/60 hover:text-pink-400 hover:border-pink-400/40 border border-white/10 transition-all text-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                Instagram
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-5 border border-white/10">
              <h3 className="text-white font-bold text-xl mb-2">Envíanos un mensaje</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider block mb-2">{t('sections.contact.form.name')}</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Tu nombre completo"
                    className="w-full bg-white/5 border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider block mb-2">{t('sections.contact.form.email')}</label>
                  <input
                    type="email" required
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    placeholder="tu@correo.com"
                    className="w-full bg-white/5 border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-white/40 text-xs uppercase tracking-wider block mb-2">{t('sections.contact.form.message')}</label>
                <textarea
                  required rows={6}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="¿En qué podemos ayudarte? Pregunta sobre tours, hospedaje, propiedades..."
                  className="w-full bg-white/5 border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white placeholder-white/20 outline-none transition-colors resize-none text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 glow-green"
              >
                {t('sections.contact.form.send')}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
