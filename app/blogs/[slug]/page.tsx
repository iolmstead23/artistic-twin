import { Metadata } from "next"
import { getSingleProject } from "@/sanity/sanity.utils"
import type { Blog } from "@/types/blog"
import { PortableText } from "@portabletext/react"
import { client } from "@/sanity/sanity.utils"
import imageUrlBuilder from '@sanity/image-url'
import Image from "next/image"

type Props = {
  params: {
    slug: string;
  }
}
const builder = imageUrlBuilder(client)

function urlFor(source: any) {
  return builder.image(source)
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const blog: Blog = await getSingleProject(slug)

  return {
    title: `${blog.name} | Project`,
    description: blog.description,
    openGraph: {
      images: blog.mainImage ? urlFor(blog.mainImage).url() : "/logo.png",
      title: blog.name,
      description: blog.description,
    },
  };
}

export default async function Blog({ params }: Props) {

  const slug = params.slug
  const blog: Blog = await getSingleProject(slug)

  return (
    <article>
        <div className="max-w-4xl mx-auto">
            <div className="flex flex-col">
              <div className="mx-auto">
                <Image
                  src={blog.mainImage ? urlFor(blog.mainImage).url() : "/logo.png"}
                  alt=""
                  width={250}
                  height={250}
                />
              </div>
              <div className="mx-auto">
                <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
                    {blog.title}
                </h1>
              </div>
              <div>
                  <PortableText value={blog.body} />
              </div>
            </div>
        </div>
    </article>
  );
}