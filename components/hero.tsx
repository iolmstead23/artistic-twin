import Image from "next/image";

export default function Hero() {
    return (
        <div className="flex flex-col xl:flex-row pb-10">
            <Image className="m-10 mx-auto" src="/kelly.jpg" alt="Kelly" width={500} height={500} />

            <div className="flex flex-col m-10 my-auto mx-auto lg:w-1/3">
                <h1 className="text-3xl">
                    Artist-Founder
                </h1>

                <br />

                <h2 className="text-2xl">
                    Kelly Cline
                </h2>

                <br />

                <p>
                    Isn't it funny how little things just snow ball and take on a life of their own!
                    <br /><br />
                    I am a proud mother of two adult young 'handsome' men. Working full time but still having way to much free time on my hands.
                    <br /><br />
                    Therefore, Artistic Twin Designs was born...little by little out of a hobby that I just couldn't help but keep growing.
                    <br /><br />
                    Email me with any questions or feedback that you have - artistictwindesigns@outlook.com
                </p>
            </div>
        </div>
    )
}