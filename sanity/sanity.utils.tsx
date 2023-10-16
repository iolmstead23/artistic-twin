import { Blog } from "@/types/blog"
import { groq, createClient } from "next-sanity"

export const client = createClient({
  // couldnt get this stored as an env variable to work
  projectId: '8y2ojtxt',
  dataset: 'production',
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2023-01-01', // use current date (YYYY-MM-DD) to target the latest API version
})

export async function getBlogs(): Promise<Blog[]> {
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