import { type SchemaTypeDefinition } from 'sanity'
import { article } from './schema/pages/article.schema'
import objects from './schema/objects'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    ...objects,
  ],
}
