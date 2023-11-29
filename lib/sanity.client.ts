import { createClient  } from "next-sanity";
import sanityClient from '@sanity/client';
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
export const token = process.env.NEXT_PUBLIC_SANITY_API_TOKEN;


const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  useCdn: true, // `false` is recommended for authenticated requests
};
export const client = createClient({
 ...config,
 
});
