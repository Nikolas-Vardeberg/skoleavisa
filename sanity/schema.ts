import { type SchemaTypeDefinition } from 'sanity'
import { article } from './schema/pages/article.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
  ],
}
