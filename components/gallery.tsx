import Image from "next/image";

export default function Gallery() {
    return (
        <div className="flex flex-col lg:flex-row lg:flex-wrap flex-center p-10">
            <Image src="/colorful-bird.jpg" alt="Colorful Bird" width={500} height={500} />
            <Image src="/graceful-love.png " alt="Graceful Love" width={500} height={500} />
            <Image src="/white-flower.jpg" alt="White Flower" width={500} height={500} />
            <Image src="/orange-open-tulip.png" alt="Orange Open Tulip" width={500} height={500} />
        </div>
    )
}