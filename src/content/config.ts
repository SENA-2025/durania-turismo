import { defineCollection, z } from 'astro:content';

const informativas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    heroImage: z.string().optional(),
  }),
});

const propiedades = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    price: z.string(),
    climate: z.string(),
    area: z.string(),
    panorama: z.string(),
    isAvailable: z.boolean(),
  }),
});

const guias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    location: z.string(),
    panorama: z.string(),
    difficulty: z.enum(['Baja', 'Media', 'Alta']),
  }),
});

export const collections = {
  informativas,
  propiedades,
  guias,
};
