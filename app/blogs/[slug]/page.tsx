import Image from "next/image";
import { Metadata } from "next";
import { getSingleProject } from "@/sanity/sanity.utils";
import type { Blog } from "@/types/blog";
import { PortableText } from "@portabletext/react";

type Props = {
  params: {
    slug: string;
  };
};

// Dynamic metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = params.slug
  const blog: Blog = await getSingleProject(slug)

  return {
    title: `${blog.name} | Project`,
    description: blog.description,
    openGraph: {
      images: blog.image || "add-a-fallback-project-image-here",
      title: blog.name,
      description: blog.description,
    },
  };
}

export default async function Blog({ params }: Props) {
  const slug = params.slug
  const project: Blog = await getSingleProject(slug)

  return (
    <main className="max-w-6xl mx-auto lg:px-16 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-start justify-between mb-4">
          <h1 className="font-bold lg:text-5xl text-3xl lg:leading-tight mb-4">
            {project.name}
          </h1>


        </div>

        <Image
          className="rounded-xl border border-zinc-800"
          width={900}
          height={460}
          src={project.image || "/logo.png"}
          alt={project.name}
        />

        <div className="flex flex-col gap-y-6 mt-8 leading-7 text-zinc-400">
          <PortableText value={project.body} />
        </div>
      </div>
    </main>
  );
}