import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

const lugares = [
  // ── Patrimonio ─────────────────────────────────────────────────────────────
  { id: 'parque',              nombre: 'Parque Principal',                   descripcion: 'El corazón de Durania, rodeado de palmas y jardines floridos.',                              icono: '🌳', imagen: '/img/panoramas/parque-principal.jpg',    categoria: 'Patrimonio' },
  { id: 'malecon',             nombre: 'Malecón de los Leones',              descripcion: 'Paseo peatonal con la emblemática escultura de San Marcos de León.',                         icono: '🦁', imagen: '/img/panoramas/malecon-leones.jpg',       categoria: 'Patrimonio' },
  { id: 'escalinatas-1',       nombre: 'Escalinatas de Durania',             descripcion: 'Las escalinatas coloniales que conectan los barrios del municipio.',                          icono: '🏛️', imagen: '/img/panoramas/escalinatas-1.jpg',        categoria: 'Patrimonio' },
  { id: 'escalinatas-2',       nombre: 'Escalinatas — Vista 2',              descripcion: 'Segunda perspectiva de las emblemáticas escalinatas de Durania.',                            icono: '🏛️', imagen: '/img/panoramas/escalinatas-2.jpg',        categoria: 'Patrimonio' },
  { id: 'escalinatas-3',       nombre: 'Escalinatas — Vista 3',              descripcion: 'Recorrido 360° por las escalinatas del municipio.',                                           icono: '🏛️', imagen: '/img/panoramas/escalinatas-3.jpg',        categoria: 'Patrimonio' },
  { id: 'escalinatas-4',       nombre: 'Escalinatas — Vista 4',              descripcion: 'Perspectiva adicional de las históricas escalinatas.',                                        icono: '🏛️', imagen: '/img/panoramas/escalinatas-4.jpg',        categoria: 'Patrimonio' },
  { id: 'escalinatas-5',       nombre: 'Escalinatas — Vista 5',              descripcion: 'Última perspectiva del recorrido por las escalinatas de Durania.',                            icono: '🏛️', imagen: '/img/panoramas/escalinatas-5.jpg',        categoria: 'Patrimonio' },
  { id: 'escalinatas-silla',   nombre: 'Escalinatas y la Silla Más Grande',  descripcion: 'Punto turístico único: la silla más grande del municipio junto a las escalinatas.',          icono: '🪑', imagen: '/img/panoramas/escalinatas-silla.jpg',    categoria: 'Patrimonio' },
  { id: 'iglesia-exterior',    nombre: 'Basílica San José — Exterior',       descripcion: 'Vista frontal de la Basílica San José, patrimonio religioso de Durania.',                    icono: '⛪', imagen: '/img/panoramas/iglesia-exterior.jpg',      categoria: 'Patrimonio' },
  { id: 'iglesia-interior',    nombre: 'Basílica San José — Interior',       descripcion: 'El interior de la Basílica San José con su altar central y arquitectura colonial.',          icono: '🕍', imagen: '/img/panoramas/iglesia-interior.jpg',      categoria: 'Patrimonio' },
  { id: 'iglesia-atras',       nombre: 'Basílica San José — Parte Trasera',  descripcion: 'Vista de la parte trasera de la Basílica San José.',                                         icono: '⛪', imagen: '/img/panoramas/iglesia-atras.jpg',         categoria: 'Patrimonio' },
  { id: 'iglesia-lateral',     nombre: 'Basílica San José — Lateral',        descripcion: 'Vista lateral de la Basílica San José.',                                                      icono: '⛪', imagen: '/img/panoramas/iglesia-lateral.jpg',       categoria: 'Patrimonio' },

  // ── Atractivos ─────────────────────────────────────────────────────────────
  { id: 'entrada-1',           nombre: 'Entrada a Durania',                  descripcion: 'El letrero "Yo Amo Durania" te da la bienvenida al municipio.',                              icono: '💚', imagen: '/img/panoramas/entrada-1.jpg',             categoria: 'Atractivos' },
  { id: 'entrada-2',           nombre: 'Entrada — Vista 2',                  descripcion: 'Segunda perspectiva de la entrada al municipio de Durania.',                                  icono: '💚', imagen: '/img/panoramas/entrada-2.jpg',             categoria: 'Atractivos' },
  { id: 'entrada-3',           nombre: 'Entrada — Vista 3',                  descripcion: 'Recorrido 360° por la zona de entrada a Durania.',                                            icono: '💚', imagen: '/img/panoramas/entrada-3.jpg',             categoria: 'Atractivos' },
  { id: 'entrada-4',           nombre: 'Entrada — Vista 4',                  descripcion: 'Perspectiva adicional de la entrada al municipio.',                                           icono: '💚', imagen: '/img/panoramas/entrada-4.jpg',             categoria: 'Atractivos' },
  { id: 'entrada-5',           nombre: 'Entrada — Vista 5',                  descripcion: 'Vista panorámica de la entrada a Durania.',                                                   icono: '💚', imagen: '/img/panoramas/entrada-5.jpg',             categoria: 'Atractivos' },
  { id: 'entrada-6',           nombre: 'Entrada — Vista 6',                  descripcion: 'Sexta perspectiva del recorrido de entrada al municipio.',                                    icono: '💚', imagen: '/img/panoramas/entrada-6.jpg',             categoria: 'Atractivos' },
  { id: 'entrada-7',           nombre: 'Entrada — Vista 7',                  descripcion: 'Última vista del recorrido de bienvenida a Durania.',                                         icono: '💚', imagen: '/img/panoramas/entrada-7.jpg',             categoria: 'Atractivos' },
  { id: 'arbol-1',             nombre: 'Árbol de los Deseos',                descripcion: 'El mágico árbol bajo el que los visitantes hacen sus deseos.',                               icono: '✨', imagen: '/img/panoramas/arbol-deseos-1.jpg',        categoria: 'Atractivos' },
  { id: 'arbol-2',             nombre: 'Árbol de los Deseos — Vista 2',      descripcion: 'Segunda perspectiva del emblemático Árbol de los Deseos.',                                   icono: '✨', imagen: '/img/panoramas/arbol-deseos-2.jpg',        categoria: 'Atractivos' },
  { id: 'corazon',             nombre: 'Corazón del Amor',                   descripcion: 'El rincón romántico del parque, ideal para visitantes y parejas.',                           icono: '❤️', imagen: '/img/panoramas/corazon-amor.jpg',          categoria: 'Atractivos' },

  // ── Naturaleza ─────────────────────────────────────────────────────────────
  { id: 'apicultura-1',        nombre: 'Apiario de Durania',                 descripcion: 'Vista 360° del apiario donde se practica el apiturismo en Durania.',                         icono: '🐝', imagen: '/img/panoramas/apicultura-1.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-2',        nombre: 'Apiario — Vista 2',                  descripcion: 'Recorrido por el área de colmenas del apiario de Durania.',                                   icono: '🐝', imagen: '/img/panoramas/apicultura-2.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-3',        nombre: 'Apiario — Vista 3',                  descripcion: 'Tercera perspectiva del entorno apícola.',                                                     icono: '🐝', imagen: '/img/panoramas/apicultura-3.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-4',        nombre: 'Apiario — Vista 4',                  descripcion: 'Panorámica del apiario rodeado de vegetación natural.',                                       icono: '🐝', imagen: '/img/panoramas/apicultura-4.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-5',        nombre: 'Apiario — Vista 5',                  descripcion: 'Perspectiva adicional del apiario de Durania.',                                               icono: '🐝', imagen: '/img/panoramas/apicultura-5.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-6',        nombre: 'Apiario — Vista 6',                  descripcion: 'Recorrido 360° entre colmenas del apiario.',                                                  icono: '🐝', imagen: '/img/panoramas/apicultura-6.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-7',        nombre: 'Apiario — Vista 7',                  descripcion: 'Vista panorámica del apiario y su entorno natural.',                                          icono: '🐝', imagen: '/img/panoramas/apicultura-7.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-8',        nombre: 'Apiario — Vista 8',                  descripcion: 'Perspectiva del apiario de Durania.',                                                          icono: '🐝', imagen: '/img/panoramas/apicultura-8.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-9',        nombre: 'Apiario — Vista 9',                  descripcion: 'Novena perspectiva del recorrido por el apiario.',                                            icono: '🐝', imagen: '/img/panoramas/apicultura-9.jpg',          categoria: 'Naturaleza' },
  { id: 'apicultura-10',       nombre: 'Apiario — Vista 10',                 descripcion: 'Décima perspectiva del entorno apícola de Durania.',                                          icono: '🐝', imagen: '/img/panoramas/apicultura-10.jpg',         categoria: 'Naturaleza' },
  { id: 'apicultura-11',       nombre: 'Apiario — Vista 11',                 descripcion: 'Última panorámica del recorrido por el apiario.',                                             icono: '🐝', imagen: '/img/panoramas/apicultura-11.jpg',         categoria: 'Naturaleza' },
  { id: 'laguna-1',            nombre: 'Laguna y Pozo Ceiba',                descripcion: 'Vista 360° de la laguna y el Pozo Ceiba, tesoros naturales de Durania.',                     icono: '💧', imagen: '/img/panoramas/laguna-pozo-1.jpg',         categoria: 'Naturaleza' },
  { id: 'laguna-2',            nombre: 'Laguna — Vista 2',                   descripcion: 'Segunda perspectiva de la laguna y la vega de Durania.',                                      icono: '💧', imagen: '/img/panoramas/laguna-pozo-2.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-1',       nombre: 'Finca La Perla',                     descripcion: 'Recorrido 360° por la Finca La Perla, experiencia agroturística de Durania.',                icono: '🌿', imagen: '/img/panoramas/finca-perla-1.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-2',       nombre: 'Finca La Perla — Vista 2',           descripcion: 'Segunda perspectiva de la Finca La Perla.',                                                   icono: '🌿', imagen: '/img/panoramas/finca-perla-2.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-3',       nombre: 'Finca La Perla — Vista 3',           descripcion: 'Tercera perspectiva de la Finca La Perla.',                                                   icono: '🌿', imagen: '/img/panoramas/finca-perla-3.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-4',       nombre: 'Finca La Perla — Vista 4',           descripcion: 'Cuarta perspectiva de la Finca La Perla.',                                                    icono: '🌿', imagen: '/img/panoramas/finca-perla-4.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-5',       nombre: 'Finca La Perla — Vista 5',           descripcion: 'Quinta perspectiva de la Finca La Perla.',                                                    icono: '🌿', imagen: '/img/panoramas/finca-perla-5.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-6',       nombre: 'Finca La Perla — Vista 6',           descripcion: 'Sexta perspectiva de la Finca La Perla.',                                                     icono: '🌿', imagen: '/img/panoramas/finca-perla-6.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-7',       nombre: 'Finca La Perla — Vista 7',           descripcion: 'Séptima perspectiva de la Finca La Perla.',                                                   icono: '🌿', imagen: '/img/panoramas/finca-perla-7.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-8',       nombre: 'Finca La Perla — Vista 8',           descripcion: 'Octava perspectiva de la Finca La Perla.',                                                    icono: '🌿', imagen: '/img/panoramas/finca-perla-8.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-9',       nombre: 'Finca La Perla — Vista 9',           descripcion: 'Novena perspectiva de la Finca La Perla.',                                                    icono: '🌿', imagen: '/img/panoramas/finca-perla-9.jpg',         categoria: 'Naturaleza' },
  { id: 'finca-perla-10',      nombre: 'Finca La Perla — Vista 10',          descripcion: 'Última panorámica de la Finca La Perla.',                                                     icono: '🌿', imagen: '/img/panoramas/finca-perla-10.jpg',        categoria: 'Naturaleza' },

  // ── Hospedaje ──────────────────────────────────────────────────────────────
  { id: 'hotel-rous-1',        nombre: 'Hotel Rous',                         descripcion: 'Habitaciones confortables en el Hotel Rous de Durania.',                                      icono: '🛏️', imagen: '/img/panoramas/hotel-rous-1.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-2',        nombre: 'Hotel Rous — Vista 2',               descripcion: 'Segunda perspectiva del Hotel Rous.',                                                          icono: '🛏️', imagen: '/img/panoramas/hotel-rous-2.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-3',        nombre: 'Hotel Rous — Vista 3',               descripcion: 'Tercera perspectiva del Hotel Rous.',                                                          icono: '🛏️', imagen: '/img/panoramas/hotel-rous-3.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-4',        nombre: 'Hotel Rous — Vista 4',               descripcion: 'Cuarta perspectiva del Hotel Rous.',                                                           icono: '🛏️', imagen: '/img/panoramas/hotel-rous-4.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-5',        nombre: 'Hotel Rous — Vista 5',               descripcion: 'Quinta perspectiva del Hotel Rous.',                                                           icono: '🛏️', imagen: '/img/panoramas/hotel-rous-5.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-6',        nombre: 'Hotel Rous — Vista 6',               descripcion: 'Sexta perspectiva del Hotel Rous.',                                                            icono: '🛏️', imagen: '/img/panoramas/hotel-rous-6.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-7',        nombre: 'Hotel Rous — Vista 7',               descripcion: 'Séptima perspectiva del Hotel Rous.',                                                          icono: '🛏️', imagen: '/img/panoramas/hotel-rous-7.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-rous-8',        nombre: 'Hotel Rous — Vista 8',               descripcion: 'Octava perspectiva del Hotel Rous.',                                                           icono: '🛏️', imagen: '/img/panoramas/hotel-rous-8.jpg',          categoria: 'Hospedaje' },
  { id: 'hotel-campestre-1',   nombre: 'Hotel Campestre',                    descripcion: 'Instalaciones del Hotel Campestre de Durania.',                                                icono: '🏡', imagen: '/img/panoramas/hotel-campestre-1.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-2',   nombre: 'Hotel Campestre — Vista 2',          descripcion: 'Segunda perspectiva del Hotel Campestre.',                                                     icono: '🏡', imagen: '/img/panoramas/hotel-campestre-2.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-3',   nombre: 'Hotel Campestre — Vista 3',          descripcion: 'Tercera perspectiva del Hotel Campestre.',                                                     icono: '🏡', imagen: '/img/panoramas/hotel-campestre-3.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-4',   nombre: 'Hotel Campestre — Vista 4',          descripcion: 'Cuarta perspectiva del Hotel Campestre.',                                                      icono: '🏡', imagen: '/img/panoramas/hotel-campestre-4.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-5',   nombre: 'Hotel Campestre — Vista 5',          descripcion: 'Quinta perspectiva del Hotel Campestre.',                                                      icono: '🏡', imagen: '/img/panoramas/hotel-campestre-5.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-6',   nombre: 'Hotel Campestre — Vista 6',          descripcion: 'Sexta perspectiva del Hotel Campestre.',                                                       icono: '🏡', imagen: '/img/panoramas/hotel-campestre-6.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-7',   nombre: 'Hotel Campestre — Vista 7',          descripcion: 'Séptima perspectiva del Hotel Campestre.',                                                     icono: '🏡', imagen: '/img/panoramas/hotel-campestre-7.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-8',   nombre: 'Hotel Campestre — Vista 8',          descripcion: 'Octava perspectiva del Hotel Campestre.',                                                      icono: '🏡', imagen: '/img/panoramas/hotel-campestre-8.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-9',   nombre: 'Hotel Campestre — Vista 9',          descripcion: 'Novena perspectiva del Hotel Campestre.',                                                      icono: '🏡', imagen: '/img/panoramas/hotel-campestre-9.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-campestre-10',  nombre: 'Hotel Campestre — Vista 10',         descripcion: 'Décima perspectiva del Hotel Campestre.',                                                      icono: '🏡', imagen: '/img/panoramas/hotel-campestre-10.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-campestre-11',  nombre: 'Hotel Campestre — Vista 11',         descripcion: 'Undécima perspectiva del Hotel Campestre.',                                                    icono: '🏡', imagen: '/img/panoramas/hotel-campestre-11.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-campestre-12',  nombre: 'Hotel Campestre — Vista 12',         descripcion: 'Última panorámica del Hotel Campestre.',                                                       icono: '🏡', imagen: '/img/panoramas/hotel-campestre-12.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-texas-1',       nombre: 'Hotel Texas',                        descripcion: 'Instalaciones del Hotel Texas de Durania.',                                                    icono: '🏨', imagen: '/img/panoramas/hotel-texas-1.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-2',       nombre: 'Hotel Texas — Vista 2',              descripcion: 'Segunda perspectiva del Hotel Texas.',                                                         icono: '🏨', imagen: '/img/panoramas/hotel-texas-2.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-3',       nombre: 'Hotel Texas — Vista 3',              descripcion: 'Tercera perspectiva del Hotel Texas.',                                                         icono: '🏨', imagen: '/img/panoramas/hotel-texas-3.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-4',       nombre: 'Hotel Texas — Vista 4',              descripcion: 'Cuarta perspectiva del Hotel Texas.',                                                          icono: '🏨', imagen: '/img/panoramas/hotel-texas-4.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-5',       nombre: 'Hotel Texas — Vista 5',              descripcion: 'Quinta perspectiva del Hotel Texas.',                                                          icono: '🏨', imagen: '/img/panoramas/hotel-texas-5.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-6',       nombre: 'Hotel Texas — Vista 6',              descripcion: 'Sexta perspectiva del Hotel Texas.',                                                           icono: '🏨', imagen: '/img/panoramas/hotel-texas-6.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-7',       nombre: 'Hotel Texas — Vista 7',              descripcion: 'Séptima perspectiva del Hotel Texas.',                                                         icono: '🏨', imagen: '/img/panoramas/hotel-texas-7.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-8',       nombre: 'Hotel Texas — Vista 8',              descripcion: 'Octava perspectiva del Hotel Texas.',                                                          icono: '🏨', imagen: '/img/panoramas/hotel-texas-8.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-9',       nombre: 'Hotel Texas — Vista 9',              descripcion: 'Novena perspectiva del Hotel Texas.',                                                          icono: '🏨', imagen: '/img/panoramas/hotel-texas-9.jpg',         categoria: 'Hospedaje' },
  { id: 'hotel-texas-10',      nombre: 'Hotel Texas — Vista 10',             descripcion: 'Décima perspectiva del Hotel Texas.',                                                          icono: '🏨', imagen: '/img/panoramas/hotel-texas-10.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-11',      nombre: 'Hotel Texas — Vista 11',             descripcion: 'Undécima perspectiva del Hotel Texas.',                                                        icono: '🏨', imagen: '/img/panoramas/hotel-texas-11.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-12',      nombre: 'Hotel Texas — Vista 12',             descripcion: 'Duodécima perspectiva del Hotel Texas.',                                                       icono: '🏨', imagen: '/img/panoramas/hotel-texas-12.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-13',      nombre: 'Hotel Texas — Vista 13',             descripcion: 'Decimotercera perspectiva del Hotel Texas.',                                                   icono: '🏨', imagen: '/img/panoramas/hotel-texas-13.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-14',      nombre: 'Hotel Texas — Vista 14',             descripcion: 'Decimocuarta perspectiva del Hotel Texas.',                                                    icono: '🏨', imagen: '/img/panoramas/hotel-texas-14.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-15',      nombre: 'Hotel Texas — Vista 15',             descripcion: 'Decimoquinta perspectiva del Hotel Texas.',                                                    icono: '🏨', imagen: '/img/panoramas/hotel-texas-15.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-16',      nombre: 'Hotel Texas — Vista 16',             descripcion: 'Decimosexta perspectiva del Hotel Texas.',                                                     icono: '🏨', imagen: '/img/panoramas/hotel-texas-16.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-17',      nombre: 'Hotel Texas — Vista 17',             descripcion: 'Decimoséptima perspectiva del Hotel Texas.',                                                   icono: '🏨', imagen: '/img/panoramas/hotel-texas-17.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-18',      nombre: 'Hotel Texas — Vista 18',             descripcion: 'Decimoctava perspectiva del Hotel Texas.',                                                     icono: '🏨', imagen: '/img/panoramas/hotel-texas-18.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-texas-19',      nombre: 'Hotel Texas — Vista 19',             descripcion: 'Última panorámica del Hotel Texas.',                                                           icono: '🏨', imagen: '/img/panoramas/hotel-texas-19.jpg',        categoria: 'Hospedaje' },
  { id: 'hotel-santa-rosa-1',  nombre: 'Hotel Santa Rosa',                   descripcion: 'Habitaciones del Hotel Santa Rosa, con techo en madera tradicional.',                        icono: '🛏️', imagen: '/img/panoramas/hotel-santa-rosa-1.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-santa-rosa-2',  nombre: 'Hotel Santa Rosa — Vista 2',         descripcion: 'Segunda perspectiva del Hotel Santa Rosa.',                                                   icono: '🛏️', imagen: '/img/panoramas/hotel-santa-rosa-2.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-santa-rosa-3',  nombre: 'Hotel Santa Rosa — Vista 3',         descripcion: 'Tercera perspectiva del Hotel Santa Rosa.',                                                   icono: '🛏️', imagen: '/img/panoramas/hotel-santa-rosa-3.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-santa-rosa-4',  nombre: 'Hotel Santa Rosa — Vista 4',         descripcion: 'Última panorámica del Hotel Santa Rosa.',                                                     icono: '🛏️', imagen: '/img/panoramas/hotel-santa-rosa-4.jpg',    categoria: 'Hospedaje' },
  { id: 'hotel-manantial-1',   nombre: 'Hotel El Manantial',                 descripcion: 'Instalaciones del Hotel El Manantial, rodeado de naturaleza.',                               icono: '🏕️', imagen: '/img/panoramas/hotel-manantial-1.jpg',     categoria: 'Hospedaje' },
  { id: 'hotel-manantial-2',   nombre: 'Hotel El Manantial — Vista 2',       descripcion: 'Segunda perspectiva del Hotel El Manantial.',                                                 icono: '🏕️', imagen: '/img/panoramas/hotel-manantial-2.jpg',     categoria: 'Hospedaje' },
]

