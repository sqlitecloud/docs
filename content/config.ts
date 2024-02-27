// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const docsCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		// pubDate: z.date(),
		description: z.string(),
		statement: z.string().optional(),
		seoTitle: z.string().optional(),
		seoDescription: z.string().optional(),
		// author: z.string(),
		// image: z.object({
		//   url: z.string(),
		//   alt: z.string()
		// }),
		// tags: z.array(z.string())
	})
});
// Export a single `collections` object to register your collection(s)
export const collections = {
	docs: docsCollection,
};