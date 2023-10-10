import { PortableTextBlock } from "sanity"

export type Blog = {
    _id: string;
    _createdAt: Date;
    name: string;
    description: string;
    title: string;
    slug: string;
    image: string;
    url: string;
    body: PortableTextBlock[];
}