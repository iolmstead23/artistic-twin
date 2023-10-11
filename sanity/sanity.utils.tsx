import { Blog } from "@/types/blog"
import { groq, createClient } from "next-sanity"

export async function getBlogs(): Promise<Blog[]> {
    const client = createClient({
        projectId: '8y2ojtxt',
        dataset: 'production',
        apiVersion: "2023-01-01",
    })

    return client.fetch(
        groq`*[_type == "post"]{
            _id,
            _createdAt,
            name,
            description,
            title,
            "slug": slug.current,
            mainImage,
            url,
            body,
        }`
    )
}

export async function getSingleProject(slug: string) {
    const client = createClient({
        projectId: '8y2ojtxt',
        dataset: 'production',
        apiVersion: "2023-01-01",
    })

    return client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        description,
        title,
        "slug": slug.current,
        mainImage,
        url,
        body,
        }`,
      { slug }
    )
}

export const client = createClient({
  projectId: '8y2ojtxt',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-01-01', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})