import { type SchemaTypeDefinition } from 'sanity'
import { article } from './schema/pages/article.schema'
import objects from './schema/objects'
import { tag } from './schema/tags.schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    article,
    tag,
    ...objects,
  ],
}
