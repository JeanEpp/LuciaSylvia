"use client"
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";
import getPerfumeNames, { IEtiquette } from "@/app/etiquettes";
import Etiquette from "@/components/Etiquette";
import CarouselVertical from "@/components/CarouselVertical";
import PerfumeClient from "@/app/perfume/[perfumeName]/ClientPerfume";
import { carattere } from "@/app/fonts";

export default function Perfumes() {
    const [animate, setAnimate] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState<IEtiquette[] | null>(null);
    const [currentEtiquette, setEtiquette] = useState<IEtiquette[][number] | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getPerfumeNames();
            if (result !== null)
                setData(result);
            setEtiquette(result[currentIndex]);
        };
        fetchData();
    }, [currentIndex]);

    const handleChildValueChange = (newValue: number) => {
        if (data && newValue != currentIndex) {
            setAnimate(false);
            setTimeout(() => {
                setAnimate(true)
                setCurrentIndex(newValue)
                setEtiquette(data[newValue])
            }, 600)
        }
    };

    if (data === null || currentEtiquette === null)
        return <div id="Parfums" className="flex text-white text-center justify-center items-center min-h-[1482px] sm:min-h-800">
            <svg className="w-9 h-9 animate-spin" viewBox="0 0 50 50">
                <circle cx="25" cy="25" r="18" fill="none" stroke="grey" strokeWidth="6" />
                <circle cx="25" cy="25" r="18" fill="none" stroke="white" strokeWidth="6"
                    strokeLinecap="round" strokeDasharray="20 80">
                </circle>
            </svg>
            <span className="pl-2">Loading...</span>
        </div>;
    return (
        <div id="Parfums" className="text-center justify-items-center py-8 content-center space-y-3 sm:space-y-9">
            <h1 className={`${carattere.className} text-5xl font-semibold text-balance text-white text-center sm:text-5xl`}>Parfums :</h1>
            <div className="grid sm:grid-cols-[auto_auto] justify-center sm:gap-x-12 gap-y-10 lg:gap-8 self-center mx-auto">
                <div className="flex flex-col col-span-3 sm:col-span-1 sm:row-span-3 lg:row-span-2">
                    <CarouselVertical itemsToShow={4} auto={true} id={"produits"} onValueChange={handleChildValueChange} className="flex justify-self-start h-full">
                        {data?.map((perfume, index) => (
                            <ScrollLink
                                href={`#carousel-${index}`}
                                to="Flacons"
                                smooth={true}
                                duration={600}
                                offset={-200}
                                className="text-xl/6 font-semibold text-gray-900 cursor-pointer"
                                activeClass="text-amber-600"
                                key={index}
                                onClick={() => handleChildValueChange(index)}
                            >
                                <Etiquette direction="horizontal" text={perfume.name} className="bg-[#262626] text-white rounded-2xl justify-items-center" animate={undefined} />
                            </ScrollLink>
                        ))}
                    </CarouselVertical>
                </div>
                <PerfumeClient etiquette={currentEtiquette} animate={animate} />
            </div>
        </div>
    )
}