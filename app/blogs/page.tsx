import { getBlogs } from "@/sanity/sanity.utils"
import { revalidatePath } from "next/cache"
import Image from "next/image"
import Link from "next/link"

export default async function Blogs() {

  const blogs = await getBlogs()

  revalidatePath("/blogs")

  return (
    <div className="bg-slate-100 text-black text-center">
      <div className="flex md:flex-row flex-col justify-center">
          {blogs.map(({_id, title, image, description, slug}) => (
            <article className="p-10 m-10 border-black border-2 rounded-lg" key={_id}>
              <Link href={["/blogs/",slug].join("")}>
              <div className="flex justify-center">
                <Image
                  src={image || "/logo.png"}
                  alt="blog image"
                  width={100}
                  height={100}
                />
              </div>

              <h1 className="text-lg">
                {title}
              </h1>

              <div className="text-md">
                {description}
              </div>
              </Link>
            </article>
          ))}
      </div>
    </div>
  )
}
