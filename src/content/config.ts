import { defineCollection, z } from 'astro:content';

const secciones_informativas = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().optional(),
    image: z.string().optional(),
  }),
});

const fichas_propiedades = defineCollection({
  schema: z.object({
    title: z.string(),
    price: z.string().optional(),
    location: z.string(),
    features: z.array(z.string()),
    image: z.string(),
    isAvailable: z.boolean().default(true),
    coordinates: z.object({
      lat: z.number(),
      lng: z.number(),
    }).optional(),
  }),
});

const guias_viaje = defineCollection({
  schema: z.object({
    title: z.string(),
    category: z.enum(['senderismo', 'ecoturismo', 'cultura', 'gastronomia']),
    difficulty: z.enum(['baja', 'media', 'alta']).optional(),
    duration: z.string().optional(),
    image: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  'secciones_informativas': secciones_informativas,
  'fichas_propiedades': fichas_propiedades,
  'guias_viaje': guias_viaje,
};
