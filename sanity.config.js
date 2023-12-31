import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
// import schemas from './schemas/schema'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION
export default defineConfig({
    title: "portfolio-2",
    projectId,
    dataset,
    apiVersion,
    plugins: [deskTool(), visionTool()],
    schema: {
        types: schemaTypes,
    },
});