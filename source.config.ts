import { defineConfig, defineCollections, frontmatterSchema } from 'fumadocs-mdx/config';
import lastModified from 'fumadocs-mdx/plugins/last-modified';
import jsonSchema from 'fumadocs-mdx/plugins/json-schema';
import { z } from 'zod';

export const blog = defineCollections({
  type: 'doc',
  dir: 'content/blog',
  schema: frontmatterSchema.extend({
    date: z.iso.date().or(z.date()),
  }),
  async: true,
})

export default defineConfig({
  plugins: [
    jsonSchema({ insert: true }),
    lastModified(),
  ],
})
