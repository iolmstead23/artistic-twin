import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'artistic-twin',

  projectId: '8y2ojtxt',
  dataset: 'production',
  basePath: "/studio",
  plugins: [deskTool()],
  apiVersion: "2023-03-04",

  schema: {
    types: schemaTypes,
  },
})
