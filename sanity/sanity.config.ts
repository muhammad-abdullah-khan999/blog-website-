import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'blog1',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '5qkyeq8k',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',


  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
