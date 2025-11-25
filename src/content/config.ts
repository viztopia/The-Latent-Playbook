import { defineCollection, z } from 'astro:content';

const plays = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'Character Consistency',
      'Motion & Animation',
      'World Building & Style',
      'Post-Production & Effects',
    ]),
    publishDate: z.string().regex(/\d{4}-\d{2}-\d{2}/, {
      message: 'publishDate must be in YYYY-MM-DD format',
    }),
    lastUpdated: z.string().regex(/\d{4}-\d{2}-\d{2}/, {
      message: 'lastUpdated must be in YYYY-MM-DD format',
    }).optional(),
    author: z.string(),
    authorUrl: z.string().url().optional(),
    heroMedia: z.string().optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { plays };
