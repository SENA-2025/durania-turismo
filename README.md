# 🌿 Turismo Durania — Sitio Web Oficial

> **"La Tacita de Plata" de Norte de Santander, Colombia**

Sitio web de turismo del municipio de Durania, desarrollado con React y tecnologías modernas de frontend. Disponible en **español e inglés**, con diseño oscuro premium, animaciones fluidas y contenido informativo real investigado de fuentes oficiales.

---

## 📋 Tabla de contenidos

1. [Vista general del proyecto](#-vista-general-del-proyecto)
2. [Tecnologías utilizadas](#-tecnologías-utilizadas)
3. [Estructura del proyecto](#-estructura-del-proyecto)
4. [Secciones del sitio](#-secciones-del-sitio)
5. [Cómo ejecutar el proyecto](#-cómo-ejecutar-el-proyecto)
6. [Sistema de internacionalización](#-sistema-de-internacionalización-i18n)
7. [Guía de estilos](#-guía-de-estilos)
8. [Componentes documentados](#-componentes-documentados)
9. [Fuentes de información](#-fuentes-de-información)
10. [Importancia para Durania](#-importancia-para-durania)

---

## 🗺 Vista general del proyecto

| Campo         | Detalle                                      |
|---------------|----------------------------------------------|
| Municipio     | Durania, Norte de Santander, Colombia        |
| Tipo          | Sitio web de turismo institucional           |
| Idiomas       | Español 🇨🇴 / Inglés 🇺🇸 (cambio en tiempo real) |
| Diseño        | Dark mode premium, glassmorphism, animaciones|
| Responsivo    | Sí — móvil, tablet y escritorio             |
| Framework     | React 18 + Vite 5                            |

---

## 🛠 Tecnologías utilizadas

### Core
| Tecnología | Versión | ¿Por qué se eligió? |
|---|---|---|
| **React** | 18.3 | Biblioteca de UI más popular. Componentes reutilizables y estado reactivo. |
| **Vite** | 5.4 | Bundler ultrarrápido. El servidor de desarrollo arranca en < 1s. |
| **React Router DOM** | 6.x | Gestión de navegación SPA (actualmente para anclas de sección). |

### Estilos
| Tecnología | Versión | ¿Por qué se eligió? |
|---|---|---|
| **Tailwind CSS** | 3.4 | Utilidades CSS en el HTML. Sin cambiar de archivo para estilar. |
| **PostCSS** | 8.x | Procesa el CSS de Tailwind y agrega autoprefixer. |
| **Autoprefixer** | 10.x | Agrega prefijos vendor (-webkit-, etc.) automáticamente. |
| **Google Fonts** | — | Fuentes `Inter` (sans) y `Playfair Display` (serif) de alto impacto visual. |

### Internacionalización
| Tecnología | Versión | ¿Por qué se eligió? |
|---|---|---|
| **i18next** | 23.x | Estándar de la industria para i18n en JavaScript. |
| **react-i18next** | 15.x | Plugin que integra i18next con el ciclo de vida de React. |

### Iconos
| Tecnología | Versión | ¿Por qué se eligió? |
|---|---|---|
| **Lucide React** | 0.446 | Iconos SVG consistentes, ligeros y customizables. 1000+ iconos. |

### Imágenes
| Fuente | Licencia | Uso |
|---|---|---|
| **Unsplash** | Gratuita, uso libre | Naturaleza, gastronomía, hospedaje, paisajes |
| **Wikimedia Commons** | Dominio público | Foto real del Arroyo La Barca, Durania |

---

## 📁 Estructura del proyecto

```
alcaldia de durania/
│
├── index.html                  # Punto de entrada HTML (monta el div#root)
├── vite.config.js              # Configuración de Vite + plugin React
├── tailwind.config.js          # Configuración de Tailwind (colores, fuentes)
├── postcss.config.js           # Pipeline de PostCSS (tailwind + autoprefixer)
├── package.json                # Dependencias y scripts del proyecto
│
└── src/
    ├── main.jsx                # Punto de entrada de React (ReactDOM.createRoot)
    ├── App.jsx                 # Componente raíz — ensambla todas las secciones
    ├── i18n.js                 # Configuración de internacionalización i18next
    ├── index.css               # Estilos globales, animaciones, utilidades CSS
    │
    ├── locales/
    │   ├── es.json             # Todos los textos del sitio en Español
    │   └── en.json             # Todos los textos del sitio en Inglés
    │
    └── components/
        ├── Navbar.jsx          # Barra de navegación fija (scroll-aware + drawer móvil)
        ├── Hero.jsx            # Sección hero con slideshow y estadísticas
        ├── Stats.jsx           # Banda de métricas + marquee de categorías
        ├── NatureSection.jsx   # Senderismo, aves, ríos, laguna, cascadas
        ├── GastronomySection.jsx  # Platos típicos de Durania
        ├── ApicultureSection.jsx  # Apiturismo y tour de abejas
        ├── AgricultureSection.jsx # Café, ganadería, piscicultura, agroturismo
        ├── CultureSection.jsx     # Historia, sitios patrimoniales, tradiciones
        ├── EventsSection.jsx      # Ferias y festividades
        ├── LodgingSection.jsx     # Tipos de hospedaje
        ├── RealEstateSection.jsx  # Inmobiliario rural
        ├── ContactSection.jsx     # Formulario, mapa, redes sociales
        └── Footer.jsx             # Pie de página con CTA y links
```

---

## 🗂 Secciones del sitio

| # | Sección | ID Anchor | Descripción |
|---|---------|-----------|-------------|
| 1 | **Hero** | `#inicio` | Slideshow de 3 fotos, título animado, estadísticas |
| 2 | **Stats** | — | Marquee de categorías + 4 métricas clave |
| 3 | **Naturaleza** | `#naturaleza` | Senderismo, aves, ríos & pozos, laguna, cascada |
| 4 | **Gastronomía** | `#gastronomia` | Mute, carnes a la vara, cabrito, café, miel, pescado |
| 5 | **Apiturismo** | `#apiturismo` | Tour de abejas, precios, qué incluye, certificado |
| 6 | **Agricultura** | `#agricultura` | Caficultura, ganadería, piscicultura, agroturismo |
| 7 | **Cultura** | `#cultura` | Historia del municipio, sitios patrimoniales, tradiciones |
| 8 | **Ferias** | `#ferias` | San Nicolás, feria agrícola, apiturismo, cosecha cafetera |
| 9 | **Hospedaje** | `#hospedaje` | Fincas, posadas, cabañas, hoteles |
| 10 | **Inmobiliario** | `#inmobiliario` | Fincas en venta/arriendo, lotes, casas campestres |
| 11 | **Contacto** | `#contacto` | Formulario, mapa Google, redes sociales |
| 12 | **Footer** | — | Links, CTA, información legal |

---

## 🚀 Cómo ejecutar el proyecto

### Prerrequisitos
- [Bun](https://bun.sh/) instalado (el proyecto usa Bun como package manager y runtime)
- O Node.js 18+ con npm/pnpm

### Instalación y desarrollo

```bash
# 1. Ir a la carpeta del proyecto
cd "alcaldia de durania"

# 2. Instalar dependencias (ya instaladas si seguiste la configuración inicial)
bun install

# 3. Iniciar el servidor de desarrollo
bun run dev
# → Abre http://localhost:5173 en tu navegador

# 4. Compilar para producción
bun run build
# → Genera la carpeta /dist lista para subir a un servidor

# 5. Previsualizar el build de producción
bun run preview
```

### Scripts disponibles
| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `bun run dev` | Servidor con hot reload en localhost:5173 |
| Build | `bun run build` | Compila para producción → carpeta /dist |
| Preview | `bun run preview` | Sirve el build de producción localmente |

---

## 🌐 Sistema de internacionalización (i18n)

El sitio soporta **Español** e **Inglés** con cambio instantáneo sin recargar.

### Archivos de traducción
```
src/locales/
├── es.json   ← Español (idioma por defecto)
└── en.json   ← Inglés
```

### Estructura de las claves de traducción
```json
{
  "nav": { ... },           // Menú de navegación
  "hero": { ... },          // Sección principal
  "stats": { ... },         // Estadísticas
  "sections": {
    "nature": { ... },      // Naturaleza
    "gastronomy": { ... },  // Gastronomía
    "apiculture": { ... },  // Apiturismo
    "agriculture": { ... }, // Agricultura
    "culture": { ... },     // Cultura
    "events": { ... },      // Ferias
    "lodging": { ... },     // Hospedaje
    "realEstate": { ... },  // Inmobiliario
    "contact": { ... }      // Contacto
  },
  "footer": { ... }         // Pie de página
}
```

### Cómo usar en un componente
```jsx
import { useTranslation } from 'react-i18next'

function MiComponente() {
  const { t } = useTranslation()

  // Texto simple
  const titulo = t('hero.title')   // → "Durania"

  // Array de objetos (para listas de tarjetas)
  const platos = t('sections.gastronomy.items', { returnObjects: true })
  // → [{ name: "Mute Norte Santandereano", desc: "..." }, ...]

  return <h1>{titulo}</h1>
}
```

### Cómo agregar un nuevo idioma
1. Crear `src/locales/fr.json` con las mismas claves.
2. Importarlo en `src/i18n.js`:
   ```js
   import fr from './locales/fr.json'
   resources: { es: ..., en: ..., fr: { translation: fr } }
   ```
3. Agregar el botón correspondiente en `Navbar.jsx`.

---

## 🎨 Guía de estilos

### Paleta de colores
| Uso | Color | Hex | Clase Tailwind |
|-----|-------|-----|----------------|
| Acento principal | Verde neón | `#4ade80` | `green-400` |
| Gastronomía / Apiturismo | Ámbar dorado | `#fbbf24` | `amber-400` |
| Naturaleza / Agua | Cian | `#22d3ee` | `cyan-400` |
| Cultura / Patrimonio | Violeta | `#a78bfa` | `purple-400` |
| Fondo oscuro principal | Negro casi puro | `#0a0a0a` | — |
| Fondo secciones dark | Negro suave | `#0d0d0d` | — |
| Fondo secciones light | Negro medio | `#111111` | — |

### Tipografía
| Tipo | Fuente | Uso |
|------|--------|-----|
| `font-serif` | Playfair Display | Títulos H1, H2 — elegancia y carácter |
| `font-sans` | Inter | Textos de cuerpo, UI, botones — legibilidad |

### Clases CSS personalizadas
| Clase | Efecto |
|-------|--------|
| `.glass` | Glassmorphism claro (fondos con imágenes) |
| `.glass-dark` | Glassmorphism oscuro (barras de stats, overlays) |
| `.gradient-text` | Texto verde→cian→violeta |
| `.gradient-text-gold` | Texto dorado (ámbar a marrón) |
| `.card-hover` | Elevación + escala al hover de tarjetas |
| `.glow-green` | Halo verde alrededor de botones CTA |
| `.glow-amber` | Halo ámbar alrededor de botones de apiturismo |
| `.pill` | Badge pequeño redondeado para categorías |
| `.section-dark` | Fondo `#0d0d0d` con padding estándar de sección |
| `.section-light` | Fondo `#111111` con padding estándar de sección |
| `.animate-float` | Levitación suave infinita (4s loop) |
| `.animate-marquee` | Desplazamiento horizontal continuo |

---

## 📦 Componentes documentados

Cada archivo de componente tiene documentación JSDoc interna detallando:
- Responsabilidades del componente
- Estados internos y su propósito
- Comportamientos especiales (efectos, animaciones)
- Decisiones de diseño

| Componente | Archivo |
|---|---|
| Barra de navegación | `src/components/Navbar.jsx` |
| Hero con slideshow | `src/components/Hero.jsx` |
| Banda de estadísticas | `src/components/Stats.jsx` |
| Sección naturaleza | `src/components/NatureSection.jsx` |
| Sección gastronomía | `src/components/GastronomySection.jsx` |
| Sección apiturismo | `src/components/ApicultureSection.jsx` |
| Sección agricultura | `src/components/AgricultureSection.jsx` |
| Sección cultura | `src/components/CultureSection.jsx` |
| Sección ferias | `src/components/EventsSection.jsx` |
| Sección hospedaje | `src/components/LodgingSection.jsx` |
| Sección inmobiliario | `src/components/RealEstateSection.jsx` |
| Sección contacto | `src/components/ContactSection.jsx` |
| Pie de página | `src/components/Footer.jsx` |

---

## 📚 Fuentes de información

La información del sitio fue investigada de fuentes oficiales y confiables:

| Fuente | URL |
|--------|-----|
| Turismo Norte de Santander | [turismonortedesantander.com/durania](https://turismonortedesantander.com/durania/) |
| Alcaldía Municipal de Durania | [durania-nortedesantander.gov.co](https://www.durania-nortedesantander.gov.co/) |
| Wikipedia — Durania | [en.wikipedia.org/wiki/Durania](https://en.wikipedia.org/wiki/Durania) |
| Visit Cúcuta — Tour Apiturismo | [visitcucuta.com](https://visitcucuta.com/tours/tour-pasadia-apiturismo-en-durania/) |
| Departamentos Colombianos | [departamentoscolombianos.com](https://www.departamentoscolombianos.com/durania/) |
| Wikimedia Commons (fotos) | [commons.wikimedia.org](https://commons.wikimedia.org/wiki/Category:Durania,_Norte_de_Santander) |
| Wikiloc (rutas senderismo) | [wikiloc.com](https://es.wikiloc.com/rutas/senderismo/colombia/norte-de-santander/durania) |

---

## 🏛️ Importancia para Durania

### ¿Por qué este sitio web es vital para el municipio?

**1. Visibilidad digital en un mundo conectado**
Durania carece de presencia digital turística consolidada. Este sitio coloca al municipio en el mapa digital, alcanzando turistas nacionales e internacionales que buscan destinos en Norte de Santander.

**2. Bilingüismo para alcance internacional**
La versión en inglés abre las puertas a visitantes extranjeros, investigadores de aves (Colombia es el país con más especies de aves del mundo), y comunidades colombianas en el exterior que desean volver a sus raíces.

**3. Diversificación económica**
Durania depende históricamente del café. El sitio promueve fuentes alternativas de ingreso: apiturismo, agroturismo, hospedaje rural e inmobiliario, distribuyendo el beneficio económico entre más familias.

**4. Preservación cultural**
Al documentar digitalmente la historia Chitarera, las tradiciones, los platos típicos y las ferias, el sitio actúa como archivo cultural vivo accesible para las nuevas generaciones y para el mundo.

**5. Posicionamiento del apiturismo**
Durania tiene uno de los pocos programas de apiturismo activos en Norte de Santander. El sitio posiciona esta oferta única con información de precios, descripción del tour y canales de contacto directo.

**6. Generación de empleo local**
Mayor afluencia turística = mayor demanda de guías locales, hospedaje, restaurantes y artesanías. El sitio es la puerta de entrada a toda esa cadena de valor.

**7. Atracción de inversión inmobiliaria rural**
La sección de inmobiliario conecta a compradores potenciales de fincas y lotes con las oportunidades del municipio, generando ingresos para propietarios locales.

---

## 👨‍💻 Desarrollo

Desarrollado por **Jose Santiago Duarte Duarte**.  
Información turística investigada de fuentes oficiales colombianas.

```
© 2025 Turismo Durania — Norte de Santander, Colombia
```
