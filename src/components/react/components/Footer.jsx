import { useTranslation } from 'react-i18next'
import { ArrowUpRight } from 'lucide-react'

const navLinks = [
  { key: 'nature',      href: '#naturaleza' },
  { key: 'gastronomy',  href: '#gastronomia' },
  { key: 'apiculture',  href: '#apiturismo' },
  { key: 'agriculture', href: '#agricultura' },
  { key: 'culture',     href: '#cultura' },
  { key: 'events',      href: '#ferias' },
  { key: 'lodging',     href: '#hospedaje' },
  { key: 'realEstate',  href: '#inmobiliario' },
]

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-[#050505] border-t border-white/5">
      {/* Top CTA band */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif font-black text-white text-3xl mb-1">¿Listo para visitar Durania?</h3>
            <p className="text-white/40 text-sm">Planea tu experiencia perfecta en La Tacita de Plata.</p>
          </div>
          <a href="#contacto" className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-400 text-black font-bold px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap glow-green">
            Contactar ahora
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <a href="#inicio" className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg ring-1 ring-white/10 group-hover:ring-green-400/50 transition-all duration-300 flex-shrink-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Durania_%28Norte_de_Santander%29.svg"
                  alt="Bandera de Durania"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-white text-xl">Durania</div>
                <div className="text-white/30 text-xs tracking-widest uppercase">Norte de Santander</div>
              </div>
            </a>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              {t('footer.tagline')}. Un destino único de naturaleza, cultura y aventura en Colombia.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-5">Explorar</h4>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map(link => (
                <li key={link.key}>
                  <a href={link.href} className="text-white/40 hover:text-white text-sm transition-colors duration-200 flex items-center gap-1 group">
                    <span className="w-1 h-1 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact mini */}
          <div>
            <h4 className="text-white/40 text-xs uppercase tracking-widest mb-5">Contacto</h4>
            <div className="space-y-3 text-white/40 text-sm">
              <p>📍 Durania, Norte de Santander, Colombia</p>
              <p>🌐 <a href="https://www.durania-nortedesantander.gov.co" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors">durania-nortedesantander.gov.co</a></p>
              <p>📘 <a href="https://www.facebook.com/Durania.NortedeSantander" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Facebook oficial</a></p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {new Date().getFullYear()} Turismo Durania. {t('footer.rights')}.
          </p>
          <p className="text-white/20 text-xs">{t('footer.madeWith')} 🌿</p>
        </div>
      </div>
    </footer>
  )
}
