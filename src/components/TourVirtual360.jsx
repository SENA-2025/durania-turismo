import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import 'pannellum/build/pannellum.css'

const lugares = [
  {
    id: 'parque',
    nombre: 'Parque Principal',
    descripcion: 'El corazón de Durania, rodeado de palmas y jardines floridos.',
    icono: '🌳',
    imagen: '/img/panoramas/parque-principal.jpg',
    categoria: 'Patrimonio',
  },
  {
    id: 'malecon',
    nombre: 'Malecón de los Leones',
    descripcion: 'Paseo peatonal con la emblemática escultura de San Marcos de León.',
    icono: '🦁',
    imagen: '/img/panoramas/malecon-leones.jpg',
    categoria: 'Patrimonio',
  },
  {
    id: 'escalinatas',
    nombre: 'Escalinatas de Durania',
    descripcion: 'Las escalinatas coloniales que conectan los barrios del municipio.',
    icono: '🏛️',
    imagen: '/img/panoramas/escalinatas.jpg',
    categoria: 'Patrimonio',
  },
  {
    id: 'escalinatas-silla',
    nombre: 'Escalinatas y la Silla Más Grande',
    descripcion: 'Punto turístico único: la silla más grande del municipio junto a los murales.',
    icono: '🪑',
    imagen: '/img/panoramas/escalinatas-silla.jpg',
    categoria: 'Atractivos',
  },
  {
    id: 'entrada',
    nombre: 'Entrada a Durania',
    descripcion: 'El letrero "Yo Amo Durania" te da la bienvenida al municipio.',
    icono: '💚',
    imagen: '/img/panoramas/entrada-durania.jpg',
    categoria: 'Atractivos',
  },
  {
    id: 'arbol',
    nombre: 'Árbol de los Deseos',
    descripcion: 'El mágico árbol bajo el que los visitantes hacen sus deseos.',
    icono: '✨',
    imagen: '/img/panoramas/arbol-deseos.jpg',
    categoria: 'Atractivos',
  },
  {
    id: 'corazon',
    nombre: 'Corazón del Amor',
    descripcion: 'El rincón romántico del parque, ideal para visitantes y parejas.',
    icono: '❤️',
    imagen: '/img/panoramas/corazon-amor.jpg',
    categoria: 'Atractivos',
  },
  {
    id: 'hotel-rous-1',
    nombre: 'Hotel Rous — Habitación',
    descripcion: 'Habitaciones confortables en el Hotel Rous de Durania.',
    icono: '🛏️',
    imagen: '/img/panoramas/hotel-rous-1.jpg',
    categoria: 'Hospedaje',
  },
  {
    id: 'hotel-rous-2',
    nombre: 'Hotel Rous — Instalaciones',
    descripcion: 'Instalaciones del Hotel Rous, una opción acogedora en el casco urbano.',
    icono: '🏨',
    imagen: '/img/panoramas/hotel-rous-2.jpg',
    categoria: 'Hospedaje',
  },
  {
    id: 'hotel-santa-rosa-1',
    nombre: 'Hotel Santa Rosa — Habitación',
    descripcion: 'Habitaciones del Hotel Santa Rosa, con techo en madera tradicional.',
    icono: '🛏️',
    imagen: '/img/panoramas/hotel-santa-rosa-1.jpg',
    categoria: 'Hospedaje',
  },
  {
    id: 'hotel-santa-rosa-2',
    nombre: 'Hotel Santa Rosa — Instalaciones',
    descripcion: 'Vista interior de las instalaciones del Hotel Santa Rosa.',
    icono: '🏨',
    imagen: '/img/panoramas/hotel-santa-rosa-2.jpg',
    categoria: 'Hospedaje',
  },
]

const categorias = ['Todos', 'Patrimonio', 'Atractivos', 'Hospedaje']

