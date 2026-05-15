import type { ImageMetadata } from 'astro';

// Nature Imports
import imgRivers from '../assets/nature/rivers-pools.jpg';
import imgLaguna from '../assets/nature/laguna-barca.jpg';
import imgCascada from '../assets/nature/cascada-saladito.jpg';

// Gastronomy Imports
import imgMute from '../assets/gastronomy/mute-norte-santandereano.jpg';
import imgCarnes from '../assets/gastronomy/carnes-vara.jpg';
import imgCabrito from '../assets/gastronomy/cabrito-asado.jpg';
import imgCafe from '../assets/gastronomy/cafe-durania.jpg';
import imgHoney from '../assets/gastronomy/honey-products.jpg';
import imgFishRio from '../assets/gastronomy/river-fish.jpg';

// Apiculture Imports
import imgBeeFarm1 from '../assets/apiculture/bee-farm-1.jpg';
import imgBeeFarm2 from '../assets/apiculture/bee-farm-2.jpg';
import imgBeeFarming from '../assets/apiculture/bee-farming.jpg';

// Agriculture Imports
import imgCattle from '../assets/agriculture/cattle.jpg';
import imgFishFarming from '../assets/agriculture/fish-farming.jpg';

// History Imports
import imgHistory from '../assets/history/mural-historia.jpeg';

// Events Imports
import imgApiFestival from '../assets/events/api-festival.jpg';

// Lodging Imports
import imgTouristFarms from '../assets/lodging/tourist-farms.jpg';
import imgCountryInns from '../assets/lodging/country-inns.jpg';
import imgMountainCabin from '../assets/lodging/mountain-cabin.jpg';
import imgUrbanHotels from '../assets/lodging/urban-hotels.jpg';

export interface CategoryItem {
  name: string;
  image: ImageMetadata;
  alt: string;
}

export const categoriesData = {
  nature: {
    title: "Naturaleza y Aventura",
    items: [
      {
        name: "ríos y pozos",
        image: imgRivers,
        alt: "Ríos y pozos naturales en Durania"
      },
      {
        name: "laguna de la barca",
        image: imgLaguna,
        alt: "Vista panorámica de la Laguna de la Barca"
      },
      {
        name: "cascada el saladito",
        image: imgCascada,
        alt: "Cascada El Saladito con caída de agua cristalina"
      }
    ]
  },
  gastronomy: {
    title: "Gastronomía",
    items: [
      {
        name: "mute norte santandereano",
        image: imgMute,
        alt: "Sopa tradicional de Mute Norte Santandereano"
      },
      {
        name: "carnes a la vara",
        image: imgCarnes,
        alt: "Carne asada a la vara tradicional"
      },
      {
        name: "cabrito asado",
        image: imgCabrito,
        alt: "Plato de cabrito asado típico"
      },
      {
        name: "café de Durania",
        image: imgCafe,
        alt: "Granos de café y taza de café de Durania"
      },
      {
        name: "miel y productos apícolas",
        image: imgHoney,
        alt: "Miel natural y productos derivados de la colmena"
      },
      {
        name: "pescado de rio",
        image: imgFishRio,
        alt: "Pescado fresco de río preparado localmente"
      }
    ]
  },
  apiculture: {
    title: "Apicultura y Apiturismo",
    items: [
      {
        name: "Apicultor trabajando",
        image: imgBeeFarm1,
        alt: "Apicultor inspeccionando colmenas en Durania"
      },
      {
        name: "Abeja en flor",
        image: imgBeeFarm2,
        alt: "Abeja polinizando una flor en los campos de Durania"
      },
      {
        name: "Panal de miel",
        image: imgBeeFarming,
        alt: "Panal de miel natural de las abejas de Durania"
      }
    ]
  },
  agriculture: {
    title: "Campo y Agricultura",
    items: [
      {
        name: "ganadería",
        image: imgCattle,
        alt: "Ganado en los campos verdes de Durania"
      },
      {
        name: "piscicultura",
        image: imgFishFarming,
        alt: "Estanques de piscicultura en Durania"
      }
    ]
  },
  history: {
    title: "Cultura e Historia",
    items: [
      {
        name: "Historia del Municipio",
        image: imgHistory,
        alt: "Mural histórico detallando el origen de Durania"
      }
    ]
  },
  events: {
    title: "Ferias y Eventos",
    items: [
      {
        name: "festival de apiturismo",
        image: imgApiFestival,
        alt: "Celebración del festival de apiturismo"
      }
    ]
  },
  lodging: {
    title: "Hospedaje",
    items: [
      {
        name: "fincas turísticas",
        image: imgTouristFarms,
        alt: "Fincas turísticas para hospedaje rural"
      },
      {
        name: "posadas campestre",
        image: imgCountryInns,
        alt: "Posadas campestres tradicionales"
      },
      {
        name: "cabaña en la montaña",
        image: imgMountainCabin,
        alt: "Cabaña rústica con vista a la montaña"
      },
      {
        name: "hoteles en el casco urbano",
        image: imgUrbanHotels,
        alt: "Hoteles ubicados en el centro de Durania"
      }
    ]
  }
};
