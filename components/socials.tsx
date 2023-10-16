import Link from "next/link"

export default function Socials() {
    return (
        <div className="flex flex-col max-w-2xl mx-auto text-center pb-10">
            <h1 className="text-4xl pb-5">
                Come See Me at the<br />
                Waverly Farmers Market!
            </h1>

            <br />
            
            <h2 className="text-3xl pb-10">
                Saturdays 8:30-Noon<br />
                1st St SW - South of the Fire Station
            </h2>

            <br />

            <div className="flex flex-row max-w-lg mx-auto text-2xl">
                <Link className="px-10" href="http://www.society6.com/artbykellyc">Society6</Link>
                <Link className="px-10" href="http://www.etsy.com/shop/ArtisticTwinDesigns">Etsy</Link>
                <Link className="px-10" href="mailto:artistictwindesigns@outlook.com">Email</Link>
            </div>
        </div>
    )
}