const categorias = ['Todos', 'Patrimonio', 'Atractivos', 'Naturaleza', 'Hospedaje']

export default function TourVirtual360() {
  const { t } = useTranslation()
  const viewerRef    = useRef(null)
  const pannellumRef = useRef(null)
  const [activo, setActivo]               = useState(0)
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todos')
  const [cargando, setCargando]           = useState(true)

  const lugaresFiltrados = categoriaFiltro === 'Todos'
    ? lugares
    : lugares.filter(l => l.categoria === categoriaFiltro)

  const lugarActual = lugaresFiltrados[activo] ?? lugaresFiltrados[0]

  useEffect(() => { setActivo(0) }, [categoriaFiltro])

  useEffect(() => {
    if (!viewerRef.current || !lugarActual) return

    setCargando(true)

    const pannellum = window.pannellum
    if (!pannellum) return

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
    })

    pannellumRef.current.on('load', () => setCargando(false))
    pannellumRef.current.on('error', () => setCargando(false))

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

              <div ref={viewerRef} className="w-full h-full" />

              {cargando && (
                <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center z-10 rounded-3xl">
                  <div className="w-16 h-16 border-4 border-green-500/30 border-t-green-500 rounded-full animate-spin mb-4" />
                  <p className="text-white/60 text-sm">Cargando vista 360°...</p>
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20 pointer-events-none">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-xs uppercase tracking-widest font-bold">{lugarActual?.categoria}</span>
                </div>
                <h3 className="text-white font-bold text-xl">{lugarActual?.nombre}</h3>
                <p className="text-white/50 text-sm mt-1">{lugarActual?.descripcion}</p>
              </div>

              <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
                <button onClick={anterior} className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
                <button onClick={siguiente} className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:border-green-400 hover:text-green-400 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                <span className="glass pill text-white/60 text-xs">
                  {activo + 1} / {lugaresFiltrados.length}
                </span>
              </div>
            </div>

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
