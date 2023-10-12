import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-row justify-center p-10">
            <h2 className="text-xl mx-10">
                Designs by <Link href="http://www.ianolmstead.com">Ian Olmstead</Link>
            </h2>
            <h2 className="text-xl mx-10">
                <Link href="/studio">Sanity Studio</Link>
            </h2>
        </div>
    )
}