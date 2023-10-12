import Hero from "@/components/hero"
import Socials from "@/components/socials"
import Image from "next/image"
import { Suspense } from "react"

export default async function Home() {

  return (
    <main>
      <Suspense fallback={<Image src="logo.png" alt="logo loading" width={100} height={100} />}>
        <Hero />
        <Socials />
      </Suspense>
    </main>
  )
}
