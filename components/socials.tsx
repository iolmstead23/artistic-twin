import Link from "next/link"

export default function Socials() {
    return (
        <div className="flex flex-col max-w-2xl mx-auto text-center">
            <h1 className="text-3xl">
                Come See Me at the<br />
                Waverly Farmers Market!
            </h1>
            
            <h2 className="text-xl">
                Saturdays 8:30-Noon<br />
                1st St SW - South of the Fire Station
            </h2>

            <br />

            <h1 className="text-xl">Social Media Links</h1>

            <div className="flex flex-row max-w-lg mx-auto text-2xl">
                <Link className="px-10" href="society6.com/artbykellyc">Society6</Link>
                <Link className="px-10" href="etsy.com/shop/ArtisticTwinDesigns">Etsy</Link>
                <Link className="px-10" href="mailto:artistictwindesigns@outlook.com">Email</Link>
            </div>
        </div>
    )
}