// generate-types.js
import { generateTypes } from 'next-sanity'

await generateTypes({
  projectId: 'your_project_id',
  dataset: 'production',
  schemaPath: './schema.json',
  outputPath: './types/sanity.types.ts',
})