export default function TourVirtual360() {
  const { t } = useTranslation()
  const viewerRef = useRef(null)
  const pannellumRef = useRef(null)
  const [activo, setActivo] = useState(0)
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos')
  const [cargando, setCargando] = useState(true)

  const lugaresFiltrados = categoriaFiltro === 'Todos'
    ? lugares
    : lugares.filter(l => l.categoria === categoriaFiltro)

  const lugarActual = lugaresFiltrados[activo] ?? lugaresFiltrados[0]

  useEffect(() => {
    setActivo(0)
  }, [categoriaFiltro])

  useEffect(() => {
    if (!viewerRef.current || !lugarActual) return

    setCargando(true)

    import('pannellum').then((pannellum) => {
      if (pannellumRef.current) {
        pannellumRef.current.destroy()
        pannellumRef.current = null
      }

      viewerRef.current.innerHTML = ''

      pannellumRef.current = pannellum.viewer(viewerRef.current, {
        type: 'equirectangular',
        panorama: lugarActual.imagen,
        autoLoad: true,
        autoRotate: -2,
        showControls: true,
        showFullscreenCtrl: true,
        showZoomCtrl: true,
        compass: false,
        strings: {
          loadButtonLabel: 'Ver en 360°',
          loadingLabel: 'Cargando...',
          bylineLabel: '',
          noPanoramaError: 'No se encontró la imagen',
          fileAccessError: 'Error al cargar',
          malformedURLError: 'URL inválida',
          iOS8WebGLError: 'WebGL requerido',
          genericWebGLError: 'WebGL requerido',
          textureSizeError: 'Imagen muy grande',
          unknownError: 'Error desconocido',
        },
        uiText: {
          loadButtonLabel: 'Ver en 360°',
        },
        onLoad: () => setCargando(false),
      })
    })

    return () => {
      if (pannellumRef.current) {
        pannellumRef.current.destroy()
        pannellumRef.current = null
      }
    }
  }, [lugarActual])

  const anterior = () => setActivo(i => (i - 1 + lugaresFiltrados.length) % lugaresFiltrados.length)
  const siguiente = () => setActivo(i => (i + 1) % lugaresFiltrados.length)

  return (
    <section id="tour360" className="section-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-950/20 via-transparent to-purple-950/10" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="pill bg-green-500/10 border border-green-500/30 text-green-400 mb-4 inline-flex mx-auto">
            🌐 Tour Virtual · Durania 360°
          </span>
          <h2 className="font-serif font-black text-white text-5xl md:text-6xl mb-4" style={{ lineHeight: 1 }}>
            Explora Durania
          </h2>
          <p className="text-white/40 max-w-xl mx-auto text-lg">
            Recorre el municipio en fotos 360° interactivas. Arrastra para girar, usa la rueda para hacer zoom.
          </p>
        </div>

        {/* Filtros de categoría */}
        <div className="flex gap-3 justify-center flex-wrap mb-10">
          {categorias.map(cat => (
            <button
              key={cat}
              onClick={() => setCategoriaFiltro(cat)}
              className={`pill transition-all duration-200 ${
                categoriaFiltro === cat
                  ? 'bg-green-500 border-green-500 text-black font-bold'
                  : 'bg-white/5 border border-white/20 text-white/60 hover:border-green-500/50 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Visor 360° */}
          <div className="lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden" style={{ height: '500px' }}>

              {/* Pannellum viewer */}
              <div ref={viewerRef} className="w-full h-full" />

              {/* Overlay de carga */}
              {cargando && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10 rounded-3xl">
                  <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mb-4" />
                  <p className="text-white/60 text-sm">Cargando vista 360°...</p>
                </div>
              )}

              {/* Info del lugar actual */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-xs uppercase tracking-widest font-bold">{lugarActual?.categoria}</span>
                </div>
                <h3 className="text-white font-bold text-xl">{lugarActual?.nombre}</h3>
                <p className="text-white/50 text-sm mt-1">{lugarActual?.descripcion}</p>
              </div>

              {/* Navegación prev/next */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
                <button
                  onClick={anterior}
                  className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                <button
                  onClick={siguiente}
                  className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Contador */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="glass pill text-white/60 text-xs">
                  {activo + 1} / {lugaresFiltrados.length}
                </span>
              </div>
            </div>

            {/* Instrucciones */}
            <div className="flex gap-6 justify-center mt-4 text-white/30 text-xs">
              <span>🖱️ Arrastra para girar</span>
              <span>🔍 Rueda para zoom</span>
              <span>⛶ Pantalla completa disponible</span>
            </div>
          </div>

          {/* Lista de lugares */}
          <div className="space-y-2 max-h-[540px] overflow-y-auto pr-1 custom-scroll">
            {lugaresFiltrados.map((lugar, i) => (
              <button
                key={lugar.id}
                onClick={() => setActivo(i)}
                className={`w-full text-left rounded-2xl p-4 transition-all duration-200 border ${
                  activo === i
                    ? 'bg-green-500/15 border-green-500/50 shadow-lg shadow-green-500/10'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">{lugar.icono}</span>
                  <div>
                    <p className={`font-bold text-sm ${activo === i ? 'text-green-400' : 'text-white'}`}>
                      {lugar.nombre}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5 line-clamp-2">{lugar.descripcion}</p>
                    <span className={`text-xs mt-1 inline-block px-2 py-0.5 rounded-full ${
                      activo === i ? 'bg-green-500/20 text-green-400' : 'bg-white/10 text-white/30'
                    }`}>
                      {lugar.categoria}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
