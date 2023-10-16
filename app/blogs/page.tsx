import { getBlogs } from "@/sanity/sanity.utils"
import Image from "next/image"
import Link from "next/link"
import imageUrlBuilder from '@sanity/image-url'
import { client } from "@/sanity/sanity.utils"

const builder = imageUrlBuilder(client)

// This forces update to the blog to happen right away
export const fetchCache = 'force-no-store'

function urlFor(source: any) {
  return builder.image(source)
}

export default async function Blogs() {

  const blogs = await getBlogs()

  return (
    <div className="text-center">
      <div className="flex flex-col md:flex-row md:flex-wrap justify-center">
          {blogs.map(({_id, title, mainImage, description, slug}) => (
            <article className="p-10 m-10 border-black border-2 rounded-xl max-w-sm" key={_id}>
              <Link href={["/blogs/",slug].join("")}>
                <div className="flex justify-center pb-5">
                  <Image
                    src={mainImage ? urlFor(mainImage).url() : "/logo.png" }
                    alt="blog image"
                    width={100}
                    height={100}
                  />
                </div>

                <h1 className="text-xl pb-5">
                  {title}
                </h1>

                <div className="text-sm">
                  {description}
                </div>
              </Link>
            </article>
          ))}
      </div>
    </div>
  )
}
