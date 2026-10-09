import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      category: z.enum(['技术', '随笔', '读书']),
      city: z.string().optional(),
      when: z.string(),
      date: z.coerce.date(),
      cover: image(),
      externalUrl: z.string().url().optional(),
      // 详情页展示：headline 覆盖 H1，accent 为其中用主色强调的片段，lede 为导语（缺省用 description）
      headline: z.string().optional(),
      accent: z.string().optional(),
      lede: z.string().optional(),
    }),
});

export const collections = { posts };
