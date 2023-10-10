import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {

  return (
    <main>
      <Suspense fallback={null}>
        <div className="flex flex-col lg:flex-row justify-center">
        </div>
      </Suspense>
    </main>
  )
}
