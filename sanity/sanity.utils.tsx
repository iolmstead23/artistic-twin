import { Blog } from "@/types/blog"
import { groq, createClient } from "next-sanity"

export async function getBlogs(): Promise<Blog[]> {
    const client = createClient({
        projectId: '8y2ojtxt',
        dataset: 'production',
        apiVersion: "2023-03-04",
    })

    return client.fetch(
        groq`*[_type == "post"]{
            _id,
            _createdAt,
            name,
            description,
            title,
            "slug": slug.current,
            image,
            url,
            body,
        }`
    )
}

export async function getSingleProject(slug: string) {
    const client = createClient({
        projectId: '8y2ojtxt',
        dataset: 'production',
        apiVersion: "2023-03-04",
    })

    return client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        _id,
        name,
        projectUrl,
        coverImage { alt, "image": asset->url },
        tagline,
        description
      }`,
      { slug }
    );
  }