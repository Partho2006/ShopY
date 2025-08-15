// lib/sanity.js
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: 'process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;', // 🔁 replace with your real project ID
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})
